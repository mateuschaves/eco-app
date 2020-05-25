import React from 'react';

import { StatusBar } from 'react-native';

import SearchInput from '~/components/SearchInput';
import PlasticCard from '~/components/PlasticCard';
import MetalCard from '~/components/MetalCard';
import GlassCard from '~/components/GlassCard';

import { Container, Title, Cards } from './styles';

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

      <Cards
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <PlasticCard />
        <MetalCard />
        <GlassCard />
      </Cards>
    </Container>
  )
}
