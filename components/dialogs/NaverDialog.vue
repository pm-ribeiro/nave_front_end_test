<template>
  <v-card tile height="560" class="pa-0">
    <v-row no-gutters align="start" justify="space-between">
      <v-col cols="12" xl="6" lg="6" class="pa-0">
        <v-img
          slot="activator-button"
          :src="naver.url"
          alt="Profile picture"
          height="560"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        xl="6"
        lg="6"
        class="pa-3 pl-6"
        style="background-color: white;"
      >
        <v-row no-gutters align="center" justify="end">
          <v-btn icon small @click="$dialog.close()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
        <h2>
          {{ naver.name }}
        </h2>
        {{ naver.job_role }}

        <h4 class="mt-6">
          Data de nascimento
        </h4>
        {{ $representers.ddmmyyyy(naver.birthdate) }}

        <h4 class="mt-6">
          Data de admissão
        </h4>
        {{ $representers.ddmmyyyy(naver.admission_date) }}

        <h4 class="mt-6">
          Projetos que participou
        </h4>
        {{ naver.project }}

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
              :naver="naver"
              @naverDeleted="confirmDeletion()"
            ></DeleteNaverDialog>
          </DefaultDialog>
          <v-btn icon small color="primary" @click="editNaver(naver.id)">
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
    naver: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    confirmDeletion() {
      this.$emit('naverDeleted')
    },
    editNaver(naverId) {
      this.$router.push('/naver/' + naverId)
    },
    // ddmmyyyy(d) {
    //   const date = new Date(d)
    //   return `${('0' + date.getDate()).slice(-2)}/${(
    //     '0' +
    //     (date.getMonth() + 1)
    //   ).slice(-2)}/${date.getFullYear()}`
    // },
  },
}
</script>
