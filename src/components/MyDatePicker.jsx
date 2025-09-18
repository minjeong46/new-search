import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";

const MyDatePicker = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <DayPicker
            locale={ko}
            animate
            mode="single"
            selected={selected}
            onSelect={setSelected}
        />
    );
};

export default MyDatePicker;
