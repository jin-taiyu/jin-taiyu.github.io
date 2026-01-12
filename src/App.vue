<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/NavBar.vue'
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import MainContent from '@/components/MainContent.vue'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased">
    <NavBar />
    <div class="container py-8 lg:py-12">
      <div class="flex flex-col md:flex-row md:gap-8 lg:gap-12">
        <aside class="md:w-1/4 lg:w-1/5 flex-shrink-0">
          <ProfileSidebar />
        </aside>
        <main class="mt-8 md:mt-0 flex-1 min-w-0">
          <MainContent />
        </main>
      </div>
    </div>
    <footer class="border-t py-4 mt-8">
      <div class="container text-center text-xs text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} {{ t('profile.name') }}  {{ t('footer.rights') }}</p>
      </div>
    </footer>
  </div>
</template>
