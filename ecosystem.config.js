module.exports = {
    apps: [{
        name: 'diginuxtFront',
        env: {
            "PORT": 3410,
            "NODE_ENV": "development"
        },
        exec_mode: 'cluster',
        instances: '1',
        script: '../../src/.output/server/index.mjs'
    }]
}