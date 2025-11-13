import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// GitHub Pages 部署配置
// 如果你的仓库是 username.github.io，则不需要设置 basePath
// 如果是其他仓库名，需要设置为 /repo-name
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Enable static export for deployment
  output: 'export',
  // Improves compatibility with static file servers
  trailingSlash: true,
  // GitHub Pages 子路径支持
  basePath: basePath,
  // 确保资源路径正确
  assetPrefix: basePath,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
