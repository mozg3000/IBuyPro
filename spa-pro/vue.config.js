module.exports = {
  "devServer": {
    "proxy": {
      "/auth/sign-in": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/auth/sign-up": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/shops/*": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/shop/*": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/chain": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/category/*": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/racks/*": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      },
      "/categories/*": {
        "target": "http://ibuypro.inshop.online",
          ws: true,
          changeOrigin: true
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
};