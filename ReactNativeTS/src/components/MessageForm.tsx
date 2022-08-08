import React, { memo, useEffect, useRef, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'

interface Message {
  message: string
  date: Date
}

function MessageForm() {
  const [text, setText] = useState<string>('')
  const [lastMessage, setLastMessage] = useState<Message | null>(null)

  const nextId = useRef<number>(1)
  const inputRef = useRef<TextInput | null>(null)

  useEffect(() => {
    // if (!inputRef.current) {
    //   return
    // }

    inputRef.current?.focus()
  }, [])

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
    })

    setText('')

    nextId.current += 1
  }

  return (
    <View>
      <TextInput ref={inputRef} value={text} onChangeText={setText} />

      <Button title="press me" onPress={onPress} />

      {lastMessage && (
        <View>
          <Text>{lastMessage.message}</Text>

          <Text>{lastMessage.date.toLocaleString()}</Text>
        </View>
      )}
    </View>
  )
}

export default memo(MessageForm)
