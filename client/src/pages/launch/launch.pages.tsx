import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

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
  const { launchId } = useParams<any>()
  const [ data, setData ] = useState<LaunchInterface>();
    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v4/launchpads/${launchId}`)
        .then((res) => setData(res.data))
        .catch((error) => console.error(error))

    }, [launchId]);
  console.log(launchId)
  return (
    <div className="launch-page">
      <h1>{data?.name}</h1>
      <img className="launch-thumbnail" src={data?.images.large} alt="" />
      <h2>{data?.full_name}</h2>
      <p>{data?.launch_attempts}</p>
      <p>{data?.launch_successes}</p>
      <p>{data?.launches}</p>
      <p>{data?.locality}</p>
      <p>{data?.longitude}</p>
      <p>{data?.region}</p>
      <p>{data?.rockets}</p>
      <p>{data?.timezone}</p>
      <p>{data?.status}</p>
    </div>
  );
};

export default Launch;
