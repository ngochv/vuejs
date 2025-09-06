<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h4 font-weight-bold">🏠 Home Page</h1>
        <br />
        <h5>{{ t('helloName', { name: 'username' }) }}</h5>
        <p>Welcome to the Home page of your Vue 3 + Vuetify app 🚀</p>

        <v-btn color="primary" @click="goAbout"> Go to About </v-btn>
        <br />
        <br />
        <div class="demo-box bg-primary">
          <p>Style color</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

function goAbout() {
  router.push({ name: 'about' })
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/_variables.scss' as *;

.demo-box {
  border-radius: $border-radius-md;
  padding: $spacing-md;
  color: $color-white;
}
</style>
