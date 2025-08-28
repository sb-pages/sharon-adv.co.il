// Helper: read consent from localStorage
function getConsent() {
  return localStorage.getItem("cookieConsent");
}

function setConsent(value) {
  localStorage.setItem("cookieConsent", value);
}

// Show banner only if consent not yet given
function showCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  const consent = getConsent();
  if (!banner) return;
  if (consent === null) {
    setTimeout(() => banner.classList.add("show"), 1000);
  } else if (consent === "true") {
    loadOptionalScripts();
  }
}

// Accept cookies
function acceptCookies() {
  setConsent("true");
  document.getElementById("cookieBanner")?.classList.remove("show");
  loadOptionalScripts();
}

// Reject cookies
function rejectCookies() {
  setConsent("false");
  document.getElementById("cookieBanner")?.classList.remove("show");
}

// Optional scripts
function loadOptionalScripts() {
  // load analytics, etc. here
}

// Always load accessibility script
(function () {
  const s = document.createElement("script");
  s.src =
    "https://cdn.enable.co.il/licenses/enable-L10379k3n71owhbf-1221-25602/init.js";
  s.async = true;
  document.body.appendChild(s);
})();

// Inject banner and footer HTML
function injectCookieBanner() {
  const bannerHTML = `
    <div class="cookie-banner" id="cookieBanner">
      <div class="cookie-content">
        <div class="cookie-text">
          אתר זה משתמש בעוגיות כדי לשפר את חוויית המשתמש ולהציג תוכן רלוונטי. השימוש
          באתר מהווה הסכמה לשימוש בעוגיות.
          <a href="privacy-policy.html">לפרטים נוספים על מדיניות הפרטיות</a>
        </div>
        <div class="cookie-buttons">
          <button class="cookie-btn accept" onclick="acceptCookies()">אני מסכים/ה</button>
          <button class="cookie-btn settings" onclick="rejectCookies()">דחה</button>
        </div>
      </div>
    </div>
  `;

  const footerHTML = `
    <footer class="footer"> 
      <div>
          <a href="terms-of-use.html">תנאי השימוש</a>  | 
          <a href="privacy-policy.html">מדיניות פרטיות</a> |
          <a href="accessibility.html">הצהרת נגישות</a>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", bannerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  showCookieBanner();
}

document.addEventListener("DOMContentLoaded", injectCookieBanner);
