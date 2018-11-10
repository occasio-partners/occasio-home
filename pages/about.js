import Layout from '../components/layout'
import FadingComponent from '../components/fadingComponent'

const About = (props) => (
  <Layout path={props.path} title='About us'>
    <FadingComponent>
    <div className="box3-container">
      <div className="box3-bg"></div>
      <div className="box3">
        Occasio Partners, LLC is an alternative investment firm that focuses on generating low-risk returns by utilizing differing markets and various time frames to deliver consistent results. For a prospectus, monthly letter update, minimum investment, fee structure, or other inquires. Please email info@occasio-partners.com
      </div>
    </div>
    </FadingComponent>
  </Layout>
)

About.componentDidMount = () => {
  console.log("IN COMPONENTDIDMOUNT ABOUT");
  //const res = await fetch('https://api.github.com/repos/developit/preact')
  //const json = await res.json()
  return { path: pathname }
}

About.getInitialProps = async ({ pathname, req }) => {
    console.log("IN GET INITIAL PROP ABOUT");
    //const res = await fetch('https://api.github.com/repos/developit/preact')
    //const json = await res.json()
    return { path: pathname }
}

export default About;

