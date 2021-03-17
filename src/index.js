import m from 'mithril'
import { resolveConfigFile } from 'prettier'

import Home from './views/home'
// import Config from './views/config'
// import Result from './views/result'


m.route(document.body, '/', {
  '/': Home,
  // '/config': Config,
  // '/result': Result
})