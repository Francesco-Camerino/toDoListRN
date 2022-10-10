/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Input from './components/input/input';
import FlatListBasics from './components/list/list';
import styles from './components/list/style';
import OpacityButton from './components/opacity-button/opacity-button';
import IList from './interface/ilist';
import style from './style';



let idCounter = 0;

const App = () => {
  const [toDo, setToDo] = useState<string>('');
  const [prezzo, setPrezzo] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

  let [toDoList, setToDoList] = useState<IList[]>([]);

  useEffect(() => {
    setDisable(!toDo || !prezzo);
  }, [toDo, prezzo])

  const onPressButton = () => {
    idCounter++;
    const newElement: IList = { id: idCounter, toDoItem: toDo, prezzo: prezzo };
    setToDoList([...toDoList, newElement]);
  }

  return (
    <SafeAreaView style={style.safeAreaView}>
      <Input placeholder='inserire elemento' value={toDo} onChangeText={setToDo} />
      <Input placeholder='prezzo' value={prezzo} onChangeText={setPrezzo} keyboardType={'numeric'} />
      <OpacityButton title='Inserisci' onPress={onPressButton} disabled={disable} />
      <FlatListBasics toDoList={toDoList} />
    </SafeAreaView>
  );
};

export default App;
