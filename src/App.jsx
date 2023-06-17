import React from 'react'

const App = () => {
  return (
    <header>
      <a className='uppercase font-bold text-purple-800' href="#">TailwindCSS news</a>

      <nav>
        <ul className="text-gray-500 font-semibold" >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App