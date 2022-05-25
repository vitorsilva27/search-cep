import React from 'react'
import { Text } from '../Text'
import { Container } from './style'


export const Modal = () => {
  return (
    <Container>
        <Text type='h2' children='CEP: 06634-000'/>
        <Text type='span' children='Rua Silverstone'/>
        <Text type='span' children='Numero 419'/>
        <Text type='span' children='Jardim São João'/>
        <Text type='span' children='Jandira - SP'/>
    </Container>
  )
}
