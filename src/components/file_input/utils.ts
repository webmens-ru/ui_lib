import { headersGeneric } from './../../api';
import { IFileInputItem, FileInputQueryParams } from './types';

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export const fromBase64 = (base64: string, filename: string): File => {
  var arr = base64.split(',')
  var mimeReg = arr[0].match(/:(.*?);/)
  if (!mimeReg) throw new Error('Parameter is not a base64 string')

  var mime = mimeReg[1];
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const getFileSize = (file: IFileInputItem, round: 'kb' | 'mb' = 'mb', digits: number = 2) => {
  if (!file.size) return

  const bytes = typeof file.size === "string" ? parseInt(file.size) : file.size;

  switch (round) {
    case 'kb': return `${(bytes / 1024).toFixed(digits)} KB`;
    case 'mb': return `${(bytes / 1024 / 1024).toFixed(digits)} MB`
    default: return bytes
  }
}

export const getFileExtension = (file: IFileInputItem | File): string | null => {
  const filename = file instanceof File ? file.name : file.fileName
  if (!filename) return null

  const regexArr = filename.match(/\.(.+)$/gm);
  return regexArr ? regexArr[0].slice(1) : null;
}

export const isAllowedExtension = (ext: string, extensions: string[]): boolean => {
  return extensions.some((allowedExt) => allowedExt === ext)
}

export const createFileFromInstance = (file: File, fileLink: string): IFileInputItem => {
  return {
    fileName: file.name,
    size: file.size,
    fileLink,
  }
}

export const validateFile = (newFile: File, files: IFileInputItem[], maxLimit: number, extensions: string[]) => {
  if (maxLimit !== 1 && files.length >= maxLimit) {
    return { isShowMessage: true, message: `Достигнут предел в ${maxLimit} файлов` }
  }

  if (extensions.length > 0) {
    const extension = getFileExtension(newFile)
    if (extension && isAllowedExtension(extension, extensions)) {
      return true
    } else return { isShowMessage: true, message: `Недопустимое расширение файла - ${extension}. Допустимые расширения: ${extensions.join(', ')}` }
  }

  return true
}

export const uploadFileQuery = (file: File, url: string, queryParams: FileInputQueryParams = {}, headers = headersGeneric) => {
  const formData = new FormData()
  Object.entries(queryParams).forEach(([key, value]) => {
    formData.set(key, value)
  })
  formData.set('file', file)

  return fetch(url, {
    headers: {
      Authorization: headers.Authorization
    },
    method: "POST",
    body: formData
  })
}

export const deleteFileQuery = (url: string, queryParams: FileInputQueryParams = {}, headers = headersGeneric) => {
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(queryParams)
  })
}
