import React, { useReducer } from "react";
import { reducer, init } from "./reducer";
import { IFormProps } from "./types";
import { EditForm } from "./components/EditForm";
import { ViewForm } from "./components/ViewForm";
import { FormButtonsContainer, FormContainer, FormHeader, FormModeToggler, FormTitle } from "./styles";
import { Button } from "../button";

const Form = ({
  fields = [
    { type: 'input', name: 'test', label: "Текстовое поле", value: '123' },
    { type: 'select', name: 'test1', label: "Выпадающий список", value: '123' },
    { type: 'checkbox', name: 'test1', label: "Чекбокс", value: false },
  ],
  mode = "edit",
  formTitle = "Форма",
  canToggleMode = true,
  validationRules = [],
  onFieldChange = () => { },
  onSubmit = () => { }
}: IFormProps) => {
  const [form, dispatch] = useReducer(reducer, { fields, mode }, init)

  const toggleFormMode = () => {
    if (form.mode === 'edit') {
      const resp = window.confirm('Вы уверены, что хотите отменить изменения?')
      if (resp) {
        dispatch({ type: "undo_changes" })
        return
      }
    }
  }

  const handleFormSubmit = () => {
    if (!form.errors.length) {
      dispatch({ type: "submit_form" })
      onSubmit(form.tempValues)
    }
  }

  if (form.inited) {
    return (
      <FormContainer mode={form.mode}>
        <FormHeader>
          <FormTitle children={formTitle} />
          {canToggleMode &&
            <FormModeToggler
              children={form.mode === 'view' ? "Изменить" : "Отменить"}
              onClick={toggleFormMode}
            />
          }
        </FormHeader>
        {form.mode === 'edit'
          ? <EditForm
            form={form}
            dispatch={dispatch}
            fields={fields}
            validationRules={validationRules}
            onFieldChange={onFieldChange}
            onSubmit={onSubmit}
          />
          : <ViewForm
            form={form}
            fields={fields}
          />
        }

        {form.mode === "edit" && (
          <FormButtonsContainer>
            <Button color="success" children="Сохранить" buttonProps={{ onClick: handleFormSubmit }} />
          </FormButtonsContainer>
        )}

      </FormContainer>
    )
  } else return <></>
}

export default Form
