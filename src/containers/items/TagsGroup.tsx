import React, { useState } from 'react';
import { TagToggle } from './TagToggle';
import { Tag } from './models';

interface TagGroupProps {
  onChange: (tags: Tag[]) => void,
  tags: Tag[]
}

export function TagsGroup(props: TagGroupProps) {
  const {
    onChange,
    tags
  } = props;
  const [selected, setSelected] = useState<Tag[]>([]);
  const tagsNames = tags.map((tag: Tag) => tag.group);
  const groups = [...new Set(tagsNames)];

  function handleUpdateSelected(state: boolean, tag: Tag) {
    if (state) {
      setSelected((prev) => {
        const updatedValue = [...prev, tag];
        if (onChange) onChange(updatedValue);
        return updatedValue;
      });
    } else {
      setSelected((prev) => {
        const updatedValue = prev.filter((x: Tag) => x.name !== tag.name);
        if (onChange) onChange(updatedValue);
        return updatedValue;
      });
    }
  }

  return (
    <div>
      { groups.map((group, i) => (
        <div key={i}>
          <div>
            { props.tags
              .filter((tag) => tag.group === group)
              .map((tag, j) => (
                <TagToggle
                  key={j}
                  tag={tag}
                  onChange={handleUpdateSelected}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
