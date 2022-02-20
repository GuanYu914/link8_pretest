import { useState } from 'react'
import './App.css'
import Form from './component/form'

export default function App() {
  const [formData, setFormData] = useState([
    {
      id: 1,
      fieldName: '帳號',
      fieldValue: ""
    },
    {
      id: 2,
      fieldName: "密碼",
      fieldValue: ""
    }
  ]);

  function handleOnChange (fieldId, newValue) {
    setFormData(formData.map(el => ({
      id: el.id,
      fieldName: el.fieldName,
      fieldValue: el.id === fieldId ? newValue : el.fieldValue
    })))
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(formData)
    // 這裡放 validate logic
  }

  return (
    <Form info={formData} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
  )
}