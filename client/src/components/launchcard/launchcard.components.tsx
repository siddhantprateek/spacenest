import React from 'react'
interface LaunchInterface {
  images: {
    large: string;
  };
  full_name: string;
  region: string;
  details: string;
}

const Launchcard = (props: LaunchInterface) => {
  return (
    <div className="launch-item">
    <img className="launch-thumbnail" src={props.images.large} alt="" />
    <div className="launch-details">
      <h1>{props.full_name}</h1>
      <p>{props.details.slice(0, 300)}...</p>
      <p>
        <b>
          {props.region}
        </b>
      </p>
    </div>
  </div>
  )
}

export default Launchcard