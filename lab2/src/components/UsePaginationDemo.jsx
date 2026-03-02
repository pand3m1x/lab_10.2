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

  return(
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
  )
}

export default UsePaginationDemo;