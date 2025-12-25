import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // غیرفعال کردن خطاهای تایپ‌اسکریپت در زمان build
    ignoreBuildErrors: true,
  },
  eslint: {
    // اختیاری: اگر خطای ESLint هم می‌خوای نادیده بگیری
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
