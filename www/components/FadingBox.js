import React from 'react'
import FadingComponent from 'components/FadingComponent'
import ContentBox from 'components/ContentBox'

export default ({ children }) =>
  <FadingComponent>
    <ContentBox>
      {children}
    </ContentBox>
  </FadingComponent>
