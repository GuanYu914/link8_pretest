import styled from "styled-components"
import React from "react";

const FormContainer = styled.form`
  margin-top: 1em;
`

const FormField = styled.div`
  margin-bottom: 1em;

  & label {
    display: inline;
  }

  & input {
    margin-left: 1em;
    display: inline;
  }
`
const FormButton = styled.button`
  margin-top: 1em;
`;

export default function Form({info, handleOnChange, handleOnSubmit}) {

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      {info.map(el => (
        <React.Fragment key={el.id}>
          <FormField>
            <label>{el.fieldName}</label>
            <input type="text" key={el.id} value={el.fieldValue} onChange={(e) => {
            handleOnChange(el.id, e.target.value)
          }}/>
          </FormField>
        </React.Fragment>
      ))}
      <FormButton>送出</FormButton>
    </FormContainer>
  )
}