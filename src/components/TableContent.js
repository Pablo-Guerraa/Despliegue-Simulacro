import axios from 'axios'
import React from 'react'
import { url } from '../helpers/url'
import { StyledButtonDelete, StyledImg, StyledTable, StyledTd, StyledTdImg, StyledTr } from '../styled/StyledTable'

export default function TableContent(props) {

  const deletePet = async(idDog) => {
    const resp = await axios.delete(url + idDog)
    
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del perro</th>
          <th>Raza</th>
          <th>Direccion a recoger</th>
          <th>ilustracion</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {
          props.dataPets.map((e, i) => {
            const {id, name, raza, direction, form} = e;
            return(
              <StyledTr key={id}>
                <StyledTd>{i+1}</StyledTd>
                <StyledTd>{name}</StyledTd>
                <StyledTd>{raza}</StyledTd>
                <StyledTd>{direction}</StyledTd>
                <StyledTdImg> <StyledImg src={form} alt={raza} /></StyledTdImg>
                <StyledTd>
                  <StyledButtonDelete onClick={()=>deletePet(id)}>Eliminar</StyledButtonDelete>
                </StyledTd>
              </StyledTr>
            )
          })
        }
      </tbody>
    </StyledTable>
  )
}
