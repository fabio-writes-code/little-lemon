import React from 'react'
import { useState } from 'react'

const BookingForm = ({availableTimes,dateChange, submitForm}) => {
  const [date, setDate]=useState('yyyy-MM-dd')

  const [time,setTime]=useState('Choose Time')
  const [guests, setGuests]=useState(0)
  const [occasion, setOccasion]=useState('Chose Occasion')

  const getIsFormValid =()=>{
    if(!date) return false
    if (time==='Choose Time') return false
    if (guests===0) return false
    if (occasion==='Choose Occasion') return false
    return true;
  }

  const clearForm=()=>{
    setDate('')
    setTime('Choose Time')
    setGuests(0)
    setOccasion('Choose Occasion')
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(date, time, guests, occasion)
    clearForm()
    const dataForm=[date,time, guests, occasion]
    submitForm(dataForm)    
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date"
        data-testid='res-date'
        value = {date}
        onChange={e=>{
          dateChange();
          setDate(e.target.value)
        }
      }
      />
      <label htmlFor="res-time">Choose time</label>
      <select 
        data-testid="res-time"
        value={time}
        onChange={e=>setTime(e.target.value)}
      >
        {availableTimes.map(at=> <option key={at} value ={at}>{at}</option>)} 
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input value={guests} onChange={e=>setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests"/>
      <label htmlFor="occasion">Occasion</label>
      <select value={occasion} onChange={e=>setOccasion(e.target.value)} id="occasion">
          <option value="Choose Occasion">Choose Occassion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"></input>
      </form>
    </div>
  )
}

export default BookingForm