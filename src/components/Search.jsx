import React from 'react';
import './search.css'

import { Link } from 'react-router-dom';

function Search() {


  return (
    <div className='search'>
      <Link to='/search'> <ion-icon name="search-outline"></ion-icon> </Link>
      
    </div>
  );
}

export default Search;
