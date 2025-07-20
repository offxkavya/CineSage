import React from 'react'

const Landing = () => {
    return (
        <div className="App">
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <div className="logo text-2xl font-bold">MovieApp</div>
              <ul className="nav-links flex space-x-4">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#features" className="hover:text-gray-400">Features</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                <li><a href="/login" className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Login</a></li>
              </ul>
            </nav>
          </header>
    
          <section id="home" className="hero bg-cover bg-center h-screen flex items-center justify-center text-white">
            <div className="hero-content bg-black bg-opacity-70 p-8 rounded-lg text-center">
              <h1 className="text-5xl mb-4">Welcome to MovieApp</h1>
              <p className="text-xl mb-6">Discover and explore the best movies tailored just for you.</p>
              <a href="/dashboard" className="cta-btn bg-red-500 px-6 py-3 rounded text-lg hover:bg-red-600">Get Started</a>
            </div>
          </section>
    
          
        </div>

         )}
    

export default Landing