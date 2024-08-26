import React from "react";
import { Pagination } from "semantic-ui-react";

function PaginationExamplePagination({ totalPages, activePage, onPageChange }) {
  return (
    <Pagination
      defaultActivePage={1}
      activePage={activePage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}

export default PaginationExamplePagination;
