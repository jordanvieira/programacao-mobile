import React from 'react';
import { View, Text, Image } from 'react-native';

// criando componente principal
export default function App() {
  // definindo variaveis
  let nome = 'Campus XX - Castanhal';

  return (
    <View>
      <Text>Olá Mundo!!!!</Text>
      <Text>Meu Primeiro App</Text>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}> UEPA - BES</Text>

       <MostraImagem/> 
       <MostraImagem/> 
       <MostraImagem/> 
      <Text style={{fontSize: 30}}> {nome} </Text>
       <MostraImagem/> 
     </View>
  );
}

//componente image
function MostraImagem() {
  let img = 'https://www.google.com.br/google.jpg'

  return (
    <View>
        <Image
        source={{uri: img}}
        style={{width: 300, height: 300}}
        resizeMode='contain'
      />
     </View>
  );
}

