//@ts-check
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    target: "static",
    future: {
        compatibilityVersion: 4
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/styles/_media-queries.scss";`
                }
            }
        },
    },
    runtimeConfig: {
        // Will be available in both server and client
        API_ENDPOINT: '',
        PROXY_BASE_URL: '',
    },

    /*
     ** Headers of the page
     */
    head: {
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
        script: [
            {
                src: "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,smoothscroll&flags=gated",
                body: true
            }
        ]
    },

    /*
     ** Default transition for all pages
     */
    pageTransition: {
        name: "fade",
        mode: "out-in"
    },

    /*
     ** Customize the progress-bar color
     ** See: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
     */
    loading: {
        color: "#000000",
        height: "3px"
    },

    /*
     ** Global CSS
     */
    css: [
        "~/styles/global.scss",
        "~/styles/transitions.scss",
        "~/styles/variables-css.scss",
        "~/styles/themes.scss"
        //"~/styles/fonts.css" // Be sure to turn on the font loader plugin and config it
    ],
    /*
     ** Build configuration
     */
    // build: {
    //     transpile: ['nuxt-graphql-request'],
    // }
    //,
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        //{ src: "~/plugins/devtools.client.js", mode: "client" },
        //{ src: "~/plugins/google-gtag.client.js", mode: "client" },
        //{ src: "~/plugins/preview.client.js", mode: "client" },
        //{ src: "~/plugins/performant-events.client.js", mode: "client" }
        //{ src: "~/plugins/web-font-loader.client.js", mode: "client" },
        //{ src: "~/plugins/ip-geolocate.js" },
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        "@nuxtjs/style-resources",
        '@pinia/nuxt',
        "~/modules/populate",
        'nuxt-open-fetch',
        //"@nuxtjs/sitemap"
        // [
        //     "nuxt-vuex-localstorage",
        //     {
        //         localStorage: ["geolocation"],
        //         mode: "debug",
        //     },
        // ],
        "~/modules/sitemap-route-generator",
        "nuxt-svgo"
    ],
    /*
     ** SCSS that is injected into every component
     */
    styleResources: {
        
        scss: ["./styles/_media-queries.scss"]
    },
    /*
     ** Enable to use ip-geolocate plugin
     */
    // publicRuntimeConfig: {
    //     ipStackKey: process.env.IPSTACK_KEY,
    // },

    openFetch: {
        clients: {
            wp: {
                baseURL: 'http://fuxt-backend.local/wp-json/',
                schema: 'http://fuxt-backend.local/wp-json-openapi?namespace=wp/v2'
            }
        }
    },
    /*
     ** Customize router
     */
    router: {
        linkExactActiveClass: "exact-active-link",
        linkActiveClass: "active-link",
        middleware: ["referrer"],
        prefetchLinks: true,
        linkPrefetchedClass: "link-prefetched",
        trailingSlash: true
    },

    /*
     ** Server side middleware
     */
    serverMiddleware: [
        { handler: "~/server-middleware/redirect-trailing-slash.js" }
        // { handler: "~/server-middleware/preview-ssr.js" },
    ],
    hooks: {
        'webpack:config': (webpackConfigs) => {

            for (const config of webpackConfigs) {

                config?.resolve?.extensions?.push(".gql", ".svg")

                if (config.name === 'client') {
                    // Modify the client webpack config
                }
                if (config.name === 'server') {
                    // Modify the server webpack config
                }
            }
            // console.log("webpackConfigs", webpackConfigs.map(({ name }) => name))
        }
    },
    /*
     ** Nuxt generate configuration. Used when generating a static site.
     */
    generate: {
        fallback: "404.html",
        interval: 500,
        concurrency: 100
    },

    /*
     ** Setup for the Sitemap module.
     ** You can see output at /sitemap.xml
     ** SEE https://github.com/nuxt-community/sitemap-module
     */
    sitemap: {
        // If you are NOT using Netlify to host, you need to set the hostname
        hostname: process.env.URL || "http://localhost:3000",
        filter({ routes }) {
            // Don't allow these paths to show in sitemap.
            // Add anything you want to hide from the sitemap
            const excludedPaths = ["/wp-admin/"]
            return routes.filter((route) => {
                return !excludedPaths.includes(route.url)
            })
        }
    },

    /*
     ** Allow devices on local network to view the site at {your IP}:3000
     */
    server: {
        host: process.env.HOST || "0.0.0.0"
    },

    /*
     ** Storybook
     ** SEE https://storybook.nuxtjs.org/options
     */
    storybook: {
        stories: ["~/stories/**/*.stories.js"],
        parameters: {
            layout: "fullscreen",
            backgrounds: {
                default: "default",
                values: [
                    {
                        name: "default",
                        value: "#ffffff"
                    },
                    {
                        name: "black",
                        value: "#000000"
                    }
                ]
            }
        },
    }
})