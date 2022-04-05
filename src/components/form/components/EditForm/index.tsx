import React from "react";
import { FormFieldsItem, FormFieldsItemShort } from "../../../form/types";
import { DatePicker } from "../../../date_picker";
import { Button } from "../../../button";
import { Checkbox } from "../../../checkbox";
import { CheckboxValue } from "../../../checkbox/types";
import { GlobalStyleForm, FormSubmitContainer } from "../../../form/styles";
import { validator } from "../../../form/utils/onBlurHandler";
import { Input } from "../../../input";
import { InputValue } from "../../../input/types";
import { Select } from "../../../select";
import { ISelectValue } from "../../../select/types";
import Field from "../field";
import { IEditFormProps } from "./types";

export const EditForm = ({
  form, 
  fields,
  dispatch, 
  validationRules = [], 
  onFieldChange = () => {}, 
  onSubmit = () => {}
}: IEditFormProps) => {
  const handleFieldChange = ({name, value}: FormFieldsItemShort) => {
    console.log('%cField has been changed:', 'font-size: 1.5rem;color: green');
    console.log(name, value);

    const errors = validateField({name, value})
    dispatch({type: 'set_form', form: { field: {name, value}, errors } })
    onFieldChange(name, value)
  }

  const handleFormSubmit = () => {
    if (!form.errors.length) {
      dispatch({type: "submit_form"})
      onSubmit(form.tempValues)
    }
  }

  const validateField = ({name, value}: FormFieldsItemShort) => {
    // TODO: Доделать
    const errors = validator(name, value, validationRules)

    if (!errors.length) {
      return form.errors.filter(item => item.field !== name)
    } else if (form.errors.some(item => item.field === errors[0].field)) {
      return form.errors.filter(item => item.field !== name).concat(errors)
    } else {
      return form.errors.concat(errors)
    }
  }

  const getEntry = (field: FormFieldsItem) => {
    switch (field.type) {
      case 'input':
        return (
          <Input 
            {...field} 
            {...field.fieldParams} 
            onChange={(value) => handleFieldChange({name: field.name, value})} 
            value={form.tempValues[field.name] as InputValue}
          />
        )
      case 'select':
        return (
          <Select
            {...field} 
            {...field.fieldParams} 
            onChange={(value) => handleFieldChange({name: field.name, value})}
            value={form.tempValues[field.name] as ISelectValue}
          />
        )
      case 'date':
        return (
          <DatePicker 
            {...field}
            {...field.fieldParams} 
            initialDateISO={form.tempValues[field.name] as string} 
            onSelect={(value) => handleFieldChange({name: field.name, value})} 
          />
        )
      case 'checkbox':
        return (
          <Checkbox 
            value={form.tempValues[field.name] as CheckboxValue}
            onCheck={() => handleFieldChange({name: field.name, value: !form.tempValues[field.name]})}
          />
        )
      // case 'radiobox':
      //   return (
      //     <RadioList 
      //       list={field.fieldParams.list} 
      //       name={field.name} 
      //       value={form.tempValues[field.name]}
      //       onRadioChange={(e) => handleFieldChange(field.name, e.target.value)}
      //     />
      //   )
      default:
        return <h1>Type Error!</h1>
    }
  }

  return (
    <>
      <GlobalStyleForm />

      {fields.map(field =>
        <Field name={field.name} key={field.name} label={field.label} errors={form.errors} >
          {getEntry(field)}
        </Field>
      )}

      <FormSubmitContainer>
        <Button color="success" buttonProps={{onClick: handleFormSubmit}} >Сохранить</Button>
      </FormSubmitContainer>
    </>
  )
}