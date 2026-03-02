import { useState } from 'react'

function usePagination({ initialPage=1 }){

  const [currentPage, setCurrentPage] = useState(initialPage);

  return{ currentPage, setCurrentPage};
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