import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import TabelaTelefonica from '@react-native-async-storage/async-storage';

// view que contém todo o conteúdo da tela
const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

// view que contém o título
const HeaderText = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
`;

// texto do título
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

// view que contém os inputs
const InputContainer = styled.View`
  margin-top: 20px;
  width: 80%;
`;

// input de texto
const Input = styled.TextInput`
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  border-color: #ccc;
  padding: 5px;
`;

// view que contém o botão
const ButtonContainer = styled.View`
  margin-top: 10px;
  width: 80%;
`;

// botão
const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #2980b9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// texto do botão
const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

// linha que divide os inputs do botão
const DividerLine = styled.View`
  margin-top: 10%;
  height: 8px;
  width: 100%;
  background-color: #2980b9;
`;

// texto que mostra o resultado da busca
const ResultText = styled.Text`
  font-size: 18px;
  margin-top: 20px;
`;


export default function App() {
  const [name, setName] = useState(''); // variável que armazena o nome do contato
  const [phone, setPhone] = useState(''); // variável que armazena o telefone do contato
  const [searchName, setSearchName] = useState(''); // variável que armazena o nome a ser buscado
  const [searchPhone, setSearchPhone] = useState(''); // variável que armazena o telefone buscado

  // função que adiciona um contato
  const AdicionarContato = () => {
    if (name.trim() === '' || phone.trim() === '') { // verifica se os campos estão vazios
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const Armazenar = (chave, valor) => { // função que armazena o contato
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

  const BuscarContato = async () => { // função que busca um contato
    if (searchName.trim() === '') { // verifica se o campo está vazio
      Alert.alert('Erro', 'Por favor, digite um nome para buscar.'); 
      return;
    }

    const Buscar = async (chave) => {
      const valor = await TabelaTelefonica.getItem(chave);
      return valor;
    };

    try {
      const phone = await Buscar(searchName); // busca o telefone do contato
      if (phone !== null) { // verifica se o contato foi encontrado
        setSearchPhone(phone); // armazena o telefone do contato
      } else {
        Alert.alert('Nome não encontrado');
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
          keyboardType='numeric'
          onChangeText={text => setPhone(text)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={AdicionarContato}>
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
        <Button onPress={BuscarContato}>
          <ButtonText>Buscar Telefone</ButtonText>
        </Button>
      </ButtonContainer>
      {searchPhone !== '' && <ResultText>Telefone: {searchPhone}</ResultText>}
    </Container>
  );
}