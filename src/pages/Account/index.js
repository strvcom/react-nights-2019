import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

const AccountPage = ({ customer }) => (
  <main data-test-id="account-page">
    <H1>Welcome {customer.attributes.metadata.firstName}</H1>
  </main>
)

const mapStateToProps = state => ({
  customer: state.customer,
})

export const Account = connect(mapStateToProps)(AccountPage)
