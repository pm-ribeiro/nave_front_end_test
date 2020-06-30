<template>
  <v-card tile height="560" class="pa-0">
    <v-row
      no-gutters
      align="start"
      justify="space-between"
      style="height: 100%; border: 2px solid green;"
    >
      <v-col
        cols="6"
        class="pa-0"
        style="height: 100%; border: 2px solid orange;"
      >
        <img
          slot="activator-button"
          src="@/assets/images/profile_pic.png"
          alt="Profile Picture"
          height="550"
        />
      </v-col>
      <v-col
        cols="6"
        class="pa-3"
        style="height: 100%; border: 2px solid orange;"
      >
        <v-row no-gutters align="center" justify="end">
          <v-btn icon small @click="$dialog.close()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <h2>
          Nome
        </h2>
        Fulano

        <h4 class="mt-6">
          Idade
        </h4>
        XXXX

        <h4 class="mt-6">
          Tempo de empresa
        </h4>
        XXXX

        <h4 class="mt-6">
          Projetos que participou
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur,</p>

        <!-- card actions -->
        <v-row no-gutters align="center" justify="start" class="mt-12">
          <v-btn icon small color="primary" class="mr-2" @click="deleteNaver()">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon small color="primary" @click="editNaver()">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
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
  methods: {},
}
</script>

<style lang="scss"></style>
