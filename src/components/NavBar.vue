<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Github, FileDown } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <TooltipProvider>
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="/" class="flex items-center gap-2 group">
            <span class="font-bold text-xl tracking-tight transition-colors group-hover:text-primary">
              {{ t('nav.title') }}
            </span>
          </a>
        </div>

        <div class="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" class="h-9 w-9" as-child>
                <a href="/resume.pdf" download>
                  <FileDown class="h-5 w-5" />
                  <span class="sr-only">{{ t('profile.resume') }}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ t('profile.resume') }}</p>
            </TooltipContent>
          </Tooltip>

          <LanguageSwitcher />

          <Separator orientation="vertical" class="mx-2 h-6" />

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="ghost" size="icon" class="h-9 w-9" as-child>
                <a href="https://github.com/jin-taiyu" target="_blank" rel="noopener noreferrer">
                  <Github class="h-5 w-5" />
                  <span class="sr-only">{{ t('nav.github') }}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ t('nav.github') }}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  </TooltipProvider>
</template>
