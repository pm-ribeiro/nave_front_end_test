<template>
  <v-col cols="12" class="pa-0 px-8">
    <v-row
      no-gutters
      align="center"
      justify="space-between"
      class="px-4 mb-6 mt-10"
    >
      <h1>Navers</h1>
      <v-btn color="primary" depressed tile width="176" dark to="/create">
        Adicionar Naver
      </v-btn>
    </v-row>
    <v-row no-gutters align="center" justify="start">
      <v-col
        v-for="(naver, index) in navers"
        :key="index"
        cols="12"
        xl="3"
        lg="3"
        class="my-3 px-4"
      >
        <v-sheet tile height="420" class="py-3">
          <DefaultDialog :dialog-width="'1006'">
            <v-img
              id="activator-button"
              slot="activator-button"
              :src="
                naver.url == 'default_avatar'
                  ? $representers.getImage('default_avatar.png')
                  : naver.url
              "
              alt="Profile picture"
              height="285"
            ></v-img>
            <NaverDialog
              slot="content"
              :naver="naver"
              @naverDeleted="deltedSnackbar = true"
            ></NaverDialog>
          </DefaultDialog>
          <h4 class="font-weight-bold text-capitalize mt-2">
            {{ naver.name }}
          </h4>

          <span>{{ naver.job_role }}</span> <br />
          <v-row no-gutters align="center" justify="start" class="mt-2">
            <DefaultDialog :dialog-width="'500'">
              <v-btn
                slot="activator-button"
                icon
                x-small
                color="primary"
                class="mr-2"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <DeleteNaverDialog
                slot="content"
                :naver="naver"
                @naverDeleted="deltedSnackbar = true"
              ></DeleteNaverDialog>
            </DefaultDialog>
            <v-btn icon x-small color="primary" @click="editNaver(naver.id)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <v-snackbar v-model="deltedSnackbar" multi-line color="success">
      Naver excluído com sucesso!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="deltedSnackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      deltedSnackbar: false,
      dialog: false,
      navers: [],
    }
  },
  watch: {
    deltedSnackbar() {
      if (this.deltedSnackbar) {
        this.fetchNavers()
      }
    },
  },
  beforeMount() {
    this.fetchNavers()
  },
  methods: {
    async fetchNavers() {
      try {
        const navers = await this.$axios.get('/navers')
        this.navers = navers.data
      } catch (error) {
        console.log(error)
      }
    },
    editNaver(naverId) {
      this.$router.push('/naver/' + naverId)
    },
  },
}
</script>

<style lang="scss">
#activator-button {
  cursor: pointer;
}
</style>
