"use client";

import { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
  };
  capital?: string[];
  region: string;
  population: number;
};

export default function DataPanel() {
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadData() {
    try {
      setError(null);
      const res = await fetch(
        "https://restcountries.com/broken-url");     

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const json = await res.json();
      setData(json.slice(0, 5));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function refreshData() {
    setRefreshing(true);
    await loadData();
  }

  if (loading) {
    return (
      <section>
        <h2>Week 7 Async Fetch Project</h2>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>Week 7 Async Fetch Project</h2>
        <p role="alert">Something went wrong: {error}</p>
        <button onClick={refreshData}>Try Again</button>
      </section>
    );
  }

  return (
    <section>
      <h2>Week 7 Async Fetch Project</h2>
      <p>This section fetches country data asynchronously using the Fetch API.</p>

      <button onClick={refreshData} disabled={refreshing} aria-busy={refreshing}>
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>

      <div>
        {data?.map((country) => (
          <div className="card" key={country.name.common}>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital?.[0] || "N/A"}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}