<template>
  <v-row no-gutters align="center" justify="center" class="fill-height">
    <div v-if="error.statusCode === 404" class="text-center">
      <h1 class="heading-1">
        404
      </h1>
      <h2 class="mb-3">Página não encontrada</h2>
      <NuxtLink to="/">
        Voltar ao início
      </NuxtLink>
    </div>
    <div v-else class="text-center">
      <h1>
        {{ otherError }}
      </h1>
      <NuxtLink @click="goBackHome()">
        Voltar ao início
      </NuxtLink>
    </div>
    <v-img
      v-if="isHydrated && $vuetify.breakpoint.mdAndUp"
      :src="$representers.getAssetsImage('error_image_2.png')"
      alt="Profile picture"
      class="alien"
      contain
      width="291"
    />
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isHydrated: false,
      pageNotFound: '404 Página não econtrada',
      otherError: 'Um erro ocorreu',
    }
  },
  mounted() {
    this.isHydrated = true
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  goBackHome() {
    location.reload()
    this.$router.push('/')
  },
}
</script>

<style scoped>
.fill-height {
  height: calc(100vh - 124px);
  position: relative;
}

.alien {
  position: absolute;
  bottom: 0;
  right: 0;
}

.heading-1 {
  font-size: 72px;
}
</style>
