import m from 'mithril'

import Header from '../../components/header'
import filePicker from '../../components/filePicker'

export default class Home {
  view() {
    return [m(Header), m(filePicker)]
  } 
}