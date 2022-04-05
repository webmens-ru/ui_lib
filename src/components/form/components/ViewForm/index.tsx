import { FormFieldsItem } from "../../types";
import React from "react";
import Field from "../field";
import { IViewFormProps } from "./types";
import { ViewFieldList, ViewFieldText } from "./styles";
import { IDataItem } from "../../../select/types";

export const ViewForm = ({
  form, 
  fields,
}: IViewFormProps) => {
  const FIELD_PLACEHOLDER = "Не задано";

  const getEntry = (field: FormFieldsItem): JSX.Element => {
    switch(field.type) {
      case 'input':
        const text = form.values[field.name] || FIELD_PLACEHOLDER as string;
        return <ViewFieldText children={text} hasValue={!!form.values[field.name]} />
      case 'select':
        const selectValues = form.values[field.name] as IDataItem[]

        if (!selectValues.length) {
          return <ViewFieldText children={FIELD_PLACEHOLDER} hasValue={false} />
        }
        else if (field.fieldParams?.multiple) {
          return (
            <ViewFieldList>
              {selectValues.map(item => {
                return (<li>
                  <ViewFieldText children={item.title} hasValue={!!item.title} />
                </li>)
              })}
            </ViewFieldList>
          )
        } else {
          if (typeof selectValues !== "undefined") {
            return <ViewFieldText children={selectValues[0]?.title || FIELD_PLACEHOLDER} hasValue={!!selectValues[0]?.title} />
          } else {
            return <ViewFieldText children={FIELD_PLACEHOLDER} hasValue={false} />
          }         
        }
      default: 
        return <span>Error!</span>
    }
  }

  return (
    <>
      {fields.map(field => {
        return (
          <Field label={field.label} children={getEntry(field)}></Field>
        )
      })}
    </>
  )
}