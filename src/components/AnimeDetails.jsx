import React from 'react'
import { useAppContext } from '../context/AppContext'

const AnimeDetails = ({anime}) => {

  const {titleClickHandler} = useAppContext()
  // const key = anime.id

  return (
    <div className='max-w-[400px] mt-3 p-2 hover:bg-lighGrey font-display max-h-screen'>
        <div className="hover:cursor-pointer " onClick={() => titleClickHandler(anime.id)}>
          {/* heading  */}
          {/* <Link to={`/anime/${anime.id}`}> */}
            {anime.title.english !== null ? (
                <h1 className="text-white font-bold text-lg">{anime.title.english}</h1>
                    ) : (
                <h1 className='text-white font-bold text-ls'>{anime.title.romaji}</h1>
            )}
          {/* </Link> */}
        </div>
        <div className='flex mt-1 justify-center items-center text-sm'>
          {/* image  */}
            <img height={75} width={75} className="rounded-sm" src={anime.coverImage.medium} alt={anime.title.english} />
            <div className='text-white ml-5'>
            {/* anime details */}
                  {
                    anime.episodes===null? <p>NA</p> : <p>Episodes : {anime.episodes}</p>
                  }
                  <p>Status : {anime.status}</p>
                  <p>StartDate : {anime.startDate.year}-{anime.startDate.month}-{anime.startDate.day}</p>
                  <p>{anime.genres.join((', '))}</p>
            </div>
        </div>
    </div>
  )
}

export default AnimeDetails