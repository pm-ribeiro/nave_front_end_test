<template>
  <v-card tile class="pa-8">
    <v-card-title class="pa-0 mb-6">
      Excluir Naver
    </v-card-title>
    <v-card-text class="pa-0 mb-8">
      Tem certeza que deseja excluir este Naver?
    </v-card-text>
    <v-card-actions class="pa-0">
      <v-spacer></v-spacer>
      <v-btn color="primary" tile outlined width="176" @click="$dialog.close()">
        cancelar
      </v-btn>
      <v-btn
        color="primary"
        tile
        depressed
        width="176"
        class="ml-6"
        @click="deteleNaver()"
      >
        excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    naver: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    async deteleNaver() {
      try {
        await this.$axios.delete('/navers/' + this.naver.id)
        this.$dialog.close()
        this.$emit('naverDeleted')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
