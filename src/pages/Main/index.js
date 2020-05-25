import React from 'react';


import { StatusBar } from 'react-native';

import { Container, Title } from './styles';

export default function Main() {

  return (
    <Container>
      <StatusBar
        backgroundColor="#ffffff"
      />
      <Title>
        Selective Waste Collection
      </Title>
    </Container>
  )
}
