<template lang="html">
    <main :class="classes">
        <!-- This helps with SEO -->
        <wp-seo />

        <global-hamburger />

        <nuxt-link to="/" class="fuxt-logo">
            <svgo-logo-funkhaus class="svg" />
        </nuxt-link>

        <wp-menu name="Main Menu" />

        <slot class="page" keep-alive :keep-alive-props="keepAliveProps" />

        <!-- WordPress editor controls shown on frontend when logged in -->
        <client-only>
            <wp-controls />
        </client-only>
    </main>
</template>

<script setup lang="ts">
// Helpers
import _kebabCase from "lodash/kebabCase.js"
import metaDefaults from "~/utils/metaDefaults"
import titleTemplate from "~/utils/titleTemplate"
import { useStateStore } from "~/store/index.mjs"

const store = useStateStore()

//     head: {
//         title: 'Custom Title',
//         meta: [
//             { hid: 'description', name: 'description', content: 'Custom Description' }
//         ]
//     }
// })

const classes = computed(() => {
    return [
        "layout",
        "layout-default",
        "main",
        `breakpoint-${store.breakpoint}`,
        { "menu-opened": store.menuOpened },
        { "is-scrolled": store.sTop > 0 },
        `scrolling-${store.scrollDirection}`
    ]
})

const themeName = computed(() => {
    let output = "default"
    switch (this?.$route?.name) {
        case "index":
            output = "default"
            break
    }
    return output
})

const htmlClasses = computed(() => {
    const classes = ["html", `theme-${themeName.value}`]
    classes.push(`route-${_kebabCase(this?.$route?.name || "error")}`)

    // This is how you add a class conditionally
    // this.foo && classes.push("foo")

    return classes.join(" ")
})
const keepAliveProps = { include: ['WpMenu', 'WpSeo'] }

useHead({
    htmlAttrs: {
        lang: "en",
        class: htmlClasses
    },
})

// export default defineComponent({

//     name: "LayoutDefault",
//     components: {
//         SvgLogoFunkhaus
//     },
//     data() {
//         return {
//             computedStyle: {},
//             keepAliveProps: { include: ['WpMenu', 'WpSeo'] },
//         }
//     },
//     head() {
//         return {
//             htmlAttrs: {
//                 lang: "en",
//                 class: this.htmlClasses
//             },
//             titleTemplate(titleChunk) {
//                 return titleTemplate(this, titleChunk)
//             },
//             meta: metaDefaults(this)
//         }
//     },
//     computed: {
//         htmlClasses() {
//             const classes = ["html", `theme-${this.themeName}`]
//             classes.push(`route-${_kebabCase(this.$route.name || "error")}`)

//             // This is how you add a class conditionally
//             // this.foo && classes.push("foo")

//             return classes.join(" ")
//         },
//         classes() {
//             return [
//                 "layout",
//                 "layout-default",
//                 "main",
//                 `breakpoint-${store.breakpoint}`,
//                 { "menu-opened": store.menuOpened },
//                 { "is-scrolled": store.sTop > 0 },
//                 `scrolling-${store.scrollDirection}`
//             ]
//         },

//         themeName() {
//             let output = "default"
//             switch (this.$route.name) {
//                 case "index":
//                     output = "default"
//                     break
//             }
//             return output
//         }
//     }
// })
</script>

<style lang="scss">
.layout-default {
    max-width: 100vw;
    .fuxt-logo {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        margin: auto;
        width: 200px;
        text-align: center;
    }
}
</style>
