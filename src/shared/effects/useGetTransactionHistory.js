import React from 'react'
import { TRANSAC_HIST } from '../routes.js'
import {
  getData
} from '../utils.js'
 
const getTransactionHistory = async (insuree_id) => {

  let url = `${TRANSAC_HIST}/${insuree_id}/transactions`
  const key = await getData("key");
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


export default getTransactionHistory

