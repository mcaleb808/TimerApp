import React, { FunctionComponent } from 'react';
import { Picker, View, Text } from 'react-native';
import styles from './styles';

const createArray = length => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }
  return arr;
};
const availableMinutes: any[] = createArray(10);
const availableSeconds: any[] = createArray(60);

const DatePicker = ({ selectedMin, selectedSec, onChangeMin, onChangeSec }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedMin}
        onValueChange={onChangeMin}
        mode="dropdown"
      >
        {availableMinutes.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>Mins</Text>

      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedSec}
        onValueChange={onChangeSec}
        mode="dropdown"
      >
        {availableSeconds.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>Secs</Text>
    </View>
  );
};

export default DatePicker;
