import { DECREMENT, INCREMENT, CHANGE_THEME, UPDATE_LOADING } from './types'

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function decrement() {
  return {
    type: DECREMENT,
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  }
}

export function updateLoading(isLoading) {
  return {
    type: UPDATE_LOADING,
    payload: isLoading,
  }
}

export function asyncIncrement() {
  return (dispatch) => {
    dispatch(updateLoading(true))

    setTimeout(() => {
      dispatch(increment())
      dispatch(updateLoading(false))
    }, 2000)
  }
}
