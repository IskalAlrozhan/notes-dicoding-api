import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ keyChange, keyword }) => {
  return (
    <div className='search'>
        <MdSearch 
            className='search-icon' 
            size='1.3em' 
        />
        <input
            onChange={(e) => keyChange(e.target.value)}
            type='text'
            placeholder='ketik buat cari bro...' 
            value={keyword}
        />
    </div>
  )
}

export default Search