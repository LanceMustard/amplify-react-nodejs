import React from 'react';
import { TagToggle } from './TagToggle';
import { SearchResultItem, Column, Tag } from './models'

interface SearchResultsProps {
  results: SearchResultItem[],
  columns: Column[]
}

export function SearchResults(props: SearchResultsProps) {
  const {
    results,
    columns
  } = props;
  const noResults = results.length === 0;

  // function deriveColumnsFromResult(result) {
  //   const cols = columns ? columns : results.length > 0 ? deriveColumnsFromResult(results[0]) : [];
  //   const derived = [];
  //   for (const key in result) {
  //     if (result.hasOwnProperty(key)) {
  //       columns.push({ label: key });
  //     }
  //   }
  //   return columns;
  // }

  function renderTags(tags: Tag[]) {
    // const tagNames = tags.map(tag => tag.name)
    // return tagNames.join(", ")
    return tags.map((tag, i) => (<TagToggle key={i} tag={tag} disableToggle />));
  }

  function renderNoResults() {
    return <h3>No matching results found</h3>;
  }

  if (noResults) return renderNoResults();

  return (
    <div>
      <table className="results-table">
        <thead>
          <tr>
            { columns.map((column, i) => <th key={i}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          { results.map((result, i) => (
            <tr key={i}>
              <td>{result.name}</td>
              <td>
                { renderTags(result.tags) }
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
