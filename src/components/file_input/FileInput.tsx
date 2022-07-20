import React, { useRef, useReducer, useEffect } from "react";
import { FileInputContainer, FileItem, FileLink, FileRemove, FileSize } from "./styles";
import { IFileInputItem, IFileInputProps } from "./types";
import { Button } from "../button";
import { deleteFileQuery, getFileSize, uploadFileQuery, validateFile } from "./utils";
import { Icon } from "../icon";
import { init, reducer } from "./reducer";

export const FileInput = ({
  defaultFileList = [],
  maxLimit = 1,
  extensions = [],
  uploadUrl = "",
  deleteUrl = "",
  onChange = () => { },
  queryParams = {},
  deleteQueryParams = {}
}: IFileInputProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(reducer, {
    defaultFileList,
    maxLimit,
    extensions
  }, init)

  useEffect(() => {
    if (state.isShowMessage) {
      alert(state.message)
      dispatch({type: "HIDE_MSG"})
    }
  }, [state.isShowMessage, state.message])

  useEffect(() => {
    onChange(state.defaultFileList)
  }, [state.defaultFileList])

  const uploadButtonText = (maxLimit === 1 && state.defaultFileList.length < 1) || (maxLimit > 1 && state.defaultFileList.length < maxLimit) || (maxLimit > 1 && state.defaultFileList.length >= 1) ? "Добавить файл" : "Заменить файл"

  const handleStartUpload = () => {
    if (fileInput.current) {
      fileInput.current.focus()
      fileInput.current.click()
    }
  }

  const handleFileUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(evt.target.files as FileList)
    if (files.length) {
      const file = files[0]

      const validationResult = validateFile(file, state.defaultFileList, maxLimit, extensions)
      if (validationResult === true) {
        uploadFileQuery(file, uploadUrl, queryParams).then(async response => {
          if (response.ok) {
            const data = await response.json()
            dispatch({ type: "SET_FILE", payload: { file, filelink: data.filelink } })
          }
        }).catch(response => {
          console.error(response);
        })
      } else {
        dispatch({type: "SHOW_MSG", payload: {message: validationResult.message}})
      }
    }
  }

  const handleDeleteFile = (file: IFileInputItem) => {
    deleteFileQuery(deleteUrl, deleteQueryParams).then(_response => {
      dispatch({ type: "REMOVE_FILE", payload: { file } })
    }).catch(response => {
      console.error(response);
    })
  }

  return (
    <FileInputContainer>
      <input type="file" ref={fileInput} onChange={handleFileUpload} />
      {state.defaultFileList.map((file, index) => (
        <FileItem key={index}>
          <FileLink href={file.fileLink} children={file.fileName} target="_blank" />
          <FileSize children={getFileSize(file)} />
          <FileRemove onClick={() => handleDeleteFile(file)}>
            <Icon iconWidth="16px" iconName="close" />
          </FileRemove>
        </FileItem>
      ))}
      <Button color="gray" children={uploadButtonText} onClick={handleStartUpload} />
    </FileInputContainer>
  )
}
