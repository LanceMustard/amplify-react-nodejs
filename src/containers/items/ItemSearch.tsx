import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { SearchInput } from './SearchInput';
import { TagsGroup } from './TagsGroup';
import { SearchResults } from './SearchResults';
import { SearchFooter } from './SearchFooter';
// import { getGroups } from '../../api/tags/groups';
import './styles/item-search.css';
import { Tag, SearchResultItem } from './models';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


const mockGroups = [
  { name: 'Types' },
  { name: 'Features' },
];
const mockTags = [
  { group: 'Types', name: 'Tree' },
  { group: 'Types', name: 'Shrub' },
  { group: 'Types', name: 'Grass' },
  { group: 'Types', name: 'Herb' },
  { group: 'Types', name: 'Vegetable' },
  { group: 'Features', name: 'Soil Fertility' },
  { group: 'Features', name: 'Green Mulch' },
  { group: 'Features', name: 'Nitrogen' },
  { group: 'Features', name: 'Starter' },
];
const mockResults: SearchResultItem[] = [
  { name: 'Oak Tree', tags: [{ group: 'Types', name: 'Tree' }] },
  { name: 'Arcacia', tags: [{ group: 'Types', name: 'Tree' }, { group: 'Types', name: 'Starter' }] },
  { name: 'Comfry', tags: [{ group: 'Types', name: 'Herb' }, { group: 'Features', name: 'Green Mulch' }] },
  { name: 'Rocket', tags: [{ group: 'Types', name: 'Vegetable' }] },
];

interface ItemFilter {
  tags: Tag[],
  search: string
}

function ItemSearch() {
  const [groups] = useState(mockGroups);
  const [tags] = useState(mockTags);
  const [searchResults, setSearchResults] = useState(mockResults);
  const [filter, setFilter] = useState<ItemFilter>({
    tags: [],
    search: '',
  });

  function handeFilterSearchByName(search: string) {
    setFilter((prev) => {
      const newValue = {
        tags: prev.tags,
        search,
      };
      refrehsSearchResults(newValue);
      return newValue;
    });
  };

  function handeFilterSearchByTag(tags: Tag[]) {
    setFilter((prev) => {
      const newValue = {
        tags,
        search: prev.search,
      };
      refrehsSearchResults(newValue);
      return newValue;
    });
  };

  function refrehsSearchResults(filter: ItemFilter) {
    setSearchResults(
      mockResults
        .filter((result) => isSearchTextInResultName(result, filter.search))
        .filter((result) => isResultInSelectedTags(result, filter.tags.map((x) => x.name)))
    );
  };

  function isResultInSelectedTags(result: SearchResultItem, selectedTags: string[]): boolean {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((selectedTag) => result.tags.some(tag =>  tag.name === selectedTag));
  };

  function isSearchTextInResultName(result: SearchResultItem, searchText: string): boolean {
    return result.name.toLowerCase().includes(searchText.toLowerCase())
  };

  return (
    <div className="item-search">
      <Header title="Plant Database" />
      <SearchInput
        onChange={handeFilterSearchByName}
      />
      <TagsGroup
        tags={tags}
        onChange={handeFilterSearchByTag}
      />
      <SearchResults
        results={searchResults}
        columns={[{ label: 'Plant' }, { label: 'Tags' }]}
      />
      <SearchFooter />
    </div>

  );
}

// export default withAuthenticator(ItemSearch);
export default ItemSearch;