import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const CustomImage = styled.Image`
  width: 400px;
  height: 200px;
  margin-bottom: 20px;
`;

const Message = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  width: 80%;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  margin: 0 5px;
  border-radius: 10px;
  overflow: hidden;
`;

const ButtonText = styled.Text`
  padding: 10px;
  text-align: center;
  background-color: #2980b9;
  color: white;
  font-size: 16px;
`;

const Total = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 35px;
`;

const Author = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default function App() {
  const [quantidadeConsumida, setquantidadeConsumida] = useState(0);

  const handleButtonClick = (quantidade) => {
    setquantidadeConsumida(quantidadeConsumida + quantidade);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2980b9" />
      <HeaderText>
        <Title>Água é Saúde</Title>
      </HeaderText>

      <CustomImage source={require('./src/images/watter.png')} />
      <Message>Clique no botão abaixo de acordo com a quantidade de ml consumida</Message>

      <ButtonsContainer>
        <ButtonContainer>
          <TouchableOpacity onPress={() => handleButtonClick(200)}>
            <ButtonText>200 ml</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableOpacity onPress={() => handleButtonClick(300)}>
            <ButtonText>300 ml</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableOpacity onPress={() => handleButtonClick(500)}>
            <ButtonText>500 ml</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
      </ButtonsContainer>

      <Total>Consumo: {quantidadeConsumida} ml</Total>
      <Author>Autor: Jordan Vieira Marvão Moraes</Author>
    </Container>
  );
}
