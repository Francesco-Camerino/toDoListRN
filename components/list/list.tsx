import React, { useState } from 'react';
import { FlatList, ScrollView, Text, View, VirtualizedList } from 'react-native';
import IList from '../../interface/ilist';
import styles from './style';
interface Props {
  toDoList: IList[],
}

const FlatListBasics = ({ toDoList }: Props) => {

  return (

    <View style={styles.container}>
      <FlatList
        data={toDoList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={[styles.leftItemText, styles.item]}>{item.toDoItem}</Text>
              <Text style={[styles.rightItemText, styles.item]}>prezzo: {item.prezzo}</Text>
            </View>
          )
        }

        }
      />
    </View>
  );
}

export default FlatListBasics;