import { useEffect, useState } from "react";
import AnimeDetails from "../components/AnimeDetails";
import {searchAnime} from "../requests";
import { useAppContext } from "../context/AppContext";
import Update from "./Update";


const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const {titleClick} = useAppContext()


  const fetchData = async() => {
    try {
      let data = await searchAnime(input);
      setData(data);
    } catch (error) {
      console.error("Error during fetching data",error);
    }
  }

  useEffect(() => { 
    if(input === '') return;
    let timeStamps = setTimeout(() => {
      fetchData();
    }, 1500);
    return () => {
      clearTimeout(timeStamps);
    };
  }, [input]);
  
  return (
  !titleClick? (
    <div className="w-[350px] max-h-[500px] font-display flex flex-col bg-darkGrey p-3">
      <input
        type="text"
        className="bg-midGrey p-2 text-white outline-none rounded-sm w-full"
        placeholder="Search Anime"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="max-w-[400px] overflow-y-scroll scrollbar"> 
        {data?.map((anime) => {
          return (<AnimeDetails anime={anime} key={anime.id} />)
        })}
      </div>
    </div>
  ) : (
    <Update />
  )
);

};

export default Search;
