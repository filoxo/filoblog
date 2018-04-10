import React from 'react'
import Link from 'gatsby-link'
import GithubIcon from 'react-icons/lib/fa/github-alt'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import SrText from '../components/SrText'
import '../css/header.css'

const Header = () => {
  return (
    <div
      style={{
        background: `#fff`,
        borderBottom: '2px solid rgba(160, 160, 160, 0.3)',
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.5rem 1.45rem`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <h1 style={{ margin: 0, fontSize: `1.5rem`, letterSpacing: 8 }}>
          <Link
            to="/"
            style={{
              color: '#333',
              textDecoration: 'none',
              textTransform: 'uppercase',
              border: 'none'
            }}
          >
            Filoblog
          </Link>
        </h1>
        <ul className="menuIcons">
          <li>
            <a
              href="https://twitter.com/cfiloteo12"
              rel="noopener"
              target="_blank"
            >
              <TwitterIcon size={20} />
              <SrText>Follow me as @cfiloteo12 on Twitter</SrText>
            </a>
          </li>
          <li>
            <a href="https://github.com/filoxo" rel="noopener" target="_blank">
              <GithubIcon size={20} />
              <SrText>Checkout my Github profile (@filoxo)</SrText>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlosfiloteo/"
              rel="noopener"
              target="_blank"
            >
              <LinkedinIcon size={20} />
              <SrText>Let's connect on LinkedIn</SrText>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
