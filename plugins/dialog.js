import Vue from 'vue'

export default ({ store }) => {
  Vue.prototype.$dialog = {
    open: (dialogId) => {
      store.commit('dialog/open', dialogId)
    },
    close: () => {
      store.commit('dialog/close')
    },
    id: () => store.state.dialog.dialogId,
  }
}
