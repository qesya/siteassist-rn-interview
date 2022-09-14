import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pressable} from '../fundamentals';

interface Props {
  label: string;
}

const Input = ({label}: Props) => {
  const {text} = styles;
  return (
    <Pressable>
      <Text style={text}>{label}</Text>
    </Pressable>
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    padding: 44,
    fontSize: 24,
  },
});
