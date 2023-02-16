import React, { useState } from 'react'
import { Tag } from './Tag'

export const TagsGroup = (props) => {
    const {
        onChange
    } = props
    const [selected, setSelected] = useState([])
    const groups = [...new Set(props.tags.map(tag => tag.group ))]

    function handleUpdateSelected(state, tag) {
        if (state) setSelected((prev) => {
            const updatedValue = [...prev, tag]
            if (onChange) onChange(updatedValue)
            return updatedValue
        })
        else setSelected((prev) => {
            const updatedValue = prev.filter(x => x.name !== tag.name)
            if (onChange) onChange(updatedValue)
            return updatedValue
        })
    }
    
    return (
        <div>
            { groups.map(group => 
                <div>
                    <div>
                        { props.tags
                            .filter(tag => tag.group === group)
                            .map(tag => 
                            <Tag 
                                tag={tag} 
                                onChange={handleUpdateSelected}
                            /> )}
                    </div>
                </div>
            )}
        </div>
    )
}