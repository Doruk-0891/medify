import React from "react";
import { Chip, Stack, Typography } from "@mui/material";

export const CustomChip = (props) => {
    return (
        <Chip
        label={props.label}
        color="primary"
        variant="outlined"
        sx={{
            borderRadius: "5px",
            fontSize: { xs: 10, md: 14 },
            cursor: "pointer",
            "&:nth-of-type(1)": {
            ml: 0,
            },
            mr: { xs: 1, md: 3 },
            mt: { xs: 1, md: 0 },
        }}
        onClick={props.handleClick}
    />
    );
}

const TimePicker = ({selectedDate, details, handleBooking, slots}) => {

    const handleSlot = (slot) => {
        handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
      };

    return (
        <Stack
          pt={3}
          spacing={{ xs: 2, md: 3 }}
        >
          {slots.morning.length > 0 && (
            <Stack
              direction="row"
              alignItems="center"
              px={{ xs: 0, md: 6 }}
              flexWrap={"wrap"}
            >
              <Typography
                width={{ xs: 1, md: "15%" }}
                fontSize={{ xs: 14, md: 16 }}
              >
                Morning
              </Typography>
              {slots.morning.map((slot) => (
                <CustomChip
                  key={slot}
                  label={slot}
                  handleClick={() => handleSlot(slot)}
                />
              ))}
            </Stack>
          )}
          {slots.afternoon.length > 0 && (
            <Stack
              direction="row"
              alignItems="center"
              px={{ xs: 0, md: 6 }}
              flexWrap={"wrap"}
            >
              <Typography
                width={{ xs: 1, md: "15%" }}
                fontSize={{ xs: 14, md: 16 }}
              >
                Afternoon
              </Typography>
              {slots.afternoon.map((slot) => (
                <CustomChip
                  key={slot}
                  label={slot}
                  handleClick={() => handleSlot(slot)}
                />
              ))}
            </Stack>
          )}
          {slots.evening.length > 0 && (
            <Stack
              direction="row"
              alignItems="center"
              px={{ xs: 0, md: 6 }}
              flexWrap={"wrap"}
            >
              <Typography
                width={{ xs: 1, md: "15%" }}
                fontSize={{ xs: 14, md: 16 }}
              >
                Evening
              </Typography>
              {slots.evening.map((slot) => (
                <CustomChip
                  key={slot}
                  label={slot}
                  handleClick={() => handleSlot(slot)}
                />
              ))}
            </Stack>
          )}
        </Stack>
      );
}

export default TimePicker;