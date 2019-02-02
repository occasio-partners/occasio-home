import Head from 'next/head'
import NavLink from 'components/NavLink.js'
import React from 'react'

import bgImg from 'assets/sf.jpg'
import logoImg from 'assets/logo.png'

export default ({ children, title = 'Occasio Partners' }) =>
  <React.Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav>
        <img src={logoImg} alt='Occasio Partners Logo' />
      </nav>
      <nav className='navLinks'>
        <NavLink href='/' name='OUR FIRM' />
        <NavLink href='/investor' name='INVESTOR RELATIONS' />
        <NavLink href='/news' name='NEWS' />
        <NavLink href='/contact' name='CONTACT US' />
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      &#169; 2019 Occasio Partners, LLC &nbsp;&nbsp; | &nbsp;&nbsp;GDPR&nbsp;&nbsp; | &nbsp;&nbsp;Contact: <a href='mailto:info@occasio-partners.com'>info@occasio-partners.com</a>
    </footer>
    <style jsx global>{`
      *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
      html, body {
        box-sizing: border-box;
        height: 100%;
        overflow-x: hidden;
      }
      body {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        letter-spacing: .03em;
        line-height: 1.2;
        color: #fff;
        background: url(${bgImg}) no-repeat center center fixed;
        background-size: cover;
        width: 100%;
      }
      #__next {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
      }
      header {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
      header > nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        display: flex;
        padding: 1em;
      }
      .navLinks {
        flex-direction: column;
        padding: 0;
      }
      header > nav > img {
        width: 70%;
      }
      main {
        flex: 1;
        padding: 0.6em 5vw;
      }
      a {
        color: inherit;
      }
      h1 {
        text-align: center;
        margin-bottom: 0.8em;
      }
      p {
        margin: 0.4em;
      }
      footer {
        background-color: rgba(38, 34, 98, 0.50);
        color: aliceblue;
        font-weight: bold;
        font-size: 0.8em;
        text-align: center;
        padding: 0.5em;
      }
      @media screen and (min-width: 600px) {
        main {
          padding: 0;
        }
        .navLinks {
          flex-direction: row;
          padding: 1em;
        }
        footer {
          padding: 0.8em;
        }
      }
      @media screen and (min-width: 1200px) {
        body {
          font-size: 20px;
        }
        header > nav > img {
          width: 55em;
          max-width: 70vw;
        }
        footer {
          padding: 1em;
        }
      }
    `}</style>
  </React.Fragment>
