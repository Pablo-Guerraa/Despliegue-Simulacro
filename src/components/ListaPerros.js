import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url';
import { StyledButtonAdd } from '../styled/StyledPerros'
import FormContent from './FormContent'
import TableContent from './TableContent'


export default function Perros() {
  const [dog, setDog] = useState([]);
  const [ newPet, setNewPet ] = useState({
    name: "",
    raza: "",
    direction: "",
    form: ""
  });
  
  useEffect(() => {   
    getData()
  }, [])

  const getData = async () => {
    const resp = await axios.get(url);
    const data = resp.data;
    setDog(data)
  }

  const onchangeForm = (e) => {
    const newValue = e.target.value;
    const nameInput = e.target.name;
    setNewPet({
      ...newPet,
      [nameInput]: newValue,
    })
  }


  const newPost = async() => {
      const resp = await axios.post(url, newPet);
      console.log(resp)
      getData()
  }
  return (
    <div>
      <TableContent dataPets={dog} actualizarPag={getData}/>
      <StyledButtonAdd onClick={() => newPost()}>
        Agrega tu mascota a la lista de paseo
      </StyledButtonAdd>
      <FormContent onChangeForm={onchangeForm}/>
    </div>
  )
}
