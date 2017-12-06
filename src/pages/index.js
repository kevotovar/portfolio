import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hola Mundo</h1>
    <p>Bienvenido a mi portafolio.</p>
    <Link to="/page-2/" href="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
