import m from 'mithril'
import { resolveConfigFile } from 'prettier'

import Home from './views/home'
import Params from './views/params'
// import Result from './views/result'


m.route(document.body, '/', {
  '/': Home,
  '/params': Params,
  // '/test': Test,
  // '/result': Result
})