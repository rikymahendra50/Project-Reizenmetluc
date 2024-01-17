
import { updateAppConfig } from '#app'
import { defuFn } from '/home/dev/nuxt/reizenmetluc/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/dev/nuxt/reizenmetluc/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
