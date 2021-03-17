import m from 'mithril'
import css from './style.scss'
import store from '../../store'
import Dropzone from "dropzone"

Dropzone.autoDiscover = false

export default class Posts {
  constructor(vnode) {

  }
  oncreate(vnode) {
    let myDropzone = new Dropzone("#drop-zone")

    myDropzone.on("addedfile", file => {
      console.log(`File added: ${file.name}`);
    })
  }
  view(vnode) {
    return m('form#drop-zone', {
      style: {
        // width: '100vw',
        // height: '100vh',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
      },
      action: '/',
      class: 'dropzone'
    },
      // m('.dropzoneText', 'Drop file')
    )
  }
}