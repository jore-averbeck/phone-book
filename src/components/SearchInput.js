import { Typography, Input } from "@mui/material";

export default function SearchInput({handleChange, searchTerm, phoneList}){

    return(
        <> 
        <Input onChange={handleChange}  name="input" value={searchTerm} placeholder="Search"/>
      {phoneList.length > 0 ? (
        phoneList.map(phone => (
          <Typography key={phone.id}>{phone.name} - {phone.phone}</Typography>
        ))
      ) : <Typography>No phone numbers found</Typography>}
        </>
       
    )
}