import Layout from '../components/layout'
import FadingComponent from '../components/fadingComponent'

const Contact = (props) => (
  <Layout path={props.path} title='Contact us'>
    <FadingComponent>
    <div className="box3-container">
      <div className="box3-bg"></div>
      <div className="box3">
        Contact
      </div>
    </div>
    </FadingComponent>
  </Layout>
)

Contact.getInitialProps = async ({ pathname, req }) => {
    console.log("IN GET INITIAL PROP CONTACT");
    //const res = await fetch('https://api.github.com/repos/developit/preact')
    //const json = await res.json()
    return { path: pathname }
}

Contact.componentDidMount = async =>  {
  console.log("IN COMPONENTDIDMOUNT CONTACT");
  //const res = await fetch('https://api.github.com/repos/developit/preact')
  //const json = await res.json()
  return { path: pathname }
}

export default Contact;
