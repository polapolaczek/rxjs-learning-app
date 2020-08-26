import React from "react";
import useTimer from "./useTimer";

const Countdown = () => {
    const timerValue = useTimer();

    return <div>{timerValue}</div>;
};

export default Countdown;
