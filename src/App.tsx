import React from 'react';
import ItemSearch from './containers/items/ItemSearch';
import { NavigationMenu } from './components/NavigationMenu';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <NavigationMenu 
        title='Plant Database' 
        items={[{
          label: 'Plant Search',
          link: '#'
        }, {
          line: true
        }, {
          label: 'Tag Maintenace',
          link: '#'
        }, {
          label: 'Group Maintenace',
          link: '#'
        }, {
          label: 'Category Maintenace',
          link: '#'
        }]}
      />
      <ItemSearch />
    </div>
  );
}

export default App;
