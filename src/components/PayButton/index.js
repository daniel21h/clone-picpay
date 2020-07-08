import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Button, Label } from './styles';

export default function PayButton() {
  return (
    <Container>
      <Button>
        <MaterialIcons name="attach-money" size={30} color="#fff" />
        <Label>Pagar</Label>
      </Button>
    </Container>
  )
}