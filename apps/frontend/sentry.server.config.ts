import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6a87ceb6eb0ffefff53aaa5f45d424ea@o4509525730787328.ingest.de.sentry.io/4509548364496976",
  tracesSampleRate: 1,
  debug: false,
	enabled: process.env.NODE_ENV === "production",
});
