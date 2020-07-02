<template>
  <v-row no-gutters align="start" justify="center">
    <v-col cols="12" xl="8" lg="8" class="pa-0 px-8 pt-10">
      <v-row no-gutters align="center" justify="start">
        <v-btn color="primary" text x-large to="/">
          <v-icon left large>mdi-chevron-left</v-icon> Adicionar Naver
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
        <v-btn
          color="primary"
          tile
          depressed
          width="176"
          @click="createNaver()"
        >
          Salvar
        </v-btn>
      </v-row>
    </v-col>
    {{ naver }}
    <v-snackbar v-model="saveNaverSnackbar" multi-line outlined color="success">
      Naver criado com sucesso!

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
      naver: {
        name: 'teste',
        jobRole: 'teste',
        birthdate: '19/08/1992',
        admissionDate: '19/08/2018',
        project: 'projeto teste',
        avatarUrl: 'https://picsum.photos/510/300?random',
      },
    }
  },
  methods: {
    async createNaver() {
      console.log(this.naver)
      try {
        await this.$axios.post('/navers', {
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
