import Link from 'next/link'
import Head from 'next/head'
import StyledLink from './styledLink.js'
import lifecycle from 'react-pure-lifecycle';
import { Timeline } from 'react-twitter-widgets';

const methods = {
  componentDidMount(props) {
    console.log('I mounted! Here are my props: ', props);
  }
};
// background-image: url(/static/sf.jpg);
// background-size: cover;
// font: 11px menlo;
// color: #fff;

const render = ({ children, path, title = 'This is the default title' }) => (
  <div>
    <style>{`
      body {
        margin: 0;
        font: 11px menlo;
        color: #fff;
      }
      .box3-container {
        position: absolute;
        width: 50%;
        height: 20%;
        top: 30%;
        left: 30%;
        margin: -100px 0px 0px -100px;
      }
      .box3-bg {
        /* Absolutely position it, but stretch it to all four corners, then put it just behind #search's z-index */
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: 99;
      
        /* Pull the background 70px higher to the same place as #bg's */
        background-position: center -70px;
      
        -webkit-filter: blur(10px);
        filter: url('/media/blur.svg#blur');
        filter: blur(10px);
      }
      .box3 {
        /* Put this on top of the blurred layer */
        position: relative;
        z-index: 100;
        padding: 20px;
        background: rgb(34,34,34); /* for IE */
        background: rgba(34,34,34,0.75);
      }

      .box {
        background-color: #ffffff;
        border: 1px solid solid rgba(176, 226, 255, 0.3);
        opacity: 1;
        filter: alpha(opacity=60); /* For IE8 and earlier */
        position: absolute;
        width: 50%;
        height: 20%;
        z-index: 15;
        top: 50%;
        left: 40%;
        margin: -100px 0px 0px -100px;
        font: 14px menlo;
        color: #303030;
        transition: opacity 0.5s;
      }
      .timeline {
        background: white;
        position:fixed;
        top:10%;
        left:0%
      }
     
      $blue-3: hsl(211, 57%, 25%);
      $blue-4: hsl(211, 39%, 44%);
      $blue-5: hsl(211, 51%, 65%);
      $blue-7: hsl(211, 90%, 93%);
      $blue-rich: hsl(211, 65%, 48%);

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
      .modal-header,
      .modal-body,
      .modal-footer {
        padding: 1em;
      }

      .modal-header {
        margin: 0;
        padding-bottom: 0.6em;
        background-color: $blue-7;
        border-top-left-radius: 0.6rem;
        border-top-right-radius: 0.6rem;
        border-bottom: 1px solid $blue-5;
      }

      .modal-footer {
        border-top: 1px solid $blue-5;
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
      .no-effect {
        background-image: url(/static/sf.jpg);
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    `}</style>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav className="navbar1">
        <img className="logo2" src="/static/logo.png" path={path}/>
      </nav>
      <nav className="navbar2">
        <StyledLink href="/" name="OUR FIRM" path={path} />
        <StyledLink href="/about" name="INVESTOR RELATIONS" path={path}/>
        <StyledLink href="/contact" name="MANAGEMENT" path={path}/>
        <StyledLink href="/about" name="CAREERS" path={path}/>
      </nav>
    </header>
    { children }
    <footer>
    </footer>
  </div>
);

export default lifecycle(methods)(render);