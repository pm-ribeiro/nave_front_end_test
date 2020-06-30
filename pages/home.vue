<template>
  <v-col cols="12" class="pa-0 px-8">
    <v-row no-gutters align="center" justify="space-between" class="mb-6 mt-10">
      <h1>Navers</h1>
      <v-btn color="primary" depressed tile width="176" dark to="/add_naver">
        Adicionar Naver
      </v-btn>
    </v-row>
    <v-row
      no-gutters
      align="center"
      justify="start"
      style="border: 1px solid red;"
    >
      <v-col
        v-for="(naver, index) in navers"
        :key="index"
        cols="12"
        xl="3"
        lg="3"
        class="my-3"
        style="border: 1px solid blue;"
      >
        <v-sheet outlined tile width="281" height="420" class="py-3">
          <DefaultDialog :dialog-width="'1006'">
            <img
              slot="activator-button"
              src="@/assets/images/profile_pic.png"
              alt="logo"
              height="285"
            />
            <NaverDialog
              slot="content"
              :naver-data="naver"
              @naverDeleted="deltedSnackbar = true"
            ></NaverDialog>
          </DefaultDialog>
          <h4 class="font-weight-bold mt-2">Blue alien</h4>

          <span>Front-end developer</span> <br />
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
                :naver-data="naver"
                @naverDeleted="deltedSnackbar = true"
              ></DeleteNaverDialog>
            </DefaultDialog>
            <v-btn icon x-small color="primary" to="/edit">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <v-snackbar
      id="delete-snackbar"
      v-model="deltedSnackbar"
      multi-line
      outlined
      color="success"
    >
      Naver excluído com sucesso!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="success"
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
      navers: [
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 1',
        },
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 2',
        },
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 3',
        },
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 4',
        },
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 5',
        },
        {
          image: '@/assets/images/profile_pic.png',
          name: 'fulano 6',
        },
      ],
    }
  },
  methods: {},
}
</script>
