import React from 'react';

import { StatusBar } from 'react-native';

import SearchInput from '~/components/SearchInput'

import { Container, Title } from './styles';

export default function Main() {

  return (
    <Container>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Title>
        Selective Waste Collection
      </Title>

      <SearchInput />
    </Container>
  )
}
