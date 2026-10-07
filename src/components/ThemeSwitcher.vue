<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColorMode, useStorage } from '@vueuse/core'
import type { BasicColorSchema } from '@vueuse/core'
import {
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import { Check, Monitor, Moon, Sun } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const { t } = useI18n()
const menuOpen = ref(false)

const preference = useStorage<BasicColorSchema>('theme', 'auto', undefined, {
  writeDefaults: false,
  serializer: {
    read: value => value === 'light' || value === 'dark' ? value : 'auto',
    write: value => value,
  },
  onError: () => {
    // Theme switching still works for this visit if storage is blocked or full.
  },
})

const { store: theme } = useColorMode({
  storageRef: preference,
  modes: { light: '' },
})

const themeOptions = [
  { value: 'light', icon: Sun },
  { value: 'dark', icon: Moon },
  { value: 'auto', icon: Monitor },
] as const

const currentIcon = computed(() => themeOptions.find(option => option.value === theme.value)?.icon ?? Monitor)
const switchLabel = computed(() => t('theme.switch', { mode: t(`theme.${theme.value}`) }))

function setTheme(value: string) {
  if (value === 'light' || value === 'dark' || value === 'auto') {
    theme.value = value
  }
}
</script>

<template>
  <Tooltip :disabled="menuOpen">
    <DropdownMenuRoot v-model:open="menuOpen">
      <DropdownMenuTrigger as-child>
        <TooltipTrigger as-child>
          <Button variant="ghost" size="icon" class="h-9 w-9">
            <component :is="currentIcon" class="h-5 w-5" aria-hidden="true" />
            <span class="sr-only">{{ switchLabel }}</span>
          </Button>
        </TooltipTrigger>
      </DropdownMenuTrigger>
      <TooltipContent v-if="!menuOpen">
        <p>{{ switchLabel }}</p>
      </TooltipContent>

      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          :side-offset="4"
          :aria-label="t('theme.label')"
          class="z-50 min-w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          <DropdownMenuRadioGroup :model-value="theme" @update:model-value="setTheme">
            <DropdownMenuRadioItem
              v-for="option in themeOptions"
              :key="option.value"
              :value="option.value"
              class="relative flex cursor-pointer select-none items-center gap-2 rounded-sm py-2 pl-8 pr-3 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
            >
              <DropdownMenuItemIndicator class="absolute left-2 flex items-center justify-center">
                <Check class="h-4 w-4" aria-hidden="true" />
              </DropdownMenuItemIndicator>
              <component :is="option.icon" class="h-4 w-4" aria-hidden="true" />
              <span>{{ t(`theme.${option.value}`) }}</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  </Tooltip>
</template>
