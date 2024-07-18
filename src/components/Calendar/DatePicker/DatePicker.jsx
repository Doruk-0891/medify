import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { format, add, isEqual, startOfDay } from 'date-fns';


const DatePicker = ({totalSlots, selectedDate, setSelectedDate}) => {
    const currDay = startOfDay(new Date());
    const datesArr = [];

    for (let i=0;i<7;i++) {
        datesArr.push(add(currDay, {days : i}));
    }

    const formatDate = day => {
        if (isEqual(currDay, day)) {
            return 'Today'
        }
        else if (isEqual(currDay, add(day, { days: -1 }))) {
            return 'Tomorrow'
        }
        else {
            return format(day, 'E, d LLL')
        }
    }

    const handleDate = (day) => {
        setSelectedDate(day)
    }

    return (
        <Stack pt={3} position='relative'>
            <Swiper
                slidesPerView={'auto'}
                loop={false}
                spaceBetween={11}
                style={{
                    width: '100%'
                }}
            >
                {datesArr.map((day, index) => (
                    <SwiperSlide key={index} style={{
                        width: 'calc(100% / 3)',
                        cursor: 'pointer'
                    }}>
                        <Stack
                            textAlign='center'
                            onClick={() => handleDate(day)}
                        >
                            <Typography
                                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                                fontSize={{ xs: 11, md: 16 }}
                            >
                                {formatDate(day)}
                            </Typography>
                            <Typography fontSize={{ xs: 8, md: 12 }} color='#00A500;'>
                                {`${totalSlots} Slots Available`}
                            </Typography>

                            <Box
                                height='4px'
                                width={{ xs: 1, md: 'calc(100% - 50px)' }}
                                position='relative'
                                bottom='0'
                                bgcolor={isEqual(day, selectedDate) ? '#2AA7FF;' : 'rgba(0,0,0,0)'}
                                left={0}
                                zIndex={999}
                                mt='5px'
                                mx='auto'
                            >
                            </Box>

                        </Stack>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Stack>

    );
}

export default DatePicker;