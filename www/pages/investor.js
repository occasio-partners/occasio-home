import FadingBox from 'components/FadingBox'
import prospectusPDF from 'assets/prospectus.pdf'

export default () =>
  <FadingBox>
    <h1>Investor Relations</h1>
    <p>
        Download our <a href={prospectusPDF}>Prospectus</a>.
    </p>
    <style jsx>{`
      h1 {
        text-align: center;
        margin-bottom: 0.8em;
      }
      p {
        margin: 0.4em;
      }
    `}</style>
  </FadingBox>
