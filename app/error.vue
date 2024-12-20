<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'cs'
  }
})

useSeoMeta({
  title: 'Stránka nenalezena',
  description: 'Je nám líto, ale tato stránka nebyla nalezena.'
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UPageError
            :error="error"
            name="Nastala chyba"
            message="Toto není stránka, kterou hledáte."
            :clear-button="{
              label: 'Zpět domů',
              color: 'primary' as const,
              size: 'lg' as const
            }"
          />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
