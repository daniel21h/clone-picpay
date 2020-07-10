import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions, 
  Option,
  OptionLabel,
} from './styles';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@danielhessel</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Daniel Hessel</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 50,00</Value>

            <Divider />

            <Feather name="lock" size={14} color="#fff" />
            <Date>há 3 horas</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <Feather name="heart" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
}