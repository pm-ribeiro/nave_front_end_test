export const state = () => ({
  dialogId: null,
})

export const mutations = {
  open(state, dialogId) {
    state.dialogId = dialogId
  },
  close(state) {
    state.dialogId = null
  },
}

export const actions = {
  open(context, payload) {
    context.commit('open', payload)
  },
  close(context) {
    context.commit('close')
  },
}

export const strict = false
