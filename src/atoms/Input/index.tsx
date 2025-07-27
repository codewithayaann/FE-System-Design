import React from 'react';
import './style.css';

type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  name,
}) => {
  return (
    <input
      className="clean-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
    />
  );
};

export default Input;
