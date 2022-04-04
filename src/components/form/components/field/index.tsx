import React from "react";
import { IFieldProps } from "./types.js";
import { FieldContainer, FieldLabel, ValidateMessage } from "./styles";

const Field = ({label, errors, name, children}: IFieldProps) => {

  return (
    <FieldContainer>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {errors.length > 0 && errors
        .filter(error => error.field === name)
        .map((error, index) => (<ValidateMessage key={index}>{error.message}</ValidateMessage>) )}
    </FieldContainer>
  )
}

export default Field
