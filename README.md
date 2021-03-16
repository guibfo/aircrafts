# Flight Planner

## How to run

From the terminal, enter the folder where you want to keep the project and perform the following steps:

```
git clone https://github.com/guibfo/aircrafts.git
cd aircrafts
yarn
```

After installing the dependencies

```
yarn start
```

Project will run on `http://localhost:3000` and ask to use another port in case the port is already in use

## Assumptions

- The one aircraft I have available is based on `EGKK` so I take it that it should start only flights from there. I'm disabling every flight from being selected if it doesn't start on the current Airport the aircraft is on. That makes the user need to load quite a few pages (42 to be exact) before he can find a flight starting from `EGKK`. Using the limit param on the API query won't work for values over 25. So I assume in a more real world environment I would be able to query the API for flights departing from a specific Airport, since I can't do that here, changing the default value of the page variable on `getFlights` to 42 can get you started from EGKK and go from there. Other than that, user should request to load more flights until he finds a suiting one.

- I assumed you can only select flights in a cronological order, for example, if you select a flight with an arrival time of 9 AM, and then the next one you select has a departure time of 6 PM you won't be able to fill in between after. Every flight is always added as the last flight when possible.

- I'm assuming the 20 minutes turnaround time is not wasted time, it counts for the usage % of the aircraft

## Compromises

- Didn't work much on the layout and CSS because I wanted to focus on functionality as I was looking into taking as close to 3 hours as possible to finish it.

- I would organize the project in a different way given more time, for example using Atomic design for the components, and also componentize more.

- The base logic of the project is all within one state controlling component (App.js) which I'm treating as if it is a page inside a bigger system. I decided to keep everything within this component for clarity sake, even if some functions could be moved outside as helpers or utils functions, since it's a one page project I opted to keep everything in the same place since the component isn't too big.

- Since only one Aircraft is considered, I'm not doing any validation of the usage of the flights for the current selected Aircraft, in an ideal environment, after building the flights you should be able to save it and show the usage % of each Aircraft on the list

- General alert when the user isn't able to add a flight to the schedule without mentioning the reason why (and alerts are bad) just to give some feedback

- No unit testing

- Commit history: Sorry, I just did a big commit with everything as I finished so I could keep on the flow while writing code

- I didn't add a `reset state` button so you need a reload to retry the scheduling
