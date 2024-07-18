import React, { useState } from "react";
import { Box, Button,Divider, Stack, Typography } from "@mui/material";
import HospitalImage from '../../assets/colored_hospital.png';
import { IoIosThumbsUp } from "react-icons/io";
import Calendar from "../Calendar/Calendar";

const HospitalCard = ({hospitalData, isBooking = false, slots, handleBooking}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={HospitalImage}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            component="h3"
            color="#2AA7FF"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {hospitalData["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${hospitalData["City"].toLowerCase()}, ${hospitalData["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {hospitalData["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="#00A500"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="#00A500"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            >
                <IoIosThumbsUp style={{
                   color: '#FFFFFF'
                }} />
            </Box>
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {hospitalData["Hospital overall rating"] === "Not Available"
                ? 0
                : hospitalData["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={isBooking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!isBooking && (
            <>
              <Typography
                textAlign="center"
                color="#00A500"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar(prev => !prev)}
              >
                {
                  showCalendar ? 'Hide Booking Calendar' : 'Book FREE Center Visit'
                }
                
              </Button>
            </>
          )}

        </Stack>
      </Stack>
      {
        showCalendar && <Calendar details={hospitalData} slots={slots} handleBooking={handleBooking} />
      }
    </Box>
  );
}

export default HospitalCard;
