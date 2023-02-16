import React, { useState } from 'react'
import './styles/toggle-button.css'

export const Tag = (props) => {
    const {
        tag,
        onChange,
        disableToggle = false,
    } = props
    const [selected, setSelected] = useState(false)
    const toggleClass = selected ? 'toggle-button-on' : 'toggle-button-off'

    function handleClick(e) {
        if (!disableToggle) {
            setSelected((value) => {
                if (onChange) onChange(!value, tag)
                return !value
            })
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
    )
}