import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import {
  Container, 
  Header, 
  HeaderContainer, 
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
} from './styles';
 
export default function Wallet() {
  return (
    <Container>
      <Header colors={['#00ac4a', '#4caf50']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>125.464,90</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={20} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <MaterialCommunityIcons name="bank" size={20} color="#fff" />
              <ActionLabel>Banco</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
    </Container>
  )
}