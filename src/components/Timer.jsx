import React, { useState, useEffect } from 'react'


    const TimerComponent = (props) => {
        const formatTime = timeUnit => timeUnit < 10 ? "0" + timeUnit : timeUnit;
        const getTime = () => {
            return `
            ${formatTime(new Date().getHours())}:
            ${formatTime(new Date().getMinutes())}:
            ${formatTime(new Date().getSeconds())}`;
        };
        
        const [time, setTime] = useState(getTime());
        const [stopTime, setStopTime] = useState(false);
        const [timer, setTimer] = useState();

        useEffect(
          () => {
            if (stopTime) {
                setTimer(
                  setInterval(() => {
                    setTime(getTime());
                  }, 1000)
                );

            } else {
                clearInterval(timer);
            }

          },
          [stopTime]
        );

        return (
            <div>
                {time} <button onClick={() => setStopTime(!stopTime)}>Stop Time</button>
            </div>
        );
}

export default TimerComponent;
