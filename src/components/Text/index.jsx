import React from 'react'
import { P, Span, H1, H2, H3 } from './style'


export const Text = ({children, type}) => {
  return (
    <>
      {type === 'p' && <P>{children}</P>}
      {type === 'span' && <Span>{children}</Span>}
      {type === 'h1' && <H1>{children}</H1>}
      {type === 'h2' && <H2>{children}</H2>}
      {type === 'h3' && <H3>{children}</H3>}
    </>
  )
}
