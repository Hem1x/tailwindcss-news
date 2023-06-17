import React from 'react'

const App = () => {
  return (
    <>
    {/* Header */}
      <header className='px-2 border-b'>
        <a className='uppercase font-bold text-purple-800' href="#">TailwindCSS news</a>
        <nav>
          <ul className="text-gray-500 font-semibold">
            <li><a className="inline-block py-3 px-2" href="#">Home</a></li>
            <li><a className="inline-block py-3 px-2" href="#">About</a></li>
            <li><a className="inline-block py-3 px-2" href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* breadcrumbs */}
        <div>
          <div className='py-4 overflow-y-auto whitespace-nowrap'>
            <a className='text-gray-600' href="#">Home</a>
            <span className='mx-2 text-gray-500'>&gt;</span>
            <a className='text-gray-600' href="#">News</a>
            <span className='mx-2 text-gray-500'>&gt;</span>
            <a className='text-gray-600' href="#">Tech</a>
          </div>
        </div>
      </main>

      <footer className='border-t mt-10 py-10 px-2'>
        <div>
          <div>
            <h6 className='font-semibold text-gray-700 mb-4'>Company</h6>
            <ul>
              <li><a className='inline-block text-gray-500 py-2' href="#">Team</a></li>
              <li><a className='inline-block text-gray-500 py-2' href="#">About us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  )
}

export default App