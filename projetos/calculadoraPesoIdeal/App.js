import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState('');
  const [pesoIdealAjustado, setPesoIdealAjustado] = useState('');

  function executarCalculos() {
    let pesoIdeal = 0;
    let pesoIdealAjustado = 0;

    if (sexo === 'M') {
      pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else if (sexo === 'F') {
      pesoIdeal = 52 + (0.67 * (altura - 152.4));
    }

    pesoIdealAjustado = ((peso - pesoIdeal) * 0.25) + pesoIdeal;

    setPesoIdeal(pesoIdeal.toFixed(2));
    setPesoIdealAjustado(pesoIdealAjustado.toFixed(2));

    setPeso('');
    setAltura('');
    setSexo('');
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calculadora Peso Ideal</Text>

      <TextInput
        style={estilo.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
      />

      <TextInput
        style={estilo.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
      />

      <TextInput
        style={estilo.input}
        placeholder="Sexo (M/F)"
        value={sexo}
        onChangeText={(sexo) => setSexo(sexo.toUpperCase())}
      />

      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <View>
        {pesoIdeal !== '' && (
          <Text style={estilo.resultado}>Peso Ideal: {pesoIdeal} kg</Text>
        )}
        {pesoIdealAjustado !== '' && (
          <Text style={estilo.resultado}>Peso Ideal Ajustado: {pesoIdealAjustado} kg</Text>
        )}
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    height: 50,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    borderRadius: 10,
  },

  textoBotao: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },

  resultado: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
