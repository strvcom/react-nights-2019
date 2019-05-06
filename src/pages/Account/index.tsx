import React, { FC } from 'react'
import { connect } from 'react-redux'

import { PrivatePage } from '../../components/PrivatePage'
import { H1 } from '../../components/Typography'
import { AppState } from '../../store'

type Props = ReturnType<typeof mapStateToProps>

const AccountPage: FC<Props> = ({ customer }) => (
  <PrivatePage>
    {() => (
      <main data-test-id="account-page">
        <H1>Welcome {customer.attributes.metadata.firstName}</H1>
      </main>
    )}
  </PrivatePage>
)

const mapStateToProps = (state: AppState) => ({
  customer: state.customer!,
})

export const Account = connect(mapStateToProps)(AccountPage)
