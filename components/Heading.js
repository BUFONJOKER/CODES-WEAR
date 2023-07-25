import React from 'react'
import Head from 'next/head'

export default function Heading(props) {
  return (
    <div><Head>
    <title>Codes Wear{props.heading}</title>
    <meta name="description" content="CodesWear - Wear the code" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/logo.jpg" />
    
  </Head></div>
  )
}
