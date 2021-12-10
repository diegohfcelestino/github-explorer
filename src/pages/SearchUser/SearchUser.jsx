import React, { useState } from 'react';
import { NavBar } from '../../components';
import { ListRepositoryUser } from '../../components/Search/ListRepositoryUser';
import { Search } from '../../components/Search/Search';

export function SearchUser() {
  const [userName, setUserName] = useState('');

  return (
    <div className='contentWrapper'>
      <NavBar />
      <Search userName={userName} setUserName={setUserName} />
      <ListRepositoryUser userName={userName} />
    </div>
  );
}
