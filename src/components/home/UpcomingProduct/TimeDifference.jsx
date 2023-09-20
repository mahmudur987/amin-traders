import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const TimeDifference = ({ fDate }) => {
  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    //
    const updateTimeDifference = () => {
      const futureDate = new Date(fDate); // Replace with your future date
      const currentDate = new Date();

      const timeDiff = futureDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeDifference({ days, hours, minutes, seconds });
    };

    // Call updateTimeDifference immediately to set the initial time difference
    updateTimeDifference();

    // Update the time difference every second
    const intervalId = setInterval(updateTimeDifference, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="btn btn-sm">{timeDifference.days} d</button>{" "}
      <button className="btn btn-sm">{timeDifference.hours} h </button>
      <button className="btn btn-sm"> {timeDifference.minutes} m </button>
      <button className="btn btn-sm">{timeDifference.seconds} s</button>
    </div>
  );
};
export default TimeDifference;
