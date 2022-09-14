import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {Pressable} from '../fundamentals';
import {IRootState} from '../types';

const History = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state: IRootState) => state);

  const _renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.calculationText}>{item.calculation}</Text>
      <Text style={styles.resultText}>{item.result}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>History</Text>
        <Pressable onPress={() => dispatch({type: 'CLEAR'})}>
          <Text style={styles.clear}>Clear All</Text>
        </Pressable>
        <FlatList data={globalState.history} renderItem={_renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#382b2b',
  },
  content: {
    margin: 24,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 24,
  },
  item: {
    marginBottom: 24,
  },
  calculationText: {
    color: '#bbb',
    fontSize: 18,
  },
  resultText: {
    color: '#fff',
    fontSize: 18,
  },
  clear: {
    color: '#fff',
    textAlign: 'right',
  },
});
