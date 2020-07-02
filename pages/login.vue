<template>
  <v-row no-gutters align="center" justify="center" class="fill-height">
    <v-sheet outlined tile width="448" min-height="408" class="px-8 py-10">
      <v-img
        :src="$representers.getImage('nave_logo.svg')"
        alt="Nave"
        class="mb-10 mx-4"
      />

      <v-text-field
        v-model="email"
        class="login__fields"
        label="E-mail"
        outlined
        type="email"
        :rules="[$validations.required('e-mail'), $validations.email()]"
      ></v-text-field>

      <v-text-field
        v-model="password"
        class="login__fields my-3"
        label="Senha"
        outlined
        :rules="[$validations.required('senha')]"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-btn color="primary" depressed tile width="384" dark @click="login()">
        entrar
      </v-btn>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login__fields {
  width: 384px;
}
</style>
