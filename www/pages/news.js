/* global preval */
import FadingBox from 'components/FadingBox'

const newsletterRegEx = /^[\d-]+_([a-zA-Z'?!\-_]+)\.pdf$/
const newsletterFileNames = preval`
  module.exports = require('fs').readdirSync('../newsletters')` || []

export default () => {
  const list = newsletterFileNames
    .filter(post => post.match(newsletterRegEx) !== null)
    .map(post => {
      const match = post.match(newsletterRegEx)
      return {
        href: match[0],
        name: match[1].replace(/_/g, ' ')
      }
    }) || []
  return <FadingBox>
    <h1>Newsletters</h1>
    <ul>
      {list.map((newsletter, i) =>
        <li key={i}>
          <a href={`/newsletters/${newsletter.href}`}>{newsletter.name}</a>
        </li>
      )}
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
      }
      h1 {
        text-align: center;
        margin-bottom: 0.8em;
      }
      p {
        margin: 0.4em;
      }
    `}</style>
  </FadingBox>
}
