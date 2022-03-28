import React, { StrictMode, useMemo } from 'react';
import { FieldProps } from '.';
import { DateField } from './field_types/date';

export function Field({ type, variant, onSelect, ...props }: FieldProps) {
  const switchField = useMemo(() => {
    switch (type) {
      case 'date':
        return (
          <DateField
            variant={variant}
            type={type}
            onSelect={onSelect}
            {...props}
          />
        );
      default:
        return <p>type error</p>;
    }
  }, [onSelect, props, type, variant]);

  return <StrictMode>{switchField}</StrictMode>;
}
