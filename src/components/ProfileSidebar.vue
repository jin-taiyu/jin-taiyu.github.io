<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { MapPin, Github, Mail, FileDown } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
    <Avatar class="h-48 w-48 border-4 border-white ring-1 ring-gray-200">
      <AvatarImage src="/profile.png" :alt="t('profile.name')" />
      <AvatarFallback class="text-6xl bg-muted">JT</AvatarFallback>
    </Avatar>
    
    <div class="space-y-1">
      <h1 class="text-xl font-bold">{{ t('profile.name') }}</h1>
      <p class="text-sm text-muted-foreground">{{ t('profile.title') }}</p>
    </div>

    <Separator class="my-4" />

    <div class="space-y-3 text-sm w-full">
      <div class="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
        <MapPin class="h-4 w-4" />
        <span>{{ t('profile.location') }}</span>
      </div>
      <div class="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <Github class="h-4 w-4" />
        <a href="https://github.com/jin-taiyu" target="_blank" rel="noopener noreferrer">jin-taiyu</a>
      </div>
      <div class="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
        <Mail class="h-4 w-4" />
        <a href="mailto:taiyujin@outlook.com" class="hover:underline">taiyujin@outlook.com</a>
      </div>

      <Separator class="my-4" />
      
      <div class="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <FileDown class="h-4 w-4" />
        <a href="/resume.pdf" download class="hover:underline">{{ t('profile.resume') }}</a>
      </div>
    </div>
  </div>
</template>
