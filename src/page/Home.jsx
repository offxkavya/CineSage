import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { BsArrowDown } from 'react-icons/bs'
import MovieCard from '../components/MovieCard'
import { BsX } from 'react-icons/bs'
import LoginForm from '../components/LoginForm';
const Home = () => {
    const [data, setData] = useState([])
    const [loginOpen, setLoginOpen] = useState(false)
    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDhlOWVkN2FlODA2M2ZmZDc0MDFmZTYzOTNhYTJkZiIsIm5iZiI6MS43NDY0NzAwMjcwNTc5OTk4ZSs5LCJzdWIiOiI2ODE5MDQ4YjQyMjJkOTljMzIwOGE3NGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.R5C0uJtZcqLDeDQ7OfCrd7XZD7miZYgOkm8_5GFJpI8'
            }
        };
        const fetchMovie = async () => {
            const res = await fetch(url, options)
            const data = await res.json()
            setData(data.results)
        }
        fetchMovie()
    }, [])
    return (
        <div className='w-full py-4 bg-black text-white min-h-screen px-10 md:px-16 lg:px-28'>
            <Navbar loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
            {
                loginOpen &&
                <LoginForm onClose={() => setLoginOpen(false)} />
            }
            <div className='w-full mb-[20vh] flex items-center justify-center flex-col'>
                <h1 className='text-7xl text-center mt-[20vh] w-[70%] font-bold'>Dive in the world of movies with <span className='text-indigo-600'>Cinesage</span></h1>
                <button className='my-20 bg-white border-black border rounded-xl text-black px-3 flex items-center gap-3 animate-bounce duration-150 cursor-pointer hover:opacity-80 py-2' onClick={() => setLoginOpen(true)}>Watch now <BsArrowDown /></button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                {
                    data && data.map((item, idx) => {
                        return <MovieCard key={idx} title={item.original_title} img={item.poster_path} rating={item.vote_average} />
                    })
                }
            </div>
        </div>
    )
}

export default Home