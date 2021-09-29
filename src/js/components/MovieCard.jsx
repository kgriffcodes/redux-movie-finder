import React from 'react';
import MoreInfoBtn from './MoreInfoBtn';

export default function MovieCard() {
  return (
    <div className='movieCard flexRow p-4'>
      <div>movie img</div>
      <div>
        <div>movie title</div>
        <div>release year</div>
        <div>plot</div>
      </div>
      <MoreInfoBtn />
    </div>
  )
}
