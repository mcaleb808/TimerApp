import React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';

import styles from './styles/App';

const formatNUmber = (number: number) => `0${number}`.slice(-2);

const getRemaining = (time: number) => {
  const minutes: number = Math.floor(time / 60);
  const seconds: number = time - minutes * 60;
  return { minutes: formatNUmber(minutes), seconds: formatNUmber(seconds) };
};

const App: FunctionComponent<{}> = () => {
  let interval: any;
  let [remainingSeconds, setRemSeconds] = useState(30);
  let [isRunning, setRunning] = useState(false);
  const { minutes, seconds } = getRemaining(remainingSeconds);

  const start = () => {
    setRemSeconds(remainingSeconds - 1);
    setRunning(true);

    interval = setInterval(() => {
      setRemSeconds((remainingSeconds = remainingSeconds - 1));
    }, 1000);
  };
  // todo: conntinue
  let stop = () => {};

  useEffect(() => {
    return () => {
      clearInterval(interval);
      setRemSeconds(20);
      setRunning(false);
    };
  }, [remainingSeconds < 0]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>

      {isRunning ? (
        <TouchableOpacity
          onPress={() => setRemSeconds(-1)}
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
