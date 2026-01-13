<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { MapPin, Github, Mail } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <TooltipProvider>
    <Card class="border-0 shadow-none md:sticky md:top-20">
      <CardContent class="p-0 md:p-4">
        <!-- 移动端：紧凑水平布局 -->
        <div class="flex md:hidden items-start gap-4">
          <!-- 头像 -->
          <div class="relative group flex-shrink-0">
            <Avatar class="h-28 w-28 border-2 border-border shadow-md">
              <AvatarImage src="/profile.png" :alt="t('profile.name')" class="object-cover" />
              <AvatarFallback class="text-3xl bg-muted font-light">JT</AvatarFallback>
            </Avatar>
          </div>
          
          <!-- 信息区 -->
          <div class="flex-1 min-w-0 space-y-2">
            <div>
              <h1 class="text-xl font-bold tracking-tight">{{ t('profile.name') }}</h1>
              <p class="text-sm text-muted-foreground font-medium">{{ t('profile.title') }}</p>
            </div>
            
            <div class="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin class="h-3.5 w-3.5 flex-shrink-0" />
              <span>{{ t('profile.location') }}</span>
            </div>
            
            <!-- 联系方式图标行 -->
            <div class="flex items-center gap-1 pt-1">
              <Tooltip>
                <TooltipTrigger as-child>
                  <a
                    href="https://github.com/jin-taiyu"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <Github class="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger as-child>
                  <a
                    href="mailto:taiyujin@outlook.com"
                    class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <Mail class="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{{ t('profile.sendEmail') }}</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger as-child>
                  <a
                    href="https://orcid.org/0009-0000-0981-4076"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16">
                      <circle cx="128" cy="128" r="120" />
                      <path d="M86 186V79M86 57a10 10 0 1 0 0-0.1" stroke-linecap="round" />
                      <path d="M138 186V79h26c17 0 28 10 28 26s-11 26-28 26h-26" fill="none" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>ORCID</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger as-child>
                  <a
                    href="https://www.scopus.com/authid/detail.uri?authorId=60212220900"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12a4 4 0 1 0 4-4" />
                      <path d="M16 8v8" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Scopus</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <!-- 桌面端：原有垂直布局 -->
        <div class="hidden md:flex flex-col items-start text-left space-y-4">
          <div class="relative group">
            <Avatar class="h-48 w-48 border-2 border-border shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
              <AvatarImage src="/profile.png" :alt="t('profile.name')" class="object-cover" />
              <AvatarFallback class="text-6xl bg-muted font-light">JT</AvatarFallback>
            </Avatar>
          </div>

          <div class="space-y-1.5">
            <h1 class="text-2xl font-bold tracking-tight">{{ t('profile.name') }}</h1>
            <p class="text-sm text-muted-foreground font-medium">{{ t('profile.title') }}</p>
          </div>

          <Separator class="my-2" />

          <div class="space-y-1 text-sm w-full">
            <div class="flex items-center justify-start gap-2.5 text-muted-foreground py-1.5 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors cursor-default">
              <MapPin class="h-4 w-4 flex-shrink-0" />
              <span>{{ t('profile.location') }}</span>
            </div>

            <HoverCard>
              <HoverCardTrigger as-child>
                <a
                  href="https://github.com/jin-taiyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-start gap-2.5 text-muted-foreground py-1.5 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <Github class="h-4 w-4 flex-shrink-0" />
                  <span>jin-taiyu</span>
                </a>
              </HoverCardTrigger>
              <HoverCardContent class="w-72" side="right">
                <div class="flex gap-4">
                  <Avatar class="h-12 w-12">
                    <AvatarImage src="https://github.com/jin-taiyu.png" />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">@jin-taiyu</h4>
                    <p class="text-xs text-muted-foreground">
                      {{ t('profile.githubProfile') }}
                    </p>
                    <div class="flex items-center pt-1">
                      <span class="text-xs text-muted-foreground">
                        {{ t('profile.viewProjects') }}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <Tooltip>
              <TooltipTrigger as-child>
                <a
                  href="mailto:taiyujin@outlook.com"
                  class="flex items-center justify-start gap-2.5 text-muted-foreground py-1.5 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <Mail class="h-4 w-4 flex-shrink-0" />
                  <span>taiyujin@outlook.com</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{{ t('profile.sendEmail') }}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger as-child>
                <a
                  href="https://orcid.org/0009-0000-0981-4076"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-start gap-2.5 text-muted-foreground py-1.5 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16">
                    <circle cx="128" cy="128" r="120" />
                    <path d="M86 186V79M86 57a10 10 0 1 0 0-0.1" stroke-linecap="round" />
                    <path d="M138 186V79h26c17 0 28 10 28 26s-11 26-28 26h-26" fill="none" />
                  </svg>
                  <span>0009-0000-0981-4076</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{{ t('profile.viewOrcid') }}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger as-child>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=60212220900"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-start gap-2.5 text-muted-foreground py-1.5 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors"
                >
                  <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12a4 4 0 1 0 4-4" />
                    <path d="M16 8v8" />
                  </svg>
                  <span>60212220900</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{{ t('profile.viewScopus') }}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  </TooltipProvider>
</template>
