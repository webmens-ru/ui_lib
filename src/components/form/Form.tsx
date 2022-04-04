import React, { useReducer } from "react";
import { reducer, init } from "./reducer";
import { FormFieldsItem, FormFieldsItemShort, IFormProps } from "./types";
import { GlobalStyleForm, FormContainer, FormSubmitContainer } from "./styles";
import Field from "./components/field";
import { Button, DatePicker, Select, Input, Checkbox } from '../../index'
import { validator } from "./utils/onBlurHandler";
import { InputValue } from "components/input/types";
import { ISelectValue } from "components/select/types";
import { CheckboxValue } from "components/checkbox/types";

const Form = ({ 
  formConfig = {
    fields: [
      {type: 'input', name: 'test', value: '123'},
      {type: 'select', name: 'test1', value: '123'},
      {type: 'checkbox', name: 'test1', value: false},
    ]
  },
  mode = "edit",
  validationRules = [],
  onFieldChange = () => { },
  onSubmit = () => { }
}: IFormProps) => {
  const [form, dispatch] = useReducer(reducer, {fields: formConfig.fields, mode}, init)

  const handleFieldChange = ({name, value}: FormFieldsItemShort) => {
    console.log('%cField has been changed:', 'font-size: 1.5rem;color: green');
    console.log(name, value);

    const errors = validateField({name, value})
    dispatch({type: 'set_form', form: { field: {name, value}, errors } })
    onFieldChange(name, value)
  }

  const handleFormSubmit = () => {
    if (!form.errors.length) {
      onSubmit(form.values)
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
            value={form.values[field.name] as InputValue}
          />
        )
      case 'select':
        return (
          <Select
            {...field} 
            {...field.fieldParams} 
            onChange={(value) => handleFieldChange({name: field.name, value})}
            value={form.values[field.name] as ISelectValue}
          />
        )
      case 'date':
        return (
          <DatePicker 
            {...field}
            {...field.fieldParams} 
            initialValue={form.values[field.name] as string} 
            onSelect={(value) => handleFieldChange({name: field.name, value})} 
          />
        )
      case 'checkbox':
        return (
          <Checkbox 
            value={form.values[field.name] as CheckboxValue}
            onCheck={() => handleFieldChange({name: field.name, value: !form.values[field.name]})}
          />
        )
      // case 'radiobox':
      //   return (
      //     <RadioList 
      //       list={field.fieldParams.list} 
      //       name={field.name} 
      //       value={form.values[field.name]}
      //       onRadioChange={(e) => handleFieldChange(field.name, e.target.value)}
      //     />
      //   )
      default:
        return <h1>Type Error!</h1>
    }
  }

  if (form.inited) {
    return (
      <FormContainer >
        <GlobalStyleForm />
  
        {formConfig.fields.map(field =>
          <Field name={field.name} key={field.name} label={field.label} errors={form.errors} >
            {getEntry(field)}
          </Field>
        )}
  
        <FormSubmitContainer>
          <Button color="success" buttonProps={{onClick: handleFormSubmit}} >Сохранить</Button>
        </FormSubmitContainer>
      </FormContainer >
    )
  } else return <></>
}

export default Form
