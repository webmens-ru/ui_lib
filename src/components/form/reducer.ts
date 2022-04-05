import { IFormReducerState, IFormReducerProps, IFormReducerAction } from "./types"

export const reducer = function(state: IFormReducerState, action: IFormReducerAction): IFormReducerState {
  switch (action.type) {
    case 'toggle_mode':
      const mode = state.mode === "edit" ? "view" : "edit";
      return { ...state, mode}
    case 'set_field':
      const setFieldValues = {...state.tempValues}
      setFieldValues[action.field.name] = action.field.value
      return { ...state, tempValues: setFieldValues }
    case 'set_errors':
      return { ...state, errors: action.errors }
    case 'set_form':
      const setFormValues = {...state.tempValues}
      setFormValues[action.form.field.name] = action.form.field.value
      return { ...state, tempValues: setFormValues, errors: action.form.errors  }
    case 'submit_form':
      return { ...state, values: state.tempValues, mode: "view" }
    case 'undo_changes':
      return { ...state, tempValues: state.values, mode: "view" }
    default: return state
  }
}

export const init = function({fields, mode}: IFormReducerProps): IFormReducerState {
  const values: {[key: string]: any} = {}
  
  fields.forEach(field => {
    switch (field.type) {
      case 'input':
        values[field.name] = field.value || ''
        break;
      case 'select':
        values[field.name] = field.value || []
        break;
      case 'date':
        values[field.name] = field.value || new Date().getTime()
        break;
      default:
        return
    }
  })

  return {
    values,
    tempValues: values,
    errors: [],
    mode,
    inited: true
  }
}
