import { Wrapper, FlexDiv } from "./styles";

const Flight = ({ flight, onClick }) => {
  return (
    <Wrapper onClick={() => onClick(flight)}>
      <header>
        <h3>{flight.id}</h3>
      </header>
      <FlexDiv>
        <div>
          <div>{flight.origin}</div>
          <div>{flight.readable_departure}</div>
        </div>
        <div>
          <div>{flight.destination}</div>
          <div>{flight.readable_arrival}</div>
        </div>
      </FlexDiv>
    </Wrapper>
  );
};

export default Flight;
