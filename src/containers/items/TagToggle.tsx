import React, { useState } from 'react';
import { Tag } from './models';
import './styles/toggle-button.css';

interface TagToggleProps {
  tag: Tag,
  onChange?: (state: boolean, value: Tag) => void,
  disableToggle?: boolean
}

export function TagToggle(props: TagToggleProps) {
  const {
    tag,
    onChange,
    disableToggle = false,
  } = props;
  const [selected, setSelected] = useState(false);
  const toggleClass = selected ? 'toggle-button-on' : 'toggle-button-off';

  function handleClick() {
    if (!disableToggle) {
      setSelected((value) => {
        if (onChange) onChange(!value, tag);
        return !value;
      });
    }
  }

  return (
    <button
      className={`toggle-button ${toggleClass}`}
      value={tag.name}
      onClick={handleClick}
    >
      {tag.name}
    </button>
  );
}
