import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispach = useDispatch()
    const navigate =  useNavigate()

   const  handleSubmit = (e) => {
    e.preventDefault()
    dispach(setTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')
   }
  return (
    <div>
        <img src="/Home/pokedex.png" alt="" />
        <h1>Hi Trainer !!</h1>
        <p>Give me your name to start</p>
        <form action="" onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button>Start</button>
        </form>

    </div>
  )
}

export default Home