import React, { useState, useEffect, useRef } from 'react';
import { Typography, Input, InputAdornment, InputLabel, IconButton, Container, List, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { Clear } from '@mui/icons-material';
import CustomPagination from './CostumPagination.js'; 

const ContainerWrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
  alignItems: 'center',
});

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  paddingLeft: '0.3rem',
  marginLeft:'2rem',
  '&:hover': {
    backgroundColor: theme.palette.third.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0px 2px 4px ${theme.palette.grey[400]}`,
  }
}));

export default function SearchInput({ handleChange, searchTerm, phoneList, onReset }) {
  const inputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 15;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPhoneListPage = phoneList.slice(startIndex, endIndex);

  return (
    <ContainerWrapper>
      <InputLabel htmlFor="input" />
      <Input
        onChange={handleChange}
        color='secondary'
        name="input"
        id="input"
        value={searchTerm}
        placeholder="Search"
        gutterBottom
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onReset} size="small">
              <Clear />
            </IconButton>
          </InputAdornment>
        }
        inputRef={inputRef}
      />

      <List gutterBottom>
        {currentPhoneListPage.length > 0 ? (
          currentPhoneListPage.map(phone => (
            <StyledListItemText key={phone.id} primary={`${phone.name} - ${phone.phone}`} />
          ))
        ) : <Typography>No phone numbers found</Typography>}
      </List> 
      <CustomPagination totalCount={phoneList.length} currentPage={currentPage} onPageChange={handlePageChange} alignItems="center"/>
    </ContainerWrapper>
   
  
  );
}



