import React from 'react'

const App = () => {
  return (
    <div className='dark:bg-slate-900 max-w-screen-xl mx-auto'>
      {/* header */}
      <header className='px-2 border-b flex items-center justify-between h-14'>
        <a className='dark:text-purple-300 uppercase font-bold text-purple-800' href="#">TailwindCSS news</a>
        <nav className='hidden md:flex imtes-center'>
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

        <button className='inline-block md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* breadcrumbs */}
      <div className='px-2 flex items-center'>
          <div className='py-4 overflow-y-auto whitespace-nowrap flex items-center'>
            <a className='dark:text-slate-200 text-gray-600 hover:text-gray-900' href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <span className='mx-2 text-gray-300 hover:text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <a className='dark:text-slate-200 text-gray-600' href="#">News</a>
            <span className='mx-2 text-gray-300 hover:text-gray-900'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <a className='dark:text-slate-200 text-gray-600' href="#">Tech</a>
          </div>
      </div>

      {/* Banners */}
      <section className='px-2 lg:flex lg:space-x-2'>
        <a className='w-full lg:w-2/3 bg-gradient-to-tr bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden' href="">
          <div className='absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70'></div>
          <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src="https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg" alt="" />
          <div className='p-4 absolute bottom-0 left-0 z-20'>
            <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, soluta.
            </h2>
            <span className='bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2'>React</span>
            <div className='flex mt-3'>
              <img className='h-10 w-10 rounded-full mr-2 object-cover' src="https://randomuser.me/api/portraits/women/67.jpg" alt="auth"/>
                <div>
                  <p className='font-semibold text-gray-200 text-sm'>Jenny Doe</p>
                  <time className='text-gray-400 text-xs'>14 march</time>
                </div>
            </div>
          </div>
        </a>

        <a className='w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden' href="">
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70'></div>
            <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src="https://i.pinimg.com/originals/d1/6d/e0/d16de0b26cf51d1acfce9fb6f30ad505.jpg" alt="" />

            <div className='p-4 absolute bottom-0 left-0 z-20'>
              <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, soluta.
              </h2>

              <span className='bg-gradient-to-bl from-red-600 to-red-600/80 text-white inline-flex items-center justify-center px-4 py-1 mb-2'>Angular</span>

              <div className='flex mt-3'>
                <img className='h-10 w-10 rounded-full mr-2 object-cover' src="https://randomuser.me/api/portraits/women/67.jpg" alt="auth"/>
                  <div>
                    <p className='font-semibold text-gray-200 text-sm'>Jenny Doe</p>
                    <time className='text-gray-400 text-xs'>14 march</time>
                  </div>
              </div>
            </div>
        </a>
      </section>

      <main className='lg:flex'>
        <div className='w-full lg:w-2/3'>
          {/* news */}
          <section className='px-2'>
            <a className='block w-full lg:flex mb-10' href="">
              <img className='w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4' src="https://i.pinimg.com/originals/d1/6d/e0/d16de0b26cf51d1acfce9fb6f30ad505.jpg" alt="img" />
              <div className='flex'>
                <div>
                  <h3 className='dark:text-slate-200 mb-2 text-gray-700 font-bold text-2xl'>Adipisicing elit. Perferendis, ipsam?</h3>
                  <p className='dark:text-slate-200 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus. Iste tempora officiis fugiat odit nulla corporis incidunt tenetur modi, quibusdam, ab accusamus minus, fuga recusandae impedit quo nostrum labore!</p>
                </div>
              </div>
            </a>

            <a className='block w-full lg:flex mb-10' href="">
              <img className='w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4' src="https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1680515572_kartinki-pibig-info-p-kartinki-spokoinoi-nochi-novie-krasivie-us-81.jpg" alt="img" />
              <div className='flex'>
                <div>
                  <h3 className='dark:text-slate-200 mb-2 text-gray-700 font-bold text-2xl'>Explicabo ratione. Perferendis, ipsam?</h3>
                  <p className='dark:text-slate-200 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus. Iste tempora officiis fugiat odit nulla corporis incidunt tenetur modi, quibusdam, ab accusamus minus, fuga recusandae impedit quo nostrum labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi perspiciatis autem explicabo, ab voluptate eum esse voluptates cupiditate sequi magnam rerum ipsam excepturi atque. Quod voluptatum repudiandae repellat dolores.</p>
                </div>
              </div>
            </a>

            <a className='block w-full lg:flex mb-10' href="">
              <img className='w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4' src="https://kartinki.pibig.info/uploads/posts/2023-04/1680522312_kartinki-pibig-info-p-ochen-krasivaya-kartinka-spokoinoi-nochi-l-1.jpg" alt="img" />
              <div className='flex'>
                <div>
                  <h3 className='dark:text-slate-200 mb-2 text-gray-700 font-bold text-2xl'>Nulla corporis incidunt</h3>
                  <p className='dark:text-slate-200 text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quod iusto error fugiat cupiditate rem sapiente eaque veritatis illum impedit. Pariatur eius id explicabo ratione, autem eveniet dicta sequi possimus.</p>
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
        </div>

        <div className='w-full lg:w-1/3 px-2 md:flex md:space-x-2 lg:block lg:space-x-0'>

          {/* topic */}
          <div className='w-full md:w-1/2 lg:w-full mb-5'>
            <h5 className='dark:text-slate-200 font-bold text-lg uppercase text-gray-700 mb-2'>Popular news</h5>
            <ul>
              <li className='px-1 py-4 border-white hover:border-gray-200'>
                <a href="#" className='dark:text-slate-200 flex items-center text-gray-600'>
                  <span className='inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700'></span>
                  Vue
                  <span className='text-gray-500 ml-auto'>23 articles</span>
                </a>
              </li>

              <li className='px-1 py-4 border-white hover:border-gray-200'>
                <a href="#" className='dark:text-slate-200 flex items-center text-gray-600'>
                  <span className='inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700'></span>
                  Svelte
                  <span className='text-gray-500 ml-auto'>20 articles</span>
                </a>
              </li>

              <li className='px-1 py-4 border-white hover:border-gray-200'>
                <a href="#" className='dark:text-slate-200 flex items-center text-gray-600'>
                  <span className='inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700'></span>
                  Angular
                  <span className='text-gray-500 ml-auto'>15 articles</span>
                </a>
              </li>

              <li className='px-1 py-4 border-white hover:border-gray-200'>
                <a href="#" className='dark:text-slate-200 flex items-center text-gray-600'>
                  <span className='inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700'></span>
                  React
                  <span className='text-gray-500 ml-auto'>7 articles</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-1/2 lg:w-full'>
            {/* divider */}
            <div className="border border-dotted md:hidden lg:block"></div>

            {/* subscribe */}
            <div className='my-5 md:my-0 lg:my5'>
              <h5 className='dark:text-slate-200 font-bold text-lg uppercase text-gray-700 mb-2'>Subscribe</h5>
              <p className='dark:text-slate-200 text-gray-7600 mb-4'>Subscribe to our newsletter</p>
              <input placeholder='your email' type="email" className='transition-all duration-300 text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-900'/>
              <button className='transition-all duration-300 px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800'>Subscribe</button>
            </div>

            {/* divider */}
            <div className="border border-dotted md:hidden lg:block"></div>
          </div>
        </div>
      </main>

    {/* footer */}
      <footer className='border-t mt-10 py-10 px-2'>
        <div className='md:flex text-center'>
          <div className='mb-5 w-full md:w-1/3'>
            <h6 className='font-semibold text-gray-700 mb-4'>Company</h6>
            <ul>
              <li><a className='footer-link' href="#">Team</a></li>
              <li><a className='footer-link' href="#">About us</a></li>
            </ul>
          </div>

          <div className='mb-5 w-full md:w-1/3'>
            <h6 className='font-semibold text-gray-700 mb-4'>Content</h6>
            <ul>
              <li><a className='footer-link' href="#">Block</a></li>
              <li><a className='footer-link' href="#">Policy</a></li>
              <li><a className='footer-link' href="#">Documentation</a></li>
            </ul>
          </div>

          <div className='w-full md:w-1/3'>
            <h6 className='font-semibold text-gray-700 mb-4'>Contact Us</h6>
            <ul className='flex justify-center'>
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
    </div>

  )
}

export default App