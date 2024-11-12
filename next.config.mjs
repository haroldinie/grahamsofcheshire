/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Use 'https' since Vercel Blob Storage is served over HTTPS
        hostname: 'ixnooaimacd5qyin.public.blob.vercel-storage.com', // Your Vercel Blob Storage hostname
        port: '', // Leave empty for the default port
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     images: {
//         domains: ['ixnooaimacd5qyin.public.blob.vercel-storage.com'], // Add your Vercel Blob Storage domain here
//       },
// };

// export default nextConfig;

// {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'ixnooaimacd5qyin.public.blob.vercel-storage.com',
//       port: '', // Leave empty for default port
//       pathname: '/**', // This will allow any path under example.com
//     },
//   ],
// },