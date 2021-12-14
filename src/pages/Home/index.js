import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text> Home! </Text>
      <Button
      title="ir para sobre"
      onPress={ () => navigation.navigate('Sobre', { nome: 'Lucas'} )}
      />

      <Button
      title="Ir para contato"
      onPress={ () => navigation.navigate('Contato', { nome: 'Lucas'} )}
      />

      <Button
      title="Muda titulo"
      onPress={ () => navigation.setOptions({title: 'INICIO'})}
      />
    </View>
  );
}