<template>
    <section class="page-home">
        <wp-image class="image" :image="parsedPage?.featuredImage" />

        <wp-gutenberg id="content" :blocks="parsedPage?.blocks" />
        <div v-html="parsedPage?.content?.rendered" />
    </section>
</template>

<script setup lang="ts">
//import { useNuxtApp } from '#imports';
import type { components } from '#open-fetch-schemas/wp'

const { path } = useRoute()

const { data } = await useWp('/wp/v2/pages', {
    query: {
        path,
    },
    params: {
        _embed: true,
    },
    deep: true,
})

const page = (data.value as unknown as components['schemas']['page'][])[0];

console.log('page', page);
console.log('page._embedded', page?._embedded);

const parsedPage = {
    ...page,
    featuredImage: page?.featured_media?.node || {}
}
</script>

<style lang="scss" scoped>
.page-home {
    color: var(--color-black);
    margin: 0 auto;
    min-height: var(--unit-100vh);

    .image {
        max-width: 50%;
        margin: 0 auto;
    }

    // Hover states
    @media #{$has-hover} {
        // Hover styles would go here
    }

    // Breakpoints
    @media #{$lt-phone} {
        // Phone styles would go here
    }
}
</style>
