import React from 'react'

const App = () => {
  return (
    <>
    {/* Header */}
      <header className='px-2 border-b'>
        <a className='uppercase font-bold text-purple-800' href="#">TailwindCSS news</a>
        <nav>
          <ul className="text-gray-500 font-semibold">
            <li><a className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800" href="#">Home</a></li>
            <li><a className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800" href="#">About</a></li>
            <li><a className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800" href="#">Contact</a></li>
          </ul>
          <ul>
            <li><button className='py-1 px-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-violet-300'>Login</button></li>
            <li><button className='py-1 px-3 border-2 rounded-full border-indigo-600 text-indigo-600 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-violet-300'>Register</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* breadcrumbs */}
        <div>
          <div className='py-4 overflow-y-auto whitespace-nowrap'>
            <a className='text-gray-600 hover:text-gray-900' href="#">Home</a>
            <span className='mx-2 text-gray-500 hover:text-gray-900'>&gt;</span>
            <a className='text-gray-600' href="#">News</a>
            <span className='mx-2 text-gray-500 hover:text-gray-900'>&gt;</span>
            <a className='text-gray-600' href="#">Tech</a>
          </div>
        </div>

        {/* pagination */}
        <div className='mt-20 mb-10'>
          <ul className='flex justify-center'>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-l-lg' href="#">Previous</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700' href="#">1</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700' href="#">2</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-blue-600 hover:bg-blue-100' href="#">3</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700' href="#">4</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700' href="#">5</a></li>
            <li><a className='inline-block py-1 px-3 border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg' href="#">Next</a></li>
          </ul>
        </div>

        {/* divider */}
        <div className="border border-dotted"></div>

        {/* subscribe */}
        <div className='my-5'>
          <h5 className='font-bold text-lg uppercase text-gray-700 mb-2'>Subscribe</h5>
          <p className='text-gray-7600 mb-4'>Subscribe to our newsletter</p>
          <input placeholder='your email' type="email" className='text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-900'/>
          <button className='px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800'>Subscribe</button>
        </div>

        {/* divider */}
        <div className="border border-dotted"></div>
      </main>

      <footer className='border-t mt-10 py-10 px-2'>
        <div>
          <div className='mb-5'>
            <h6 className='font-semibold text-gray-700 mb-4'>Company</h6>
            <ul>
              <li><a className='inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2' href="#">Team</a></li>
              <li><a className='inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2' href="#">About us</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-semibold text-gray-700 mb-4'>Content</h6>
            <ul>
              <li><a className='inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2' href="#">Block</a></li>
              <li><a className='inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2' href="#">Policy</a></li>
              <li><a className='inline-block text-gray-500 py-2 hover:underline decoration-gray-700 underline-offset-2' href="#">Documentation</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  )
}

export default App