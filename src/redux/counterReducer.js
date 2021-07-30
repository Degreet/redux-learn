import { CHANGE_THEME, DECREMENT, INCREMENT, UPDATE_LOADING } from './types'
import { combineReducers } from 'redux'

const initialThemeState = {
  value: 'light',
}

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }
    default:
      return state
  }

  return state
}

function loadingReducer(state = false, action) {
  switch (action.type) {
    case UPDATE_LOADING:
      return action.payload
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  loading: loadingReducer,
})
