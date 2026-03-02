import usePagination from '../hooks/usePagination'

// currentPage [x]
// totalPages [x]
// startIndex [x]
// endIndex  [x]
// itemsOnCurrentPage [x]
// setPage(pageNumber) [x]
// nextPage() [x]
// prevPage() [x]
// canNextPage []
// canPrevPage  []

function UsePaginationDemo(){

  //the ammount of items to paginate through
  
  const items = Array.from({ length: 100 }, (_,i) => i+1);
  //setting up items to pages / start of Pagination function
  const {currentPage, setCurrentPage, totalPages, startIndex, endIndex, nextPage, prevPage, setPage } = usePagination({
    totalItems: items.length,
    itemsPerPage: 10,
  });

  const currentItems = items.slice(startIndex,endIndex)
  console.log("Index", {startIndex,endIndex})
  return(
    <>
      <div id="demoBox">
        <h2>Pagination Demo</h2>
        <div id="indexLine">
          <p>Start: {startIndex +1}</p>
          <p>End: {endIndex}</p>
        </div>
        <ul>
          {currentItems.map(item => (<li key={item}>item: {item}</li>))}
        </ul>
        <p>{currentPage} of {totalPages}</p>
        <div id="dirBtn">
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      </div>
    </>
  )
}

export default UsePaginationDemo;

  //  <div>
  //     <h4>Pagination Demo</h4>
  //     <div id="itemHeaders">
  //       <p>items per page: {} </p>
  //       <p>total items: {}</p>
  //     </div>
  //     <ul style={{listStyle:"none"}}>
  //       <li>page {}: {}</li>
  //     </ul>
  //     <div id="directionBtns">
  //       <span>previous</span>
  //       <p>showing {} of 13</p>
  //       <span>next</span>
  //     </div>
  //     <p>showing {} of {}</p>
  //     <div id="pageBtns">
  //       <button>1</button>
  //       <button>2</button>
  //       <button>3</button>
  //       <button>4</button>
  //       <button>5</button>
  //       <button>6</button>
  //       <button>7</button>
  //       <button>8</button>
  //       <button>9</button>
  //       <button>10</button>
  //       <button>11</button>
  //       <button>12</button>
  //       <button>13</button>
  //     </div>
  //   </div>