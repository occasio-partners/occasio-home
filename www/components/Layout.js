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
        <NavLink href='/contact' name='CONTACT US' />
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer />
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
        font: 16px menlo;
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
        width: 50%;
      }
      main {
        flex: 1;
        padding: 1em;
      }
      a {
        color: inherit;
      }
      @media screen and (min-width: 600px) {
        .navLinks {
          flex-direction: row;
          padding: 1em;
        }
      }
    `}</style>
  </React.Fragment>
