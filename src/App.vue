<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text> {{ $t('hello') }} </v-btn>
      <v-btn to="/about" text> {{ $t('about') }} </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-btn @click="setLang('en')">English</v-btn>
        <v-btn @click="setLang('vi')">Tiếng Việt</v-btn>
        <v-btn @click="setLang('jp')">日本語</v-btn>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores/lang'

const { locale } = useI18n()
const langStore = useLangStore()

function setLang(lang: string) {
  langStore.setLocale(lang)
  locale.value = lang
}
</script>
