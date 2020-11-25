import React from 'react';

function DriverCard(props) {
  let rating = Math.round(props.rating);
  let image = '';
  switch (rating) {
    case 0:
      image = 'no stars for you';
      break;
    case 1:
      image = '*';
      break;
    case 2:
      image = '**';
      break;
    case 3:
      image = '***';
      break;
    case 4:
      image = '****';
      break;
    case 5:
      image = '*****';
      break;
  }
  return (
    <div>
    <div>
        <img src={props.img} alt="Driver">
        </img>
        <h1>{props.name}</h1>
        <h2>{image}</h2>
        <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
    </div>
  );
}

export default DriverCard;