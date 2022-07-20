import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import EditorStyles from "./styles";
import { IRichTextProps } from "./types";

export const Richtext = ({
  onChange = () => {},
  value = ""
}: IRichTextProps) => {
  const handleRichtextChange = (_event: Event, editor: typeof ClassicEditor) => {
    onChange(editor.getData())
  }

  return (
    <>
      <EditorStyles />
      <CKEditor
        editor={ClassicEditor}
        config={{ toolbar: ['bold', '|', 'bulletedList', 'numberedList',  '|', 'list'] }}
        onChange={handleRichtextChange}
        data={value}
      />
    </>
  )
}
