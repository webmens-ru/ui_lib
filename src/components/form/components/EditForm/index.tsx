import React from "react";
import Field from "../field";
import Input from "../../../input";
import Select from "../../../select";
import FileInput from "../../../file_input";
import Multifield from "../../../multifield";
import Richtext from "../../../richtext";
import { FormFieldsItem, FormFieldsItemShort } from "../../../form/types";
import { DatePicker } from "../../../date_picker";
import { Checkbox } from "../../../checkbox";
import { CheckboxValue } from "../../../checkbox/types";
import { validator } from "../../utils/validator";
import { InputValue } from "../../../input/types";
import { SelectPropsValue } from "../../../select/types";
import { IEditFormProps } from "./types";
import { IFileInputItem } from "../../../file_input/types";
import { MultifieldItem, MultifieldItemComboValue } from "../../../multifield/types";

export const EditForm = ({
  form,
  fields,
  dispatch,
  validationRules = [],
}: IEditFormProps) => {
  const handleFieldChange = (field: FormFieldsItem, value: any) => {    
    let parsedValue = value
    
    switch (field.type) {
      case "multifield":
        parsedValue = (value as MultifieldItem[]).map(item => typeof item.value === 'object'
          ? (item.value as MultifieldItemComboValue).text
          : item.value
        )
        break;
      case "richtext":
        parsedValue = (value as string).replace(/<\/?[^>]+(>|$)/g, "").replaceAll('&nbsp;', ' ')
        break;
    }

    const errors = validateField({ name: field.name, value: parsedValue })
    dispatch({ type: 'set_form', form: { field: { name: field.name, value }, errors } })
  }

  const validateField = ({ name, value }: FormFieldsItemShort) => {    
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
    const formValue = form.tempValues[field.name];

    switch (field.type) {
      case 'input':
        return (
          <Input
            {...field}
            {...field.fieldParams}
            onChange={(value) => handleFieldChange(field, value)}
            value={formValue as InputValue}
          />
        )
      case 'select':
        return (
          <Select
            {...field}
            {...field.fieldParams}
            onChange={(value) => handleFieldChange(field, value)}
            value={formValue as SelectPropsValue}
          />
        )
      case 'date':
        return (
          <DatePicker
            {...field}
            {...field.fieldParams}
            initialDateISO={formValue as string}
            onSelect={(value) => handleFieldChange(field, value)}
          />
        )
      case 'checkbox':
        return (
          <Checkbox
            value={formValue as CheckboxValue}
            onCheck={(value) => handleFieldChange(field, value)}
          />
        )
      case 'file':
        return (
          <FileInput
            {...field.fieldParams}
            defaultFileList={formValue as IFileInputItem[]}
            onChange={(file) => handleFieldChange(field, file)}
          />
        )
      case 'multifield':
        return (
          <Multifield
            {...field.fieldParams}
            fields={formValue as unknown as MultifieldItem[]}
            onChange={(values) => handleFieldChange(field, values)}
          />
        )
      case 'richtext':
        return (
          <Richtext
            {...field.fieldParams}
            value={formValue as string}
            onChange={(value) => handleFieldChange(field, value)}
          />
        )
      default:
        return <h1>Type Error!</h1>
    }
  }

  return (
    <>
      {fields.map(field =>
        <Field name={field.name} key={field.name} label={field.label} labelSuffix={field.labelSuffix} errors={form.errors} >
          {getEntry(field)}
        </Field>
      )}
    </>
  )
}