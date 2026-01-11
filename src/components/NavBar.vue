<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="/" class="flex items-center gap-2">
          <span class="font-bold text-xl tracking-tight">
            {{ t('nav.title') }}
          </span>
        </a>
      </div>
      
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <Button variant="ghost" size="icon" as-child>
          <a href="https://github.com/jin-taiyu" target="_blank" rel="noopener noreferrer">
            <Github class="h-5 w-5" />
            <span class="sr-only">{{ t('nav.github') }}</span>
          </a>
        </Button>
      </div>
    </div>
  </header>
</template>
