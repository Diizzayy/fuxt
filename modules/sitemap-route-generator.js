import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule((options, nuxt) => {
    nuxt.hook("generate:done", (context) => {
        const routes = Array.from(context.generatedRoutes)
        options.sitemap.routes = [...routes]
    })
})