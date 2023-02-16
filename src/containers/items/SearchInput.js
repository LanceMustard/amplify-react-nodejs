import React from 'react'
import './styles/search-input.css'

export const SearchInput = (props) => {
    const {
        onChange
    } = props

    function handleChange(value) {
        if (onChange) onChange(value.target.value)
    }

    return (
        <div>
            <label>{props.label}</label>
            <input 
                className="search-input" 
                type="text" 
                id="value" 
                name="value" 
                placeholder="Search..." 
                onChange={handleChange}
            />
            <button><i class="fa fa-search"></i></button>
        </div>
    )
}