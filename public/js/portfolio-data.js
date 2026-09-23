/**
 * Portfolio Data - Centralized authoritative state for Ankit Kumar's portfolio
 * ZERO CONTRADICTIONS - strictly aligned with verified facts
 */

const portfolioData = {
  personalInfo: {
    name: "Ankit Kumar",
    headline: "Data Analyst | SQL | Power BI | Excel | Python | Automation",
    positioning: "Data Analyst + MIS Analyst + Business Intelligence + Data Analytics + Reporting Automation + AI Automation",
    tagline: "I turn raw business data into accurate reporting, interactive dashboards, automated workflows, and actionable insights.",
    supportingTagline: "From data collection and cleaning to SQL analysis, dashboard development, workflow automation, and management reporting.",
    location: "Noida, Uttar Pradesh, India",
    openTo: "Open to opportunities across India",
    currentRole: "MIS Analyst — Operations & Automation",
    currentCompany: "38 Barracks Hotel & Restaurant & Bar",
    email: "ankitraj29234@gmail.com",
    phone: "+91 8102937150",
    linkedin: "https://linkedin.com/in/ankit-yadav-125545244",
    github: "https://github.com/Arankityadav1",
    profileImage: "assets/profile/ankit-dp.jpg",
    resumeUrl: "assets/resume/Ankit_Kumar_Resume.pdf"
  },

  metrics: [
    {
      value: 10,
      suffix: "+",
      label: "Dashboards",
      subtext: "Built & maintained across operations"
    },
    {
      value: 15,
      suffix: "+",
      label: "Reports / Workflows Automated",
      subtext: "Eliminating repetitive manual tasks"
    },
    {
      value: 50,
      suffix: "L+",
      label: "Records Handled",
      subtext: "High-volume operational data"
    },
    {
      value: 4,
      suffix: "",
      label: "Outlets",
      subtext: "Multi-outlet reporting coverage"
    },
    {
      value: 7,
      suffix: "+",
      label: "Departments",
      subtext: "Operations, Finance, HR & more"
    },
    {
      value: "2h → 15m",
      isText: true,
      label: "Process Improvement",
      subtext: "Turnaround time via automation"
    },
    {
      value: 95,
      suffix: "%+",
      label: "Reporting Accuracy",
      subtext: "Rigorous validation & data controls"
    }
  ],

  about: {
    bio: "I’m Ankit Kumar, a Data & MIS professional currently working as an MIS Analyst at 38 Barracks Hotels & Restaurants, with deep hands-on experience in MIS reporting, operational data analytics, dashboard development, workflow automation, and inventory management. Previously, I worked as a Data Analyst at Brainers Commercial Pvt. Ltd. and completed a comprehensive Data Analyst internship at CETPA Infotech Pvt. Ltd.",
    bioSecond: "I hold a B.Tech. in Information Technology from JIS College of Engineering. My core strength lies in bridging raw operational business systems (Petpooja, CRM, ERP, Swiggy, Zomato) with SQL, Advanced Excel, Power BI, Python, and Google Apps Script to deliver reliable reporting, rapid decision support, and measurable time savings.",
    keyDifferentiator: "From repetitive manual work to automated business intelligence. By combining data analysis, SQL, Excel, Power BI, Python and workflow automation, I build reporting systems that reduce manual effort and improve operational visibility.",
    workAcross: [
      { name: "Data Collection", icon: "database" },
      { name: "Data Cleaning", icon: "filter" },
      { name: "SQL Analysis", icon: "code" },
      { name: "Excel Analysis", icon: "table" },
      { name: "Power BI", icon: "bar-chart-3" },
      { name: "MIS Reporting", icon: "file-spreadsheet" },
      { name: "Dashboard Development", icon: "layout-dashboard" },
      { name: "Workflow Automation", icon: "zap" },
      { name: "Inventory Analytics", icon: "boxes" },
      { name: "Management Reporting", icon: "trending-up" }
    ]
  },

  careerJourney: [
    {
      period: "2020 – 2024",
      role: "Bachelor of Technology — Information Technology",
      company: "JIS College of Engineering",
      location: "Kalyani, West Bengal",
      type: "Degree Education",
      description: "Graduated with CGPA 7.50. Deep coursework in Python, Statistics & Probability, SQL & Database Design, Advanced Excel, and Power BI."
    },
    {
      period: "Jul 2025 – Dec 2025",
      role: "Data Analyst Intern",
      company: "CETPA Infotech Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      type: "Internship · On-site",
      description: "SQL query optimization, JOINs, subqueries, aggregations, relational database analysis, and developing interactive Power BI KPI dashboards and Python EDA."
    },
    {
      period: "Dec 2025 – May 2026",
      role: "Data Analyst — Analytics & Reporting",
      company: "Brainers Commercial Pvt. Ltd.",
      location: "Ghaziabad, Uttar Pradesh",
      type: "Full-time · On-site",
      description: "Managed structured repositories with 50,000+ records per project. Cleaned 10+ structured datasets using Python, SQL and Excel. Delivered weekly/monthly Power BI dashboards."
    },
    {
      period: "May 2026 – Present",
      role: "MIS Analyst — Operations & Automation",
      company: "38 Barracks Hotel & Restaurant & Bar",
      location: "New Delhi",
      type: "Full-time · On-site",
      description: "Overseeing operational data across 4 outlets & 7+ departments (50L+ records). Built 10+ real-time/dynamic dashboards. Automated 15+ recurring reporting workflows, cutting time from 2 hours to 15 minutes."
    }
  ],

  experience: [
    {
      id: "exp-38-barracks",
      company: "38 Barracks Hotel & Restaurant & Bar",
      title: "MIS Analyst — Operations & Automation",
      dates: "May 2026 – Present",
      location: "New Delhi · Multi-Outlet",
      roleType: "Full-time | On-site",
      summary: "Leading operational data analytics, management MIS reporting, and process automation across multi-outlet hospitality operations.",
      responsibilities: [
        "Manage end-to-end operational MIS reporting across 4 outlets and 7+ departments (Operations, Finance, HR), tracking 50L+ transactional records.",
        "Extract, clean, and process operational data through Petpooja POS and integrated CRM systems, standardizing delivery platform feeds (Zomato & Swiggy).",
        "Built and maintained 10+ real-time dynamic MIS dashboards using Advanced Excel, Google Sheets, SQL, and Power BI for leadership decision-making.",
        "Designed and deployed 10+ Google Apps Script automations and AppSheet tools, reducing daily reporting turnaround benchmark from 2 hours to 15 minutes.",
        "Maintain 95%+ reporting accuracy through rigorous structured data validation, verification rules, and automated consistency checks."
      ],
      tools: ["SQL", "Power BI", "Google Sheets", "Google Apps Script", "Advanced Excel", "Petpooja", "AppSheet", "CRM", "Zomato / Swiggy Data"],
      metrics: [
        { label: "Reports Automated", value: "15+" },
        { label: "Dashboards Built", value: "10+" },
        { label: "Records Handled", value: "50L+" },
        { label: "Outlets Supported", value: "4" },
        { label: "Departments", value: "7+" },
        { label: "Time Reduction", value: "2h → 15m" },
        { label: "Accuracy", value: "95%+" }
      ]
    },
    {
      id: "exp-brainers",
      company: "Brainers Commercial Pvt. Ltd.",
      title: "Data Analyst — Analytics & Reporting",
      dates: "Dec 2025 – May 2026",
      location: "Ghaziabad, Uttar Pradesh",
      roleType: "Full-time | On-site",
      summary: "Managed large-scale structured datasets, conducted statistical and predictive data modeling, and developed interactive business reporting systems.",
      responsibilities: [
        "Developed and maintained structured dataset repositories covering 50,000+ records per project for operational reporting and business analytics.",
        "Built interactive Power BI dashboards with KPI cards, slicers, trend lines, and drill-throughs for weekly and monthly stakeholder reviews.",
        "Performed comprehensive data cleaning across 10+ structured datasets using Python (Pandas, NumPy), SQL, and Advanced Excel.",
        "Conducted statistical analysis including descriptive statistics, correlation, regression modeling, and hypothesis testing for business decisions.",
        "Automated recurring reporting workflows using Python scripts and Power Query, collaborating with a 5-member cross-functional team."
      ],
      tools: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Advanced Excel", "Power Query", "Statistics"],
      metrics: [
        { label: "Records / Project", value: "50,000+" },
        { label: "Cleaned Datasets", value: "10+" },
        { label: "Team Size", value: "5-member" }
      ]
    },
    {
      id: "exp-cetpa",
      company: "CETPA Infotech Pvt. Ltd.",
      title: "Data Analyst — Internship",
      dates: "Jul 2025 – Dec 2025",
      location: "Noida, Uttar Pradesh",
      roleType: "Internship | On-site",
      summary: "Focused on SQL query engineering, exploratory data analysis with Python, and building interactive business intelligence dashboards.",
      responsibilities: [
        "Designed and optimized SQL queries using JOINs, CTEs, subqueries, and complex aggregations for relational database analytics.",
        "Built interactive Power BI dashboards with KPI cards, slicers, custom DAX measures, and hierarchical drill-throughs.",
        "Performed Exploratory Data Analysis (EDA) on business datasets using Python (Pandas, Matplotlib) and Advanced Excel (Pivot Tables, Power Query).",
        "Delivered actionable operational insights and KPI variance tracking for marketing and operations teams.",
        "Standardized repetitive reporting workflows to eliminate manual data entry steps and accelerate turnaround time."
      ],
      tools: ["SQL", "Power BI", "DAX", "Python", "Pandas", "Matplotlib", "Advanced Excel", "Power Query"],
      metrics: [
        { label: "Query Optimization", value: "JOINs / CTEs" },
        { label: "BI Stack", value: "Power BI + DAX" },
        { label: "EDA", value: "Python + Excel" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-sales-mis",
      title: "Real-Time Sales MIS & Business Intelligence Dashboard",
      organization: "38 Barracks",
      period: "Jun 2026 – Jul 2026",
      type: "Full-time (Offsite)",
      category: ["38 Barracks", "MIS", "Automation"],
      featured: true,
      summary: "Developed an interactive Sales MIS Dashboard for 38 Barracks Restaurant & Bar with dynamic near-real-time management reporting, KPI tracking, and multi-shop sales monitoring.",
      badge: "38 Barracks · MIS & BI",
      image: "assets/projects/sales-mis/sales-1.jpg",
      images: [
        "assets/projects/sales-mis/sales-1.jpg",
        "assets/projects/sales-mis/sales-2.jpg",
        "assets/projects/sales-mis/sales-3.jpg"
      ],
      video: "assets/projects/sales-mis/sales-demo.mp4",
      hasVideo: false,
      tools: ["Google Sheets", "Google Apps Script", "HTML", "CSS", "JavaScript", "Chart.js", "Excel"],
      kpis: [
        { name: "Total Pax (Guests)", val: "17,684" },
        { name: "Total Tables / Covers", val: "6,465" },
        { name: "Google & Zomato Reviews", val: "5,380+" },
        { name: "Multi-Shop Outlets", val: "4 Outlets" },
        { name: "Logged Entries", val: "397 Entries (20 Wks)" },
        { name: "Comment Cards", val: "3,706 Cards" },
        { name: "Hookah Volume", val: "712 Units" }
      ],
      filters: ["Week Filter (W17-W36)", "Shop Slicer (02, 03, 04)", "Day Type (Weekday/Weekend)", "Date Range (04/23/2026 – 09/02/2026)"],
      overview: "Built for senior management at 38 Barracks Restaurant & Bar to monitor live multi-shop guest volumes (Pax), table turns, operations indicators, guest sentiment channels, and bar/hookah performance in one centralized command screen.",
      businessContext: "38 Barracks operates high-volume outlets where operational decisions require rapid visibility into daily sales trends, guest counts, and customer feedback. Manual spreadsheet compilation took hours and delayed tactical decisions.",
      dataPreparation: "Structured automated data extraction pipelines from Petpooja POS and review aggregators into Google Sheets. Apps Script runs automated normalization, computes dynamic variance metrics, and triggers minute-to-minute updates.",
      businessValue: "Reduced manual reporting from 2 hours to 15 minutes, improved multi-outlet management visibility, and enabled leadership to detect operational anomalies early in the operating week.",
      evidence: ["397 live entries tracked over 20 weeks (23 Apr – 02 Sep 2026)", "Dynamic Google Sheets data pipeline with multi-shop slicers", "Integrated Google (4,459) & Zomato (921) review tracking and Hookah operations command"],
      github: "ADD_GITHUB_LINK",
      liveDemo: "ADD_LIVE_DEMO_LINK"
    },
    {
      id: "proj-uniform-inventory",
      title: "Uniform Inventory Management & MIS Dashboard Automation",
      organization: "38 Barracks",
      period: "Jul 2026 – Aug 2026",
      type: "Full-time (Offsite)",
      category: ["38 Barracks", "Automation", "MIS"],
      featured: true,
      summary: "Developed a real-time Uniform Inventory Management Dashboard using Google Sheets, Google Apps Script, HTML, CSS, and JavaScript to automate stock monitoring, employee issues, and MIS reporting.",
      badge: "38 Barracks · Automation",
      image: "assets/projects/uniform/uniform-1.jpg",
      images: [
        "assets/projects/uniform/uniform-1.jpg",
        "assets/projects/uniform/uniform-2.jpg",
        "assets/projects/uniform/uniform-3.jpg"
      ],
      video: "assets/projects/uniform/uniform-demo.mp4",
      hasVideo: false,
      tools: ["Google Sheets", "Google Apps Script", "HTML", "CSS", "JavaScript", "Excel"],
      kpis: [
        { name: "Total Current Stock", val: "276 Units" },
        { name: "Total Opening Stock", val: "113 Units" },
        { name: "Total Purchases", val: "181 Units" },
        { name: "Total Issued", val: "18 Units" },
        { name: "Dress Types Tracked", val: "7 Types" },
        { name: "Departments Supported", val: "7+ Depts" },
        { name: "Low Stock Items", val: "0 (Alert Triggered)" }
      ],
      filters: ["Department Slicer", "Designation", "Category", "Dress Name", "Size", "Date Range", "Live Search"],
      overview: "An end-to-end inventory management solution created for 38 Barracks to eliminate discrepancies in uniform issuance across staff departments (Service, Kitchen, Bar, Housekeeping). Features dynamic visual cards with Google Drive image integration.",
      businessContext: "Uniform allocations across hundreds of hospitality employees frequently encountered missing receipts, unrecorded returns, stockouts, and untracked inventory costs.",
      dataPreparation: "Architected transaction tracking for opening stock, purchases, issues, returns, and damages in Google Sheets with Apps Script triggers. Designed automated formulas to compute real-time current balances and low-stock threshold flags.",
      businessValue: "Replaced repetitive manual paperwork with a centralized, searchable, and decision-ready MIS workflow that reduced audits to minutes.",
      evidence: ["Department-wise stock overview", "Category-wise donut chart distribution", "Automated low-stock threshold warning engine"],
      github: "ADD_GITHUB_LINK",
      liveDemo: "ADD_LIVE_DEMO_LINK"
    },
    {
      id: "proj-healthcare",
      title: "Hospital Healthcare Patients Analysis Using SQL & Power BI",
      organization: "Self Work",
      period: "Nov 2025",
      type: "Self Work (Offsite)",
      category: ["Self Work", "Power BI", "SQL"],
      featured: true,
      summary: "Built an end-to-end healthcare analytics solution using Power BI, SQL Server, ETL, and DAX to deliver multi-perspective operational and patient-care hospital insights.",
      badge: "Healthcare · Power BI & SQL",
      image: "assets/projects/healthcare/healthcare-1.jpg",
      images: [
        "assets/projects/healthcare/healthcare-1.jpg",
        "assets/projects/healthcare/healthcare-2.jpg",
        "assets/projects/healthcare/healthcare-3.jpg"
      ],
      video: "assets/projects/healthcare/healthcare-demo.mp4",
      hasVideo: false,
      tools: ["Power BI", "SQL Server", "ETL", "DAX", "Excel"],
      kpis: [
        { name: "Total Patient Admissions", val: "40.24K" },
        { name: "Total Doctors Tracked", val: "40.34K" },
        { name: "Admission Breakdown", val: "Elective, Emergency, Urgent" },
        { name: "Top Test Results", val: "Abnormal (33.5%), Normal (33.3%)" },
        { name: "Conditions Monitored", val: "4 Chronic Categories" },
        { name: "Insurance Networks", val: "Medicare, Blue Cross, Aetna" }
      ],
      filters: ["Admission Type", "Gender", "Medical Condition", "Insurance Provider", "Blood Group"],
      overview: "A comprehensive 3-tier healthcare analytics dashboard featuring a Monthly/Yearly View, Consolidated KPI View, and granular Patient Details View designed for healthcare administrators and clinical operations managers.",
      businessContext: "Hospitals manage complex operational streams spanning bed occupancy, emergency influx, doctor allocation, medical conditions (Hypertension, Arthritis, Cancer, Diabetes), and insurance reimbursements (Cigna, Medicare, Blue Cross, Aetna).",
      dataPreparation: "Extracted and transformed raw patient records via SQL Server ETL pipelines. Cleaned missing values, standardized clinical classifications, and developed advanced DAX measures for day/hour volume trends and doctor-to-patient ratios.",
      businessValue: "Demonstrates practical enterprise SQL-to-Power BI workflows for healthcare operations, capacity planning, and patient-level analytics.",
      evidence: ["Monthly/Yearly view", "Consolidated view with trend analysis", "Patient details view with doctor mapping"],
      github: "https://github.com/Arankityadav1/Hospital-Healthcare-Patients-Analysis-Using-SQL",
      liveDemo: "ADD_LIVE_DEMO_LINK"
    },
    {
  id: "proj-real-estate",
  title: "Real Estate Sales Analytics Dashboard (2001–2020)",
  organization: "Self Work",
  period: "2001–2020 Dataset",
  type: "Featured Analytics Project",
  category: ["Self Work", "Power BI", "SQL"],
  featured: true,

  summary: "20-year longitudinal analytics of real estate sales across 169 cities, uncovering housing market cycles, property-type valuations, and regional investment opportunities.",

  badge: "Real Estate · 20-Year Analysis",

  // Main project image
  image: "assets/projects/real-estate/real estate-1.png",

  // Images only
  images: [
    "assets/projects/real-estate/real estate-1.png"
  ],

  // Separate project walkthrough video
  video: "assets/projects/real-estate/real estate-2.mp4",

  // Video is available
  hasVideo: true,

  tools: [
    "Power BI",
    "Power Query",
    "SQL",
    "Excel"
  ],

  kpis: [
    { name: "Total Houses Analyzed", val: "58.4K" },
    { name: "Cities Covered", val: "169 Cities" },
    { name: "Avg Sales Ratio", val: "7.31" },
    { name: "Properties Mapped", val: "Single Family & Condos" },
    { name: "Analysis Period", val: "20 Years (2001–2020)" },
    { name: "Market Cycles Analyzed", val: "2 Full Decades" }
  ],

  filters: [
    "Year Slicer (2001-2020)",
    "Property Type",
    "City / Region",
    "Sales Ratio Range"
  ],

  overview: "A longitudinal business intelligence project analyzing 2 decades of residential and commercial transactions to evaluate price appreciation cycles, property type distributions, and city-level volatility.",

  businessContext: "Real estate investment firms and urban developers require historical benchmark data across multiple market cycles (including 2008 and 2018 peaks) to evaluate risk before capital deployment.",

  dataPreparation: "Cleaned and normalized multi-decade municipal records using Power Query and SQL. Implemented calculated columns and time-series measures in Power BI.",

  businessValue: "Delivered historical trend visibility, identified high-growth residential corridors, and evaluated commercial vs single-family performance.",

  evidence: [
    "20-year time series visualization",
    "169-city geospatial mapping",
    "Property type breakdown"
  ],

  github: "https://github.com/Arankityadav1/Real-Estate-Sales-Analysis-2001-2020-",
  liveDemo: "ADD_LIVE_DEMO_LINK"
},
    {
      id: "proj-uber",
      title: "Uber Ride Analysis Dashboard",
      organization: "Self Work",
      period: "Oct 2025",
      type: "Self Work (Offsite)",
      category: ["Self Work", "SQL", "Power BI"],
      featured: false,
      summary: "Analyzed Uber booking, ride-status, cancellation, and trip-duration data using advanced SQL query modeling and interactive Power BI storytelling.",
      badge: "Ride Analytics · SQL & Power BI",
      image: "assets/projects/uber/uber-1.jpg",
      images: [
        "assets/projects/uber/uber-1.jpg",
        "assets/projects/uber/uber-2.jpg",
        "assets/projects/uber/uber-3.jpg"
      ],
      video: "assets/projects/uber/uber-demo.mp4",
      hasVideo: false,
      tools: ["SQL", "Power BI", "Excel", "Data Modeling"],
      kpis: [
        { name: "Core Focus", val: "Booking & Cancellation Patterns" },
        { name: "Key Queries", val: "Multi-Table JOINs & CTEs" },
        { name: "Time Aggregations", val: "Peak Hour & Weekend Demand" },
        { name: "Metrics Tracked", val: "Completed Trips, Driver Cancellations, Customer Drops" }
      ],
      filters: ["Ride Status", "Vehicle Type", "Payment Method", "Time of Day"],
      overview: "Created relational database tables, loaded raw ride records, and wrote SQL queries utilizing JOINs, window functions, and aggregations to uncover demand hotspots and reasons behind trip cancellations.",
      businessContext: "Ride-hailing companies operate on thin unit margins where unfulfilled bookings and driver churn represent direct revenue loss.",
      dataPreparation: "Formulated relational schemas, handled missing timestamps, and derived travel duration and fare variance metrics in SQL prior to dashboarding.",
      businessValue: "Strengthened relational-data reasoning, complex query optimization, and KPI visualization for on-demand logistics.",
      evidence: ["Relational schema design", "SQL query repository", "Interactive Power BI dashboard"],
      github: "https://github.com/Arankityadav1/Uber-Ride-Analysis-SQL-With-Power-BI",
      liveDemo: "ADD_LIVE_DEMO_LINK"
    }
  ],

  skills: {
    categories: [
      {
        name: "Data & BI",
        icon: "bar-chart-2",
        items: [
          { name: "SQL", details: "Relational queries, JOINs, CTEs, subqueries", score: "8/10", icon: "database", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
          { name: "Power BI", details: "DAX measures, star schema modeling, KPI dashboards", score: "8/10", icon: "bar-chart-3", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)" },
          { name: "Excel", details: "Pivot tables, XLOOKUP, Power Query, formulas", score: "9/10", icon: "file-spreadsheet", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" },
          { name: "Power Query", details: "M code, automated data transformation", score: "8/10", icon: "filter", color: "#fb923c", bg: "rgba(251, 146, 60, 0.12)" },
          { name: "DAX", details: "Calculated measures, filter context, time-intelligence", score: "8/10", icon: "calculator", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)" },
          { name: "ETL", details: "Extract, Transform, Load data pipelines", score: "8/10", icon: "refresh-cw", color: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)" },
          { name: "Data Modeling", details: "Star & snowflake schemas, table relationships", score: "8/10", icon: "boxes", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)" },
          { name: "MIS Reports", details: "Daily, weekly, and monthly management reports", score: "9/10", icon: "clipboard-check", color: "#34d399", bg: "rgba(52, 211, 153, 0.12)" },
          { name: "KPI Tracking", details: "Pax, APC, revenue, variance diagnostics", score: "9/10", icon: "target", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.12)" }
        ]
      },
      {
        name: "Programming",
        icon: "code",
        items: [
          { name: "Python", details: "Data analysis, automation scripting, exploratory EDA", score: "7/10", icon: "terminal", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
          { name: "Pandas", details: "DataFrame manipulation, cleaning, aggregation", score: "8/10", icon: "table", color: "#818cf8", bg: "rgba(129, 140, 248, 0.12)" },
          { name: "NumPy", details: "Vectorized numerical operations, array math", score: "7/10", icon: "binary", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)" },
          { name: "Matplotlib", details: "Exploratory plotting, trend analysis", score: "7/10", icon: "line-chart", color: "#fb923c", bg: "rgba(251, 146, 60, 0.12)" },
          { name: "JavaScript", details: "Interactive dashboard UIs, internal tooling", score: "6/10", icon: "code-2", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)" },
          { name: "HTML / CSS", details: "Structured reporting layouts, responsive design", score: "7/10", icon: "layout", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)" }
        ]
      },
      {
        name: "Automation",
        icon: "zap",
        items: [
          { name: "Google Sheets", details: "Operational MIS, formulas, dynamic feeds", score: "9/10", icon: "table-2", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" },
          { name: "Apps Script", details: "Automated triggers, email alerts, sheet sync", score: "8/10", icon: "zap", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
          { name: "AppSheet", details: "No-code operational data collection apps", score: "7/10", icon: "smartphone", color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)" },
          { name: "Google Forms", details: "Standardized data intake pipelines", score: "8/10", icon: "check-square", color: "#a78bfa", bg: "rgba(167, 139, 250, 0.12)" },
          { name: "n8n", details: "Workflow automation & connector nodes", score: "6/10", icon: "share-2", color: "#fb7185", bg: "rgba(251, 113, 133, 0.12)" },
          { name: "AI Workflows", details: "AI-assisted data extraction and synthesis", score: "7/10", icon: "sparkles", color: "#e879f9", bg: "rgba(232, 121, 249, 0.12)" }
        ]
      },
      {
        name: "Databases & BI",
        icon: "database",
        items: [
          { name: "MySQL", details: "Relational queries, indexing, table views", score: "8/10", icon: "database", color: "#0ea5e9", bg: "rgba(14, 165, 233, 0.12)" },
          { name: "SQL Server", details: "T-SQL workflows, stored procedures", score: "8/10", icon: "server", color: "#ef4444", bg: "rgba(239, 68, 68, 0.12)" },
          { name: "Looker Studio", details: "Web dashboarding & stakeholder reports", score: "7/10", icon: "pie-chart", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)" },
          { name: "Chart.js", details: "Interactive charts and trend curves", score: "7/10", icon: "bar-chart-2", color: "#f472b6", bg: "rgba(244, 114, 182, 0.12)" }
        ]
      },
      {
        name: "Business Systems",
        icon: "briefcase",
        items: [
          { name: "Petpooja POS", details: "POS operational data, ticket exports", score: "Practical", icon: "receipt", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)" },
          { name: "CRM Systems", details: "Guest records, retention analysis", score: "Practical", icon: "users", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
          { name: "Swiggy & Zomato", details: "Commission analysis, delivery reconciliation", score: "Practical", icon: "shopping-bag", color: "#f43f5e", bg: "rgba(244, 63, 94, 0.12)" },
          { name: "ERP & PMS", details: "Property management & accounting feeds", score: "Practical", icon: "building-2", color: "#94a3b8", bg: "rgba(148, 163, 184, 0.12)" },
          { name: "Inventory Systems", details: "Stock variance audits, consumption tracking", score: "Practical", icon: "package", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" }
        ]
      },
      {
        name: "Emerging & Analytics",
        icon: "cpu",
        badge: "Continuous Learning",
        items: [
          { name: "Databricks", details: "Lakehouse concepts & data platform", score: "5/10", icon: "flame", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)" },
          { name: "AI Studio", details: "Model-assisted analysis & prompt synthesis", score: "7/10", icon: "cpu", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)" },
          { name: "Prompt Eng", details: "Structured prompt chains for data extraction", score: "7/10", icon: "message-square-code", color: "#14b8a6", bg: "rgba(20, 184, 166, 0.12)" },
          { name: "Statistics", details: "Mean, variance, correlation, hypothesis checks", score: "8/10", icon: "trending-up", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
          { name: "Forecasting", details: "Time-series moving averages, sales budget projections", score: "7/10", icon: "activity", color: "#818cf8", bg: "rgba(129, 140, 248, 0.12)" }
        ]
      }
    ],

    proficiency: [
      { skill: "SQL", rating: 8, max: 10, category: "Core Analytics" },
      { skill: "Advanced Excel", rating: 9, max: 10, category: "Core Analytics" },
      { skill: "Power BI", rating: 8, max: 10, category: "Core Analytics" },
      { skill: "Python", rating: 7, max: 10, category: "Programming" },
      { skill: "Google Sheets", rating: 9, max: 10, category: "Automation" },
      { skill: "Google Apps Script", rating: 8, max: 10, category: "Automation" },
      { skill: "AI Automation", rating: 7, max: 10, category: "Emerging Toolkit" },
      { skill: "Looker Studio", rating: 7, max: 10, category: "Visualization" },
      { skill: "HTML/CSS/JS", rating: 6, max: 10, category: "Frontend Tools" },
      { skill: "n8n", rating: 6, max: 10, category: "Emerging Toolkit" },
      { skill: "Databricks", rating: 5, max: 10, category: "Emerging Toolkit" }
    ]
  },

  automationWorkflow: {
    title: "AUTOMATION & INTELLIGENT WORKFLOWS",
    subtitle: "I turn repetitive manual processes into streamlined, automated reporting workflows.",
    stages: [
      { step: "01", name: "Data Source", desc: "Petpooja POS, CRM, Zomato, Swiggy, Forms, Flat CSVs", icon: "database" },
      { step: "02", name: "Data Collection", desc: "Automated ingestion via scheduled scripts & Google Sheets", icon: "download" },
      { step: "03", name: "Data Cleaning", desc: "Deduplication, schema normalization, outlier filtering", icon: "sparkles" },
      { step: "04", name: "Transformation", desc: "Power Query M, Python Pandas, business formulas & aggregations", icon: "cpu" },
      { step: "05", name: "SQL / Analysis", desc: "Optimized relational queries, CTEs, window functions, variance logic", icon: "file-code" },
      { step: "06", name: "Automation", desc: "Google Apps Script triggers, recurring syncs, alert webhooks", icon: "zap" },
      { step: "07", name: "Dashboarding", desc: "Power BI, Google Sheets dynamic grids, interactive slicers", icon: "layout" },
      { step: "08", name: "Management Insights", desc: "Executive KPI summaries, actionable trend alerts, decision support", icon: "trending-up" }
    ]
  },

  dataMethodology: [
    { step: "01", name: "COLLECT", desc: "Gather multi-channel operational data from POS, CRM, delivery aggregators, and spreadsheets without data loss.", tools: "Petpooja, CRM, Google Sheets, CSV" },
    { step: "02", name: "CLEAN", desc: "Detect and resolve missing values, inconsistent formats, duplicate records, and outliers with rigorous QA.", tools: "Python, Excel, Power Query, SQL" },
    { step: "03", name: "TRANSFORM", desc: "Structure raw transactions into clean analytical tables, apply business logic, and compute KPIs.", tools: "Power Query, Pandas, DAX" },
    { step: "04", name: "QUERY", desc: "Write high-performance SQL queries utilizing JOINs, subqueries, CTEs, and group aggregations.", tools: "MySQL, SQL Server, PostgreSQL" },
    { step: "05", name: "ANALYZE", desc: "Apply statistical methods (correlation, regression, hypothesis testing) to understand variances and root causes.", tools: "Python, Excel, NumPy" },
    { step: "06", name: "VISUALIZE", desc: "Build intuitive dashboards with high visual contrast, clear hierarchy, interactive filters, and drill-throughs.", tools: "Power BI, Looker Studio, Chart.js" },
    { step: "07", name: "AUTOMATE", desc: "Replace repetitive manual updates with scheduled scripts, Apps Script triggers, and dynamic refresh pipelines.", tools: "Google Apps Script, n8n, Python" },
    { step: "08", name: "DELIVER INSIGHTS", desc: "Translate numbers into actionable management summaries that empower leadership to make decisions with confidence.", tools: "Executive MIS, KPI Decks" }
  ],

  realWorldOps: {
    title: "REAL-WORLD OPERATIONS SHOWCASE",
    company: "38 Barracks Hotel & Restaurant & Bar",
    headline: "Mission-Critical Multi-Outlet Hospitality Intelligence",
    metrics: [
      { value: "4", label: "Outlets Supported" },
      { value: "7+", label: "Departments Covered" },
      { value: "50L+", label: "Records Handled" },
      { value: "15+", label: "Workflows Automated" },
      { value: "10+", label: "Dashboards Maintained" },
      { value: "2h → 15m", label: "Manual Turnaround Slashed" }
    ],
    pipeline: [
      { name: "Sources", items: "Petpooja POS · CRM · Swiggy · Zomato" },
      { name: "Collection", items: "Scheduled download & Google Sheets intake" },
      { name: "Standardization", items: "Schema validation & discount reconciliation" },
      { name: "Calculation", items: "SQL queries, Excel formulas & DAX logic" },
      { name: "Automation", items: "Google Apps Script minute-to-minute refresh" },
      { name: "Delivery", items: "Executive Sales MIS & Uniform Command Dashboard" }
    ]
  },

  whyHireMe: [
    {
      id: "ops-experience",
      title: "Real Operational Experience",
      desc: "I don't just work with clean toy datasets. I handle daily live multi-outlet hospitality and healthcare data where accuracy directly impacts decisions."
    },
    {
      id: "dashboards-visibility",
      title: "Dashboards for Management Visibility",
      desc: "I design intuitive visual systems that senior executives can glance at in 10 seconds to grasp revenue variance, cost leaks, and volume trends."
    },
    {
      id: "workflow-automation",
      title: "Relentless Workflow Automation",
      desc: "If a task is repeated manually every day, I build a script or spreadsheet pipeline to automate it, having proven a 2 hour to 15 minute turnaround reduction."
    },
    {
      id: "analytics-stack",
      title: "Full Analytics Stack Synergy",
      desc: "Seamlessly combining SQL for querying, Python for data manipulation, Advanced Excel for agile modeling, and Power BI for enterprise reporting."
    },
    {
      id: "workspace-scripting",
      title: "Google Workspace & Apps Script Mastery",
      desc: "Expertise in building lightweight, low-cost internal web applications and automated reporting systems directly on Google Sheets and Apps Script."
    },
    {
      id: "business-understanding",
      title: "Business Understanding First",
      desc: "I think in terms of APC, guest count (Pax), table turns, low-stock thresholds, and variance against targets—translating business problems into data solutions."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology — Information Technology",
      institution: "JIS College of Engineering",
      period: "Jun 2020 – Jun 2024",
      grade: "CGPA: 7.50",
      details: "Comprehensive coursework in Python, Statistics & Probability, SQL & Database Design, Advanced Excel, and Power BI. Focused on data systems and computer engineering principles."
    },
    {
      degree: "Higher Secondary — Science (PCM)",
      institution: "Purnea College, Purnia",
      period: "Jun 2018 – Jun 2020",
      grade: "Score: 73%",
      details: "Physics, Chemistry, Mathematics background developing strong analytical reasoning, quantitative modeling, and problem-solving fundamentals."
    }
  ],

 certifications: [
  {
    name: "Data Analytics Using Power BI",
    issuer: "CETPA Infotech Pvt. Ltd.",
    date: "Jun 2025",
    credentialId: "ETData25620256M5344981",
    image: "assets/certificates/power-bi.jpg",
    featured: true,
    badge: "CETPA Certified",
    description: "Hands-on certification covering DAX measures, star schema modeling, Power Query transformations, and executive KPI dashboard construction."
  },
  {
    name: "MySQL — SQL",
    issuer: "HackerRank",
    date: "Jan 2026",
    credentialId: "83c7dd88290f",
    image: "assets/certificates/sql.png",
    featured: true,
    badge: "HackerRank Verified",
    description: "Verified assessment of relational query mastery: complex multi-table JOINs, subqueries, grouping, aggregation functions, and database logic."
  },
  {
    name: "Generative AI",
    issuer: "upGrad",
    date: "2025",
    credentialId: "K9DMEEbjg3kw9FRD",
    image: "assets/certificates/generative-ai.png",
    featured: true,
    badge: "upGrad Certified",
    description: "Foundational certification exploring prompt engineering, LLM architectures, AI automation workflows, and modern analytics productivity."
  }
],

  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/ankit-yadav-125545244", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/Arankityadav1", icon: "github" },
    { name: "Email", url: "mailto:ankitraj29234@gmail.com", icon: "mail" },
    { name: "Phone", url: "tel:+918102937150", icon: "phone" }
  ]
};

// Expose globally for vanilla scripts
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
