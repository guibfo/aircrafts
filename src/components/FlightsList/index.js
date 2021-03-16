import Flight from "components/Flight";

import {
  Section,
  List,
  Button,
  StyledInput,
  InputWrapper,
  ContentWrapper,
} from "./styles";

const FlightsList = ({
  flights,
  getFlights,
  page,
  filterFlights,
  selectFlight,
  loading,
}) => {
  return (
    <Section>
      <header>Flights</header>
      <ContentWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Search by Airport (Departure)"
            onChange={filterFlights}
          />
        </InputWrapper>
        <List>
          {flights.map((flight) => (
            <Flight key={flight.id} flight={flight} onClick={selectFlight} />
          ))}
        </List>
      </ContentWrapper>
      <footer>
        <Button
          onClick={() => getFlights(page + 1)}
          disabled={page === 54 || loading}
        >
          Load more Flights
        </Button>
      </footer>
    </Section>
  );
};

export default FlightsList;
