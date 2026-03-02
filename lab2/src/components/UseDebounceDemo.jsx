import { useState,useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

function DebounceDemo(){

  const [ search, setSearch ] = useState("") //search bar
  const [ searchResults, setSearchResults] = useState([]) //array of results
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    console.log("Searching:",search);
  },[debouncedSearch])

  const handleInputChange = (e) => {setSearch(e.target.value);}

  return(
    <>
      <div style={{border:"2px solid red", borderRadius:"10px"}}>
        <h2>Debounce Demo</h2>
        <p>Delay by milli-seconds: <i>1000ms</i></p>
        <input type="search" placeholder="Search request here..." value={search} onChange={handleInputChange}/>
        <p>Current Input: <i>{search}</i></p>
        <p style={{fontSize:".8rem"}}><i>Debounced Value (after 1000ms)</i></p>
        <p>Search Result:</p>
          <ul>
            {searchResults.map((result,index) => (<li key={index}>{result}</li>))}
          </ul>
      </div>
    </>
  );
}

export default DebounceDemo