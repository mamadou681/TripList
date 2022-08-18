import { useState, useEffect, useRef } from "react";

export function useFetch(url, _option) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // use useRef to wrap an object/array argument which is a useEffect dependency.
  const option = useRef(_option).current;

  useEffect(() => {
    const abortCont = new AbortController();
    console.log(option);
    const fetchTrips = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: abortCont.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("The fetch is aborted ");
        } else {
          setError("Couldn't fetch the data");
          setIsPending(false);
        }
      }
    };
    fetchTrips();
    return () => abortCont.abort();
  }, [url, option]);

  return { data, isPending, error };
}
