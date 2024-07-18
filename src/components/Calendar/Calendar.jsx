import React, { useState } from "react";
import { Box } from "@mui/material";
import DatePicker from './DatePicker/DatePicker';
import TimePicker from './TimePicker/TimePicker';
import {startOfDay} from 'date-fns';

const Calendar = ({details, slots, handleBooking}) => {
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots = slots['morning'].length + slots['afternoon'].length + slots['evening'].length;

    return (
        <Box>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} totalSlots={totalSlots} />
            <TimePicker selectedDate={selectedDate} details={details} handleBooking={handleBooking} slots={slots} />
        </Box>
    );
}

export default Calendar;