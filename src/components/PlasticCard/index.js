import React from 'react'

import PlasticImage from '~/assets/plastic.png'

import { Container, Title, Icon, Image } from './styles';

export default function PlasticCard() {
  return (
    <Container>
      <Title> Plastic </Title>

      <Image
        source={PlasticImage}
      />
    </Container>
  )
}
