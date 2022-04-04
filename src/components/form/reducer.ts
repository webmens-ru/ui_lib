import { IFormReducerState, IFormReducerProps, IFormReducerAction } from "./types"

export const reducer = function(state: IFormReducerState, action: IFormReducerAction): IFormReducerState {
  switch (action.type) {
    case 'set_field':
      const setFieldValues = {...state.values}
      setFieldValues[action.field.name] = action.field.value
      return { ...state, values: setFieldValues }
    case 'set_errors':
      return { ...state, errors: action.errors }
    case 'set_form':
      const setFormValues = {...state.values}
      setFormValues[action.form.field.name] = action.form.field.value
      return { ...state, values: setFormValues, errors: action.form.errors  }
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
    errors: [],
    mode,
    inited: true
  }
}
