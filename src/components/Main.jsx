import React from 'react'
import requests from '../Request'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random()* movies.length)]

    useEffect (()=> {
        axios.get(requests.requestPopular).then((response)=> {
            setMovies(response.data.results)
        })
        
    }, [])

 //   console.log(movie)

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        } else 
        return str;
    } 

  return (
    <div className='text-white text-left relative'>
        <div className=''>
        <div className='absolute h-full w-full bg-gradient-to-r from-black'></div>
            <img className = 'w-[100vw] h-[100vh] object-cover block' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            </div>
       <div className='absolute w-[100vw] h-[100vh] top-[30%] p-4 md:p-8'>
          
           <h1 className='text-3xl  font-bold'>{movie?.title}</h1>
          
      
        <p className='text-white text-md pt-5'>Released: {movie?.release_date}</p>
        <p className = 'w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 pt-5'>{truncateString(movie?.overview, 150)}</p>
        <div className='pt-4'>
            <button className='border bg-gray-300 text-black border-gray 300 py-2  px-5' >Play</button>
            <button className='border text-white border-gray 300 py-2  px-5'>Watch Later</button>
        </div>
       </div>
      
        </div>
    
  )
}

export default Main