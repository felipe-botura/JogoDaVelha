import React from 'react'
import { ToucheableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Figura() {
  return (
    <ToucheableOpacity>
      <Entypo name="circle" size={80} color="#000" />
    </ToucheableOpacity>
  )
}
