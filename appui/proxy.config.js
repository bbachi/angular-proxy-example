const PROXY_CONFIG = [
    {
        context: [
            "/userapi",
            "/settingsapi",
            "/productapi",
        ],
        target: "http://localhost:3070",
        secure: false
    }
]

module.exports = PROXY_CONFIG;