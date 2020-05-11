import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaGithubAlt, FaLinkedin, FaTwitter } from 'react-icons/fa'

import SrText from './sr-text'
import styles from './header.module.css'
import ThemeToggle from './theme-toggle'

const Header = ({ siteTitle }) => (
  <div className="py-4">
    <div className="mx-auto max-w-screen-md px-4 py-3 flex flex-row justify-between items-center shadow-lg bg-gray-700 text-gray-100 rounded-sm">
      <h1 className="text-xl uppercase tracking-widest">
        <Link className="" to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="flex flex-row items-center">
        <ul className="grid grid-cols-3 row-gap-6 divide-x-2 divide-grey-400">
          <li className="m-0 px-2 text-center inline-flex">
            <a
              href="https://twitter.com/cfiloteo12"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={20} />
              <SrText>Follow me as @cfiloteo12 on Twitter</SrText>
            </a>
          </li>
          <li className="m-0 px-2 text-center inline-flex">
            <a
              href="https://github.com/filoxo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithubAlt size={20} />
              <SrText>Checkout my Github profile (@filoxo)</SrText>
            </a>
          </li>
          <li className="m-0 px-2 text-center inline-flex">
            <a
              href="https://www.linkedin.com/in/carlosfiloteo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={20} />
              <SrText>Let's connect on LinkedIn</SrText>
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
