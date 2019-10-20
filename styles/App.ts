import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderWidth: 10,
    borderColor: '#89AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  buttonText: {
    color: '#89AAFF',
    fontSize: 45
  },
  timerText: {
    color: '#fff',
    fontSize: 90
  },
  buttonStop: {
    borderColor: '#FF851B'
  },
  buttonStopText: {
    color: '#FF851B'
  }
});

export default styles;
