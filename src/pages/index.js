import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h4>Posts</h4>
    {data.allWpPost.nodes.map(node => (
      <div key={node.slug}>
        <Link to={`blog/${node.slug}`}>
          <p>{node.title}</p>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}

    <h4>Pages</h4>
    {data.allWpPage.nodes.map(node => (
      <div key={node.slug}>
        <Link to={node.slug}>
          <p>{node.title}</p>
        </Link>
      </div>
    ))}

    <h4>Secret Posts</h4>
    {data.allWpSecretPost.nodes.map(node => (
      <div key={node.slug}>
        <Link to={`secret/${node.slug}`}>
          <p>{node.title}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export default Home

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
    allWpPage(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
    allWpSecretPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
      }
    }
  }
`
