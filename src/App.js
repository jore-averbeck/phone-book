import React from "react";
import "./styles.css";
import { useQuery, gql } from "@apollo/client"
import { Typography, Container} from "@mui/material";

const getAllNumbers = gql`
  query GetPhoneNumbers {
    phoneNumbers {
      id,
      name,
      phone
    }
  }
`;


export default function App() {
  const { loading, error, data } = useQuery(getAllNumbers);
  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if(!data) return <p>No data found</p>


  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">Phone Book</Typography>
      {data.phoneNumbers.map(phone => (
        <Typography key={phone.id}>{phone.name} - {phone.phone}</Typography>
      ))}
    </Container>
  );
}
