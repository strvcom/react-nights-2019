import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

const Account = ({ user }) => (
  <Layout>
    <H1>Welcome {user.attributes.metadata.firstName}</H1>
  </Layout>
)

const mapStateToProps = state => ({
  user: state.user,
})

const WithConnect = connect(mapStateToProps)(Account)

export { WithConnect as Account }
