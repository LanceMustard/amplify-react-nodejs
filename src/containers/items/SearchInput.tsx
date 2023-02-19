import React from 'react';
import './styles/search-input.css';

interface SearchInputProps {
  label?: string,
  onChange: (value: string) => void
}

export function SearchInput(props: SearchInputProps) {
  const {
    label,
    onChange,
  } = props;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (onChange) onChange(e.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input
        className="search-input"
        type="text"
        id="value"
        name="value"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button className='search-button'><i className="fa fa-search" /></button>
    </div>
  );
}
