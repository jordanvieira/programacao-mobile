import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import TabelaTelefonica from '@react-native-async-storage/async-storage';

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

const InputContainer = styled.View`
  margin-top: 20px;
  width: 80%;
`;

const Input = styled.TextInput`
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  border-color: #ccc;
  padding: 5px;
`;

const ButtonContainer = styled.View`
  margin-top: 10px;
  width: 80%;
`;

const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #2980b9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

const DividerLine = styled.View`
  margin-top: 10%;
  height: 8px;
  width: 100%;
  background-color: #2980b9;
`;

const ResultText = styled.Text`
  font-size: 18px;
  margin-top: 20px;
`;

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  const handleAddContact = () => {
    if (name.trim() === '' || phone.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const Armazenar = (chave, valor) => {
      TabelaTelefonica.setItem(chave, valor);
    };

    try {
      Armazenar(name, phone);

      setName('');
      setPhone('');

      Alert.alert('Sucesso', 'Contato adicionado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar o contato.');
    }
  };

  const handleSearchContact = async () => {
    if (searchName.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite um nome para buscar.');
      return;
    }

    const Buscar = async (chave) => {
      const valor = await TabelaTelefonica.getItem(chave);
      return valor;
    };

    try {
      const phone = await Buscar(searchName);
      if (phone !== null) {
        setSearchPhone(phone);
      } else {
        Alert.alert('Nome não encontrado', 'O nome buscado não foi encontrado na agenda telefônica.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o contato.');
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#2980b9" />
      <HeaderText>
        <Title>Agenda Telefônica</Title>
      </HeaderText>
      <InputContainer>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Telefone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleAddContact}>
          <ButtonText>Adicionar Contato</ButtonText>
        </Button>
      </ButtonContainer>
      <DividerLine />
      <InputContainer>
        <Input
          placeholder="Buscar por nome"
          value={searchName}
          onChangeText={text => setSearchName(text)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleSearchContact}>
          <ButtonText>Buscar Telefone</ButtonText>
        </Button>
      </ButtonContainer>
      {searchPhone !== '' && <ResultText>Telefone: {searchPhone}</ResultText>}
    </Container>
  );
}
