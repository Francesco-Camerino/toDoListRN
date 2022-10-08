import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

interface Props {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

function OpacityButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={style.opacityButton}>
        <Text style={style.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default OpacityButton;

