import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { BsArrowDown } from 'react-icons/bs'
import MovieCard from '../components/MovieCard'
import { BsX } from 'react-icons/bs'
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
                <div className='absolute top-4 text-black left-0 z-20 w-full h-[110vh] flex items-center justify-center bg-black/40 backdrop-blur-lg'>
                    <BsX fill='#fff' className='text-7xl cursor-pointer absolute top-10 right-10' onClick={()=>{
                        setLoginOpen(!loginOpen)
                    }}/>
                    <form class="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white/40  backdrop-blur-2xl ">
                        <h1 class="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
                        <p class="text-black text-sm mt-2">Please sign in to continue</p>
                        <div class="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email id" class="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
                        </div>

                        <div class="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Password" class="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
                        </div>
                        <div class="mt-5 text-left text-indigo-900">
                            <a class="text-sm" href="#">Forgot password?</a>
                        </div>

                        <button type="submit" class="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Login
                        </button>
                        <p class="text-gray-900 text-sm mt-3 mb-11">Don’t have an account? <a class="text-indigo-900" href="#">Sign up</a></p>
                    </form>
                </div>
            }
            <div className='w-full mb-[20vh] flex items-center justify-center flex-col'>
                <h1 className='text-7xl text-center mt-[20vh] w-[70%] font-bold'>Dive in the world of movies with <span className='text-indigo-600'>Cinesage</span></h1>
                <button className='my-20 bg-white border-black border rounded-xl text-black px-3 flex items-center gap-3 animate-bounce duration-150 cursor-pointer hover:opacity-80 py-2'>Watch now <BsArrowDown /></button>
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