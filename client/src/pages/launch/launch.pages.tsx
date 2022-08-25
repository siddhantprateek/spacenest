import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./launch.styles.css";
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

const Launch = () => {
  const { launchId } = useParams<any>();
  const [data, setData] = useState<LaunchInterface>();
  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/launchpads/${launchId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, [launchId]);
  console.log(launchId);
  return (
    <div className="launch-page">
      <div className="launch-header">
        <h1>{data?.name}</h1>
      </div>
      <img className="launch-thumb" src={data?.images.large} alt="" />
      <div className="thumb-cover"></div>
      <div className="launch-content-data">
        <div className="launch-content-details">
          <h1>{data?.full_name}</h1>
          <p>{data?.details}</p>
        </div>
      </div>
      <div className="other-contents">
        <div className="content-dim">
          <div className="lnh-attempts box">
            <h2>Launch Attempts</h2>
            <p>{data?.launch_attempts}</p>
          </div>
          <div className="lnh-succ box">
            <h2>Launch Successes</h2>
            <p>{data?.launch_successes}</p>
          </div>
        </div>
      </div>
      <div className="other-contents">
        <div className="lnh-local box">
          <h2>Locality</h2>
          <p>{data?.locality}</p>
        </div>
        <div className="program-status box">
          <h2>Program Status</h2>
          <p>{data?.status}</p>
        </div>
      </div>
      <div className="other-contents">
        <div className="lnh-long box">
          <h2>Longitude</h2>
          <p>{data?.longitude}</p>
        </div>
      </div>
    </div>
  );
};

export default Launch;
