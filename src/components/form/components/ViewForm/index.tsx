import { FormFieldsItem } from "../../types";
import React from "react";
import Field from "../field";
import { IViewFormProps } from "./types";
import { IDataItem } from "../../../select/types";
import { IFileInputItem } from "../../../file_input/types";
import { FileVF, InputVF, MultifieldVF, RichtextVF, SelectVF } from "./entries";
import { MultifieldItem } from "../../../multifield/types";

export const ViewForm = ({
  form,
  fields,
}: IViewFormProps) => {

  const getEntry = (field: FormFieldsItem): JSX.Element => {
    switch (field.type) {
      case 'input':
        return <InputVF value={form.values[field.name] as string} />
      case 'richtext':
        return <RichtextVF value={form.values[field.name] as string} />
      case 'select':
        return <SelectVF value={form.values[field.name] as IDataItem|IDataItem[]} fieldParams={field.fieldParams} />
      case 'multifield':
        return <MultifieldVF value={form.values[field.name] as unknown as Array<string|MultifieldItem>} fieldParams={field.fieldParams} />
      case 'file':
        return <FileVF value={form.values[field.name] as IFileInputItem[]} />
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
