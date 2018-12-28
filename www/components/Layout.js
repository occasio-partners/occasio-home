import Head from 'next/head'
import NavLink from 'components/NavLink.js'

import bgImg from 'assets/sf.jpg'
import logoImg from 'assets/logo.png'

export default ({ children, title = 'Occasio Partners' }) => <div>
  <Head>
    <title>{title}</title>
  </Head>
  <header>
    <nav className='navbar1'>
      <img className='logo2' src={logoImg} alt='Occasio Partners Logo' />
    </nav>
    <nav className='navbar2'>
      <NavLink href='/' name='OUR FIRM' />
      <NavLink href='/about' name='INVESTOR RELATIONS' />
      <NavLink href='/contact' name='MANAGEMENT' />
      <NavLink href='/careers' name='CAREERS' />
    </nav>
  </header>
  {children}
  <footer />
  <style jsx global>{`
    body {
      margin: 0;
      font: 11px menlo;
      color: #fff;
      background: url(${bgImg}) no-repeat center center fixed;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .timeline {
      background: white;
      position:fixed;
      top:10%;
      left:0%
    }
    dialog {
      padding: 0;
      border: 0;
      border-radius: 0.6rem;
      box-shadow: 0 0 1em black;
    }
    /* native backdrop */
    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.4);
    }
    /* polyfill backdrop */
    dialog + .backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
    dialog[open] {
      animation: slide-up 0.4s ease-out;
    }
    /* The following styles are for older browsers when using
      the polyfill. These aren’t necessary for Chrome/Firefox. */
    dialog {
      display: none;
      position: absolute;
      margin: 0 auto; /* should center it, but not working in Safari */
      max-width: 80vw;
      background-color: white;
    }
    dialog[open] {
      display: block;
    }
    /* prettying things up a bit */
    .close {
      position: absolute;
      top: 0.2em;
      right: 0.2em;
      padding: 0.3em;
      line-height: 0.6;
      background-color: transparent;
      border: 0;
      font-size: 2em;
    }
    .modal-header, .modal-body, .modal-footer {
      padding: 1em;
    }
    .modal-header {
      margin: 0;
      padding-bottom: 0.6em;
      background-color: hsl(211, 90%, 93%);
      border-top-left-radius: 0.6rem;
      border-top-right-radius: 0.6rem;
      border-bottom: 1px solid hsl(211, 51%, 65%);
    }
    .modal-footer {
      border-top: 1px solid hsl(211, 51%, 65%);
    }
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
    button {
      padding: 0.4em 1em 0.2em;
      font-family: Glober, Helvetica, sans-serif;
    }
    @keyframes slide-up {
      0% {
        opacity: 0;
        transform: translate(0, 15px);
      }

      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    .logo {
      width: 50%;
      max-width: 100%;
      max-height: 100%;
      display: block;
      float: center;
      padding-left: 20px;
    }
    .logo2 {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
    .navbar {
      overflow: hidden;
      background: linear-gradient(#FFFFFF, #88ACE0);
      position: fixed; /* Set the navbar to fixed position */
      top: 10%; /* Position the navbar at the top of the page */
      width: 100%; /* Full width */
      height: 10%;
    }
    .navbar1 {
      background: transparent;
      position: fixed; /* Set the navbar to fixed position */
      top: 0; /* Position the navbar at the top of the page */
      width: 100%; /* Full width */
      height: 10%;
      padding: 1%;
    }
    .navbar2 {
      background: transparent;
      position: absolute; /* Set the navbar to fixed position */
      top: calc(25px + 7.5vw);
      width: 100%;
      text-align: center;
      border: 1px groove #ffffff1a;
    }
  `}</style>
</div>
