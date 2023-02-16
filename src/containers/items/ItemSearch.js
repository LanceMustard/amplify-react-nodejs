import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { SearchInput } from './SearchInput'
import { TagsGroup } from './TagsGroup'
import { SearchResults } from './SearchResults'
import { SearchFooter } from './SearchFooter'
import { getGroups } from '../../api/tags/groups'
import './styles/item-search.css'

const mockGroups = [
    { name: "Types" }, 
    { name: "Features"},
]
const mockTags = [
    { group: "Types", name: "Tree" }, 
    { group: "Types", name: "Shrub" }, 
    { group: "Types", name: "Grass" }, 
    { group: "Types", name: "Herb" }, 
    { group: "Types", name: "Vegetable" }, 
    { group: "Features", name: "Soil Fertility" },
    { group: "Features", name: "Green Mulch" },
    { group: "Features", name: "Nitrogen" },
    { group: "Features", name: "Starter" },
]
const mockResults = [
    { name: "Oak Tree", tags: [{group: "Types", name: "Tree"}] }, 
    { name: "Arcacia", tags: [{group: "Types", name: "Tree"}, {group: "Types", name: "Starter"}] }, 
    { name: "Comfry", tags: [{group: "Types", name: "Herb"}, { group: "Features", name: "Green Mulch" }] },
    { name: "Rocket", tags: [{group: "Types", name: "Vegetable"}] }, 
]

export const ItemSearch = (props) => {
    const [groups, setGroups ] = useState(mockGroups)
    const [tags, setTags ] = useState(mockTags)
    const [searchResults, setSearchResults] = useState(mockResults)
    const [filter, setFilter] = useState({
        tags: [],
        search: "",
    })

    useEffect(() => {
        // const groups = getGroups()
        // setGroups(groups)
    }, [groups])

    function handeFilterSearchUpdate(search) {
        setFilter((prev) => { 
            const newValue = {
                tags: prev.tags,
                search: search
            }
            refrehsSearchResults(newValue)
            return newValue
        })
    }

    function handeFilterSearchUpdate(tags) {
        setFilter((prev) => { 
            const newValue = {
                tags: tags,
                search: prev.search
            }
            refrehsSearchResults(newValue)
            return newValue
        })
    }

    function refrehsSearchResults(filter) {
        const filterTags = filter.tags.map(x => x.name)
        setSearchResults(
            mockResults
                .filter(result => result.name.toLowerCase().includes(filter.search.toLowerCase()))
                .filter(result => filterTags
                    .every(tag => 
                        result.tags
                            .map(x => x.name)
                            .indexOf(tag) >= 0) 
                    || filterTags.length === 0)
        )Yeah,
    }

    return (
        <div className="item-search">
            <Header title="Plant Database" />
            <SearchInput 
                onChange={handeFilterSearchUpdate} 
            />
            <TagsGroup 
                tags={tags} 
                onChange={handeFilterSearchUpdate} 
            />
            <SearchResults
                results={searchResults} 
                columns={[{ label: "Plant" }, { label: "Tags" }]}
            />
            <SearchFooter />
        </div>

    )
}