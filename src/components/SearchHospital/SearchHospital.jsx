import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";


const stateURL = 'https://meddata-backend.onrender.com/states';
const cityURL = 'https://meddata-backend.onrender.com/cities';

export default function SearchHospital() {
  const [locationDetails, setLocationDetails] = useState({ state: "", city: "" });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(stateURL);
        setStates(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setLocationDetails((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `${cityURL}/${locationDetails.state}`
        );
        setCities(data.data);
      } catch (error) {
        console.error(error);
      }
      };
  
      if (locationDetails.state) {
        fetchCities();
      }
  }, [locationDetails.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationDetails.state && locationDetails.city) {
      navigate(`/search?state=${locationDetails.state}&city=${locationDetails.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={locationDetails.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <IoMdSearch />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={locationDetails.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <IoMdSearch />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<IoMdSearch />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}
