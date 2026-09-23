/**
 * Projects Module
 * Handles rendering, interactive filtering, searching, sorting,
 * case study modal, image lightbox, and project video playback.
 */

let currentFilter = 'ALL';
let currentSearchQuery = '';
let currentSort = 'featured';

let activeModalProject = null;

let currentLightboxImages = [];
let currentLightboxIndex = 0;


// ============================================================
// PROJECT IMAGE ERROR HANDLER
// ============================================================

function handleProjectImageError(img) {
  const currentSrc = img.getAttribute('src') || '';

  if (currentSrc.endsWith('.jpg')) {
    img.onerror = function () {
      this.onerror = null;
      this.src = 'assets/projects/uniform/uniform-1.jpg';
    };

    img.src = currentSrc.replace(/\.jpg$/, '.png');

  } else if (currentSrc.endsWith('.png')) {
    img.onerror = function () {
      this.onerror = null;
      this.src = 'assets/projects/uniform/uniform-1.jpg';
    };

    img.src = currentSrc.replace(/\.png$/, '.jpg');

  } else {
    img.onerror = null;
    img.src = 'assets/projects/uniform/uniform-1.jpg';
  }
}

window.handleProjectImageError = handleProjectImageError;


// ============================================================
// VIDEO HELPERS
// ============================================================

function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;

  try {
    const parsed = new URL(url);

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (
      parsed.hostname.includes('youtube.com') &&
      parsed.pathname === '/watch'
    ) {
      const videoId = parsed.searchParams.get('v');

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // https://youtu.be/VIDEO_ID
    if (parsed.hostname === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '').split('?')[0];

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Already an embed URL
    if (
      parsed.hostname.includes('youtube.com') &&
      parsed.pathname.startsWith('/embed/')
    ) {
      return url;
    }

  } catch (error) {
    console.warn('Invalid YouTube URL:', url);
  }

  return null;
}


function getVimeoEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('vimeo.com')) {
      const match = parsed.pathname.match(/\/(\d+)/);

      if (match && match[1]) {
        return `https://player.vimeo.com/video/${match[1]}`;
      }
    }

  } catch (error) {
    console.warn('Invalid Vimeo URL:', url);
  }

  return null;
}


function getVideoMimeType(url) {
  if (!url || typeof url !== 'string') {
    return 'video/mp4';
  }

  const cleanUrl = url.split('?')[0].toLowerCase();

  if (cleanUrl.endsWith('.webm')) {
    return 'video/webm';
  }

  if (cleanUrl.endsWith('.ogg') || cleanUrl.endsWith('.ogv')) {
    return 'video/ogg';
  }

  if (cleanUrl.endsWith('.mov')) {
    return 'video/quicktime';
  }

  return 'video/mp4';
}


function renderProjectVideoHTML(project) {
  if (!project || !project.video) {
    return '';
  }

  const videoUrl = project.video;

  // ----------------------------------------------------------
  // YouTube
  // ----------------------------------------------------------

  const youtubeEmbed = getYouTubeEmbedUrl(videoUrl);

  if (youtubeEmbed) {
    return `
      <div class="modal-section project-video-section">
        <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">
          Project Walkthrough
        </h4>

        <div style="
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: #020617;
          border: 1px solid var(--border-subtle);
        ">
          <iframe
            src="${youtubeEmbed}"
            title="${project.title} Project Walkthrough"
            style="
              width: 100%;
              height: 100%;
              border: 0;
              display: block;
            "
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  }


  // ----------------------------------------------------------
  // Vimeo
  // ----------------------------------------------------------

  const vimeoEmbed = getVimeoEmbedUrl(videoUrl);

  if (vimeoEmbed) {
    return `
      <div class="modal-section project-video-section">
        <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">
          Project Walkthrough
        </h4>

        <div style="
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: #020617;
          border: 1px solid var(--border-subtle);
        ">
          <iframe
            src="${vimeoEmbed}"
            title="${project.title} Project Walkthrough"
            style="
              width: 100%;
              height: 100%;
              border: 0;
              display: block;
            "
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  }


  // ----------------------------------------------------------
  // Local video file
  // Example:
  // assets/projects/real-estate/demo.mp4
  // ----------------------------------------------------------

  const mimeType = getVideoMimeType(videoUrl);

  return `
    <div class="modal-section project-video-section">
      <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">
        Project Walkthrough
      </h4>

      <div style="
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        background: #020617;
        border: 1px solid var(--border-subtle);
      ">

        <video
          controls
          playsinline
          preload="metadata"
          poster="${project.image || ''}"
          style="
            width: 100%;
            height: auto;
            max-height: 600px;
            display: block;
            object-fit: contain;
            background: #020617;
          "
          onerror="handleProjectVideoError(this);"
        >
          <source
            src="${videoUrl}"
            type="${mimeType}"
          >

          Your browser does not support HTML5 video.
        </video>

        <div
          class="project-video-error"
          style="
            display: none;
            padding: 1rem;
            color: #fca5a5;
            font-size: 0.875rem;
            text-align: center;
          "
        >
          Unable to load this project video.
          Please check the video file path.
        </div>

      </div>
    </div>
  `;
}


function handleProjectVideoError(videoElement) {
  if (!videoElement) return;

  const parent = videoElement.parentElement;

  if (!parent) return;

  const errorMessage = parent.querySelector('.project-video-error');

  if (errorMessage) {
    errorMessage.style.display = 'block';
  }

  videoElement.style.display = 'none';

  console.error(
    'Project video failed to load:',
    videoElement.currentSrc || videoElement.src
  );
}

window.handleProjectVideoError = handleProjectVideoError;


// ============================================================
// INIT
// ============================================================

function initProjectsModule() {
  renderProjects();

  setupFilterButtons();
  setupSearchAndSort();
  setupModalListeners();
}


// ============================================================
// FILTER / SEARCH / SORT
// ============================================================

function getFilteredProjects() {
  let list = [...portfolioData.projects];

  // Category filter
  if (currentFilter !== 'ALL') {
    list = list.filter(p => {
      const cats = (p.category || []).map(c => c.toUpperCase());
      const org = (p.organization || '').toUpperCase();

      return cats.includes(currentFilter) || org === currentFilter;
    });
  }

  // Search filter
  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();

    list = list.filter(p => {
      const matchTitle =
        (p.title || '').toLowerCase().includes(q);

      const matchOrg =
        (p.organization || '').toLowerCase().includes(q);

      const matchSummary =
        (p.summary || '').toLowerCase().includes(q);

      const matchTools =
        (p.tools || []).some(t =>
          t.toLowerCase().includes(q)
        );

      const matchCats =
        (p.category || []).some(c =>
          c.toLowerCase().includes(q)
        );

      return (
        matchTitle ||
        matchOrg ||
        matchSummary ||
        matchTools ||
        matchCats
      );
    });
  }

  // Sort
  if (currentSort === 'newest') {
    list.sort((a, b) =>
      (b.period || '') > (a.period || '') ? 1 : -1
    );

  } else if (currentSort === 'oldest') {
    list.sort((a, b) =>
      (a.period || '') > (b.period || '') ? 1 : -1
    );

  } else {
    list.sort((a, b) =>
      b.featured === a.featured
        ? 0
        : b.featured
          ? 1
          : -1
    );
  }

  return list;
}


// ============================================================
// RENDER ALL PROJECTS
// ============================================================

function renderProjects() {
  const container = document.getElementById('projectsGrid');

  if (!container) return;

  const projects = getFilteredProjects();

  if (projects.length === 0) {

    container.innerHTML = `
      <div
        class="no-projects glass-card"
        style="
          grid-column: 1/-1;
          padding: 3rem;
          text-align: center;
        "
      >
        <i
          data-lucide="search-x"
          style="
            width: 48px;
            height: 48px;
            color: var(--accent-cyan);
            margin: 0 auto 1rem;
          "
        ></i>

        <h3>No projects match your filter</h3>

        <p style="margin-top: 0.5rem;">
          Try adjusting your search query or selecting "All".
        </p>

        <button
          class="btn btn-secondary btn-sm"
          style="margin-top: 1.25rem;"
          onclick="resetProjectFilters()"
        >
          Reset Filters
        </button>
      </div>
    `;

    if (window.lucide) {
      lucide.createIcons();
    }

    return;
  }

  container.innerHTML =
    projects
      .map(project => createProjectCardHTML(project))
      .join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}


// ============================================================
// FEATURED PROJECTS
// ============================================================

function renderFeaturedProjects() {
  const container =
    document.getElementById('featuredProjectsGrid');

  if (!container) return;

  const featured =
    portfolioData.projects.filter(p => p.featured);

  container.innerHTML =
    featured
      .map(project => createProjectCardHTML(project))
      .join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}


// ============================================================
// PROJECT CARD
// ============================================================

function createProjectCardHTML(p) {

  const toolsHTML =
    (p.tools || [])
      .map(t => `<span class="tool-tag">${t}</span>`)
      .join('');


  // GitHub
  const isRealGithub =
    p.github &&
    p.github !== 'ADD_GITHUB_LINK' &&
    p.github.startsWith('http');


  // Live demo
  const isRealDemo =
    p.liveDemo &&
    p.liveDemo !== 'ADD_LIVE_DEMO_LINK' &&
    p.liveDemo.startsWith('http');


  const githubBtn = isRealGithub
    ? `
      <a
        href="${p.github}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline btn-sm"
        aria-label="View source code on GitHub"
      >
        <i
          data-lucide="github"
          style="width:14px;height:14px;"
        ></i>

        Code
      </a>
    `
    : '';


  const demoBtn = isRealDemo
    ? `
      <a
        href="${p.liveDemo}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-sm"
        aria-label="View live demo"
      >
        <i
          data-lucide="external-link"
          style="width:14px;height:14px;"
        ></i>

        Live
      </a>
    `
    : '';


  return `
    <article
      class="project-card glass-card reveal"
      data-project-id="${p.id}"
    >

      <!-- PROJECT IMAGE -->
      <div
        class="project-card-thumb"
        onclick="openCaseStudyModal('${p.id}')"
      >

        <img
          src="${p.image}"
          alt="${p.title}"
          class="project-card-img"
          onerror="handleProjectImageError(this);"
        >

        <div class="project-thumb-overlay">
          <span class="project-badge-pill">
            ${p.badge || p.organization}
          </span>
        </div>

      </div>


      <!-- PROJECT CONTENT -->
      <div class="project-card-body">

        <div class="project-meta-row">
          <span>${p.organization || ''}</span>
          <span>${p.period || ''}</span>
        </div>


        <h3
          class="project-card-title"
          onclick="openCaseStudyModal('${p.id}')"
          style="cursor: pointer;"
        >
          ${p.title}
        </h3>


        <p class="project-card-summary">
          ${p.summary || ''}
        </p>


        <div class="project-tech-stack">
          ${toolsHTML}
        </div>

      </div>


      <!-- FOOTER -->
      <div class="project-card-footer">

        <button
          class="btn btn-secondary btn-sm"
          onclick="openCaseStudyModal('${p.id}')"
        >
          View Case Study

          <i
            data-lucide="arrow-right"
            style="width:14px;height:14px;"
          ></i>
        </button>


        <div style="display:flex;gap:0.5rem;">
          ${githubBtn}
          ${demoBtn}
        </div>

      </div>

    </article>
  `;
}


// ============================================================
// FILTER BUTTONS
// ============================================================

function setupFilterButtons() {

  const filterBtns =
    document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      filterBtns.forEach(b =>
        b.classList.remove('active')
      );

      btn.classList.add('active');

      currentFilter =
        btn.getAttribute('data-filter') || 'ALL';

      renderProjects();
    });

  });
}


// ============================================================
// SEARCH + SORT
// ============================================================

function setupSearchAndSort() {

  const searchInput =
    document.getElementById('projectSearchInput');

  if (searchInput) {

    searchInput.addEventListener('input', (e) => {

      currentSearchQuery =
        e.target.value;

      renderProjects();
    });
  }


  const sortSelect =
    document.getElementById('projectSortSelect');

  if (sortSelect) {

    sortSelect.addEventListener('change', (e) => {

      currentSort =
        e.target.value;

      renderProjects();
    });
  }
}


// ============================================================
// RESET FILTERS
// ============================================================

function resetProjectFilters() {

  currentFilter = 'ALL';
  currentSearchQuery = '';

  const searchInput =
    document.getElementById('projectSearchInput');

  if (searchInput) {
    searchInput.value = '';
  }


  const filterBtns =
    document.querySelectorAll('.filter-btn');

  filterBtns.forEach(b => {

    if (
      b.getAttribute('data-filter') === 'ALL'
    ) {
      b.classList.add('active');

    } else {
      b.classList.remove('active');
    }

  });


  renderProjects();
}


// ============================================================
// CASE STUDY MODAL
// ============================================================

function openCaseStudyModal(projectId) {

  const project =
    portfolioData.projects.find(
      p => p.id === projectId
    );

  if (!project) {
    console.error(
      'Project not found:',
      projectId
    );
    return;
  }


  activeModalProject = project;


  // Set lightbox images
  currentLightboxImages =
    Array.isArray(project.images) &&
    project.images.length > 0
      ? [...project.images]
      : project.image
        ? [project.image]
        : [];


  currentLightboxIndex = 0;


  const modal =
    document.getElementById('projectModal');

  const modalContent =
    document.getElementById('projectModalContent');


  if (!modal || !modalContent) {

    console.error(
      'Project modal elements not found.'
    );

    return;
  }


  // ==========================================================
  // KPIs
  // ==========================================================

  const kpiGrid =
    project.kpis &&
    project.kpis.length > 0
      ? `
        <div class="modal-section">

          <h4
            style="
              color:var(--accent-cyan);
              margin-bottom:0.85rem;
            "
          >
            Key Performance Indicators (KPIs)
          </h4>

          <div
            style="
              display:grid;
              grid-template-columns:
                repeat(auto-fit,minmax(180px,1fr));
              gap:0.85rem;
            "
          >

            ${project.kpis.map(k => `
              <div
                style="
                  background:
                    rgba(15,23,42,0.8);
                  border:
                    1px solid var(--border-subtle);
                  padding:0.85rem;
                  border-radius:8px;
                "
              >

                <div
                  style="
                    font-size:0.75rem;
                    color:var(--text-muted);
                    font-weight:600;
                  "
                >
                  ${k.name}
                </div>

                <div
                  style="
                    font-size:1.25rem;
                    font-weight:800;
                    color:#38bdf8;
                    margin-top:0.25rem;
                  "
                >
                  ${k.val}
                </div>

              </div>
            `).join('')}

          </div>

        </div>
      `
      : '';


  // ==========================================================
  // FILTERS
  // ==========================================================

  const filtersHTML =
    project.filters &&
    project.filters.length > 0
      ? `
        <div class="modal-section">

          <h4
            style="
              color:var(--accent-cyan);
              margin-bottom:0.5rem;
            "
          >
            Interactive Slicers & Filters
          </h4>

          <div
            style="
              display:flex;
              gap:0.5rem;
              flex-wrap:wrap;
            "
          >

            ${project.filters.map(f => `
              <span
                class="tool-tag"
                style="
                  background:
                    rgba(14,165,233,0.1);
                  border-color:
                    rgba(56,189,248,0.25);
                  color:#e2e8f0;
                "
              >
                ${f}
              </span>
            `).join('')}

          </div>

        </div>
      `
      : '';


  // ==========================================================
  // EVIDENCE
  // ==========================================================

  const evidenceHTML =
    project.evidence &&
    project.evidence.length > 0
      ? `
        <div class="modal-section">

          <h4
            style="
              color:var(--accent-cyan);
              margin-bottom:0.5rem;
            "
          >
            Analytical Deliverables & Evidence
          </h4>

          <ul
            style="
              list-style:none;
              display:flex;
              flex-direction:column;
              gap:0.4rem;
              padding-left:0;
            "
          >

            ${project.evidence.map(e => `
              <li
                style="
                  font-size:0.9rem;
                  color:var(--text-secondary);
                "
              >
                <span
                  style="
                    color:var(--accent-emerald);
                  "
                >
                  ✔
                </span>

                ${e}
              </li>
            `).join('')}

          </ul>

        </div>
      `
      : '';


  // ==========================================================
  // GALLERY
  // ==========================================================

  // ==========================================================
// GALLERY
// ==========================================================

// Only allow image files inside the gallery.
// Video files such as .mp4 are handled separately below.
const galleryImages = currentLightboxImages.filter(img => {
  if (!img || typeof img !== 'string') return false;

  const cleanPath = img.split('?')[0].toLowerCase();

  return (
    cleanPath.endsWith('.jpg') ||
    cleanPath.endsWith('.jpeg') ||
    cleanPath.endsWith('.png') ||
    cleanPath.endsWith('.webp') ||
    cleanPath.endsWith('.gif')
  );
});

const galleryHTML =
  galleryImages.length > 0
    ? `
      <div class="modal-section">

        <h4
          style="
            color:var(--accent-cyan);
            margin-bottom:0.75rem;
          "
        >
          Dashboard Visualizations & Gallery
          (Click to expand)
        </h4>

        <div class="modal-gallery-row">

          ${galleryImages.map((img, idx) => `
            <div
              class="modal-gallery-thumb"
              onclick="openProjectGalleryLightbox(${idx})"
            >

              <img
                src="${img}"
                alt="Screenshot ${idx + 1}"
                onerror="handleProjectImageError(this);"
              >

            </div>
          `).join('')}

        </div>

      </div>
    `
    : '';


  // ==========================================================
  // PROJECT LINKS
  // ==========================================================

  const isRealGithub =
    project.github &&
    project.github !== 'ADD_GITHUB_LINK' &&
    project.github.startsWith('http');


  const isRealDemo =
    project.liveDemo &&
    project.liveDemo !== 'ADD_LIVE_DEMO_LINK' &&
    project.liveDemo.startsWith('http');


  const linksRow = `
    <div
      style="
        display:flex;
        gap:1rem;
        flex-wrap:wrap;
        margin-top:1rem;
        padding-top:1rem;
        border-top:
          1px solid var(--border-subtle);
      "
    >

      ${
        isRealDemo
          ? `
            <a
              href="${project.liveDemo}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <i data-lucide="external-link"></i>
              Open Live Dashboard
            </a>
          `
          : ''
      }


      ${
        isRealGithub
          ? `
            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              <i data-lucide="github"></i>
              View GitHub Repository
            </a>
          `
          : ''
      }


      <button
        class="btn btn-outline"
        onclick="closeCaseStudyModal()"
      >
        Close Case Study
      </button>

    </div>
  `;


  // ==========================================================
  // VIDEO
  // ==========================================================

  const projectVideoHTML =
    renderProjectVideoHTML(project);


  // ==========================================================
  // MODAL HTML
  // ==========================================================

  modalContent.innerHTML = `

    <div class="modal-header">

      <div class="modal-title-group">

        <span
          class="section-badge"
          style="margin-bottom:0.25rem;"
        >
          ${project.organization || ''}
          ·
          ${project.period || ''}
        </span>

        <h3>
          ${project.title}
        </h3>

      </div>


      <button
        class="modal-close-btn"
        onclick="closeCaseStudyModal()"
        aria-label="Close modal"
      >
        <i data-lucide="x"></i>
      </button>

    </div>


    <div class="modal-body">

      <!-- HERO IMAGE -->

      ${
        project.image
          ? `
            <img
              src="${project.image}"
              alt="${project.title}"
              class="modal-hero-img"
              onclick="openLightbox(0)"
              style="cursor:pointer;"
              onerror="handleProjectImageError(this);"
            >
          `
          : ''
      }


      <!-- PROJECT VIDEO -->

      ${projectVideoHTML}


      <!-- IMAGE GALLERY -->

      ${galleryHTML}


      <!-- EXECUTIVE OVERVIEW -->

      ${
        project.overview
          ? `
            <div class="modal-section">

              <h4
                style="
                  color:var(--accent-cyan);
                  margin-bottom:0.5rem;
                "
              >
                Executive Overview
              </h4>

              <p
                style="
                  font-size:1rem;
                  color:#cbd5e1;
                  line-height:1.6;
                "
              >
                ${project.overview}
              </p>

            </div>
          `
          : ''
      }


      <!-- BUSINESS CONTEXT -->

      ${
        project.businessContext
          ? `
            <div class="modal-section">

              <h4
                style="
                  color:var(--accent-cyan);
                  margin-bottom:0.5rem;
                "
              >
                Business Context & Challenge
              </h4>

              <p
                style="
                  font-size:0.95rem;
                  color:var(--text-secondary);
                  line-height:1.6;
                "
              >
                ${project.businessContext}
              </p>

            </div>
          `
          : ''
      }


      <!-- DATA PREPARATION -->

      ${
        project.dataPreparation
          ? `
            <div class="modal-section">

              <h4
                style="
                  color:var(--accent-cyan);
                  margin-bottom:0.5rem;
                "
              >
                Data Preparation & Technical Architecture
              </h4>

              <p
                style="
                  font-size:0.95rem;
                  color:var(--text-secondary);
                  line-height:1.6;
                "
              >
                ${project.dataPreparation}
              </p>

            </div>
          `
          : ''
      }


      <!-- KPIs -->

      ${kpiGrid}


      <!-- FILTERS -->

      ${filtersHTML}


      <!-- BUSINESS VALUE -->

      ${
        project.businessValue
          ? `
            <div class="modal-section">

              <h4
                style="
                  color:var(--accent-cyan);
                  margin-bottom:0.5rem;
                "
              >
                Business Value & Impact
              </h4>

              <div
                style="
                  background:
                    rgba(16,185,129,0.08);
                  border-left:
                    3px solid #10b981;
                  padding:1rem 1.25rem;
                  border-radius:
                    0 8px 8px 0;
                "
              >

                <p
                  style="
                    color:#e2e8f0;
                    font-size:0.95rem;
                    font-weight:500;
                  "
                >
                  ${project.businessValue}
                </p>

              </div>

            </div>
          `
          : ''
      }


      <!-- EVIDENCE -->

      ${evidenceHTML}


      <!-- TECHNOLOGIES -->

      ${
        project.tools &&
        project.tools.length > 0
          ? `
            <div class="modal-section">

              <h4
                style="
                  color:var(--accent-cyan);
                  margin-bottom:0.5rem;
                "
              >
                Technologies & Tools
              </h4>

              <div
                style="
                  display:flex;
                  gap:0.5rem;
                  flex-wrap:wrap;
                "
              >

                ${project.tools.map(t => `
                  <span
                    class="tool-tag"
                    style="
                      background:
                        rgba(2,132,199,0.15);
                      border-color:
                        rgba(56,189,248,0.3);
                      color:#38bdf8;
                    "
                  >
                    ${t}
                  </span>
                `).join('')}

              </div>

            </div>
          `
          : ''
      }


      <!-- LINKS -->

      ${linksRow}

    </div>
  `;


  // Open modal
  modal.classList.add('open');

  document.body.style.overflow = 'hidden';


  // Re-render Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }


  // Scroll modal content to top
  modalContent.scrollTop = 0;
}


// ============================================================
// CLOSE CASE STUDY MODAL
// ============================================================

function closeCaseStudyModal() {

  const modal =
    document.getElementById('projectModal');

  if (modal) {

    // Pause any playing videos
    const videos =
      modal.querySelectorAll('video');

    videos.forEach(video => {

      try {
        video.pause();
        video.currentTime = 0;
      } catch (error) {
        console.warn(
          'Unable to reset project video:',
          error
        );
      }

    });


    // Remove iframe sources to stop playback
    const iframes =
      modal.querySelectorAll('iframe');

    iframes.forEach(iframe => {
      iframe.src = iframe.src;
    });


    modal.classList.remove('open');

    document.body.style.overflow = '';
  }

  activeModalProject = null;
}


// ============================================================
// IMAGE LIGHTBOX
// ============================================================

function openLightbox(index) {

  const imageList =
    Array.isArray(currentLightboxImages)
      ? currentLightboxImages.filter(img => {
          if (!img || typeof img !== 'string') return false;

          const cleanPath = img.split('?')[0].toLowerCase();

          return (
            cleanPath.endsWith('.jpg') ||
            cleanPath.endsWith('.jpeg') ||
            cleanPath.endsWith('.png') ||
            cleanPath.endsWith('.webp') ||
            cleanPath.endsWith('.gif')
          );
        })
      : [];

  if (!imageList.length) {
    return;
  }

  currentLightboxImages = imageList;

  currentLightboxIndex =
    Math.max(
      0,
      Math.min(
        index,
        currentLightboxImages.length - 1
      )
    );

  const lightbox =
    document.getElementById('imageLightbox');

  const imgEl =
    document.getElementById('lightboxImg');

  if (!lightbox || !imgEl) {
    console.error('Image lightbox elements not found.');
    return;
  }

  imgEl.src =
    currentLightboxImages[currentLightboxIndex];

  lightbox.classList.add('open');

  document.body.style.overflow = 'hidden';
}


// ============================================================
// CLOSE LIGHTBOX
// ============================================================

function closeLightbox() {

  const lightbox =
    document.getElementById('imageLightbox');

  if (lightbox) {
    lightbox.classList.remove('open');
  }

  document.body.style.overflow = '';
}


// ============================================================
// NEXT LIGHTBOX IMAGE
// ============================================================

function nextLightboxImage() {

  if (!currentLightboxImages.length) {
    return;
  }


  currentLightboxIndex =
    (currentLightboxIndex + 1)
    % currentLightboxImages.length;


  const imgEl =
    document.getElementById('lightboxImg');


  if (imgEl) {

    imgEl.src =
      currentLightboxImages[
        currentLightboxIndex
      ];
  }
}


// ============================================================
// PREVIOUS LIGHTBOX IMAGE
// ============================================================

function prevLightboxImage() {

  if (!currentLightboxImages.length) {
    return;
  }


  currentLightboxIndex =
    (
      currentLightboxIndex -
      1 +
      currentLightboxImages.length
    )
    % currentLightboxImages.length;


  const imgEl =
    document.getElementById('lightboxImg');


  if (imgEl) {

    imgEl.src =
      currentLightboxImages[
        currentLightboxIndex
      ];
  }
}


// ============================================================
// MODAL LISTENERS
// ============================================================

function setupModalListeners() {

  // ----------------------------------------------------------
  // Keyboard controls
  // ----------------------------------------------------------

  window.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      const lightbox =
        document.getElementById('imageLightbox');


      if (
        lightbox &&
        lightbox.classList.contains('open')
      ) {

        closeLightbox();
        return;
      }


      closeCaseStudyModal();
    }


    else if (e.key === 'ArrowRight') {

      const lightbox =
        document.getElementById('imageLightbox');


      if (
        lightbox &&
        lightbox.classList.contains('open')
      ) {

        nextLightboxImage();
      }
    }


    else if (e.key === 'ArrowLeft') {

      const lightbox =
        document.getElementById('imageLightbox');


      if (
        lightbox &&
        lightbox.classList.contains('open')
      ) {

        prevLightboxImage();
      }
    }

  });


  // ----------------------------------------------------------
  // Click outside case study modal
  // ----------------------------------------------------------

  const modal =
    document.getElementById('projectModal');


  if (modal) {

    modal.addEventListener('click', (e) => {

      if (e.target === modal) {
        closeCaseStudyModal();
      }

    });
  }


  // ----------------------------------------------------------
  // Click outside lightbox
  // ----------------------------------------------------------

  const lightbox =
    document.getElementById('imageLightbox');


  if (lightbox) {

    lightbox.addEventListener('click', (e) => {

      if (
        e.target === lightbox ||
        e.target.id === 'lightboxCloseBtn'
      ) {

        closeLightbox();
      }

    });
  }


  // ----------------------------------------------------------
  // Lightbox close button
  // ----------------------------------------------------------

  const closeBtn =
    document.getElementById('lightboxCloseBtn');


  if (closeBtn) {

    closeBtn.addEventListener('click', () => {
      closeLightbox();
    });
  }
}


// ============================================================
// GLOBAL EXPORTS
// ============================================================

window.initProjectsModule =
  initProjectsModule;

window.renderProjects =
  renderProjects;

window.renderFeaturedProjects =
  renderFeaturedProjects;

window.openCaseStudyModal =
  openCaseStudyModal;

window.closeCaseStudyModal =
  closeCaseStudyModal;

window.openLightbox =
  openLightbox;

window.closeLightbox =
  closeLightbox;

window.nextLightboxImage =
  nextLightboxImage;

window.prevLightboxImage =
  prevLightboxImage;

window.resetProjectFilters =
  resetProjectFilters;