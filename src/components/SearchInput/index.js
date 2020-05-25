import React from 'react';

import search from '~/assets/search.png';

import { TextInput } from 'react-native';

import { Container, Image, Search } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <Image
        source={search}
      />
      <Search
        placeholder="Search"
      />
    </Container>
  );
}
