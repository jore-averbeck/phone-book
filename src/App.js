import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Typography, Container, Input } from "@mui/material";
import SearchInput from "./components/SearchInput.js";

const GET_PHONE_NUMBERS = gql`
  query GetPhoneNumbers {
    phoneNumbers {
      id
      name
      phone
    }
  }
`;

const SEARCH_CONTACTS = gql`
  query SearchContacts($search: String!) {
    searchContacts(search: $search) {
      id
      name
      phone
    }
  }
`;

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { loading, error, data } = useQuery(searchTerm ? SEARCH_CONTACTS : GET_PHONE_NUMBERS, {
    variables: { search: searchTerm }
  });

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const phoneList = data ? (data.searchContacts ? data.searchContacts : data.phoneNumbers) : [];

  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">Phone Book</Typography>
         <SearchInput handleChange={handleChange} searchTerm={searchTerm} phoneList={phoneList}/>
    </Container>
  );
}

