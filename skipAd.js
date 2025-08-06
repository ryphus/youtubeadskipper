const skipAd = () => {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
    console.log('Ad skipped!');
  }
};

// Run every 500ms
setInterval(skipAd, 500);
