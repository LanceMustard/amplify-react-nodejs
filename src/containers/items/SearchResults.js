import React from 'react'
import { Tag } from './Tag'

export const SearchResults = (props) => {
    const {
        results
    } = props
    const columns = props.columns ? props.columns : results.length > 0 ? deriveColumnsFromResult(results[0]) : []
    const noResults = columns.length === 0

    function deriveColumnsFromResult(result) {
        let columns = []
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                columns.push({ label: key })
            }
        }
        return columns
    }

    function renderTags(tags) {
        // const tagNames = tags.map(tag => tag.name)
        // return tagNames.join(", ")
        return tags.map(tag => {
            return (<Tag tag={tag} disableToggle={true} />)
        })
    }

    function renderNoResults() {
        return <h3>No matching results found</h3>
    }

    if (noResults) return renderNoResults()

    return (
        <div>
            <table className="results-table">
                <thead>
                    <tr>
                        { columns.map((column, i) => <th key={i}>{column.label}</th> )}
                    </tr>
                </thead>
                <tbody>
                    { props.results.map((result, i) => 
                        <tr>
                            <td key={i}>{result.name}</td>
                            <td>{ renderTags(result.tags) } </td>
                        </tr> 
                    )}
                </tbody>
            </table>
        </div>
    )
}