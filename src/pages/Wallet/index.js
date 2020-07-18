import React from 'react';
import { Switch } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import creditCard from '../../images/credit-card.png';

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
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddContainer,
  AddLabel,
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

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>

              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos
                mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddContainer>
            <Feather name="plus-circle" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>
        </Card>
      </PaymentMethods>
    </Container>
  )
}