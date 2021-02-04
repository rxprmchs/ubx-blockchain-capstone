
import { StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DateTextInput = ({
  format,
  birthDate,
  setBirthDate,
  validBirthdate,
  style,
  placeholder,
  iconSize,
  minimumToday=false
}) => {

  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState();

  const onChange = (event, selectedDate) => {
    setShowCalendar(Platform.OS === 'ios');
    setDate(moment(selectedDate).format(format));
    setBirthDate(moment(selectedDate).format(format));
  };

  const dateLegal = moment().subtract(18, 'years').toDate()
  const dateYesterday = new Date(new Date().setDate(new Date().getDate()-1))
  
  return (
    <View>
      <TouchableOpacity delayPressIn={0}
        activeOpacity={1.0}
        onPress={() => {
          setShowCalendar(true)
          Keyboard.dismiss()
        }}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}
          pointerEvents='none'
        >
          <TextInput
            style={{  ...styles.textInput, flex: 1, }}
            value={date}
            placeholder={placeholder}
          />
      
          <MaterialCommunityIcons
            name="calendar"
            size={iconSize || 25}
            style={styles.calendarIcon}
          />
        </View>
      </TouchableOpacity>
      {showCalendar && <DateTimePicker
        value={new Date(moment(date))}
        mode='date'
        display="default"
        onChange={onChange}
        maximumDate={validBirthdate ? dateYesterday : dateLegal}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarIcon: {
    position: "relative",
    marginLeft: -36,
    paddingRight: 10,
    paddingTop: 8,
    height: '100%',
    color: '#bcbcbc',
  },
  textInput: {
    backgroundColor: "#FBFBFB",
    paddingHorizontal: 10,
    height: 41,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderStyle: "solid",
    borderWidth: 1,
  },
})

export default DateTextInput