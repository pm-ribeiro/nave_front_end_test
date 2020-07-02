<template>
  <v-card tile class="pa-8">
    <v-card-title class="pa-0 headline d-flex justify-center">
      Excluir Naver
    </v-card-title>
    <v-card-text class="pa-0 mt-10 mb-12 px-6">
      Tem certeza que deseja excluir este Naver?
    </v-card-text>
    <v-card-actions class="pa-0 d-flex align-center justify-center">
      <v-btn
        color="primary"
        tile
        outlined
        width="156"
        class="mr-4"
        @click="$dialog.close()"
      >
        cancelar
      </v-btn>
      <v-btn
        color="primary"
        tile
        depressed
        width="156"
        class="ml-4"
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
