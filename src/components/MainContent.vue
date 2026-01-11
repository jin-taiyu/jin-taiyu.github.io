<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const { t } = useI18n()
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section id="about" class="space-y-4 scroll-mt-16">
      <h2 class="text-3xl font-bold tracking-tight">{{ t('main.about.title') }}</h2>
      <p class="text-muted-foreground leading-7">
        {{ t('main.about.content') }}
      </p>
    </section>

    <Separator />

    <section id="research" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">{{ t('main.research.title') }}</h2>
      <div class="flex flex-wrap gap-2">
        <Badge variant="secondary">{{ t('main.research.dataAnalysis') }}</Badge>
        <Badge variant="secondary">{{ t('main.research.machineLearning') }}</Badge>
      </div>
    </section>

    <Separator />

    <section id="publications" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">{{ t('main.publications.title') }}</h2>
      
      <div class="space-y-6">
        <Card>
          <CardHeader>
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div class="space-y-1">
                 <CardTitle class="text-xl">
                   <a href="https://doi.org/10.1016/j.neucom.2025.132200" target="_blank" rel="noopener noreferrer" class="hover:underline">
                     A novel hierarchical clustering approach based on granular-ball computing
                   </a>
                 </CardTitle>
                 <CardDescription class="text-base font-medium">Neurocomputing 665C (2026) 132200.</CardDescription>
              </div>
              <div class="flex gap-2">
                <Badge variant="default" class="w-fit">SCI</Badge>
                <Badge variant="default" class="w-fit">JCR Q1</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">
              <strong>Taiyu Jin</strong>, Xu Sun, Bing Huang, Tianxing Wang.
            </p>
          </CardContent>
        </Card>

        <div class="pt-4">
          <div class="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle class="text-lg">{{ t('main.publications.textRelation.title') }}</CardTitle>
                <CardDescription>{{ t('main.publications.copyright') }}: {{ t('main.publications.textRelation.id') }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">{{ t('main.publications.copyrightOwner') }}: <strong>{{ t('profile.name') }}</strong></p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle class="text-lg">{{ t('main.publications.courseSelection.title') }}</CardTitle>
                <CardDescription>{{ t('main.publications.copyright') }}: {{ t('main.publications.courseSelection.id') }}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">{{ t('main.publications.copyrightOwner') }}: <strong>{{ t('profile.name') }}</strong></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
