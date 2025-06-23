import { withSentryConfig } from "@sentry/nextjs";
import process from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@repo/ui",
    "@repo/tailwind-config",
  ],
};

const sentryOptions = {
  org: "pear-group-xv",
  project: "turborepo-proto",
  silent: true,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
	dryRun: process.env.APP_ENV !== 'production'
};

export default withSentryConfig(nextConfig, sentryOptions);