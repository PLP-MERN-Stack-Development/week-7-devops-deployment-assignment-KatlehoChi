import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your_sentry_dsn",
  tracesSampleRate: 1.0,
});