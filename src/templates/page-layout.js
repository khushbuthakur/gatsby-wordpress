import React from 'react'
import Layout from '../components/layout';
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

function PageLayout({ data, pageContext}) {
    console.log(data);
    const {page} = data;
    const {content} = page;

    return (
        <Layout>
          {parse(content)}
        </Layout>
    )
}

export default PageLayout;

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
        content
        id
    }
  }
`

