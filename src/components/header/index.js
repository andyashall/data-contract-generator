import m from 'mithril'
import css from './style.scss'
import store from '../../store'
import {setParams, clearParams} from '../../actions'

export default class Header {
  post() {
    let data = {mes: 'hello', doot: 'bar'}
    m.request({
      method: 'POST',
      url: '/api/hello',
      data: data
    })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
  }
  view() {
    return m('.headCont',
      m('.headLeft',
        m('a', {href: '/'}, 'DDT')
      ),
      // m('.headCen', m('input', {onkeyup: (e)=>{store.dispatch(search(e.target.value))} , placeholder: 'Search...'})),
      // m('.headRight', {onclick: this.post}, 'Login / Signup')
    )
  }
}