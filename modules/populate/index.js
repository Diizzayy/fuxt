import { resolve } from "path"
import { addTemplate, defineNuxtModule } from '@nuxt/kit'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
    
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtModule((options, nuxt) => {
    console.log("Populate module added", __dirname)
    addTemplate({
        src: resolve(__dirname, "populate.server.js"),
        filename: "populate.server.js"
    })

    nuxt.hook("build:before", () => {
        nuxt.options.plugins.push(`${__dirname}/populate.server.js`)
    })

    nuxt.hook("generate:before", ({ setPayload }) => {
        // Use an empty object as payload just so server has
        // a hint that generate is being used
        setPayload({})
    })
})
