import { combineReducers } from 'redux'
import file from './file'
import params from './params'

const app = combineReducers({
  file,
  params
})

export default app