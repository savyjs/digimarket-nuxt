import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    extends: [
        "digimarket-nuxt-layer"
    ],
    css: [
        'assets/font-css/fontiran.css',
        'assets/font-css/style.css'
    ],
    nitro: {
        preset: "node"
    }
})
