import FadingBox from 'components/FadingBox'

export default () =>
  <FadingBox>
    <h1>Welcome to Occasio Partners</h1>
    <p>
      Occasio Partners, LLC is a San-Francisco based alternative investment fund.  Occasio, focuses on multiple markets and various time frames including equities, currencies, commodities and fixed-income.
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
