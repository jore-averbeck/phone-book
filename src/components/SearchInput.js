import { Typography, Input, Button } from "@mui/material";

export default function SearchInput({handleChange, searchTerm, phoneList, onReset}){

    return(
        <> 
        <Input onChange={handleChange}  name="input" value={searchTerm} placeholder="Search"/>
        <Button onClick={onReset} variant="outlined">x</Button>
      {phoneList.length > 0 ? (
        phoneList.map(phone => (
          <Typography key={phone.id}>{phone.name} - {phone.phone}</Typography>
        ))
      ) : <Typography>No phone numbers found</Typography>}
        </>
       
    )
}