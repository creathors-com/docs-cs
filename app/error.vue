<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'cs'
  }
})

useSeoMeta({
  title: 'Stránka nenalezena',
  description: 'Je nám líto, ale tato stránka nebyla nalezena.'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <AppHeader />

    <UError
        :error="error"
        name="Nastala chyba"
        message="Toto není stránka, kterou hledáte."
        :clear-button="{
              label: 'Zpět domů',
              color: 'primary' as const,
              size: 'lg' as const
            }"
    />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </div>
</template>
