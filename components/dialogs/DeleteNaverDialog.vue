<template>
  <v-card tile class="pa-8" style="border: 1px solid blue;">
    <v-card-title class="pa-0 mb-6" style="border: 1px solid red;">
      Excluir Naver
    </v-card-title>
    <v-card-text class="pa-0 mb-8" style="border: 1px solid red;">
      Tem certeza que deseja excluir este Naver?
    </v-card-text>
    <v-card-actions class="pa-0" style="border: 1px solid red;">
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
        @click="confirmDelete()"
      >
        excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    naverData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    confirmDelete() {
      console.log('confirmado')
    },
  },
}
</script>

<style lang="scss"></style>
