import React, { memo, useCallback, useReducer } from 'react'
import { View, Text } from 'react-native'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 1,
}

// action 생성시 type 을 쓴다.
type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement'; by: number }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1,
      }
    case 'decrement':
      return {
        value: state.value - action.by,
      }
    default:
      throw new Error('error!')
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onIncrese = useCallback(() => {
    dispatch({ type: 'increment' })
  }, [])

  const onDecrese = useCallback(() => {
    dispatch({ type: 'decrement', by: 1 })
  }, [])

  return (
    <View>
      <Text>{state.value}</Text>

      <Text onPress={onIncrese}>+1</Text>

      <Text onPress={onDecrese}>-1</Text>
    </View>
  )
}

export default memo(Counter)
