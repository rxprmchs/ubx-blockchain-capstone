import React, {useState, useEffect} from 'react'
import { INSUREEPOLICIES } from '../routes.js'
import {
  insertInsuranceNameAndIcon,
  currencyFormatter,
  formatDate,
  getData
} from '../utils.js'
import moment from 'moment'
 
const getUserInsuranceList = async (param, forDashboard=false,isActivePoliciesOnly=false, status=null, countOnly=false) => {

  const key = await getData("key");
  let insuree = `?insuree=${param.insuree}`;
  let url = `${INSUREEPOLICIES}${insuree}`

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

    let filteredPolicies = [];
    let data=[];

    if (countOnly) return json.length;

    if(isActivePoliciesOnly===true && status){
      filteredPolicies = json.filter(policy => policy.status.toLowerCase() == status)
    }

    // console.log('json')
    // console.log(json)
    // console.log('insuree')
    // console.log(insuree)
    
    // console.log('url')
    // console.log(url)

    data = 
      isActivePoliciesOnly === true && status && forDashboard === true
      ? mapIcons(filteredPolicies)
      : isActivePoliciesOnly === true && status && forDashboard === false
      ? filteredPolicies
      : forDashboard === true
      ? mapIcons(json)
      : json

      data = data.sort((a,b)=>moment(a.premium_last_date, "MM-DD-YYYY")-moment(b.premium_last_date, "MM-DD-YYYY"))

      console.log(data)
    return data;
    
  } catch(err) {
      console.error(err);
      return err;
  } 

}


const mapIcons = (arr) => {
  return arr.map(item => {   
    item.premium_amount_due = currencyFormatter(item.premium_amount_due);
    item.premium_last_paid = currencyFormatter(item.premium_last_paid);
    item.premium_date_due = formatDate(item.premium_date_due, 'MMMM D, Y');
    item.premium_last_date = formatDate(item.premium_last_date, 'MMMM D, Y');
    item.policy_id = item.policy? item.policy : item.policy_id;

    return {
      ...item,
      ...insertInsuranceNameAndIcon(item.policy_type, item.active_premium_interval),
    }
  });
}


export default getUserInsuranceList;

