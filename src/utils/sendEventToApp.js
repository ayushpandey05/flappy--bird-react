const sendEventToApp = (eventName, eventData) => {
  // if event is called before window initialization, it won't break the app/website
  try {
    if (
      window &&
      window.ReactNativeWebView &&
      typeof window.ReactNativeWebView.postMessage === "function"
    ) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ eventName, eventData })
      );
    }
  } catch (e) {
    // console.log()
  }
};

export { sendEventToApp };
