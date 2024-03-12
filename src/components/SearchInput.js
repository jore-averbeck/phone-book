import { Typography, Input, InputAdornment, InputLabel, IconButton, Container, List, ListItemText } from "@mui/material";
import { styled } from '@mui/system';
import { Clear } from '@mui/icons-material';
import { useEffect, useRef } from 'react';

const ContainerWrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
  alignItems: 'center',
});


const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  paddingLeft:'0.3rem',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0px 2px 4px ${theme.palette.grey[500]}`,
  }
}));

export default function SearchInput({ handleChange, searchTerm, phoneList, onReset }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]);

  return (
    <ContainerWrapper>
      <InputLabel htmlFor="input"/>
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
      
      <List>
        {phoneList.length > 0 ? (
          phoneList.map(phone => (
            <StyledListItemText key={phone.id} primary={`${phone.name} - ${phone.phone}`} />
          ))
        ) : <Typography>No phone numbers found</Typography>}
      </List>
    </ContainerWrapper>
  );
}

