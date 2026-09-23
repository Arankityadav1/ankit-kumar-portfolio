// ============================================================
// SKILL LOGO & SEMANTIC SVG REGISTRY FOR "WHAT I WORK WITH"
// Sharp, recognizable brand logos and domain icons
// ============================================================

const SKILL_SVGS = {
  // DATA & BI
  "sql": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.6"/>
      <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" stroke="#38bdf8" stroke-width="1.6"/>
      <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" stroke="#38bdf8" stroke-width="1.6"/>
      <path d="M4 15v4c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-4" stroke="#0ea5e9" stroke-width="1.6"/>
      <circle cx="16" cy="17" r="1" fill="#38bdf8"/>
    </svg>`,

  "power bi": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="12" width="4.5" height="9" rx="1.2" fill="#F2C811"/>
      <rect x="9.5" y="7" width="4.5" height="14" rx="1.2" fill="#E8A700"/>
      <rect x="16" y="3" width="4.5" height="18" rx="1.2" fill="#C98100"/>
    </svg>`,

  "excel": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#107C41"/>
      <path d="M7.5 7.5L12 12M12 12L16.5 16.5M12 12L7.5 16.5M12 12L16.5 7.5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,

  "power query": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6h7a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h3" stroke="#fb923c" stroke-width="2" stroke-linecap="round"/>
      <circle cx="4" cy="6" r="2.2" fill="#f97316"/>
      <circle cx="20" cy="18" r="2.2" fill="#f97316"/>
      <path d="M12 14l2-2-2-2" stroke="#fb923c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 18h4" stroke="#fb923c" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,

  "dax": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.5"/>
      <path d="M7 16c.8-3.5 1.7-7.5 3.5-7.5s1.2 1 1 2.5l-.8 3.5c-.2 1 .2 1.5 1 1.5s1.3-.5 1.8-1.5" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M6.5 11.5h5.5" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M15 11l3 4M18 11l-3 4" stroke="#e9d5ff" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

  "etl": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="5" cy="12" r="2.5" fill="#06b6d4"/>
      <circle cx="19" cy="12" r="2.5" fill="#06b6d4"/>
      <path d="M8 12h3m2 0h3" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
      <path d="M11 9l2 3-2 3" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 8l3-3h2l3 3M8 16l3 3h2l3-3" stroke="#0891b2" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,

  "data modeling": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="9" y="2.5" width="6" height="5" rx="1.2" fill="#3b82f6" stroke="#60a5fa" stroke-width="1.2"/>
      <rect x="2.5" y="16.5" width="6" height="5" rx="1.2" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.2"/>
      <rect x="15.5" y="16.5" width="6" height="5" rx="1.2" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.2"/>
      <path d="M12 7.5v4.5m0 0H5.5v4.5m6.5-4.5h6.5v4.5" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="#bfdbfe"/>
    </svg>`,

  "mis reports": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 3.5h9l5 5v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z" fill="#059669" fill-opacity="0.25" stroke="#34d399" stroke-width="1.5"/>
      <path d="M14 3.5v5h5" stroke="#34d399" stroke-width="1.5"/>
      <path d="M7 12h10M7 15h7M7 18h5" stroke="#a7f3d0" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

  "kpi tracking": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#f43f5e" stroke-width="1.6" stroke-dasharray="3 2"/>
      <circle cx="12" cy="12" r="5" stroke="#fb7185" stroke-width="1.6"/>
      <circle cx="12" cy="12" r="2" fill="#f43f5e"/>
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="#fda4af" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

  // PROGRAMMING
  "python": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.9 2c-3.1 0-5 .6-5 2.6v2.4h5.2v.7H4.3c-2.4 0-4.3 1.5-4.3 4.4 0 2.8 1.7 4.3 4.3 4.3h1.8v-2.3c0-2.2 1.9-4.1 4.1-4.1h5.2V7.4c0-2.4-2.1-5.4-7.5-5.4zm-1.8 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#387EB8"/>
      <path d="M12.1 22c3.1 0 5-.6 5-2.6V17h-5.2v-.7h7.8c2.4 0 4.3-1.5 4.3-4.4 0-2.8-1.7-4.3-4.3-4.3h-1.8v2.3c0 2.2-1.9 4.1-4.1 4.1H8.6v2.6c0 2.4 2.1 5.4 7.5 5.4zm1.8-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFE052"/>
    </svg>`,

  "pandas": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="3" width="3" height="18" rx="1.5" fill="#130654"/>
      <rect x="9.5" y="8" width="3" height="13" rx="1.5" fill="#FF4D4D"/>
      <rect x="15" y="4" width="3" height="17" rx="1.5" fill="#E70488"/>
      <rect x="9.5" y="3" width="3" height="3" rx="1.5" fill="#E70488"/>
    </svg>`,

  "numpy": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.5 6.5L12 2l8.5 4.5v11L12 22l-8.5-4.5v-11z" fill="#013243" stroke="#4dabf7" stroke-width="1.3"/>
      <path d="M12 2v20M3.5 6.5L12 12l8.5-5.5M3.5 17.5L12 12l8.5 5.5" stroke="#4dabf7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M7 15V9l5 6V9" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  "matplotlib": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#11557c" stroke="#26a69a" stroke-width="1.2"/>
      <path d="M5 15c2-6 5-8 7-3s4 5 7 1" stroke="#ffca28" stroke-width="2" stroke-linecap="round"/>
      <circle cx="8" cy="11" r="1.5" fill="#ffffff"/>
      <circle cx="12" cy="14" r="1.5" fill="#ffffff"/>
      <circle cx="16" cy="13" r="1.5" fill="#ffffff"/>
    </svg>`,

  "javascript": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#F7DF1E"/>
      <path d="M7 17.2c.4.6.9 1 1.7 1 .9 0 1.5-.5 1.5-1.5V11h2v5.7c0 2-1.2 3-3.2 3-1.6 0-2.6-.8-3.1-1.8l1.1-.7zm7.5-.1c.6.9 1.4 1.4 2.5 1.4 1 0 1.7-.5 1.7-1.3 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.7-2.9-1.7-2.9-3.5 0-1.9 1.5-3.3 3.6-3.3 1.6 0 2.7.6 3.4 1.8l-1.4 1c-.4-.7-1-1-1.9-1-.9 0-1.5.5-1.5 1.1 0 .7.5 1 1.6 1.4l.6.3c2 .9 3.1 1.8 3.1 3.8 0 2.2-1.7 3.5-4 3.5-2.2 0-3.4-1.1-4-2.3l1.7-1z" fill="#000000"/>
    </svg>`,

  "html / css": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 3l1.5 16L11 21l6.5-2L19 3H3z" fill="#E44D26"/>
      <path d="M11 4.5v15l5.2-1.5 1.3-13.5H11z" fill="#F16529"/>
      <path d="M6 7.5h10M6 11h9.5L15 15l-4 1.2-4-1.2-.3-3" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  // AUTOMATION
  "google sheets": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 3.5h11l5 5v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z" fill="#0F9D58"/>
      <path d="M15 3.5v5h5" fill="#0b8043"/>
      <rect x="6.5" y="11" width="11" height="7.5" rx="1" fill="#FFFFFF" fill-opacity="0.9"/>
      <path d="M6.5 14.5h11M12 11v7.5" stroke="#0F9D58" stroke-width="1.2"/>
    </svg>`,

  "apps script": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" fill="#4285F4" fill-opacity="0.2" stroke="#4285F4" stroke-width="1.4"/>
      <path d="M8 8.5L4.5 12 8 15.5" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 8.5l3.5 3.5-3.5 3.5" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 7l-2 10" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

  "appsheet": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="2.5" width="16" height="19" rx="3.5" fill="#1A73E8" fill-opacity="0.2" stroke="#4285F4" stroke-width="1.4"/>
      <path d="M12 6.5l4 3.5-4 3.5-4-3.5 4-3.5z" fill="#4285F4"/>
      <path d="M12 12l4 3.5-4 3.5-4-3.5 4-3.5z" fill="#34A853"/>
      <circle cx="12" cy="12" r="1.5" fill="#FBBC04"/>
    </svg>`,

  "google forms": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 3.5h11l5 5v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2z" fill="#7248B9"/>
      <path d="M15 3.5v5h5" fill="#583594"/>
      <circle cx="7.5" cy="12" r="1.5" fill="#FFFFFF"/>
      <circle cx="7.5" cy="16" r="1.5" fill="#FFFFFF"/>
      <path d="M11 12h6M11 16h6" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,

  "n8n": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="5" cy="12" r="2.8" fill="#ea4b71"/>
      <circle cx="12" cy="7" r="2.8" fill="#ff6d5a"/>
      <circle cx="12" cy="17" r="2.8" fill="#ea4b71"/>
      <circle cx="19" cy="12" r="2.8" fill="#ff6d5a"/>
      <path d="M7.5 10.5l2.5-2M7.5 13.5l2.5 2M14 8.5l2.5 2M14 15.5l2.5-2" stroke="#ff8f7d" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

  "ai workflows": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#d946ef"/>
      <circle cx="6" cy="18" r="2" fill="#a855f7"/>
      <circle cx="18" cy="18" r="2" fill="#06b6d4"/>
      <path d="M8 18h8M12 14v4" stroke="#e879f9" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

  // DATABASES & BI
  "mysql": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 13.5c1-3 3.5-5.5 6.5-6 1.8-.3 3.7.2 5 1.5l2-1.5c1.5 2 2.5 4.5 2.5 7.5 0 2-.5 3.5-1.5 4.5-2 2-5 2-8 1s-5-3.5-6.5-7z" fill="#00758F"/>
      <path d="M16 11c1-1 2-2 3.5-2.5-1 2-1 3.5 0 5-1.5-.5-2.5-1-3.5-2.5z" fill="#F29111"/>
      <circle cx="8" cy="11" r="1.2" fill="#ffffff"/>
    </svg>`,

  "sql server": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#CC292B" stroke="#ef4444" stroke-width="1.2"/>
      <path d="M4.5 6v6c0 1.65 3.35 3 7.5 3s7.5-1.35 7.5-3V6" stroke="#ef4444" stroke-width="1.4"/>
      <path d="M4.5 12v6c0 1.65 3.35 3 7.5 3s7.5-1.35 7.5-3v-6" stroke="#f87171" stroke-width="1.4"/>
      <rect x="9.5" y="10" width="5" height="3.5" rx="0.8" fill="#ffffff" fill-opacity="0.9"/>
    </svg>`,

  "looker studio": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="13" width="4.5" height="8" rx="1.2" fill="#4285F4"/>
      <rect x="9.75" y="8" width="4.5" height="13" rx="1.2" fill="#34A853"/>
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" fill="#FBBC04"/>
      <circle cx="5.25" cy="8.5" r="2.2" fill="#EA4335"/>
    </svg>`,

  "chart.js": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#FF6384" stroke-width="2" stroke-dasharray="28 14"/>
      <circle cx="12" cy="12" r="5" stroke="#36A2EB" stroke-width="2"/>
      <circle cx="12" cy="12" r="2.2" fill="#FFCE56"/>
    </svg>`,

  // BUSINESS SYSTEMS
  "petpooja pos": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2.5" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M7 8h10M7 11h6" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 16l-1 4h10l-1-4" stroke="#f59e0b" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="16.5" cy="11.5" r="1.2" fill="#f59e0b"/>
    </svg>`,

  "crm systems": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="7" r="3.2" stroke="#38bdf8" stroke-width="1.6"/>
      <path d="M5.5 19c0-3.2 2.9-5.5 6.5-5.5s6.5 2.3 6.5 5.5" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="4" cy="10" r="2" stroke="#0ea5e9" stroke-width="1.2"/>
      <circle cx="20" cy="10" r="2" stroke="#0ea5e9" stroke-width="1.2"/>
    </svg>`,

  "swiggy & zomato": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6c0-1.5 3.5-3 8-3s8 1.5 8 3-3.5 3-8 3-8-1.5-8-3z" fill="#FC8019"/>
      <path d="M4 6v6c0 3 3.5 6 8 8 4.5-2 8-5 8-8V6" stroke="#FC8019" stroke-width="1.6"/>
      <path d="M10 11.5c1-1.5 3-1.5 4 0l-2 3-2-3z" fill="#CB202D"/>
    </svg>`,

  "erp & pms": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="6" width="8" height="14" rx="1.5" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="13" y="10" width="8" height="10" rx="1.5" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M6 9h2M6 12h2M6 15h2M16 13h2M16 16h2" stroke="#64748b" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M7 6V3.5h10V10" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round"/>
    </svg>`,

  "inventory systems": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#10b981" stroke-width="1.5"/>
      <path d="M12 3v18M4 7.5l8 4.5 8-4.5" stroke="#34d399" stroke-width="1.4"/>
      <path d="M8 12.5l4 2.2 4-2.2" stroke="#6ee7b7" stroke-width="1.3"/>
    </svg>`,

  // EMERGING & ANALYTICS
  "databricks": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" fill="#FF3621"/>
      <path d="M4 11.5l8 4.5 8-4.5" stroke="#FF3621" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M4 16l8 4.5 8-4.5" stroke="#FF3621" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

  "ai studio": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" fill="url(#ai-grad)"/>
      <defs>
        <linearGradient id="ai-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stop-color="#38bdf8"/>
          <stop offset="0.5" stop-color="#818cf8"/>
          <stop offset="1" stop-color="#c084fc"/>
        </linearGradient>
      </defs>
    </svg>`,

  "prompt eng": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" fill="#14b8a6" fill-opacity="0.2" stroke="#14b8a6" stroke-width="1.4"/>
      <path d="M6.5 8.5l3.5 3.5-3.5 3.5" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15.5h5" stroke="#5eead4" stroke-width="2" stroke-linecap="round"/>
      <circle cx="16" cy="8.5" r="1.5" fill="#facc15"/>
    </svg>`,

  "statistics": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 19h18" stroke="#64748b" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M3 18c3 0 4-1 6-7 2-6 4-6 6 0 2 6 3 7 6 7" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M12 5v14" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="2 2"/>
    </svg>`,

  "forecasting": `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 17l6-5 4 3 8-9" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 6h4v4" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 15l8-4" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round"/>
    </svg>`
};

/**
 * Returns clean semantic SVG for skill by name
 * @param {string} skillName 
 * @returns {string} SVG HTML string
 */
function getSkillLogoSVG(skillName) {
  if (!skillName) return '';
  const key = skillName.trim().toLowerCase();
  
  if (SKILL_SVGS[key]) {
    return SKILL_SVGS[key];
  }

  // Prefix/partial matching
  for (const [k, svg] of Object.entries(SKILL_SVGS)) {
    if (key.includes(k) || k.includes(key)) {
      return svg;
    }
  }

  // Fallback icon
  return `
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
}
