<template>
  <!-- login page -->
  <v-row no-gutters align="center" justify="center">
    <v-sheet outlined tile width="448" height="408" class="px-8 py-10">
      <v-row no-gutters align="center" justify="center">
        <img
          src="@/assets/images/nave_logo.svg"
          alt="Nave"
          class="mb-10 mx-auto"
        />
      </v-row>

      <v-text-field
        class="login__fields"
        label="E-mail"
        placeholder="E-mail"
        outlined
      ></v-text-field>

      <v-text-field
        class="login__fields"
        label="Senha"
        placeholder="Senha"
        outlined
      ></v-text-field>

      <v-btn color="primary" depressed tile width="384" dark to="/home">
        entrar
      </v-btn>
    </v-sheet>
  </v-row>
</template>

<style lang="scss" scoped>
.login__fields {
  width: 384px;
}
</style>
