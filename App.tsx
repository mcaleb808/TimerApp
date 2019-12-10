import React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import DatePicker from './Components/DatePicker';
import styles from './styles/App';

const formatNUmber = (number: number) => `0${number}`.slice(-2);

const getRemaining = (time: number) => {
  const minutes: number = Math.floor(time / 60);
  const seconds: number = time - minutes * 60;
  return { minutes: formatNUmber(minutes), seconds: formatNUmber(seconds) };
};

const App: FunctionComponent<{}> = () => {
  let [selectedSeconds, setSeconds]: any = useState('5');
  let [remainingSeconds, setRemSeconds] = useState(selectedSeconds);
  let [stopped, setStop] = useState(false);
  const { minutes, seconds } = getRemaining(remainingSeconds);
  let interval;
  let [isRunning, setRunning] = useState(false);
  let [selectedMinutes, setMinutes]: any = useState('0');

  useEffect(() => {
    setRemSeconds(parseInt(selectedMinutes) * 60 + parseInt(selectedSeconds));
    return () => {
      setRunning(false);
      setRemSeconds(5);
    };
  }, [remainingSeconds <= 0, selectedSeconds, selectedMinutes, stopped]);

  const start = () => {
    setRunning(true);
    console.log(remainingSeconds);

    interval = setInterval(() => {
      setRemSeconds(() => {
        if (remainingSeconds > 0) {
          return (remainingSeconds -= 1);
        } else {
          clearInterval(interval);
          setRemSeconds(remainingSeconds);
        }
        return () => clearInterval(interval);
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isRunning ? (
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
      ) : (
        <DatePicker
          selectedMin={selectedMinutes}
          selectedSec={selectedSeconds}
          onChangeMin={itemValue => {
            setMinutes(itemValue);
          }}
          onChangeSec={itemValue => setSeconds(itemValue)}
        />
      )}

      {isRunning ? (
        <TouchableOpacity
          onPress={() => {
            setRemSeconds(-1);
            return () => clearInterval(interval);
          }}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonStopText]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => start()} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default App;
