import React, { useState, useEffect } from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import Advertisement from '../../assets/Addvertisement.png';
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import SearchBookings from '../../components/SearchBookings/SearchBookings';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);

    useEffect(() => {
        const bookingsList = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(bookingsList);
        setFilteredBookings(bookingsList);
    }, [])

    return (
        <Box
            sx={{
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
                <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 0, md: 12 }}
                        alignItems={{ xs: "center", md: "flex-end" }}
                    >
                        <Typography
                            component="h1"
                            pb={1}
                            fontSize={{ xs: 32, md: 40 }}
                            fontWeight={700}
                            color="#fff"
                        >
                            My Bookings
                        </Typography>
                        <Box
                            bgcolor="#fff"
                            p={3}
                            flexGrow={1}
                            borderRadius={2}
                            boxShadow="0 0 10px rgba(0,0,0,0.1)"
                            sx={{ translate: "0 50px" }}
                            width={{ xs: 1, md: "auto" }}
                        >
                            <SearchBookings data={bookings} filterData={setFilteredBookings} />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>

                <Stack alignItems="flex-start" direction={{ md: "row" }}>
                    <Stack
                        mb={{ xs: 4, md: 0 }}
                        spacing={3}
                        width={{ xs: 1, md: "calc(100% - 384px)" }}
                        mr="24px"
                    >

                        {filteredBookings.length > 0 &&
                            filteredBookings.map((hospital) => {
                                return <HospitalCard
                                    key={hospital["Hospital Name"]}
                                    hospitalData={hospital}
                                    isBooking={true}
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

export default MyBookings;