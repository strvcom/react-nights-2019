import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/customer/actions'

type Props = typeof mapDispatchToProps

const LogoutPage: FC<Props> = ({ logoutAction }) => {
  useEffect(() => logoutAction())

  return <span>Logging out</span>
}

const mapDispatchToProps = { logoutAction: logout }

export const Logout = connect(
  null,
  mapDispatchToProps
)(LogoutPage)
