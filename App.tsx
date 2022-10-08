/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, type PropsWithChildren } from 'react';
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

let idCounter = 3;

const App = () => {
  const [toDo, setToDo] = useState<string>('');
  const [prezzo, setPrezzo] = useState<string>('');
  
  let [toDoList, setToDoList] = useState([
    {
      id: 1,
      toDoItem: 'item1',
      prezzo: '10'
    },
    {
      id: 2,
      toDoItem: 'item2',
      prezzo: '20'
    },
    {
      id: 3,
      toDoItem: 'item3',
      prezzo: '30'
    }
  ]) ;


  const onPressButton = () => {
    idCounter++;
    setToDoList([...toDoList, {id: idCounter, toDoItem: toDo, prezzo: prezzo}]);
  }
  return (
    <SafeAreaView style= {{flex: 3}}>
      <Input placeholder='inserire elemento' value={toDo} onChangeText={setToDo} />
      <Input placeholder='prezzo' value={prezzo} onChangeText={setPrezzo} keyboardType={'numeric'}/>
      {toDo && prezzo && <OpacityButton title='Inserisci' onPress={onPressButton} />}
      <FlatListBasics toDoList={toDoList}/>

    </SafeAreaView>
  );
};

export default App;
