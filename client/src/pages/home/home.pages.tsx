import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.styles.css";
import { LaunchCard } from "../../components";
import { Link } from "react-router-dom";
import { DOWN } from "../../assets";

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

const Home = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launchpads")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  const topThreeLaunches = data?.slice(0, 3);
  console.log(topThreeLaunches);

  return (
    <div className="pages">
      <div className="home-page-bg"> </div>
      <div className="hero-content">
        <div>
          <p>UPCOMING EVENTS</p>
          <h1>SPACEX</h1>
          <img src={DOWN} alt="" />
        </div>
      </div>
      <div className="section-2">
        <div className="top-launch">
          <h1>TOP SPACEX LAUNCHES</h1>
        </div>
      </div>
      <div className="launch-content">
        <div className="top-3-launches">
          {topThreeLaunches.map((TopLaunch: LaunchInterface) => (
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

export default Home;
