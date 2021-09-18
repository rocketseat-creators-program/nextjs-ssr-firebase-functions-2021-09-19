module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: ''
  },
  exportPathMap: async () => ({
    '/': { page: '/' },
  })
}
