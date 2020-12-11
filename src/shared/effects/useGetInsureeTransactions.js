import React from 'react'
import { TRANSACTIONS } from '../routes.js'
import {
  getData
} from '../utils.js'
 
const getInsureeTransactions = async (insuree = 0) => {

  const key = await getData("key");
  const portrait64 = JSON.parse(await getData("portrait64"));
  const frontId64 = JSON.parse(await getData("frontId64"));
  const backId64 = JSON.parse(await getData("backId64"));
  let url = `${TRANSACTIONS}/${insuree}/transactions`
  
  const body = {

  }
  const options =  {
    method: "GET",
    headers: {
      'Authorization': 'Token ' + key,
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  }

  try {
    let res = await fetch(url, options) 
    let json = await res.json()
   
    
    return json;
    
  } catch(err) {
      console.error(err);
      return err;
  }

}


export default getInsureeTransactions

