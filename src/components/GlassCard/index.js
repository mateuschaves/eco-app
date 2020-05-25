import React from 'react'

import GlassImage from '~/assets/glass.png'

import { Container, Title, Icon, Image } from './styles';

export default function PlasticCard() {
  return (
    <Container>
      <Title> Glass </Title>

      <Image
        source={GlassImage}
      />
    </Container>
  )
}
