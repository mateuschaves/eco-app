import React from 'react';

import { StatusBar, ScrollView } from 'react-native';

import SearchInput from '~/components/SearchInput';
import PlasticCard from '~/components/PlasticCard';

import { Container, Title } from './styles';

export default function Main() {

  return (
    <Container>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Title
        fontSize={34}
      >
        Selective Waste Collection
      </Title>

      <SearchInput />

      <Title
        fontSize={27}
      >
        Choose a category
      </Title>

      <ScrollView>
        <PlasticCard />
      </ScrollView>
    </Container>
  )
}
