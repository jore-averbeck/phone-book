import { Typography, Input, InputAdornment, InputLabel, IconButton, FormControl, Container, List, ListItemText } from "@mui/material";
import { styled } from '@mui/system';
import { Clear } from '@mui/icons-material';
import { useEffect, useRef } from 'react';

const ContainerWrapper = styled(Container)({
  display: 'flex',
  flexDirection:'column',
  gap:'1.1rem',
  alignItems:'center'
});

export default function SearchInput({ handleChange, searchTerm, phoneList, onReset }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchTerm]);

  return (
    <ContainerWrapper>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="input">Search</InputLabel>
        <Input
          onChange={handleChange}
          color='secondary'
          name="input"
          id="input"
          value={searchTerm}
          variant="filled"
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
      </FormControl>
      <List>
        {phoneList.length > 0 ? (
          phoneList.map(phone => (
            <ListItemText key={phone.id}>{phone.name} - {phone.phone}</ListItemText>
          ))
        ) : <Typography>No phone numbers found</Typography>}
      </List>
    </ContainerWrapper>
  )
}

