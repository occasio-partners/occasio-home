import Layout from '../components/layout'
import FadingComponent from '../components/fadingComponent'
import Router from 'next/router';

const Index = (props) => (
  <Layout path={props.path} title='Home'>
    <FadingComponent>
    <div className="box3-container">
    <div className="box3-bg"></div>
    <div className="box3">
      <h2>Welcome to Occasio Partners, LLC</h2>
      <h3>Feel free to browse around and find out more</h3>
    </div>
  </div>
    </FadingComponent>
  </Layout>
)

Index.getInitialProps = async ({ pathname, req }) => {
    console.log("IN GET INITIAL PROP INDEX");
    //const res = await fetch('https://api.github.com/repos/developit/preact')
    //const json = await res.json()
    //<div className="box">Hello World</div>
    //<div>
    //<dialog open id="demo-modal">
  //<h3 class="modal-header">A native modal dialog box</h3>
  //<div class="modal-body">
    //<p>Finally, HTML has a native dialog box element! This is fantastic.</p>
    //<p>And a polyfill makes this usable today.</p>
  //</div>
  //<footer class="modal-footer">
    //<button id="like-it" type="button">I like it</button>
    //<button id="love-it" type="button">I love it</button>
  //</footer>
  //<button id="close" class="close" type="button">&times;</button>
//</dialog></div> 
    return { path: pathname }
}

export default Index;