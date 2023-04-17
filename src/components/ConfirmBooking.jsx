import React from 'react'
import Logo from '../icons_assets/Logo.svg'

const ConfirmBooking = () => {
  return (
    <React.Fragment>
      <div className="confirmation">
      <h1>Thanks for Booking with us!</h1>
      <h2>We'll be seeing you soon!</h2>
      <img src={Logo} alt="Logo" />

      </div>
    </React.Fragment>
  )
}

export default ConfirmBooking