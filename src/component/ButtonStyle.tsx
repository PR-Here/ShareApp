import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onPress: () => void;
  colors: string[];
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const GradientButton: React.FC<Props> = ({ title, onPress, colors, containerStyle, titleStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <LinearGradient colors={colors} style={[styles.button, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

export default GradientButton;
