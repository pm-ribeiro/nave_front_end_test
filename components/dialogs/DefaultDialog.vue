<template>
  <v-dialog v-model="dialog" :width="dialogWidth">
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <slot name="activator-button"></slot>
      </div>
    </template>
    <slot :dialog="dialog" name="content"></slot>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogWidth: {
      type: String,
      default: '500',
    },
  },
  data() {
    return {
      dialog: false,
      dialogId: this._uid,
    }
  },
  computed: {
    storeDialog() {
      return this.$dialog.id()
    },
  },
  watch: {
    dialog(open) {
      if (open) {
        this.$dialog.open(this.dialogId)
      } else {
        this.$emit('dialogClosed')
      }
    },
    storeDialog(dialogId) {
      if (dialogId !== this.dialogId) {
        this.dialog = false
      }
    },
  },
}
</script>
