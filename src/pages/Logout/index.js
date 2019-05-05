    
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/customer/actions'

const LogoutPage = ({ logoutAction }) => {
  useEffect(() => logoutAction())

  return <span>Logging out</span>
}

export const Logout = connect(
  null,
  { logoutAction: logout }
)(LogoutPage)