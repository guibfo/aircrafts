import { useEffect, useState } from "react";
import { api } from "server";
import Header from "components/Header";
import AircraftsList from "components/AircraftsList";
import FlightsList from "components/FlightsList";
import AircraftRotation from "components/AircraftRotation";

import { Main } from "./styles";

const TURNAROUND_TIME = 1200;
const DAILY_TOTAL = 86400;

const calcDailyUsage = (flights) => {
  const totalTime = flights.reduce((acc, cur) => {
    return acc + (TURNAROUND_TIME + cur.arrivaltime - cur.departuretime);
  }, 0);
  return (totalTime * 100) / DAILY_TOTAL;
};

const App = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [loadedFlights, setLoadedFlights] = useState([]);
  const [flights, setFlights] = useState([]);
  const [page, setPage] = useState(0);
  const [currentAircraft, setCurrentAircraft] = useState(null);
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [currentAirport, setCurrentAirport] = useState(null);
  const [usage, setUsage] = useState(0);
  const [timeBlocks, setTimeBlocks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAircrafts();
    getFlights();
  }, []);

  useEffect(() => {
    setUsage(calcDailyUsage(selectedFlights));
  }, [selectedFlights]);

  const getAircrafts = async () => {
    const { data } = await api.get("aircrafts");
    setAircrafts(data);
  };

  const getFlights = async (page = 42) => {
    setLoading(true);
    const { pagination, data } = await api.get(`flights?offset=${page * 25}`);
    const previousFlights = loadedFlights;
    setLoadedFlights([...previousFlights, ...data]);
    setFlights([...previousFlights, ...data]);
    setPage(pagination.offset / 25);
    setLoading(false);
  };

  const filterFlights = (e) => {
    const { value } = e.target;
    const filteredFlights = loadedFlights.filter((flight) => {
      return flight.origin.toLowerCase().includes(value.toLowerCase());
    });
    setFlights(filteredFlights);
  };

  const calcTimeBlock = (flight) => {
    const { departuretime, arrivaltime } = flight;
    console.log(arrivaltime, departuretime);
    const start = (departuretime * 100) / DAILY_TOTAL;
    const size = ((arrivaltime - departuretime) * 100) / DAILY_TOTAL;
    setTimeBlocks([
      ...timeBlocks,
      { start: start.toFixed(2), size: size.toFixed(2) },
    ]);
  };

  const selectFlight = (flight) => {
    if (flight.origin === currentAirport) {
      if (selectedFlights.length === 0) {
        setSelectedFlights([flight]);
        setCurrentAirport(flight.destination);
        calcTimeBlock(flight);
      } else {
        const lastFlight = [...selectedFlights].pop();
        if (flight.departuretime >= lastFlight.arrivaltime + TURNAROUND_TIME) {
          setSelectedFlights((previousFlights) => [...previousFlights, flight]);
          setCurrentAirport(flight.destination);
          calcTimeBlock(flight);
        } else {
          alert("You can't add that flight");
        }
      }
    } else {
      alert("You can't add that flight");
    }
  };

  return (
    <div className="App">
      <Header />
      <pre style={{ textAlign: "center", fontSize: "20px" }}>
        {currentAirport && (
          <span>Aircraft is currently on {currentAirport}</span>
        )}
      </pre>
      <Main>
        <AircraftsList
          aircrafts={aircrafts}
          setCurrentAircraft={setCurrentAircraft}
          setCurrentAirport={setCurrentAirport}
          usage={usage}
        />
        <AircraftRotation
          name={currentAircraft?.ident}
          flights={selectedFlights}
          timeBlocks={timeBlocks}
        />
        <FlightsList
          flights={flights}
          getFlights={getFlights}
          page={page}
          filterFlights={filterFlights}
          selectFlight={selectFlight}
          loading={loading}
        />
      </Main>
    </div>
  );
};

export default App;
