import Aircraft from "components/Aircraft";

import { Section, List } from "./styles";

const AircraftsList = ({
  aircrafts,
  setCurrentAircraft,
  setCurrentAirport,
  usage,
}) => {
  const handleSelectAircraft = (aircraft) => {
    setCurrentAircraft(aircraft);
    setCurrentAirport(aircraft.base);
  };
  return (
    <Section>
      <header>Aircrafts</header>
      {aircrafts.length > 0 && (
        <List>
          {aircrafts.map((aircraft) => (
            <Aircraft
              key={aircraft.ident}
              aircraft={aircraft}
              onClick={() => handleSelectAircraft(aircraft)}
              usage={usage}
            />
          ))}
        </List>
      )}
    </Section>
  );
};

export default AircraftsList;
