import React, { useReducer } from 'react'
import BookingForm from './BookingForm'
import { useNavigate } from 'react-router-dom'


const BookingPage = () => {

  const updateTimes = () =>{
    const asDate= new Date()
    const resTimes=window.fetchAPI(asDate)
    console.log(resTimes)
    return resTimes
  }

  const navigate=useNavigate()

  const submitForm = (formData) =>{
    console.log(formData)
    const res = window.submitAPI(formData)
    if (res) navigate('/booking-confirmation')
  }

  const initializeTimes = ['Choose Time','17:00', '18:00','19:00','20:00','21:00','22:00']
      
  const [state, dispatch]=useReducer(updateTimes,initializeTimes)

  return (
    <div className='bookings'>
      <BookingForm availableTimes={state} dateChange={dispatch} submitForm={submitForm}/>
    </div>
  )
}

export default BookingPage