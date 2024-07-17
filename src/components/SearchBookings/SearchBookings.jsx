import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Stack, TextField, Button } from "@mui/material";


const SearchBookings = ({ data, filterData }) => {
  const [inputText, setInputText] = useState('');

  const handleFilteredData = () => {
    if (!inputText.trim()) return data;
    const filteredList =  data.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
    return filteredList;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData(handleFilteredData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          variant="outlined"
          label="Search By Hospital"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={<IoMdSearch />}
          size="large"
          disableElevation
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}

export default SearchBookings;
