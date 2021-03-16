import { Wrapper, RouteWrapper } from "./styles";

const RotationFlight = ({ flight }) => {
  return (
    <Wrapper>
      <div>Flight: {flight.id}</div>
      <RouteWrapper>
        <div>
          <div>{flight.origin}</div>
          <div>{flight.readable_departure}</div>
        </div>
        <div>to</div>
        <div>
          <div>{flight.destination}</div>
          <div>{flight.readable_arrival}</div>
        </div>
      </RouteWrapper>
    </Wrapper>
  );
};

export default RotationFlight;
