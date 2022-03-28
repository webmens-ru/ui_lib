import React, { useState } from 'react';
import { InputContainer, PrefixIconContainer, PostfixIconContainer } from './styles';
import { Icon } from '../icon';
import { IInputProps } from './types';

export const Input = ({ 
  value = '', 
  placeholder = '', 
  readonly = false,
  iconPosition = "none",
  iconLeftName,
  iconRightName,
  onChange = () => {},
}: IInputProps) => {
  const [input, setInput] = useState({ value })

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setInput({ ...input, value })
    onChange(value)
  }

  return (
    <InputContainer readonly={readonly}>
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
      />
      {(iconPosition === "right" || iconPosition === "both") && (
        <PostfixIconContainer>
          <Icon iconName={iconRightName} iconWidth="18px" />
        </PostfixIconContainer>
      )}
    </InputContainer>
  )
}