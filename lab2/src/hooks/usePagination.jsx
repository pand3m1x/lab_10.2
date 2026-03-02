import { useState } from 'react'

function usePagination({ totalItems, itemsPerPage=10, initialPage=1 }){


  const [currentPage, setCurrentPage] = useState(initialPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex+itemsPerPage-1,totalItems-1);
  const totalPages = Math.ceil(totalItems/itemsPerPage);

  return{ currentPage, setCurrentPage, totalPages, startIndex, endIndex};
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