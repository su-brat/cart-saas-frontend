import { useState, useEffect } from "react";

const Alert = ({ message, duration = 2000, onClose = () => true }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Optional: You can use this to perform any additional actions when the alert is closed.
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or when visibility changes.
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-3 w-full text-center ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
