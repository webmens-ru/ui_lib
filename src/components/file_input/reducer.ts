import { createFileFromInstance, getFileExtension, isAllowedExtension } from './utils';
import { IFileInputState, TFileInputReducerProps, TFileInputReducerAction } from './types';

export const reducer = (state: IFileInputState, action: TFileInputReducerAction): IFileInputState => {
  switch (action.type) {
    case "SET_FILE":
      const file = createFileFromInstance(action.payload.file, action.payload.filelink)
      const defaultFileList = (state.defaultFileList.length === 1 && state.maxLimit === 1)
        ? [file]
        : state.defaultFileList.concat([file])

      if (state.maxLimit !== 1 && state.defaultFileList.length >= state.maxLimit) {
        return { ...state, isShowMessage: true, message: `Достигнут предел в ${state.maxLimit} файлов` }
      }

      if (state.needCheckExtension) {
        const extension = getFileExtension(file)
        if (extension && isAllowedExtension(extension, state.extensions)) {
          return { ...state, defaultFileList }
        } else return { ...state, isShowMessage: true, message: 'Недопустимое расширение файла' }
      }

      return { ...state, defaultFileList }
    case "REMOVE_FILE":
      return { ...state, defaultFileList: state.defaultFileList.filter(file => file !== action.payload.file) }
    case "SHOW_MSG":
      return { ...state, isShowMessage: true, message: action.payload.message }
    case "HIDE_MSG":
      return { ...state, isShowMessage: false, message: "" }
    default: return state
  }
}

export const init = (props: TFileInputReducerProps): IFileInputState => {
  const defaultFileList = Array.isArray(props.defaultFileList)
    ? props.defaultFileList
    : !!props.defaultFileList
    ? [props.defaultFileList]
    : []

  return {
    ...props,
    defaultFileList,
    needCheckExtension: props.extensions.length > 0,
    isShowMessage: false,
    message: ''
  }
}
