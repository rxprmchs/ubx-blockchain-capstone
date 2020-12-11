import React, {useState, useEffect} from 'react'
import { POLICYINFODATA } from '../routes.js'
import {
  insertInsuranceNameAndIcon,
  currencyFormatter,
  formatDate,
  getData
} from '../utils.js'
 
const getPolicyInfoData = async (param) => {

  let policyID = `/${param.policyID}/all`;
  let url = `${POLICYINFODATA}${policyID}`
  let key = await getData('key');

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
export default getPolicyInfoData;