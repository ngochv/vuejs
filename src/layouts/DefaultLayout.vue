<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer />

      <template v-if="auth.authStore.isLoggedIn">
        <v-btn to="/" text>
          {{ $t('helloName', { name: auth.authStore.user?.username }) }}
        </v-btn>
        <v-btn to="/about" text>{{ $t('about') }}</v-btn>
        <v-btn text @click="auth.logout">Logout</v-btn>
      </template>

      <template v-else>
        <v-btn to="/login" text>Login</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Language Switch -->
        <v-btn @click="setLang('en')">English</v-btn>
        <v-btn @click="setLang('vi')">Tiếng Việt</v-btn>
        <v-btn @click="setLang('jp')">日本語</v-btn>
      </v-container>

      <!-- Route content -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores/lang'
import { useAuth } from '@/composables/useAuth'

const { locale } = useI18n()
const langStore = useLangStore()
const auth = useAuth()

function setLang(lang: string) {
  langStore.setLocale(lang)
  locale.value = lang
}
</script>
