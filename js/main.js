/**
 * Main Application Bootstrap
 * Connects portfolioData to all HTML templates and initializes sub-modules
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioApp();
});

function initPortfolioApp() {
  if (typeof portfolioData === 'undefined') {
    console.error('portfolioData not found. Ensure portfolio-data.js is loaded.');
    return;
  }

  // Render all dynamic sections
  renderHeroContent();
  renderMetrics();
  renderAboutSection();
  renderCareerJourney();
  renderDataMethodology();
  renderExperience();
  renderSkills();
  renderWhyHireMe();
  renderCertifications();
  renderEducation();
  renderResumeSection();
  renderContactSection();
  renderFooter();

  // Initialize modular controllers
  if (window.initNavigation) initNavigation();
  if (window.initProjectsModule) initProjectsModule();
  if (window.initAnimations) initAnimations();
  if (window.initThreeScene) initThreeScene();
  if (window.initContactForm) initContactForm();

  // Re-run lucide icons rendering
  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderHeroContent() {
  const p = portfolioData.personalInfo;
  const heroNameEl = document.getElementById('heroName');
  const heroHeadlineEl = document.getElementById('heroHeadline');
  const heroTaglineEl = document.getElementById('heroTagline');
  const heroSubtaglineEl = document.getElementById('heroSubtagline');
  const heroAvatarEl = document.getElementById('heroAvatar');
  const heroSocialsEl = document.getElementById('heroSocials');
  const resumeDownloadBtn = document.getElementById('heroResumeBtn');
  const navResumeBtn = document.getElementById('navResumeBtn');

  if (heroNameEl) heroNameEl.textContent = p.name;
  if (heroHeadlineEl) heroHeadlineEl.textContent = p.headline;
  if (heroTaglineEl) heroTaglineEl.textContent = p.tagline;
  if (heroSubtaglineEl) heroSubtaglineEl.textContent = p.supportingTagline;

  if (heroAvatarEl) {
    heroAvatarEl.src = p.profileImage;
    heroAvatarEl.alt = `${p.name} - Profile`;
    heroAvatarEl.onerror = function() {
      this.onerror = null;
      this.src = 'assets/profile/ankit-dp.jpg';
    };
  }

  if (resumeDownloadBtn) {
    resumeDownloadBtn.href = p.resumeUrl;
  }
  if (navResumeBtn) {
    navResumeBtn.href = p.resumeUrl;
  }

  if (heroSocialsEl) {
    heroSocialsEl.innerHTML = portfolioData.socialLinks.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="${s.name}">
        <i data-lucide="${s.icon}" style="width:16px;height:16px;"></i>
        <span>${s.name}</span>
      </a>
    `).join('');
  }
}

function renderMetrics() {
  const container = document.getElementById('heroMetricsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.metrics.map((m, idx) => {
    const isText = !!m.isText;
    const counterAttr = isText ? '' : `data-counter-target="${m.value}" data-suffix="${m.suffix || ''}"`;
    const displayVal = isText ? m.value : `0${m.suffix || ''}`;

    return `
      <div class="metric-card glass-card reveal reveal-delay-${(idx % 4) + 1}">
        <div class="metric-number gradient-text" ${counterAttr} data-is-text="${isText}">${displayVal}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-subtext">${m.subtext}</div>
      </div>
    `;
  }).join('');
}

function renderAboutSection() {
  const ab = portfolioData.about;
  const bioEl = document.getElementById('aboutBio');
  const bio2El = document.getElementById('aboutBioSecond');
  const diffEl = document.getElementById('aboutDifferentiator');
  const workAcrossGrid = document.getElementById('workAcrossGrid');

  if (bioEl) bioEl.textContent = ab.bio;
  if (bio2El) bio2El.textContent = ab.bioSecond;
  if (diffEl) diffEl.textContent = ab.keyDifferentiator;

  if (workAcrossGrid) {
    workAcrossGrid.innerHTML = ab.workAcross.map(item => `
      <div class="work-across-pill">
        <i data-lucide="${item.icon}" style="width:16px;height:16px;color:var(--accent-cyan);"></i>
        <span>${item.name}</span>
      </div>
    `).join('');
  }
}

function renderCareerJourney() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = portfolioData.careerJourney.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-period">${item.period}</div>
        <h4 class="timeline-role">${item.role}</h4>
        <div class="timeline-company">${item.company} · <span style="color: var(--text-muted); font-size:0.8rem;">${item.location}</span></div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

function renderDataMethodology() {
  const container = document.getElementById('methodologyGrid');
  if (!container) return;

  container.innerHTML = portfolioData.dataMethodology.map(m => `
    <div class="method-card glass-card reveal">
      <div class="method-step-tag">STAGE ${m.step}</div>
      <h3 class="method-title">${m.name}</h3>
      <p class="method-desc">${m.desc}</p>
      <div class="method-tools"><i data-lucide="wrench" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:4px;"></i>${m.tools}</div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experienceList');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => {
    // Strictly take 5 important points
    const respList = (exp.responsibilities || []).slice(0, 5).map(r => `<li>${r}</li>`).join('');
    const toolBadges = exp.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
    const metricChips = exp.metrics 
      ? `<div class="exp-metric-chips">${exp.metrics.map(m => `<span class="kpi-chip"><strong>${m.label}:</strong> ${m.value}</span>`).join('')}</div>`
      : '';

    return `
      <article class="experience-card glass-card reveal" id="${exp.id}">
        <div class="exp-header">
          <div class="exp-title-group">
            <h3>${exp.title}</h3>
            <div class="exp-company">${exp.company}</div>
          </div>
          <div class="exp-meta">
            <span class="exp-dates">${exp.dates}</span>
            <span class="exp-location">${exp.location} · ${exp.roleType}</span>
          </div>
        </div>

        <p class="exp-summary">${exp.summary}</p>
        ${metricChips}

        <ul class="exp-responsibilities">
          ${respList}
        </ul>

        <div class="exp-tools-wrap">
          <span class="exp-tools-label">Tools & Technologies:</span>
          ${toolBadges}
        </div>
      </article>
    `;
  }).join('');
}

function renderSkills() {
  const container = document.getElementById('skillsCategoriesGrid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.categories.map(cat => {
    const badgeHTML = cat.badge ? `<span class="category-badge">${cat.badge}</span>` : `<span class="category-count-badge">${cat.items.length} Skills</span>`;

    const itemsHTML = cat.items.map(item => {
      const iconName = item.icon || 'cpu';
      const iconColor = item.color || '#38bdf8';
      const iconBg = item.bg || 'rgba(56, 189, 248, 0.12)';
      const logoSVG = typeof getSkillLogoSVG === 'function' ? getSkillLogoSVG(item.name) : `<i data-lucide="${iconName}" style="width:13px;height:13px;"></i>`;

      return `
        <div class="skill-tool-chip" title="${item.name}: ${item.details}">
          <span class="tool-logo-badge" style="background:${iconBg}; color:${iconColor}; --chip-glow:${iconColor}55;">
            ${logoSVG}
          </span>
          <span class="skill-name-text">${item.name}</span>
          <span class="skill-mini-score">${item.score}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="skill-category-card glass-card reveal">
        <div class="category-card-header">
          <h4 class="category-card-title">
            <i data-lucide="${cat.icon}" style="width:18px;height:18px;color:var(--accent-cyan);"></i>
            ${cat.name}
          </h4>
          ${badgeHTML}
        </div>
        <div class="skills-compact-grid">
          ${itemsHTML}
        </div>
      </div>
    `;
  }).join('');
}

function getWhyHireOpsSVG() {
  return `
    <svg class="why-svg why-svg-ops" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="whyOpsBar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
        <linearGradient id="whyOpsBar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
      </defs>
      <line x1="4" y1="26" x2="28" y2="26" stroke="rgba(148, 163, 184, 0.3)" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M 5 21 L 11 16.5 L 17 12 L 23 7.5" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="ops-trend-line"/>
      <rect x="5.5" y="18" width="3.5" height="8" rx="1" fill="url(#whyOpsBar2)" class="ops-bar ops-bar-1"/>
      <rect x="11.5" y="14" width="3.5" height="12" rx="1" fill="url(#whyOpsBar1)" class="ops-bar ops-bar-2"/>
      <rect x="17.5" y="9.5" width="3.5" height="16.5" rx="1" fill="url(#whyOpsBar1)" class="ops-bar ops-bar-3"/>
      <rect x="23.5" y="5.5" width="3.5" height="20.5" rx="1" fill="#38bdf8" class="ops-bar ops-bar-4"/>
      <circle cx="25.2" cy="5.5" r="3.4" fill="none" stroke="#38bdf8" stroke-width="1" class="ops-beacon-ring"/>
      <circle cx="25.2" cy="5.5" r="1.5" fill="#38bdf8" class="ops-beacon-dot"/>
    </svg>
  `;
}

function getWhyHireDashSVG() {
  return `
    <svg class="why-svg why-svg-dash" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="whyDashGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="4" y="5" width="24" height="22" rx="3" fill="rgba(15, 23, 42, 0.85)" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.45" class="dash-window"/>
      <line x1="4" y1="10.5" x2="28" y2="10.5" stroke="rgba(56, 189, 248, 0.2)" stroke-width="0.8"/>
      <circle cx="7.2" cy="7.8" r="0.75" fill="#ef4444" opacity="0.85"/>
      <circle cx="9.5" cy="7.8" r="0.75" fill="#f59e0b" opacity="0.85"/>
      <circle cx="11.8" cy="7.8" r="0.75" fill="#10b981" opacity="0.85"/>
      <line x1="15" y1="7.8" x2="24" y2="7.8" stroke="rgba(148, 163, 184, 0.35)" stroke-width="0.8" stroke-linecap="round"/>
      <rect x="6.5" y="12.5" width="8.5" height="4.8" rx="1.2" fill="rgba(14, 165, 233, 0.15)" stroke="#38bdf8" stroke-width="0.8" class="dash-kpi dash-kpi-1"/>
      <line x1="8.5" y1="14.9" x2="13" y2="14.9" stroke="#38bdf8" stroke-width="1" stroke-linecap="round"/>
      <rect x="17" y="12.5" width="8.5" height="4.8" rx="1.2" fill="rgba(99, 102, 241, 0.15)" stroke="#818cf8" stroke-width="0.8" class="dash-kpi dash-kpi-2"/>
      <line x1="19" y1="14.9" x2="23.5" y2="14.9" stroke="#a5b4fc" stroke-width="1" stroke-linecap="round"/>
      <path d="M 6.5 24 L 10.5 21.5 L 14.5 23 L 18.5 19.5 L 22.5 20.5 L 25.5 17.5 L 25.5 24.5 L 6.5 24.5 Z" fill="url(#whyDashGrad)" class="dash-area"/>
      <path d="M 6.5 24 L 10.5 21.5 L 14.5 23 L 18.5 19.5 L 22.5 20.5 L 25.5 17.5" fill="none" stroke="#38bdf8" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="dash-sparkline"/>
      <circle cx="25.5" cy="17.5" r="1.3" fill="#38bdf8" class="dash-spark-dot"/>
    </svg>
  `;
}

function getWhyHireAutoSVG() {
  return `
    <svg class="why-svg why-svg-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="8" y1="16" x2="24" y2="16" stroke="#334155" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M 8 16 C 8 9.5, 16 9.5, 16 13" fill="none" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1" stroke-dasharray="2 1.5" class="auto-loop"/>
      <line x1="8" y1="16" x2="24" y2="16" stroke="rgba(56, 189, 248, 0.5)" stroke-width="1.4" stroke-linecap="round" class="auto-track"/>
      <circle cx="8" cy="16" r="3.4" fill="rgba(14, 165, 233, 0.2)" stroke="#38bdf8" stroke-width="1.3" class="auto-node auto-node-1"/>
      <circle cx="8" cy="16" r="1.3" fill="#38bdf8"/>
      <g class="auto-hub-wrap">
        <rect x="13.5" y="13.5" width="5" height="5" rx="1.2" transform="rotate(45 16 16)" fill="rgba(37, 99, 235, 0.3)" stroke="#60a5fa" stroke-width="1.3" class="auto-hub"/>
        <circle cx="16" cy="16" r="1.2" fill="#60a5fa"/>
      </g>
      <circle cx="24" cy="16" r="3.4" fill="rgba(16, 185, 129, 0.2)" stroke="#34d399" stroke-width="1.3" class="auto-node auto-node-3"/>
      <polyline points="22.7 16 23.7 17.1 25.5 15" fill="none" stroke="#34d399" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="8" cy="16" r="1.8" fill="#38bdf8" class="auto-packet"/>
    </svg>
  `;
}

function getWhyHireStackSVG() {
  return `
    <svg class="why-svg why-svg-stack" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="16" y1="5" x2="16" y2="26" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1" stroke-dasharray="1.5 1.5" class="stack-bus"/>
      <ellipse cx="16" cy="24" rx="8.5" ry="2.6" fill="rgba(14, 165, 233, 0.25)" stroke="#38bdf8" stroke-width="1.2" class="stack-layer stack-layer-sql"/>
      <path d="M 7.5 24 V 26 C 7.5 27.5, 24.5 27.5, 24.5 26 V 24" fill="none" stroke="#38bdf8" stroke-width="1.2" class="stack-layer stack-layer-sql"/>
      <ellipse cx="16" cy="18.5" rx="7.8" ry="2.4" fill="rgba(59, 130, 246, 0.22)" stroke="#60a5fa" stroke-width="1.2" class="stack-layer stack-layer-py"/>
      <line x1="14.5" y1="18.5" x2="17.5" y2="18.5" stroke="#93c5fd" stroke-width="1.1" stroke-linecap="round"/>
      <ellipse cx="16" cy="13" rx="7" ry="2.2" fill="rgba(16, 185, 129, 0.22)" stroke="#34d399" stroke-width="1.2" class="stack-layer stack-layer-xls"/>
      <line x1="16" y1="12" x2="16" y2="14" stroke="#6ee7b7" stroke-width="1" stroke-linecap="round"/>
      <ellipse cx="16" cy="7.5" rx="6" ry="1.8" fill="rgba(245, 158, 11, 0.2)" stroke="#fbbf24" stroke-width="1.1" class="stack-layer stack-layer-pbi"/>
      <rect x="12" y="3.2" width="2" height="3.5" rx="0.5" fill="#f59e0b" class="pbi-bar pbi-bar-1"/>
      <rect x="15" y="1.5" width="2" height="5.2" rx="0.5" fill="#fbbf24" class="pbi-bar pbi-bar-2"/>
      <rect x="18" y="0.2" width="2" height="6.5" rx="0.5" fill="#f59e0b" class="pbi-bar pbi-bar-3"/>
    </svg>
  `;
}

function getWhyHireScriptSVG() {
  return `
    <svg class="why-svg why-svg-script" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="16" height="20" rx="2.5" fill="rgba(15, 23, 42, 0.9)" stroke="#10b981" stroke-width="1.3" class="gs-frame"/>
      <path d="M 4 8.5 C 4 7.1, 5.1 6, 6.5 6 L 17.5 6 C 18.9 6, 20 7.1, 20 8.5 L 20 11 L 4 11 Z" fill="rgba(16, 185, 129, 0.25)"/>
      <line x1="12" y1="6" x2="12" y2="26" stroke="rgba(16, 185, 129, 0.35)" stroke-width="0.8"/>
      <line x1="4" y1="11" x2="20" y2="11" stroke="rgba(16, 185, 129, 0.35)" stroke-width="0.8"/>
      <line x1="4" y1="16" x2="20" y2="16" stroke="rgba(16, 185, 129, 0.25)" stroke-width="0.8"/>
      <line x1="4" y1="21" x2="20" y2="21" stroke="rgba(16, 185, 129, 0.25)" stroke-width="0.8"/>
      <rect x="5.5" y="12.5" width="5" height="2.3" rx="0.6" fill="#38bdf8" opacity="0.85" class="gs-cell gs-cell-1"/>
      <rect x="13.5" y="12.5" width="5" height="2.3" rx="0.6" fill="#38bdf8" opacity="0.65" class="gs-cell gs-cell-2"/>
      <rect x="5.5" y="17.5" width="5" height="2.3" rx="0.6" fill="#34d399" opacity="0.8" class="gs-cell gs-cell-3"/>
      <rect x="13.5" y="17.5" width="5" height="2.3" rx="0.6" fill="#34d399" opacity="0.6" class="gs-cell gs-cell-4"/>
      <rect x="17" y="13" width="12" height="12" rx="3" fill="#090e1a" stroke="#38bdf8" stroke-width="1.3" class="as-badge"/>
      <path d="M 20.2 16.5 L 18.5 19 L 20.2 21.5" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="as-left"/>
      <path d="M 25.8 16.5 L 27.5 19 L 25.8 21.5" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="as-right"/>
      <line x1="24.2" y1="16" x2="21.8" y2="22" stroke="#f59e0b" stroke-width="1.2" stroke-linecap="round" class="as-slash"/>
    </svg>
  `;
}

function getWhyHireBizSVG() {
  return `
    <svg class="why-svg why-svg-biz" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="16" y1="2.5" x2="16" y2="5.5" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="16" y1="26.5" x2="16" y2="29.5" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="2.5" y1="16" x2="5.5" y2="16" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="26.5" y1="16" x2="29.5" y2="16" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="11" fill="none" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.2" stroke-dasharray="3 2" class="biz-outer-ring"/>
      <circle cx="16" cy="16" r="7.5" fill="rgba(14, 165, 233, 0.15)" stroke="#38bdf8" stroke-width="1.3" class="biz-mid-ring"/>
      <circle cx="16" cy="16" r="3.2" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="1.4" class="biz-bullseye"/>
      <circle cx="16" cy="16" r="1.3" fill="#38bdf8" class="biz-core"/>
      <line x1="5.5" y1="26.5" x2="13" y2="19" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round" class="biz-vector"/>
      <polygon points="11.5 17 15.5 16.5 15 20.5" fill="#38bdf8" class="biz-arrow"/>
    </svg>
  `;
}

function getWhyHireGovernanceFallbackSVG() {
  return `
    <svg class="why-svg why-svg-gov" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 16 4 L 26 8 V 16 C 26 22.5 16 28 16 28 C 16 28 6 22.5 6 16 V 8 Z" fill="rgba(16, 185, 129, 0.15)" stroke="#34d399" stroke-width="1.4" class="gov-shield"/>
      <polyline points="11.5 16 14.5 19 20.5 13" fill="none" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="gov-check"/>
    </svg>
  `;
}

function getWhyHireMicroVisual(item) {
  const id = item.id || '';
  const title = (item.title || '').toLowerCase();
  
  if (id === 'ops-experience' || title.includes('operational')) {
    return getWhyHireOpsSVG();
  }
  if (id === 'dashboards-visibility' || title.includes('dashboard')) {
    return getWhyHireDashSVG();
  }
  if (id === 'workflow-automation' || title.includes('automation') || title.includes('workflow')) {
    return getWhyHireAutoSVG();
  }
  if (id === 'analytics-stack' || title.includes('stack')) {
    return getWhyHireStackSVG();
  }
  if (id === 'workspace-scripting' || title.includes('workspace') || title.includes('script')) {
    return getWhyHireScriptSVG();
  }
  if (id === 'business-understanding' || title.includes('business')) {
    return getWhyHireBizSVG();
  }
  return getWhyHireGovernanceFallbackSVG();
}

function renderWhyHireMe() {
  const container = document.getElementById('whyHireGrid');
  if (!container) return;

  container.innerHTML = portfolioData.whyHireMe.map(item => `
    <div class="why-hire-card glass-card reveal" tabindex="0" role="article" aria-label="${item.title}">
      <div class="why-icon-wrap" aria-hidden="true">
        ${getWhyHireMicroVisual(item)}
      </div>
      <div class="why-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certificationsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(c => `
    <div class="cert-card glass-card reveal cert-featured-card">
      <!-- Small Certificate Placeholder - VISIBLE ALL THE TIME -->
      <div class="small-cert-container" onclick="openCertModal('${c.image}', '${c.name.replace(/'/g, "\\'")}', '${c.issuer.replace(/'/g, "\\'")}')" title="Click to view full certificate">
        <div class="small-cert-frame">
          <img src="${c.image}" alt="${c.name} Certificate" class="small-cert-image" loading="lazy" />
          <div class="small-cert-overlay">
            <span class="cert-seal-chip">
              <i data-lucide="award" style="width:12px;height:12px;"></i> Verified
            </span>
            <span class="cert-expand-chip">
              <i data-lucide="maximize-2" style="width:11px;height:11px;"></i> Expand
            </span>
          </div>
        </div>
      </div>

      <div class="cert-card-content">
        <div class="cert-status-row">
          <span class="cert-featured-pill">
            <i data-lucide="sparkles" style="width:11px;height:11px;"></i> Featured Certification
          </span>
          <span class="cert-issuer-badge">${c.issuer}</span>
        </div>

        <h4 class="cert-title">${c.name}</h4>

        <div class="cert-meta">
          <span class="cert-meta-item"><i data-lucide="calendar" style="width:12px;height:12px;"></i> ${c.date}</span>
          <span class="cert-id"><i data-lucide="shield-check" style="width:12px;height:12px;"></i> ID: ${c.credentialId}</span>
        </div>

        <p class="cert-desc">${c.description}</p>

        <div class="cert-card-footer">
          <button class="cert-view-link-btn" onclick="openCertModal('${c.image}', '${c.name.replace(/'/g, "\\'")}', '${c.issuer.replace(/'/g, "\\'")}')">
            <i data-lucide="external-link" style="width:13px;height:13px;"></i> View Full Certificate
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// CERTIFICATE LIGHTBOX
// ============================================================

window.currentLightboxImages = [];
window.currentLightboxIndex = 0;

window.openCertModal = function (imgSrc, title = '', issuer = '') {
  const lightbox = document.getElementById('imageLightbox');
  const imgEl = document.getElementById('lightboxImg');

  if (!lightbox || !imgEl) {
    console.error('Certificate lightbox elements not found.');
    return;
  }

  // Store current certificate
  window.currentLightboxImages = [imgSrc];
  window.currentLightboxIndex = 0;

  // Set image
  imgEl.src = imgSrc;
  imgEl.alt = title
    ? `${title} - ${issuer}`
    : 'Certificate';

  // Open lightbox
  lightbox.classList.add('open');
  document.body.classList.add('lightbox-open');

  // Prevent background scrolling
  document.body.style.overflow = 'hidden';

  // Re-render icons if available
  if (window.lucide) {
    lucide.createIcons();
  }
};


// Previous certificate
window.prevLightboxImage = function () {
  if (!window.currentLightboxImages.length) return;

  window.currentLightboxIndex =
    (window.currentLightboxIndex - 1 + window.currentLightboxImages.length)
    % window.currentLightboxImages.length;

  const imgEl = document.getElementById('lightboxImg');

  if (imgEl) {
    imgEl.src =
      window.currentLightboxImages[window.currentLightboxIndex];
  }
};


// Next certificate
window.nextLightboxImage = function () {
  if (!window.currentLightboxImages.length) return;

  window.currentLightboxIndex =
    (window.currentLightboxIndex + 1)
    % window.currentLightboxImages.length;

  const imgEl = document.getElementById('lightboxImg');

  if (imgEl) {
    imgEl.src =
      window.currentLightboxImages[window.currentLightboxIndex];
  }
};


// Close certificate lightbox
window.closeCertLightbox = function () {
  const lightbox = document.getElementById('imageLightbox');

  if (lightbox) {
    lightbox.classList.remove('open');
  }

  document.body.classList.remove('lightbox-open');
  document.body.style.overflow = '';
};


// Close button initialization
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeCertLightbox);
  }

  const lightbox = document.getElementById('imageLightbox');

  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        window.closeCertLightbox();
      }
    });
  }

  // ESC key closes lightbox
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      window.closeCertLightbox();
    }
  });
});

function renderEducation() {
  const container = document.getElementById('educationGrid');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="edu-card glass-card reveal">
      <h4 class="edu-degree">${edu.degree}</h4>
      <div class="edu-school">${edu.institution}</div>
      <div class="edu-meta">
        <span>${edu.period}</span>
        <span class="edu-grade">${edu.grade}</span>
      </div>
      <p style="font-size:0.875rem; color:var(--text-muted); margin-top:0.5rem;">${edu.details}</p>
    </div>
  `).join('');
}

function renderResumeSection() {
  const p = portfolioData.personalInfo;
  const downloadBtn = document.getElementById('resumeDownloadBtn');
  const viewBtn = document.getElementById('resumeViewBtn');

  if (downloadBtn) {
    downloadBtn.href = p.resumeUrl;
    downloadBtn.setAttribute('download', 'Ankit_Kumar_Resume.pdf');
  }
  if (viewBtn) {
    viewBtn.href = p.resumeUrl;
  }
}

function renderContactSection() {
  const p = portfolioData.personalInfo;
  const contactChannels = document.getElementById('contactChannels');
  if (!contactChannels) return;

  contactChannels.innerHTML = `
    <a href="mailto:${p.email}" class="contact-channel-item">
      <div class="channel-icon"><i data-lucide="mail" style="width:24px;height:24px;"></i></div>
      <div>
        <div class="channel-label">Email</div>
        <div class="channel-value">${p.email}</div>
      </div>
    </a>
    <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-channel-item">
      <div class="channel-icon"><i data-lucide="linkedin" style="width:24px;height:24px;"></i></div>
      <div>
        <div class="channel-label">LinkedIn</div>
        <div class="channel-value">linkedin.com/in/ankit-yadav-125545244</div>
      </div>
    </a>
    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="contact-channel-item">
      <div class="channel-icon"><i data-lucide="github" style="width:24px;height:24px;"></i></div>
      <div>
        <div class="channel-label">GitHub</div>
        <div class="channel-value">github.com/Arankityadav1</div>
      </div>
    </a>
    <div class="contact-channel-item">
      <div class="channel-icon"><i data-lucide="map-pin" style="width:24px;height:24px;"></i></div>
      <div>
        <div class="channel-label">Location</div>
        <div class="channel-value">${p.location}</div>
        <div style="font-size:0.75rem; color:var(--accent-emerald); font-weight:600; margin-top:2px;">${p.openTo}</div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const p = portfolioData.personalInfo;
  const footerHeadline = document.getElementById('footerHeadline');
  if (footerHeadline) footerHeadline.textContent = p.headline;
}

window.initPortfolioApp = initPortfolioApp;
