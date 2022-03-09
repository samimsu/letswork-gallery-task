import React from "react";

const Pagination = ({
  onClickPrevious,
  onClickNext,
  previousDisabled,
  nextDisabled,
  totalPages,
  activePage,
  setActivePage,
}) => {
  let pageNavigation = [];
  for (let i = 0; i < totalPages; i++) {
    pageNavigation.push(<a key="i">{i}</a>);
  }
  return (
    <div className="pagination">
      <button disabled={previousDisabled} onClick={onClickPrevious}>
        Previous
      </button>
      {pageNavigation.map((page, index) => {
        return <a key={index}>{index}</a>;
      })}
      <button disabled={nextDisabled} onClick={onClickNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
