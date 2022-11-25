import React from "react";
import { IFileInputItem } from "../../../file_input/types";
import { MultifieldItem } from "../../../multifield/types";
import { IDataItem } from "../../../select/types";
import { FormFieldsItem } from "../../types";
import Field from "../field";
import { DateVF, FileVF, InputVF, MultifieldVF, SelectVF } from "./entries";
import { IViewFormProps } from "./types";

export const ViewForm = ({
  form,
  fields,
}: IViewFormProps) => {

  const getEntry = (field: FormFieldsItem): JSX.Element => {
    switch (field.type) {
      case 'input':
        return <InputVF value={form.values[field.name] as string} />
      case 'select':
        return <SelectVF value={form.values[field.name] as IDataItem|IDataItem[]} fieldParams={field.fieldParams} />
      case 'multifield':
        return <MultifieldVF value={form.values[field.name] as unknown as Array<string|MultifieldItem>} fieldParams={field.fieldParams} />
      case 'file':
        return <FileVF value={form.values[field.name] as IFileInputItem[]} />
      case 'date':
        return <DateVF value={form.values[field.name] as string} />
      default:
        return <span>Error!</span>
    }
  }

  return (
    <>
      {fields.map(field => {
        return (
          <Field key={field.name} label={field.label} children={getEntry(field)} />
        )
      })}
    </>
  )
}
