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
            <a className='text-gray-600 hover:text-gray-900' href="#">Home</a>
            <span className='mx-2 text-gray-500 hover:text-gray-900'>&gt;</span>
            <a className='text-gray-600' href="#">News</a>
            <span className='mx-2 text-gray-500 hover:text-gray-900'>&gt;</span>
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
        </div>
      </footer>
    </>

  )
}

export default App