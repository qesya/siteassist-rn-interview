/*eslint curly: ["error", "multi-line"]*/
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import Big from 'big.js';

import {Flex, Pressable} from '../fundamentals';
import {RootStackParamlist} from '../types';

const DATA = [
  {
    label: 'C',
    type: 'clear',
  },
  {
    label: '%',
    type: 'mod',
  },
  {
    label: 'del',
    type: 'delete',
  },
  {
    label: '/',
    type: 'division',
  },
  {
    label: '7',
  },
  {
    label: '8',
  },
  {
    label: '9',
  },
  {
    label: 'X',
    type: 'multiplication',
  },
  {
    label: '4',
  },
  {
    label: '5',
  },
  {
    label: '6',
  },
  {
    label: '-',
    type: 'subtraction',
  },
  {
    label: '1',
  },
  {
    label: '2',
  },
  {
    label: '3',
  },
  {
    label: '+',
    type: 'addition',
  },
  {
    label: '00',
  },
  {
    label: '0',
  },
  {
    label: '.',
    type: 'comma',
  },
  {
    label: '=',
    type: 'equal',
  },
];

const numColumns = 4;

type HomeScreenProps = NativeStackScreenProps<RootStackParamlist, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const [firstInput, setFirstInput] = useState<string>('');
  const [secondInput, setSecondInput] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [tempResult, setTempResult] = useState<number>();
  const [result, setResult] = useState<number>();

  const handleOperation = (operationVal: string) => {
    setOperation(operationVal);
    if (result) {
      setSecondInput(result.toString());
      setResult(undefined);
      return;
    }
    setSecondInput(firstInput);
    setFirstInput('');
  };

  useEffect(() => {
    if (firstInput && secondInput) {
      let temp: React.SetStateAction<number>;
      switch (operation) {
        case '/':
          temp = Number(Big(secondInput)) + Number(Big(firstInput));
          break;
        case '*':
          temp = Number(Big(secondInput)) + Number(Big(firstInput));
          break;
        case '-':
          temp = Number(Big(secondInput)) + Number(Big(firstInput));
          break;
        case '%':
          temp = Number(Big(secondInput)) + Number(Big(firstInput));
          break;
        default:
          temp = Number(Big(secondInput)) + Number(Big(firstInput));
          break;
      }
      setTempResult(temp);
    }
  }, [firstInput, secondInput, operation]);

  const clear = () => {
    setOperation('');
    setFirstInput('');
    setSecondInput('');
    setTempResult(undefined);
  };

  const handleInput = (value: string, type: string) => {
    let resultInput = '';

    switch (type) {
      case 'clear':
        clear();
        setResult(undefined);
        break;
      case 'comma':
        if (firstInput.includes('.')) return;
        if (!firstInput) {
          resultInput = '0.';
        } else {
          resultInput = firstInput + value;
        }
        break;
      case 'mod':
        if (operation || !firstInput) return;
        handleOperation('%');
        break;
      case 'addition':
        if (operation || !firstInput) return;
        handleOperation('+');
        break;
      case 'division':
        if (operation || !firstInput) return;
        handleOperation('/');
        break;
      case 'multiplication':
        if (operation || !firstInput) return;
        handleOperation('*');
        break;
      case 'subtraction':
        if (operation || !firstInput) return;
        handleOperation('-');
        break;
      case 'equal':
        if (!operation) return;
        resultInput = tempResult.toString();
        dispatch({
          type: 'CALCULATE',
          calculation: secondInput + operation + firstInput,
          result: resultInput,
        });
        clear();
        break;
      case 'delete':
        resultInput = firstInput.slice(0, -1);
        break;
      default:
        resultInput = firstInput + value;
        setResult(undefined);
        break;
    }
    setFirstInput(resultInput);
  };

  const _renderItem = ({item}) => (
    <Pressable
      onPress={() => handleInput(item.label, item.type)}
      style={styles.item}>
      <Text style={styles.label}>{item.label}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperResult}>
        <Flex style={styles.calculation}>
          <Text style={styles.calculationText}>{secondInput}</Text>
          <Text style={styles.calculationText}>{operation}</Text>
          <Text style={styles.calculationText}>{firstInput}</Text>
          {result !== undefined && (
            <Text style={styles.calculationText}>{result}</Text>
          )}
        </Flex>
        {tempResult !== undefined && (
          <Text style={styles.result}>{tempResult}</Text>
        )}
      </View>
      <Pressable
        onPress={() => navigation.navigate('History')}
        style={styles.history}>
        <Text style={styles.historyText}>History</Text>
      </Pressable>
      <View>
        <FlatList
          data={DATA}
          renderItem={_renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#382b2b',
  },
  item: {
    backgroundColor: '#382b2b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    height: 80,
  },
  label: {
    fontSize: 32,
    color: '#fff',
  },
  wrapperResult: {
    flex: 1,
    backgroundColor: '#382b2b',
    justifyContent: 'center',
  },
  calculation: {
    justifyContent: 'flex-end',
  },
  calculationText: {
    fontSize: 56,
    marginHorizontal: 4,
    color: '#fff',
    textAlign: 'right',
  },
  result: {
    textAlign: 'right',
    fontSize: 34,
    color: '#999999',
  },
  history: {
    width: 78,
  },
  historyText: {
    fontSize: 12,
    color: '#fff',
    margin: 16,
  },
});
