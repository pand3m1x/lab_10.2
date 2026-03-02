import { useState,useEffect } from 'react'

// currentPage
// totalPages
// startIndex
// endIndex 
// itemsOnCurrentPage
// setPage(pageNumber)
// nextPage()
// prevPage()
// canNextPage
// canPrevPage


//delay hook 

function useDebounce( value,delay ){
  const [ debouncedValue,setDebouncedValue ] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay );

    return () => {
      clearTimeout(handler);
    };
  }, [value,delay]);

  return debouncedValue;
}

export default useDebounce