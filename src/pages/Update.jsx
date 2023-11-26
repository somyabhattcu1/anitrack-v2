import React from "react";
import { useEffect, useState } from "react";
import { updateAnime } from "../requests";
import { formatDate } from "../utils/index";
import { useAppContext } from "../context/AppContext";
import {Triangle} from 'react-loader-spinner'

const Update = () => {
  const { animeId } = useAppContext();
  const [animeData, setAnimeData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    status: "",
    score: 0,
    episodes: 0,
    repeat: 0,
    startDate: 0,
    finishDate: undefined,
  });

  const fetchData = async () => {
    try {
      const variables = {
        mediaId: animeId,
      };
      setLoading(true);
      let data = await updateAnime(variables);
      setAnimeData(data);
      setFormData((prev) => ({
        ...prev,
        status: data?.status,
        score: data?.score,
        episodes: data?.progress,
        repeat: data?.repeat,
        startDate: formatDate(data?.startedAt),
        finishDate: data.completedAt.year && formatDate(data?.completedAt),
      }));
      setLoading(false);
    } catch (error) {
      console.error("Error during fetching data", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const variables = {
      mediaId: animeId,
      status: formData.status,
      score: formData.score,
      progress: formData.episodes,
      repeat: formData.repeat,
    };
    updateAnime(variables);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div className="flex w-[350px] h-[600px] bg-darkGrey justify-center items-center">
      <Triangle height={50} width={50} color={"white"} />
    </div>
  ) : (
    <form
      onSubmit={submitHandler}
      className="w-[350px] font-display max-h-[600px] p-3 flex flex-col bg-darkGrey"
    >
      <h1 className="text-white">{animeData?.media?.title?.english}</h1>
      <img
        src={animeData?.media?.bannerImage}
        className="mt-2 rounded-sm"
        alt=""
      />
      <label className="update-label">
        Status
        <select
          className="label-element"
          value={formData.status}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="CURRENT">Current</option>
          <option value="COMPLETED">Completed</option>
          <option value="REPEATING">Rewatching</option>
          <option value="PAUSED">Paused</option>
          <option value="DROPPED">Dropped</option>
          <option value="PLANNING">Planning</option>
        </select>
      </label>
      <label className="update-label">
        Score
        <input
          type="number"
          className="label-element"
          value={formData.score}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, score: e.target.value }))
          }
          min={0}
          max={10}
        />
      </label>
      <label className="update-label">
        Episodes
        <input
          type="number"
          className="label-element"
          value={formData.episodes}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, episodes: e.target.value }))
          }
        />
      </label>
      <label className="update-label">
        Rewatch
        <input
          type="number"
          className="label-element"
          value={formData.repeat}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, repeat: e.target.value }))
          }
        />
      </label>
      <label className="update-label">
        Start Date
        <input
          type="date"
          className="label-element"
          value={formData.startDate}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
      </label>
      <label className="mb-2 update-label">
        Finish Date
        <input
          type="date"
          className="label-element"
          value={formData.finishDate}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, finishDate: e.target.value }))
          }
        />
      </label>
      <button className="mt-3 label-element">Submit</button>
    </form>
  );
};

export default Update;
