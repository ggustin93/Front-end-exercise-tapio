import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500 text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={`/`} className="flex items-center">
              <img
                src="https://tapioview.s3.amazonaws.com/static/img/tapio-iframe-white.webp?AWSAccessKeyId=AKIAXL23VGMDKSIWWZ5W&Signature=pfgtDnoMblXM1UFyLBL97ae1UgM%3D&Expires=1989762355"
                className="md:h-15 mr-3 h-12"
                alt="Tapio Logo"
              />
              <span className="hidden:sm self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Tapio
              </span>
            </Link>
            <button
              aria-label="Menu"
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow justify-end' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-end">
              <li className="text-right">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-white text-sm rounded hover:text-primary-400 hover:bg-white"
                  to={{
                    pathname:
                      'https://inexpensive-clef-ab7.notion.site/Rapport-641d7a5451b848a49270b5886de5e3e4',
                  }}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About the code
                </Link>
              </li>
              <li className="text-right">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-white text-sm rounded hover:text-primary-400 hover:bg-white"
                  to={{
                    pathname: 'https://linktr.ee/ggustin',
                  }}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
