import React from 'react'

import MetalImage from '~/assets/metal.png'

import { Container, Title, Icon, Image } from './styles';

export default function PlasticCard() {
  return (
    <Container>
      <Title> Metal </Title>

      <Image
        source={MetalImage}
      />
    </Container>
  )
}
