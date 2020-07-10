import React from 'react';

import avatar from '../../images/avatar.png';

import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold } from './styles';

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
      </Card>
    </Container>
  )
}