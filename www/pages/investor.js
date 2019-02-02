import FadingBox from 'components/FadingBox'
import prospectusPDF from 'assets/prospectus.pdf'

export default () =>
  <FadingBox>
    <h1>Investor Relations</h1>
    <p>
        Download our <a href={prospectusPDF}>Prospectus</a>.
    </p>
    <style jsx>{`
      p {
        text-align: center;
      }
    `}</style>
  </FadingBox>
