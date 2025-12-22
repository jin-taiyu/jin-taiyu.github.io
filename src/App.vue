<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased">
    <NavBar />
    <div class="container py-8 md:flex md:gap-8">
      <aside class="md:w-1/4 lg:w-1/5">
        <ProfileSidebar />
      </aside>
      <main class="mt-8 md:mt-0 md:flex-1">
        <MainContent />
      </main>
    </div>
  </div>
</template>
