import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LaunchCard } from "../../components";

import "./launches.styles.css";

interface LaunchInterface {
  images: {
    large: string;
  };
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  rockets: [string];
  timezone: string;
  launches: [string];
  status: string;
  details: string;
  id: string;
}

const Launches = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launchpads")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="launches-page">
      <div className="section-2">
        <div className="top-launch">
          <h1>ALL SPACEX LAUNCHES</h1>
        </div>
      </div>
      <div className="launch-content">
        <div className="top-3-launches">
          {data.map((TopLaunch: LaunchInterface) => (
            <Link to={`/launch/${TopLaunch.id}`}>
              <LaunchCard
                images={TopLaunch.images}
                full_name={TopLaunch.full_name}
                region={TopLaunch.region}
                details={TopLaunch.details}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launches;
