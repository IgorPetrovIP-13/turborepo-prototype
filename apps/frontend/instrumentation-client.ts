import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6a87ceb6eb0ffefff53aaa5f45d424ea@o4509525730787328.ingest.de.sentry.io/4509548364496976",
  integrations: [
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
	enabled: process.env.NODE_ENV === "production",
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;