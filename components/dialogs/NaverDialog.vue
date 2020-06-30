<template>
  <v-card tile height="560" class="pa-0">
    <v-row no-gutters align="start" justify="space-between">
      <v-col cols="12" xl="6" lg="6" class="pa-0">
        <v-img
          slot="activator-button"
          src="https://picsum.photos/510/300?random"
          alt="Profile picture"
          height="560"
        ></v-img>
        <!-- <img
          slot="activator-button"
          src="@/assets/images/profile_pic.png"
          alt="Profile Picture"
          height="550"
        /> -->
      </v-col>
      <v-col
        cols="12"
        xl="6"
        lg="6"
        class="pa-3"
        style="background-color: white;"
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
          <DefaultDialog :dialog-width="'500'">
            <v-btn
              slot="activator-button"
              icon
              small
              color="primary"
              class="mr-2"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <DeleteNaverDialog
              slot="content"
              :naver-data="naver"
              @naverDeleted="confirmDeletion()"
            ></DeleteNaverDialog>
          </DefaultDialog>
          <v-btn icon small color="primary" to="/edit">
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
  methods: {
    confirmDeletion() {
      this.$emit('naverDeleted')
    },
  },
}
</script>

<style lang="scss"></style>
