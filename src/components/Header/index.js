import { useEffect, useState } from "react";

import { StyledHeader } from "./styles";

const Header = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const offset = currentDate.getTimezoneOffset();
    currentDate.setMinutes(currentDate.getMinutes() + offset);
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(
      currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return <StyledHeader>{date}</StyledHeader>;
};

export default Header;
