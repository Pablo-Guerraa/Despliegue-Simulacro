import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacto from './Contacto'
import Inicio from './Inicio'
import Perros from './ListaPerros'

export default function Main() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Perros' element={<Perros/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
  )
}
