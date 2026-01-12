<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { BookOpen, FileCode, ExternalLink } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section id="about" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">{{ t('main.about.title') }}</h2>
      <p class="text-muted-foreground leading-7">
        {{ t('main.about.content') }}
      </p>
    </section>

    <Separator />

    <section id="research" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">{{ t('main.research.title') }}</h2>
      <div class="flex flex-wrap gap-2">
        <Badge variant="secondary" class="px-3 py-1">{{ t('main.research.dataAnalysis') }}</Badge>
        <Badge variant="secondary" class="px-3 py-1">{{ t('main.research.machineLearning') }}</Badge>
      </div>
    </section>

    <Separator />

    <section id="publications" class="space-y-6 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">{{ t('main.publications.title') }}</h2>

      <div class="space-y-6">
        <!-- Journal Papers -->
        <div class="space-y-4">
          <h3 class="text-base font-medium text-muted-foreground flex items-center gap-2">
            <BookOpen class="h-4 w-4" />
            {{ t('main.publications.journalPapers') }}
          </h3>
          <Card class="group hover:shadow-md transition-shadow duration-300">
            <CardHeader class="pb-3">
              <div class="flex flex-wrap gap-2 mb-2">
                <Badge variant="default">SCI</Badge>
                <Badge variant="default">JCR Q1</Badge>
              </div>
              <CardTitle class="text-lg leading-relaxed">
                <a
                  href="https://doi.org/10.1016/j.neucom.2025.132200"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-start gap-1 hover:text-primary transition-colors"
                >
                  A novel hierarchical clustering approach based on granular-ball computing
                  <ExternalLink class="h-4 w-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardTitle>
              <CardDescription class="text-sm">
                Neurocomputing 665C (2026) 132200
              </CardDescription>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-sm text-muted-foreground">
                <span class="font-semibold text-foreground">Taiyu Jin</span>, Xu Sun, Bing Huang, Tianxing Wang
              </p>
            </CardContent>
          </Card>
        </div>

        <!-- Software Copyrights -->
        <div class="space-y-4">
          <h3 class="text-base font-medium text-muted-foreground flex items-center gap-2">
            <FileCode class="h-4 w-4" />
            {{ t('main.publications.copyright') }}
          </h3>
          <div class="grid gap-4 md:grid-cols-2">
            <Card class="hover:shadow-md transition-shadow duration-300">
              <CardHeader class="pb-2">
                <CardTitle class="text-base">
                  {{ t('main.publications.textRelation.title') }}
                </CardTitle>
                <CardDescription class="text-xs">
                  {{ t('main.publications.textRelation.id') }}
                </CardDescription>
              </CardHeader>
              <CardContent class="pt-0">
                <p class="text-sm text-muted-foreground">
                  {{ t('main.publications.copyrightOwner') }}:
                  <span class="font-medium text-foreground">{{ t('profile.name') }}</span>
                </p>
              </CardContent>
            </Card>

            <Card class="hover:shadow-md transition-shadow duration-300">
              <CardHeader class="pb-2">
                <CardTitle class="text-base">
                  {{ t('main.publications.courseSelection.title') }}
                </CardTitle>
                <CardDescription class="text-xs">
                  {{ t('main.publications.courseSelection.id') }}
                </CardDescription>
              </CardHeader>
              <CardContent class="pt-0">
                <p class="text-sm text-muted-foreground">
                  {{ t('main.publications.copyrightOwner') }}:
                  <span class="font-medium text-foreground">{{ t('profile.name') }}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
