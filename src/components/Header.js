import React from 'react'
import styled from 'styled-components/macro'

export default function Header({ text }) {
  return <Head>{text}</Head>
}

const Head = styled.header`
  padding: 12px;
  text-align: center;
`
