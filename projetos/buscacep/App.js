import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState('');

  const inputRef = useRef(null);

  async function buscar() {
    if (cep == '') {
      alert('Digite um CEP válido');
      return;
    }
     
    try {
    const response = await api.get(`/${cep}/json`);

    setCepUser(response.data);

    Keyboard.dismiss();
    } catch (error) {
      console.log('ERRO: ' + error);
    }
  }

  function limpar() {
    // Limpa o input
    setCep('');

    // Limpa o resultado
    setCepUser('');

    // Foca no input
    inputRef.current.focus();
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 01310-100"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          maxLength={9}
          ref={inputRef}
          />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#1d75cd' }]}
          onPress={buscar}>

          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#cd1d1d' }]}
          onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>


        {cepUser.cep &&
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
        }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22,
  }
});
