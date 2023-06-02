import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`
  color: ${props => props.cor};
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
      <Texto cor="red">Olá Mundo</Texto>
      <Texto cor="black">Outro textoo</Texto>
    </Pagina>
  );
}