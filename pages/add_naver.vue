<template>
  <v-row no-gutters align="start" justify="center">
    <v-col cols="12" xl="8" lg="8" class="pa-0 px-8 pt-10">
      <v-row no-gutters align="center" justify="start">
        <v-btn color="primary" text x-large to="/home">
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
            v-model="naver.age"
            label="Idade"
            placeholder="Idade"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.projects"
            label="Projetos"
            placeholder="Projetos que participou"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" xl="6" lg="6" class="pl-lg-4">
          <v-text-field
            v-model="naver.job"
            label="Cargo"
            placeholder="Cargo"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="naver.timeOfWork"
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
        <v-btn color="primary" tile depressed width="176" @click="saveNaver()">
          Salvar
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      naver: {
        name: '',
        age: '',
        job: '',
        projects: '',
        timeOfWork: '',
        avatarUrl: '',
      },
    }
  },
  methods: {
    saveNaver() {
      console.log(this.naver)
    },
  },
}
</script>
