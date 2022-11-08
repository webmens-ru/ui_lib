import React, { useEffect, useReducer } from "react";
import { Button } from "../button";
import { EditForm } from "./components/EditForm";
import { ViewForm } from "./components/ViewForm";
import { init, reducer } from "./reducer";
import { FormButtonsContainer, FormContainer, FormHeader, FormInnerContainer, FormModeToggler, FormTitle, GlobalStyleForm } from "./styles";
import { IFormProps } from "./types";
import { prepareFormData } from "./utils/parse";

export const Form = ({
  fields = [],
  values = {},
  mode = "edit",
  viewType = "full",
  formTitle = "Форма",
  width = "100%",
  height = "100vh",
  canToggleMode = true,
  validationRules = [],
  onFieldChange = () => { },
  onSubmit = () => Promise.resolve(),
  onAfterSubmit = () => { },
  onInit = () => { },
  onEditEnd = () => { }
}: IFormProps) => {
  const [form, dispatch] = useReducer(reducer, {
    fields,
    values,
    validationRules,
    mode,
    onFieldChange
  }, init)

  useEffect(() => {
    onInit(form.values)
  }, [form.inited])

  const toggleFormMode = () => {
    if (form.mode === 'edit') {
      const resp = window.confirm('Вы уверены, что хотите отменить изменения?')
      if (resp) {
        dispatch({ type: "undo_changes" })
        onEditEnd()
        return
      }
    } else {
      dispatch({ type: 'toggle_mode' })
    }
  }

  const handleFormSubmit = () => {
    if (!form.errors.length) {
      onSubmit(prepareFormData(form)).then(response => {
        dispatch({ type: "submit_form" })
        onAfterSubmit(response)
      }).catch(({ response }) => {
        console.error(response);
        if (response.status !== 500) {
          dispatch({ type: "set_errors", errors: response.data })
        }
      })
    }
  }

  if (!form.inited) {
    return <></>
  }

  if (viewType === "full") {
    return (
      <FormContainer mode={form.mode} viewType={viewType} width={width} height={height} >
        <GlobalStyleForm />
        <FormHeader>
          <FormTitle children={formTitle} />
          {canToggleMode &&
            <FormModeToggler
              children={form.mode === 'view' ? "Изменить" : "Отменить"}
              onClick={toggleFormMode}
            />
          }
        </FormHeader>
        <FormInnerContainer mode={form.mode} viewType={viewType} >
          {form.mode === 'edit'
            ? <EditForm
              form={form}
              dispatch={dispatch}
              fields={fields}
              validationRules={form.validationRules}
              onFieldChange={onFieldChange}
            />
            : <ViewForm
              form={form}
              fields={fields}
            />
          }
        </FormInnerContainer>
        {form.mode === "edit" && (
          <FormButtonsContainer>
            <Button color="success" children="Сохранить" buttonProps={{ onClick: handleFormSubmit }} />
            <Button color="gray" children="Отменить" buttonProps={{ onClick: toggleFormMode }} />
          </FormButtonsContainer>
        )}

      </FormContainer>
    )
  } else {
    return (
      <>
        <GlobalStyleForm />
        <FormInnerContainer mode="edit" viewType={viewType} >
          <EditForm
            form={form}
            dispatch={dispatch}
            fields={fields}
            validationRules={form.validationRules}
            onFieldChange={onFieldChange}
          />
        </FormInnerContainer>
      </>
    )
  }
}
