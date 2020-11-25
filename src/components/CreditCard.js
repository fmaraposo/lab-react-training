import React from 'react';


function CreditCard (props) {
    
    let image = "";
    let type = props.type;
    let number = props.number;
    let owner = props.owner;
    let bank = props.bank;
    let month = props.expirationMonth;
    let year = props.expirationYear;

    if(type === "Visa") {
        image = "https://image.flaticon.com/icons/png/128/825/825510.png"
    } else if (type === "Master Card") {
        image = "http://collectionpng.com/images/1672.png";
    }

    return(
        <div className = "CreditCard" style= {{backgroundColor:props.bgColor,color:props.color, width:"250px", height:"150px"}}>
        <img src={image} style={{width: "20%", height: "20%"}} alt="creditCard"/>
        <h3>{number.replace(/.(?=.{4})/g, 'x')}</h3>
        <h4>Expires {month}/{year} {bank}</h4>
        <h4>{owner}</h4>
        </div>
    )
}
   



export default CreditCard;