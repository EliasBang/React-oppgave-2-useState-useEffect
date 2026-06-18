import { useEffect, useState } from "react";

const url = "https://catfact.ninja/facts?limit=5";

export default function CatFact() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFacts() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {facts.map((fact, index) => (
        <li
          key={index}
          style={{
            borderBottom: "solid white 1px",
            marginBottom: "0.5rem",
            paddingBottom: "0.8rem",
          }}
        >
          {fact.fact}
        </li>
      ))}
    </ul>
  );
}
