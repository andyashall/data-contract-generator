import m from 'mithril'

import Header from '../../components/header'
import form from '../../components/form'

export default class Params {
  view() {
    return [m(Header), m(form)]
  } 
}