import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#07121B',
        marginLeft: 10
      }
    })
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
