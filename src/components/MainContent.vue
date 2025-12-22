<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section id="about" class="space-y-4 scroll-mt-16">
      <h2 class="text-3xl font-bold tracking-tight">简介</h2>
      <p class="text-muted-foreground leading-7">
        金太宇，中共党员，中国计算机学会（CCF）会员，南京审计大学计算机科学与技术专业在读本科生，GPA 4.16/5.0。本科期间以第一作者身份发表SCI论文一篇（JCR Q1），获得两项软件著作权。主要研究方向为数据分析与机器学习。
      </p>
    </section>

    <Separator />

    <section id="research" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">研究领域</h2>
      <div class="flex flex-wrap gap-2">
        <Badge variant="secondary">数据分析</Badge>
        <Badge variant="secondary">机器学习</Badge>
      </div>
    </section>

    <Separator />

    <section id="publications" class="space-y-4 scroll-mt-16">
      <h2 class="text-2xl font-bold tracking-tight">主要成果</h2>
      
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
                <CardTitle class="text-lg">文本关系智能处理应用平台</CardTitle>
                <CardDescription>计算机软件著作权：2024SR1259547</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">著作权人：<strong>金太宇</strong></p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle class="text-lg">学生选课管理系统</CardTitle>
                <CardDescription>计算机软件著作权：2024SR2206438</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">著作权人：<strong>金太宇</strong></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
