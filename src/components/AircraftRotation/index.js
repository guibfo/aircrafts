import RotationFlight from "components/RotationFlight";
import TimeLine from "components/TimeLine";

import { Wrapper, EmptyView, RotationList } from "./styles";

const AircraftRotation = ({ name, flights, timeBlocks }) => {
  return !name ? (
    <EmptyView>No aircrafts selected</EmptyView>
  ) : (
    <Wrapper>
      <header>Rotation for {name}</header>
      {flights.length > 0 && (
        <RotationList>
          {flights.map((flight) => (
            <RotationFlight key={flight.id} flight={flight} />
          ))}
        </RotationList>
      )}
      <TimeLine timeBlocks={timeBlocks} />
    </Wrapper>
  );
};

export default AircraftRotation;
