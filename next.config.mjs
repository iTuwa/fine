const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: true, // or false if you prefer 302
      },
    ];
  },
};

export default nextConfig;
