import React from 'react'
import { TEMPLATE_IDS } from '../routes.js'
import {
  getData
} from '../utils.js'
 
const getTemplatedId = async () => {

  let url = `${TEMPLATE_IDS}`
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


export default getTemplatedId

