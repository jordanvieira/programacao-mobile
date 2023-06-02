import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Texto1 = styled.Text`

  color:#FF0000;
  font-size: 30px;
  background-color: green;

`;
const Texto2 = styled.Text`

  color:#FFFF00;
  font-size: 30px;
  background-color: green;

`;

const Pagina =styled.View`
  background-color: #0000FF;
  flex:1;
  justify-content: center;
  align-items: center;

`;
export default function App() {
  return (
    <Pagina>
      <Texto1>Olá Mundo</Texto1>
      <Texto2>Outro textoo</Texto2>
    </Pagina>
  );
}