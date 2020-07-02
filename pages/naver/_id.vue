<template>
  <v-row no-gutters align="start" justify="center">
    <v-col cols="12" xl="8" lg="8" class="pa-0 px-8 pt-10">
      <v-row no-gutters align="center" justify="start">
        <v-btn color="primary" text x-large to="/">
          <v-icon left large>mdi-chevron-left</v-icon> Editar Naver
        </v-btn>
      </v-row>
      <v-row no-gutters align="center" justify="center" class="my-8">
        <v-col cols="12" xl="6" lg="6" class="pr-lg-4">
          <v-text-field
            v-model="naver.name"
            label="Nome"
            placeholder="Nome"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.birthdate"
            label="Idade"
            placeholder="Idade"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.project"
            label="Projetos"
            placeholder="Projetos que participou"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" xl="6" lg="6" class="pl-lg-4">
          <v-text-field
            v-model="naver.jobRole"
            label="Cargo"
            placeholder="Cargo"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.admissionDate"
            label="Tempo de empresa"
            placeholder="Tempo de empresa"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.avatarUrl"
            label="Url do avatar"
            placeholder="Url para a foto do Naver"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="end">
        <v-btn color="primary" tile depressed width="176" @click="editNaver()">
          Salvar
        </v-btn>
      </v-row>
    </v-col>

    <v-snackbar v-model="saveNaverSnackbar" multi-line outlined color="success">
      Naver atualizado com sucesso!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="success"
          text
          v-bind="attrs"
          @click="saveNaverSnackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      saveNaverSnackbar: false,
      naverId: this.$route.params.id,
      naver: {
        name: '',
        jobRole: '',
        birthdate: '',
        admissionDate: '',
        project: '',
        avatarUrl: '',
      },
    }
  },
  beforeMount() {
    this.fetchNaver()
  },
  methods: {
    async fetchNaver() {
      console.log(this.naverId)
      try {
        const naver = await this.$axios.get('/navers/' + this.naverId)
        this.naver.name = naver.data.name
        this.naver.jobRole = naver.data.job_role
        this.naver.birthdate = this.$representers.ddmmyyyy(naver.data.birthdate)
        this.naver.admissionDate = this.$representers.ddmmyyyy(
          naver.data.admission_date
        )
        this.naver.project = naver.data.project
        this.naver.avatarUrl = naver.data.url
      } catch (error) {
        console.log(error)
      }
    },
    async editNaver() {
      try {
        await this.$axios.put('/navers/' + this.naverId, {
          job_role: this.naver.jobRole,
          admission_date: this.naver.admissionDate,
          birthdate: this.naver.birthdate,
          project: this.naver.project,
          name: this.naver.name,
          url: this.naver.avatarUrl,
        })

        this.saveNaverSnackbar = true
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
