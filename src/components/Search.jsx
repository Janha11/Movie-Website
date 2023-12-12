import React from 'react';

import { Link } from 'react-router-dom';

function Search() {


  return (
    <div>
      
      <Link to='./search'> <input type="text" placeholder='Search'  /> </Link>
      
    </div>
  );
}

export default Search;
