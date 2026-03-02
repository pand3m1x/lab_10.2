import { useState } from 'react'

function usePagination({ totalItems, itemsPerPage=10, initialPage=1 }){

  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems/itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  return{ currentPage, setCurrentPage, totalPages};
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