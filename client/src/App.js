import React, { useState } from 'react'
import './App.css'
import axios from 'axios';


const Form = ({ formHandler, text, radio, formCompleted, changeHandler }) => {
  // const onChangeHandler = (event) => {
  //   event.target.value
  // }



  return (
    <>
      <form onSubmit={formHandler}>
        <div className="well">
          <p>Polling Choice</p>
          <input type="radio" name="choice" id="true" value="true" onChange={changeHandler} />
          <label htmlFor="true">True</label>

          <input type="radio" name="choice" id="false" onChange={changeHandler} value="false" />
          <label htmlFor="false">False</label>


          <input type="text" id="name" onChange={changeHandler} name="name" />
          {/* <label for = "name">feew</label> */}

          <input type="date" name="date" onChange={changeHandler} />
          <button type="submit" className="btn btn-success">Submit</button>

        </div>
      </form>
    </>
  )
}


const Greeting = ({ message }) => {
  return <h1 className="greeting">{message}</h1>

}

const DisplayResult = () => {
  return (
    <>

      <p>Your response is: </p>
    Choice:
    Name:
    </>
  )
}

const App = () => {
  const [showForm, useShowForm] = useState(true)
  const [formData, setFormData] = useState({})

  // const completedForm = 
  // if (formData.choice === undefined || formData.name === undefined || formData.date === undefined) {
  //   const formCompleted = false
  // } else {
  //   const formCompleted = true
  // }

  // const formCompleted = formData.choice === undefined || formData.name === undefined || formData.date === undefined ? false : true




  console.log('reached the app! but let"s see if it prints every time you render babe')

  const SubmitHandler = (event) => {
    event.preventDefault()
    console.log('Form submitted!', formData)
    useShowForm(false)
    console.log('use show form is now false')
    axios.post('/api/vote', formData).then(function (response) {
      console.log('Form submitted successfully!')
    }).catch((err) => console.log('Error: ', err))


  }

  const changeHandler = (event) => {
    console.log(event)
    const eventName = event.target.name
    const eventValue = event.target.value
    const obj = { ...formData }
    obj[eventName] = eventValue
    console.log('change handle reached, obj is ', obj)
    setFormData(obj)


  }

  const form = showForm ? <Form formHandler={SubmitHandler} changeHandler={changeHandler} /> : ""

  // const form = <Form formHandler = {SubmitHandler} showForm = {showForm} />
  const greeting = !showForm ? <Greeting message="Successfully submitted your results" /> : ''
  const message = <DisplayResult />
  console.log('reached')



  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

      <h1 className="jumbotron">Polling App</h1>
      {form}
      {greeting}
      {/* { message } */}
    </>
  )
}

export default App;

