import WebFont from "webfontloader"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(({ store, ...rest }) => {
    
    // See webfontloader docs here: https://github.com/typekit/webfontloader#modules
    WebFont.load({
        custom: {
            families: ["My Font"]
        },
        active() {
            store.commit("SET_FONTS_LOADED")
        }
    })
})
