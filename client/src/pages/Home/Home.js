import React, { useEffect, useState } from "react";
import { TeamCard } from "../../components";
import { getData } from "../../services/userService";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    getData().then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");

    setTimeout(() => {
      history.push("/login");
    }, 1000);
  };

  return (
    <>
      <div className="logout">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="container mt-5">{data && <TeamCard data={data} />}</div>
    </>
  );
}
