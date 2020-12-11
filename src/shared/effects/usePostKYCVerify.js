import React from 'react'
import { VERIFY_ID } from '../routes.js'
import axios from 'axios'
import {
  getData,
  saveFile
} from '../utils.js'
import { FileLogger } from "react-native-file-logger";


const verifyID = async ({
  portrait64,
  frontId64,
  selectedIdType
}) => {
  // await FileLogger.configure({
    
  // });

  const url = `${VERIFY_ID}/`
  const key = await getData("key");
  // const portrait64 = JSON.parse(await getData('portrait64'));
  // const frontId64 = JSON.parse(await getData('frontId64'));
  // const backId64 = JSON.parse(await getData("backId64"));
  // const templateId = JSON.parse(await getData("selectedIdType"));


  // console.log('frontId64.slice(0,50)')
  // console.log(frontId64.slice(0,50))
  // console.log(JSON.parse(frontId64.slice(0,50)))
  // console.log('templateId.id')
  // console.log(templateId)
  // console.log(typeof portrait64)
  // console.log(typeof frontId64)
  // console.log(typeof selectedIdType)
  console.log(url)

 
  // Save log to default log file "default.log".

  const RCTNetworking = require("react-native/Libraries/Network/RCTNetworking");
  RCTNetworking.clearCookies((result) => {
    console.log('clear cache '+result); //true if successfully cleared
  });
  try {

    let body = {
      template_id: Number(1+ selectedIdType),
      id_image: "data:image/jpeg;base64,"+frontId64 ,
      selfie_image: "data:image/jpeg;base64,"+ portrait64
    }

    // console.log(typeof body)
    // console.log(body.template_id)
    // console.log(typeof body.id_image)
    // console.log(typeof body.selfie_image)

    // FileLogger.info(body)
    // await saveFile(body)
    const options =  {
      url: url,
      method: "post",
      headers: {
        'Authorization': 'Token ' + key,
        // "Accept": "application/json",
        // "Content-Type": "application/json",
      },
      data: 
        body,
      // JSON.stringify(body),
      // timeout: 0
    }
    
    console.log('axios kyc boi')
    // let res = 
    // await fetch(url, options).then(res=>{
      let res = await axios(options)
      console.log('json')
      // console.log(res)

      let json = res.data
      console.log(json)

      return json
    // })

    // // let res = await axios(options)
    // console.log('json')
    // // console.log(res)

    // let json = await res.data
    // console.log(json)
    // return json
    
    
  } catch(err) {
      console.error(err);
      return err;
  }

}


export default verifyID
