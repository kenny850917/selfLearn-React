import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://91b7bfda76b6490898b8a913cde9fd1c@sentry.io/3179955"
  });
}

function log(error) {
  Sentry.captureException(error);
}
export default {
  init,
  log
};
