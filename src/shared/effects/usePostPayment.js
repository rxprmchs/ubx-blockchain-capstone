import React, {useState, useEffect} from 'react'
import { PAYMENT } from '../routes.js'
import {
  insertInsuranceNameAndIcon,
  currencyFormatter,
  formatDate,
  getData
} from '../utils.js'
 
const postPayment = async ({
  insureePolicyID,
  paymentType = 'card',
  payAmount,
  insureeName,
  cardNumber,
  month,
  year,
  cvc
}) => {
  
  const key = await getData("key");
  // const insureePolicyID = await getData("insureePolicyID");

  
  let response = { "error": "Required values missing." }
  

  try {
    if(	
      !insureePolicyID ||	
      !payAmount ||	
      !paymentType ||	
      !insureeName ||	
      !cardNumber ||	
      !month ||	
      !year ||	
      !cvc	
    ) {
      response = { 
        "error": `Missing:
        ${insureePolicyID},
        ${payAmount},
        ${paymentType},
        ${insureeName},
        ${cardNumber},
        ${month},
        ${year},
        ${cvc}
      `}
      return response
    }
    let body = {
      "action": `${paymentType}`,
      "cvc": `${cvc}`,
      "exp_month": `${month}`,
      "exp_year": `${year}`,
      "insuree_policy_id":  Number(insureePolicyID),
      "name": `${insureeName}`,
      "number": `${cardNumber}`,
      "pay_amount": `${payAmount.replace(',','')}`
     }
     console.log('POST Payment body')
     console.log(body)
    //  console.log(JSON.stringify(body))
    // let insuree = `?insuree=${param.insuree}`;
    let url = `${PAYMENT}`
  
    const options =  {
      method: 'POST',
      headers: {
        'Authorization': 'Token ' + key,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }

    let res = await fetch(url, options)
    let json = await res.json()
      // console.log('json')
      // console.log(json)
    // let data = await json.map(item => {   
    //   item.premium_amount_due = currencyFormatter(item.premium_amount_due);
    //   item.premium_last_paid = currencyFormatter(item.premium_last_paid);
    //   item.premium_date_due = formatDate(item.premium_date_due, 'MMMM D, Y');
    //   item.premium_last_date = formatDate(item.premium_last_date, 'MMMM D, Y');
    //   item.policy_id = item.policy? item.policy : item.policy_id;

    //   return {
    //     ...item,
    //     ...insertInsuranceNameAndIcon(item.policy_type),
    //   }
    // });
    console.log('POST Payment RES')
    console.log(json)



    return json;
    
  } catch(err) {
      console.log(err);
      return {'error':err};
  } 

}
export default postPayment;