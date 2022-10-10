import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

interface Props {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined
  disabled?: boolean | undefined
}

function OpacityButton({ title, onPress, disabled }: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[style.opacityButton, disabled ? style.disabled : style.enabled]}>
        <Text style={style.text}>{title}</Text>
      </View>
      
    </TouchableOpacity>
  );
}

export default OpacityButton;

