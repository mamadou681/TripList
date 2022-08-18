import { useState } from "react";
import "./TripLists.css";
import { useFetch } from "../Hooks/useFetch";

export default function TripLists() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url, { type: "GET" });

  return (
    <div className="trip-list">
      <h2>TripLists</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.title}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Africa")}
        >
          African trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
}
