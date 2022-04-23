import React from 'react'
import { StyledForm, StyledInput } from '../styled/StyledFormContent'

export default function FormContent(props) {
  return (
    <StyledForm>

        <label htmlFor="">Nombre de la mascota</label>
        <StyledInput name="name" type="text" onChange={props.onChangeForm}/>

        <label htmlFor="">Raza de la mascota</label>
        <StyledInput name='raza' type="text" onChange={props.onChangeForm} />

        <label htmlFor="">Direccion a recoger mascota</label>
        <StyledInput name='direction' type="text" onChange={props.onChangeForm} />

        <label htmlFor="">Url de la imagen de la mascota</label>
        <StyledInput name='form' type="text" onChange={props.onChangeForm} />

    </StyledForm>
  )
}
