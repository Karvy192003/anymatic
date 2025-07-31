// Add this file to your project
if (typeof URL.canParse !== 'function') {
  URL.canParse = function(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
}

// Add crypto.hash polyfill
if (typeof window !== 'undefined' && window.crypto && !window.crypto.hash) {
  window.crypto.hash = async function(algorithm: string, data: BufferSource) {
    return window.crypto.subtle.digest(algorithm, data);
  };
}