import { useState } from "react";

const User = () => {
  const [status, setStatus] = useState(false);
  const [role, setRole] = useState("Anonyme");

  let statusMessage;

  if (status === true) {
    statusMessage = "En Ligne";
  } else {
    statusMessage = "Hors Ligne";
  }

  return (
    <article>
      <h2>Mari Doucet</h2>
      <h3>{role}</h3>
      <p>{statusMessage}</p>
    </article>
  );
};

export default User;
