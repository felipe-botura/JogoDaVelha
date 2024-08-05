import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Figura({ vetor, posicao, clicado }) {
  const getIcon = () => {
    if (vetor[posicao] !== 0) {
      return vetor[posicao] ? "github" : "cross";
    }
    return "pencil";
  }

  return (
    <TouchableOpacity onPress={clicado}>
      <Entypo name={getIcon()} size={80} color="#000" />
    </TouchableOpacity>
  )
}
