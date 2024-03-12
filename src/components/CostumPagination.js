import React from 'react';
import { Pagination } from '@mui/material';

export default function CustomPagination({ totalCount, currentPage, onPageChange }) {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  const pageSize = 15;

  return (
    <Pagination
      count={Math.ceil(totalCount / pageSize)}
      page={currentPage}
      onChange={handlePageChange}
      color="secondary"
      size="small"
    />
  );
}
