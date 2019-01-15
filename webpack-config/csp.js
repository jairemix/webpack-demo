module.exports = `<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: blob: gap: content:
    https://ssl.gstatic.com http://*.ausmed.com https://*.ausmed.com
    https://*.amazonaws.com https://*.segment.com http://*.segment.com https://*.segment.io
    http://*.segment.io http://www.google-analytics.com http://*.facebook.com http://*.mixpanel.com
    https://*.intercom.io wss://*.intercom.io https://*.intercomcdn.com https://*.amplitude.com
    http://*.jwpcdn.com https://*.jwpcdn.com https://sentry.io http://sentry.io;
  style-src 'self' 'unsafe-inline';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' http://*.segment.com https://www.google-analytics.com http://www.google-analytics.com
      http://connect.facebook.net https://*.intercom.io
      http://*.mxpnl.com http://*.cloudfront.net
      http://*.kissmetrics.com https://*.getvero.com https://*.intercomcdn.com http://*.adroll.com http://*.madkudu.com
      https://*.jwplatform.com http://*.googleadservices.com https://*.adroll.com
      http://*.jwpcdn.com https://*.jwpcdn.com
      http://*.jwpsrv.com https://*.jwpsrv.com
      https://*.doubleclick.net https://*.google.com https://*.google.com.au https://*.googleadservices.com;
  child-src 'self' blob: gap: https://*.youtube.com https://*.doubleclick.net https://*.facebook.com;
  img-src data: *;
  media-src blob: *">`;
