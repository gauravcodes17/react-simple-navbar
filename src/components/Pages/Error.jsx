import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "30px" }}>
      OOPS! 404 Error Page Not Found <br />{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back To Home
      </button>
    </div>
  );
}

export default Error;
