import { useFormik } from 'formik'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import * as Yup from 'yup'


const BookingForm = ({availableTimes,dateChange, submitForm}) => {

  const formik=useFormik({
    initialValues:{
      date:'',
      time:'',
      guests:0,
      occasion:''
    },
    onSubmit: values => {
      toast.success('Booked')
      console.log(formik.errors)
      const dataForm = [values]
      submitForm(dataForm)
    },
    validationSchema: Yup.object({
      date:Yup.string().required('required'),
      time:Yup.string().required('required'),
      guests:Yup.number().integer().required().min(1),
      occasion:Yup.string().required()
    })
  })


  return (
    <div className='booking-form'>
      <h1>Book a Table!</h1>
      <form onSubmit={formik.handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
      <label htmlFor="res-date">Choose date</label>
      <input
        aria-label='onClick' 
        type="date" 
        id="date"
        data-testid='res-date'
        {...formik.getFieldProps('date')}
        onChange={(e)=>{
            dateChange()
            formik.handleChange(e)
          }
        }
      />
      {formik.errors.date && formik.touched.date && <div className='alert alert-danger'>{formik.errors.date}</div>}
      <label htmlFor="res-time">Choose time</label>
      <select 
        data-testid="res-time"
        {...formik.getFieldProps('time')}
      >
        {availableTimes.map(at=> <option key={at} value ={at}>{at}</option>)} 
      </select>
      {formik.errors.time && formik.touched.time && <div className='alert alert-danger'>{formik.errors.time}</div>}
      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests"
        {...formik.getFieldProps('guests')}
      />
      {formik.errors.guests && formik.touched.guests && <div className='alert alert-danger'>{formik.errors.guests}</div>}
      <label htmlFor="occasion">Occasion</label>
      <select 
        {...formik.getFieldProps('occasion')}
        id="occasion"
      >
          <option value="Choose Occasion">Choose Occassion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
      </select>
      {formik.errors.occasion && formik.touched.occasion && <div className='alert alert-danger'>{formik.errors.occasion}</div>}
      <input className='btn' type="submit" value="Make Your reservation"></input>
      </form>
    </div>
  )
}

export default BookingForm