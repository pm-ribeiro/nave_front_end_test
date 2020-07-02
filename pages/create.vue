<template>
  <v-form ref="form" lazy-validation>
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
              :rules="[
                $validations.required(),
                $validations.minFieldLength(naver.name, 3),
              ]"
            ></v-text-field>
            <v-text-field
              v-model="naver.birthdate"
              v-mask="$validations.masks.date"
              label="Data de nascimento"
              placeholder="Data de nascimento (DD/MM/AAAA)"
              hint="DD/MM/AAAA"
              outlined
              :rules="[$validations.required(), $validations.date()]"
              class="my-3"
            ></v-text-field>
            <v-text-field
              v-model="naver.project"
              label="Projetos"
              placeholder="Projetos que participou"
              outlined
              :rules="[$validations.required()]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" xl="6" lg="6" class="pl-lg-4">
            <v-text-field
              v-model="naver.jobRole"
              label="Cargo"
              placeholder="Cargo"
              outlined
              :rules="[
                $validations.required(),
                $validations.minFieldLength(naver.name, 3),
              ]"
            ></v-text-field>
            <v-text-field
              v-model="naver.admissionDate"
              v-mask="$validations.masks.date"
              hint="DD/MM/AAAA"
              label="Data de admissão"
              placeholder="Data de admissão (DD/MM/AAAA)"
              outlined
              :rules="[$validations.required(), $validations.date()]"
              class="my-3"
            ></v-text-field>
            <v-text-field
              v-model="naver.avatarUrl"
              label="Url do avatar"
              placeholder="http://..."
              outlined
              :rules="[
                $validations.required(),
                $validations.minFieldLength(naver.name, 5),
                $validations.validURL(naver.avatarUrl),
              ]"
            >
              <template v-slot:append>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      color="primary"
                      class="mt-n1"
                      v-on="on"
                      @click="naver.avatarUrl = 'default_avatar'"
                    >
                      <v-icon>mdi-image</v-icon>
                    </v-btn>
                  </template>
                  Usar o avatar padrão
                </v-tooltip>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters align="center" justify="end">
          <v-btn color="primary" tile depressed width="176" @click="validate()">
            Salvar
          </v-btn>
        </v-row>
      </v-col>

      <v-snackbar
        v-model="saveNaverSnackbar"
        multi-line
        color="success"
        :timeout="2000"
      >
        Naver criado com sucesso!

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" to="/">
            Home
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="failSnackbar" multi-line color="warning">
        Existem campos incorretos!

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="failSnackbar = false"
          >
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-form>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask,
  },
  data() {
    return {
      valid: true,
      saveNaverSnackbar: null,
      failSnackbar: false,
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
  watch: {
    // redirect when snackbar closes
    saveNaverSnackbar() {
      if (this.saveNaverSnackbar === false) {
        this.$router.push('/')
      }
    },
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        this.createNaver()
      } else {
        this.failSnackbar = true
      }
    },
    async createNaver() {
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
