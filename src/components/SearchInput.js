import { Typography, Input, InputAdornment, IconButton } from "@mui/material";
import { Clear } from '@mui/icons-material';

export default function SearchInput({ handleChange, searchTerm, phoneList, onReset }) {
  return (
    <>
      <Input 
        onChange={handleChange} 
        name="input" 
        value={searchTerm} 
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onReset} size="small">
              <Clear />
            </IconButton>
          </InputAdornment>
        }
      />
      {phoneList.length > 0 ? (
        phoneList.map(phone => (
          <Typography key={phone.id}>{phone.name} - {phone.phone}</Typography>
        ))
      ) : <Typography>No phone numbers found</Typography>}
    </>
  )
}
