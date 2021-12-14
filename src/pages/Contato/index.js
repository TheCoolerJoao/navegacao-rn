import React from 'react';
import { Text, View } from 'react-native';

export default function Contato( {route} ) {
  return (
    <View>
      <Text> Contato </Text>
      <Text> Nome:  {route.params.gerente}</Text>
      <Text> Numero:  {route.params.numero}</Text>
    </View>
  );
}