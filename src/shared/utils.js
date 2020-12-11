import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

export const saveFile = async (obj) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        let fileUri = FileSystem.documentDirectory + "console.txt";
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(obj), { encoding: FileSystem.EncodingType.UTF8 });
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync("Download", asset, false)
    }
}

export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }
  
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }
export const insertInsuranceNameAndIcon = (policy_type, active_premium_interval) => {
    switch(policy_type){
        case 'life':
            return {
                policyTitle:'Life Insurance',      
                iconColor: '#E72614',
                icon: 'heart-pulse',  
                policyTypeColor: '#005DBE',
                interval: capitalizeFirstLetter(active_premium_interval)
            }
        case 'health':
            return {
                policyTitle:'Health Insurance',
                iconColor: '#00AC49',
                icon: 'account-heart',  
                policyTypeColor: '#005DBE',
                interval: capitalizeFirstLetter(active_premium_interval)
            }
        case 'home':
            return {
                policyTitle:'Home Insurance',
                iconColor: '#EBC50E',
                icon: 'home',
                policyTypeColor: '#005DBE',
                // policyTypeColor: '#EBC50E',
                interval: capitalizeFirstLetter(active_premium_interval)
            }
        case 'car':
            return {
                policyTitle:'Car Insurance',
                iconColor: '#005DBE',
                icon: 'car',
                policyTypeColor: '#005DBE',
                // policyTypeColor: '#00AC49',
                interval: capitalizeFirstLetter(active_premium_interval)

            }
        case 'vul':
            return {
                policyTitle:'Variable Universal Life Insurance',
                icon: 'heart-pulse',
                iconColor: '#E72614',
                policyTypeColor: '#005DBE',
                // policyTypeColor: '#E72614',/
                interval: capitalizeFirstLetter(active_premium_interval)
              }                

    }
}

const numberToString = number =>
  typeof number === 'string' ? number : number.toString();

export const currencyFormatter = number =>
  numberToString(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatDate = (date, format) => {
return `${
    date
    ? moment(date, 'YYYY-MM-DD').format(
        format ? format : 'MM/DD/YYYY'
    )
    : ''
    }`;
};
export const capitalizeFirstLetter = (string) => {
    
    return string
        ? string.charAt(0).toUpperCase() + string.slice(1).replace('_',' ')
        : 'Detail to be added by insurance company'
    
}

export const returnInsuranceInterval = (active_premium_interval) => {
    switch(active_premium_interval){
        case 'life':
            return 'Life Insurance'
        case 'health':
            return 'Health Insurance'
        case 'home':
            return 'Home Insurance'
        case 'car':
            return 'Car Insurance'
        case 'vul':
            return 'Variable Universal Life Insurance'                     

    }
}

export const validateNameAlphaSpace = (name) =>{
    let pattern = /^[a-zA-Z\u00f1\u00d1]*$/
    if(pattern.test(name)){
      return true
    }else {
      return false
    }
}

export const validatePhoneNumber = (number) =>{
    let pattern = /^\+[1-9]{1}[0-9]{3,11}$|^[0][0-9]{10,10}$/
    if(pattern.test(number)){
      return true
    }else {
      return false
    }
}

export const validateCardNumber = number => {
  let pattern = /^[0-9]{16,16}$/g
  if(pattern.test(number)){
      return true
  }else {
      return false
  }
}

export const validateCVC = number => {
  let pattern = /^[0-9]{3,3}$/g
  if(pattern.test(number)){
      return true
  }else {
      return false
  }
}

export const validateUsername = (name) =>{
  let pattern = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{7,11}$/
  if(pattern.test(name)){
    return true
  }else {
    return false
  }
}

export const validateEmail = (name) =>{
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if(pattern.test(name)){
    return true
  }else {
    return false
  }
}


export const validateNumber = number => {
  let pattern = /^[0-9]*$/
  if(pattern.test(number)){
      return true
  }else {
      return false
  }
}

export const getNextPayment = (initDate, interval) => {
  let nextDate = new Date (initDate.valueOf());
  switch(interval){
    case 'one_time':
      nextDate.setDate(nextDate.getDate() + 1);
      break;
    case 'annual':
      nextDate.setYear(nextDate.getFullYear() + 1);
      break;
    case 'semi_annual':
      nextDate.setMonth(nextDate.getMonth() + 6);
      break;
    case 'quarterly':
      nextDate.setMonth(nextDate.getMonth() + 3);
      break;
    case 'monthly':
      nextDate.setMonth(nextDate.getMonth() + 1);
      break;
    default:
      nextDate =  new Date(Date.UTC(0, 0, 1));
      break;
  }    
  return nextDate;
}

export const dateToString = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return(
    year + '-' +
    (month < 10 ? ('0' + month) : month) + '-' +
    (day < 10 ? ('0' + day) : day)
  )
}