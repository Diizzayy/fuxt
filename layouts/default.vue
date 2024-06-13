<template lang="html">
    <main :class="classes">
        <!-- This helps with SEO -->
        <wp-seo />

        <global-hamburger />

        <nuxt-link
            to="/"
            class="fuxt-logo"
        >
            <svg-logo-funkhaus class="svg" />
        </nuxt-link>

        <wp-menu name="Main Menu" />

        <nuxt
            class="page"
            keep-alive
            :keep-alive-props="keepAliveProps"
        />

        <!-- WordPress editor controls shown on frontend when logged in -->
        <client-only>
            <wp-controls />
        </client-only>
    </main>
</template>

<script lang="ts">
// Helpers
import _kebabCase from "lodash/kebabCase.js"
import metaDefaults from "~/utils/metaDefaults"
import titleTemplate from "~/utils/titleTemplate"
import { useStateStore } from "~/store/index.mjs"

const store = useStateStore()

// console.log("store", store)

// Components
import SvgLogoFunkhaus from "~/assets/svg/logo-funkhaus.svg"

export default defineComponent({
    name: "LayoutDefault",
    components: {
        SvgLogoFunkhaus
    },
    data() {
        return {
            computedStyle: {},
            keepAliveProps : { include: ['WpMenu', 'WpSeo'] }
        }
    },
    head() {
        return {
            htmlAttrs: {
                lang: "en",
                class: this.htmlClasses
            },
            titleTemplate(titleChunk) {
                return titleTemplate(this, titleChunk)
            },
            meta: metaDefaults(this)
        }
    },
    computed: {
        htmlClasses() {
            const classes = ["html", `theme-${this.themeName}`]
            classes.push(`route-${_kebabCase(this.$route.name || "error")}`)

            // This is how you add a class conditionally
            // this.foo && classes.push("foo")

            return classes.join(" ")
        },
        classes() {
            return [
                "layout",
                "layout-default",
                "main",
                `breakpoint-${store.breakpoint}`,
                { "menu-opened": store.menuOpened },
                { "is-scrolled": store.sTop > 0 },
                `scrolling-${store.scrollDirection}`
            ]
        },
        themeName() {
            let output = "default"
            switch (this.$route.name) {
                case "index":
                    output = "default"
                    break
            }
            return output
        }
    }
})
</script>

<style lang="scss">
.layout-default {
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
