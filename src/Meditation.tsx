import React, { useState, useEffect } from 'react';

const Meditation: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {seconds}
        </div>
    );
};

export default Meditation;