import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";

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