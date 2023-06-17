import React from 'react'

const App = () => {
  return (
    <>
    {/* Header */}
      <header className='px-2 border-b flex items-center justify-between'>
        <a className='uppercase font-bold text-purple-800' href="#">TailwindCSS news</a>
        <nav className='flex imtes-center'>
          <ul className="inline-flex items-center">
            <li><a className="header-link" href="#">Home</a></li>
            <li><a className="header-link" href="#">About</a></li>
            <li><a className="header-link" href="#">Contact</a></li>
          </ul>
          <ul className='inline-flex items-center'>
            <li><button className='header-btn'>Login</button></li>
            <li><button className='header-btn'>Register</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* breadcrumbs */}
        <div className='px-2 flex items-center'>
          <div className='py-4 overflow-y-auto whitespace-nowrap flex items-center'>
            <a className='text-gray-600 hover:text-gray-900' href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <span className='mx-2 text-gray-300 hover:text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <a className='text-gray-600' href="#">News</a>
            <span className='mx-2 text-gray-300 hover:text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <a className='text-gray-600' href="#">Tech</a>
          </div>
        </div>

        {/* news */}
        <section className='px-2'>
          <a className='block mb-10' href="">
            <div className='flex'>
              <div>
                <h3 className='mt-3 mb-2 text-gray-700 font-bold text-2xl'>Adipisicing elit. Perferendis, ipsam?</h3>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus. Iste tempora officiis fugiat odit nulla corporis incidunt tenetur modi, quibusdam, ab accusamus minus, fuga recusandae impedit quo nostrum labore!</p>
              </div>
            </div>
          </a>

          <a className='block mb-10' href="">
            <div className='flex'>
              <div>
                <h3 className='mt-3 mb-2 text-gray-700 font-bold text-2xl'>Explicabo ratione. Perferendis, ipsam?</h3>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus. Iste tempora officiis fugiat odit nulla corporis incidunt tenetur modi, quibusdam, ab accusamus minus, fuga recusandae impedit quo nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi perspiciatis autem explicabo, ab voluptate eum esse voluptates cupiditate sequi magnam rerum ipsam excepturi atque. Quod voluptatum repudiandae repellat dolores.</p>
              </div>
            </div>
          </a>

          <a className='block mb-10' href="">
            <div className='flex'>
              <div>
                <h3 className='mt-3 mb-2 text-gray-700 font-bold text-2xl'>Nulla corporis incidunt</h3>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus.</p>
              </div>
            </div>
          </a>
        </section>
        
        {/* pagination */}
        <div className='mt-20 mb-10'>
          <ul className='flex justify-center'>
            <li><a className='pagination-item rounded-l-lg' href="#">Previous</a></li>
            <li><a className='pagination-item' href="#">1</a></li>
            <li><a className='pagination-item' href="#">2</a></li>
            <li><a className='pagination-item text-blue-600 hover:bg-blue-100 hover:text-blue-600' href="#">3</a></li>
            <li><a className='pagination-item' href="#">4</a></li>
            <li><a className='pagination-item' href="#">5</a></li>
            <li><a className='pagination-item rounded-r-lg' href="#">Next</a></li>
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
              <li><a className='footer-link' href="#">Team</a></li>
              <li><a className='footer-link' href="#">About us</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-semibold text-gray-700 mb-4'>Content</h6>
            <ul>
              <li><a className='footer-link' href="#">Block</a></li>
              <li><a className='footer-link' href="#">Policy</a></li>
              <li><a className='footer-link' href="#">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h6 className='font-semibold text-gray-700 mb-4'>Contact Us</h6>
            <ul className='flex'>
              <li className='mr-2'>
                <a className='footer-link' href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </a>
              </li>
              
              <li className='mr-2'>
                <a className='footer-link' href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                  </svg>
                </a>
              </li>

              <li>
                <a className='footer-link' href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </footer>
    </>

  )
}

export default App