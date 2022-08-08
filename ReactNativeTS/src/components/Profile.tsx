import React, { memo } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    width: 100,
    height: 100,
  },
})

interface Props {
  name: string
  image?: string
  isActive?: boolean
  children?: React.ReactNode
}

function Profile({
  name = 'default-text',
  image,
  isActive,
  children,
}: Props) {
  return (
    <View style={isActive && styles.container}>
      <Image style={styles.image} source={{ uri: image }} />

      <Text>{name}</Text>

      <View>{children}</View>
    </View>
  )
}

Profile.defaultProps = {
  isActive: false,
  image: 'https://picsum.photos/200',
  children: () => React.Children,
}

export default memo(Profile)
