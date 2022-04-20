import React, { useState } from 'react';
import { InputContainer, PrefixIconContainer, PostfixIconContainer } from './styles';
import { Icon } from '../icon';
import { IInputProps } from './types';

// width

export const Input = ({ 
  value = '', 
  placeholder = '', 
  readonly = false,
  iconPosition = "none",
  iconLeftName = "none",
  iconRightName = "none",
  nativeInputProps = {},
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}: IInputProps) => {
  const [input, setInput] = useState({ value, focus: false })

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setInput({ ...input, value })
    onChange(value)
  }

  const handleInputFocused = () => {
    setFocus(true)
    onFocus()
  }

  const handleInputBlured = () => {
    setFocus(false)
    onBlur()
  }

  const setFocus = (focus: boolean) => {
    setInput({...input, focus})
  }

  return (
    <InputContainer readonly={readonly} focus={input.focus}>
      {(iconPosition === "left" || iconPosition === "both") && (
        <PrefixIconContainer>
          <Icon iconName={iconLeftName} iconWidth="18px" />
        </PrefixIconContainer>
      )}
      <input 
        type="text"
        value={input.value}
        placeholder={placeholder}
        readOnly={readonly}
        onChange={handleInputChange}
        onFocus={handleInputFocused}
        onBlur={handleInputBlured}
        {...nativeInputProps}
      />
      {(iconPosition === "right" || iconPosition === "both") && (
        <PostfixIconContainer>
          <Icon iconName={iconRightName} iconWidth="18px" />
        </PostfixIconContainer>
      )}
    </InputContainer>
  )
}