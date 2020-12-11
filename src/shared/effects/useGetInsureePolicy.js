import React from 'react'
import { INSUREEPOLICIES } from '../routes.js'
import {
  getData
} from '../utils.js'
 
const getInsureePolicy = async (insuree_id) => {

  let url = `${INSUREEPOLICIES}/${insuree_id}/`
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


export default getInsureePolicy

