import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './redux/counterReducer'
import { asyncIncrement, changeTheme, decrement, increment } from './redux/action'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './styles.css'

const counterEl = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()

  void [addBtn, subBtn, themeBtn, asyncBtn].forEach((btn) => {
    btn.disabled = state.loading
  })

  counterEl.innerText = state.counter.toString()
  document.body.className = state.theme.value
})

store.dispatch({ type: 'SETUP' })
