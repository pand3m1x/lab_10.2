import usePagination from '../hooks/usePagination'

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

function UsePaginationDemo(){

  //the ammount of items to paginate through
  
  const items = Array.from({ length: 100 }, (_,i) => i+1);
  //setting up items to pages / start of Pagination function
  const {currentPage, setCurrentPage, totalPages, startIndex, endIndex } = usePagination({
    totalItems: items.length,
    itemsPerPage: 10,
  });

  const currentItems = items.slice(startIndex,endIndex+1)

  return(
    <>
      <p>Start: {startIndex}</p>
      <p>End: {endIndex}</p>
      <ul>
        {currentItems.map(item => (<li key={item}>{item}</li>))}
      </ul>
      <p>{currentPage} of {totalPages}</p>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>

    <div>
      <h4>Pagination Demo</h4>
      <div id="itemHeaders">
        <p>items per page: {} </p>
        <p>total items: {}</p>
      </div>
      <ul style={{listStyle:"none"}}>
        <li>page {}: {}</li>
      </ul>
      <div id="directionBtns">
        <span>previous</span>
        <p>showing {} of 13</p>
        <span>next</span>
      </div>
      <p>showing {} of {}</p>
      <div id="pageBtns">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>11</button>
        <button>12</button>
        <button>13</button>
      </div>
    </div>
    </>
  )
}

export default UsePaginationDemo;