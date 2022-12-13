import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import Card from "./Card";


const Search = () => {
    const [searchItem,setSearchItem]=useState("");
    const searchBtn=(e)=>{
        e.preventDefault();

    }
  return (
    <div>
        <div className='parentSearch'>
        <form >
                <FaSearch className='searchIcon'/>
                <input className='form'
                    type="text"
                    onChange={(e)=>{setSearchItem(e.target.value)}}
                    value={searchItem}
                     />
                     <button className='check' onClick={searchBtn}>Check</button>
        </form>     
        </div>
        <Card />
    </div>
  )
}

export default Search