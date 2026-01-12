<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const { locale } = useI18n()

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button
        variant="ghost"
        size="sm"
        class="h-9 px-3 font-medium"
        @click="toggleLocale"
      >
        <span class="text-sm">{{ locale === 'zh' ? 'EN' : '中' }}</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>{{ locale === 'zh' ? '切换到英文' : 'Switch to Chinese' }}</p>
    </TooltipContent>
  </Tooltip>
</template>
