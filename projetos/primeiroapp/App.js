import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`

  color:#FF0000;
  font-size: 30px;


`;

export default function App() {
  return (
    <View>
      <Texto>Olá Mundo</Texto>
      <Texto>Outro texto</Texto>
    </View>
  );
}