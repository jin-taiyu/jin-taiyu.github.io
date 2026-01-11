<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-vue-next'

const { locale } = useI18n()

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleLocale" :title="locale === 'zh' ? 'English' : '中文'">
    <Languages class="h-5 w-5" />
    <span class="sr-only">{{ locale === 'zh' ? 'English' : '中文' }}</span>
  </Button>
</template>
