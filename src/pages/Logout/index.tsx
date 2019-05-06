import React, { useEffect, FC } from 'react'
import { connect } from 'react-redux'
import { logout, Dispatch } from '../../store/customer/actions'

type Props = ReturnType<typeof mapDispatchToProps>

const LogoutPage: FC<Props> = ({ logoutAction }) => {
  useEffect(() => {
    logoutAction()
  })

  return <span>Logging out</span>
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logoutAction: () => dispatch(logout),
})

export const Logout = connect(
  null,
  mapDispatchToProps
)(LogoutPage)
