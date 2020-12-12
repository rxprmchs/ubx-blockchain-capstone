import React from 'react'
import { REVIEWS } from '../routes.js'
import {
  getData
} from '../utils.js'
 
const getReviews = async (user_id) => {

  let url = `${REVIEWS}/user/${user_id}/`
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


export default getReviews

