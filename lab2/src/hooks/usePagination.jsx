import { useState } from 'react'

function usePagination({ totalItems, itemsPerPage = 10, initialPage = 1 }){


  const [currentPage, setCurrentPage] = useState(initialPage);
  // const endIndex = Math.min(startIndex+itemsPerPage -1,totalItems); //too much math
  const totalPages = Math.ceil(totalItems/itemsPerPage); 
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = totalPages * currentPage;

  const nextPage = () => {
    if (currentPage < totalPages){
      setCurrentPage(prev => prev+1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1){
      setCurrentPage(prev => prev-1)
    }
  };

  const setPage = (pageNumber) => {
    if (pageNumber < 1) return;
    if (pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
    

  return{ currentPage, setCurrentPage, totalPages, startIndex, endIndex, nextPage, prevPage, setPage };
}

export default usePagination

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