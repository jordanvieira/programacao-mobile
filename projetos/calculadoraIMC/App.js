import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function componentName() {
  const [peso, setPeso] = useState(''); // armazena o peso
  const [altura, setAltura] = useState(''); // armazena a altura

  function executarCalculos() {
    const alt = altura / 100; // converte a altura para metros
    const imc = peso / (alt * alt); // calcula o IMC

    if (imc < 18.6) {
      alert('Você está abaixo do peso - IMC ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Você está com o Peso ideal - IMC ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está Levemente acima do peso - IMC ' + imc.toFixed(2));
    } else if (imc >= 34.9) {
      alert('Você está acima do peso - IMC ' + imc.toFixed(2));
    }

    // limpa os campos
    setPeso('');
    setAltura('');

  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu IMC</Text>

      <TextInput 
        style={estilo.input}
        placeholder="Peso (kg)" 
        keyboardType="numeric" 
        value={peso} // valor dentro do componente
        onChangeText={ (peso) => setPeso(peso) } // toda vez que o campo mudar ele é salvo
        />

      <TextInput 
        style={estilo.input} 
        placeholder="Altura (m)" 
        keyboardType="numeric"
        value={altura} // valor dentro do componente
        onChangeText={setAltura} // toda vez que o campo mudar ele é salvo
        />

      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}> 
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20
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
    fontWeight: 'bold'
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    borderRadius: 10
  },

  textoBotao: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold'
  }
})
