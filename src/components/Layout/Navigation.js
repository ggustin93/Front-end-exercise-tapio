import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const menu = document.getElementById('navbar-default')
  const toggle = () => menu.classList.toggle('hidden')
  return (
    <div class="mb-20">
      <nav
        style={{ backgroundColor: '#18596D', color: 'white' }}
        class="mb-10 bg-red px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={`/`}>
            <a class="flex items-center">
              <img
                src="https://tapioview.s3.amazonaws.com/static/img/tapio-iframe-white.webp?AWSAccessKeyId=AKIAXL23VGMDKSIWWZ5W&Signature=pfgtDnoMblXM1UFyLBL97ae1UgM%3D&Expires=1989762355"
                class="h-16 mr-3 sm:h-9"
                alt="Tapio Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Tapio Assignment
              </span>
            </a>
          </Link>
          <button
            onClick={toggle}
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-tertiary-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  class="block py-2 pl-3 pr-4 text-white text-sm rounded hover:underline"
                  to={'/'}
                >
                  List All Posts
                </Link>
              </li>
              <li>
                <Link
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  to={'/create'}
                ></Link>
              </li>
              <li>
                <Link
                  class="block py-2 pl-3 pr-4 text-white text-sm rounded hover:underline"
                  to={'/create'}
                >
                  Add New Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
