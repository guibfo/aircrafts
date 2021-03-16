import { Wrapper } from "./styles";

const Aircraft = ({ aircraft, usage, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <header>
        <h3>{aircraft.ident}</h3>
      </header>
      <div>({usage.toFixed(2)}%)</div>
    </Wrapper>
  );
};

export default Aircraft;
