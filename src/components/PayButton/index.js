import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <Container onPress={onPress} >
      <Button
        colors={
          focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']
        }
        focused={focused}
      >

        <MaterialIcons 
          name="attach-money" 
          size={30} 
          color={focused ? '#000' : '#fff'} 
        />

        <Label focused={focused}>Pagar</Label>
      </Button>
    </Container>
  )
}