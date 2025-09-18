import React, { useState } from "react";
import MyDatePicker from "./MyDatePicker";

const Period = () => {
    return (
        <div className="basis-1/2">
            <div className="flex float-right">
                <input type="date" className="border p-1 rounded-md mr-4" />
                <span> ~ </span>
                <input type="date" className="border p-1 rounded-md ml-4" />
            </div>
        </div>
    );
};

export default Period;
