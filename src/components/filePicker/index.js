import m from 'mithril'
import css from './style.scss'
import store from '../../store'

export default class Posts {
  constructor(vnode) {
    let file = ''
  }
  view(vnode) {
    return m('form#drop-zone', {
      style: {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
      },
      action: '/',
      class: 'dropzone'
    },
      m('.dropzoneText', 'Drop file here to start')
    )
  }
}