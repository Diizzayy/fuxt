# fuxt3

A complete Headless WordPress tech stack built on Nuxt 3, using GraphQL.

Works best with the [fuxt-backend](https://github.com/funkhaus/fuxt-backend) WordPress theme and included WordPress optimized Vue components.

Built by [Funkhaus](http://funkhaus.us/). We normally host on [Flywheel](https://share.getf.ly/n02x5z).

PS: The name Fuxt comes from [Funkhaus](https://funkhaus.us) and Nuxt. [It's provocative](https://www.youtube.com/watch?v=_eRRab36XLI).

## TODO

### Must haves

- [ ] Install Nuxt3
    - Not going to use TypeScript 
- [ ] Install a GraphQL request library
    - ❌ See https://github.com/Gomah/nuxt-graphql-request/issues/36
    - Consider: https://nuxt.com/modules/graphql-client
    - Build our own? https://dev.to/jacobandrewsky/introduction-to-nuxt-modules-revisited-3iaf
- [ ] How to handle CMS previews?
    - 🟡 How to use `enablePreview` in a plugin? Or Nuxt3 way to do this?
    - Can we use `useRoute().query` in a plugin for `preview=true` in URL?
    - Then use it to convert this: https://github.com/funkhaus/fuxt/blob/master/plugins/preview.client.js
    - See this for pending solution: https://github.com/nuxt/nuxt/pull/21705
- [x] How do we want to use SVGs?
    - Does this work? https://github.com/jpkleemans/vite-svg-loader
    - https://github.com/cpsoinos/nuxt-svgo/
    - See https://github.com/cpsoinos/nuxt-svgo/issues/85
- [x] How do we want to use custom fonts?
    - See https://nuxt.com/modules/fontaine
- [ ] What about SCSS or PostCSS?
    - SCSS is better IMHO (better nesting syntax, media query as variables)
    - See https://stackoverflow.com/a/70273538/503546
- [ ] Storybook
    - 🟡 See https://github.com/nuxt-community/storybook/issues/330
    - See for an option: https://storybook.js.org/addons/storybook-addon-nuxt
    - See for an option: https://github.com/storybook-vue/nuxt
- [ ] Default store settings?
    - [ ] Can we port over this? https://github.com/funkhaus/fuxt/blob/master/plugins/performant-events.client.js
    - Pina or useState?
        - See https://nuxt.com/docs/getting-started/state-management
        - See https://www.npmjs.com/package/@pinia/nuxt
- [ ] What about Google Anayltics?
    - Upgrade our custom plugin? https://github.com/funkhaus/fuxt/blob/master/plugins/google-gtag.client.js
    - See https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins
- [x] Need a Sitemap.xml file?
    - See: [https://github.com/funkenstudio/sitemap-module-nuxt-3](https://github.com/harlan-zw/nuxt-simple-sitemap)

### Nice to haves

- [ ] What about loading directives globally?
- [ ] What about GeoIP detection?
    - Convert our custom plugin? https://github.com/funkhaus/fuxt/blob/master/plugins/ip-geolocate.js
