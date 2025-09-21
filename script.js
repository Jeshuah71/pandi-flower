// Set today's date text
const todayEl = document.getElementById('today');
if (todayEl) {
  const now = new Date();
  todayEl.textContent = now.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

// Share button (Web Share API with clipboard fallback)
const shareBtn = document.getElementById('share');
const statusEl = document.getElementById('share-status');

shareBtn?.addEventListener('click', async () => {
  const shareData = {
    title: '🌼 For Pandi',
    text: 'A little yellow flower for you.',
    url: window.location.href
  };
  try{
    if(navigator.share){
      await navigator.share(shareData);
      statusEl.textContent = 'Shared!';
    }else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      statusEl.textContent = 'Link copied to clipboard ✨';
    } else {
      statusEl.textContent = 'Copy this link: ' + window.location.href;
    }
  }catch(err){
    statusEl.textContent = 'Could not share, but you can copy the link.';
  }
});
