import { useEffect, useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [data, setData] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {});
  return (
    <>
      <ul>
        <li>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li>
          <button
            type="button"
            className="counter"
            onClick={() => {
              setData([...data, { username, email }]);
              setUsername("");
              setEmail("");
            }}
          >
            Add user
          </button>
        </li>
      </ul>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {data.map((key, index) => (
          <li
            key={index}
            style={{
              borderBottom: "solid white 1px",
              marginBottom: "0.5rem",
              paddingBottom: "0.8rem",
            }}
          >
            {key.username} - {key.email}
          </li>
        ))}
      </ul>
    </>
  );
}
