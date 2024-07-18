import React, {useState, useEffect} from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import SearchHospital from '../../components/SearchHospital/SearchHospital';
import { CiCircleCheck } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Advertisement from '../../assets/Addvertisement.png';
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import { useSnackbar } from "notistack";

const hospitalsURL = 'https://meddata-backend.onrender.com/data';

const SearchPage = () => {
    const [hospitals, setHospitals] = useState([]);
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    const {enqueueSnackbar} = useSnackbar();

    const state = searchParams.get('state') || '';
    const city = searchParams.get('city') || '';
    const slots = {
      morning: ["11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };

    useEffect(() => {
            const getHospitalsList = async () => {
                setHospitals([]);
                setIsLoading(true);
                try {
                    const data = await axios.get(`${hospitalsURL}?state=${state}&city=${city}`);
                    setHospitals(data['data']);
                    setIsLoading(false);
                    
                } catch (error) {
                    console.error(error);
                }
            }
        
        if (state && city) {
            getHospitalsList();
        }
    }, [state, city]);

    const handleBooking = (data) => {
      setBookingDetails(data);
      const prevbookings = JSON.parse(localStorage.getItem("bookings")) || [];
      localStorage.setItem("bookings", JSON.stringify([...prevbookings, {...data}]));
      enqueueSnackbar('Booked succesfully!!!', {variant: 'success'});
    }

    return (
        <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}
      >
            <Box
            sx={{
                position: "relative",
                background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
            }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                    background: "#fff",
                    p: 3,
                    borderRadius: 2,
                    transform: "translatey(50px)",
                    mb: "50px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <SearchHospital />
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {hospitals.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <CiCircleCheck />
                <Typography color="#787887" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
              >
                
                {isLoading && (
                  <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                    Loading...
                  </Typography>
                )}

              {hospitals.length > 0 && 
                hospitals.map((hospital) => {
                  return <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitalData={hospital}
                    slots={slots}
                    handleBooking={handleBooking}
                  />
                })
                }


            </Stack>

            <img src={Advertisement} width={360} height="auto" alt="advertisement" />
          </Stack>
        </Container>

        </Box>
    );
}

export default SearchPage;