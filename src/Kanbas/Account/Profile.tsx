import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("alice");
  const [password, setPassword] = useState("123");
  const [firstName, setFirstName] = useState("Alice");
  const [lastName, setLastName] = useState("Wonderland");
  const [dob, setDob] = useState("mm/dd/yyyy");
  const [email, setEmail] = useState("alice@wonderland.com");
  const [role, setRole] = useState("User");

  return (
    <div className="container mt-4">
      <h3>Profile</h3>
      <input
        className="form-control mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control mb-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button className="btn btn-danger w-100">Signout</button>
    </div>
  );
}

