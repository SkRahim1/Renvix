document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. LOCAL PROSPECT DATABASE
     ========================================================================== */
  const PROSPECT_DATABASE = {
    school: [
      {
        id: "sch-01",
        name: "Lotus Valley High School",
        city: "Pune",
        website: "lotusvalleyschool.edu.in",
        phone: "+919823012345",
        email: "admin@lotusvalleyschool.edu.in",
        grade: "C",
        vulnerabilities: [
          { type: "chatbot", title: "No Student Inquiries Chatbot", desc: "No 24/7 automated portal to handle prospective parent admissions inquiries, causing ~40% drop-off in organic leads." },
          { type: "whatsapp", title: "Manual Fee Reminders", desc: "Staff manually draft and send text messages and emails for overdue fees, taking 15+ hours weekly." },
          { type: "responsiveness", title: "Poor Mobile Formatting", desc: "Main landing page table records (syllabus, marks) overflow on mobile viewport widths." }
        ],
        oppPackage: "School Administrative ERP + WhatsApp fee alert integrations.",
        oppDesc: "Deploying Renvix School ERP will automate fee notification schedules on WhatsApp, reducing parent default rates by 35% and saving administrative workloads.",
        status: "discovered"
      },
      {
        id: "sch-02",
        name: "Symbiosis Kids Academy",
        city: "Pune",
        website: "symbiosis-kids-pune.org",
        phone: "+919177884422",
        email: "admissions@symbiosiskids.org",
        grade: "D",
        vulnerabilities: [
          { type: "erp", title: "No Centralized Admin Ledger", desc: "Parent database, attendance, and grades are managed across separate Excel files with zero real-time cross-referencing." },
          { type: "whatsapp", title: "No Automated Attendance Alerts", desc: "Parents are not notified immediately when students are absent, causing security trust gaps." },
          { type: "chatbot", title: "No Lead Qualification bot", desc: "No chatbot available to screen prospective admission packages." }
        ],
        oppPackage: "Custom Parent-Teacher Portal & WhatsApp Attendance Sync.",
        oppDesc: "Integrate a unified admin dashboard synced with Meta's cloud APIs to send automated attendance roll-call logs directly to parent WhatsApp numbers.",
        status: "discovered"
      },
      {
        id: "sch-03",
        name: "Indira Public School",
        city: "Bangalore",
        website: "indirapublicschool.in",
        phone: "+918041239876",
        email: "info@indirapublicschool.in",
        grade: "B",
        vulnerabilities: [
          { type: "chatbot", title: "Standard FAQ Bot Only", desc: "Chatbot exists but is rule-based and breaks down on complex queries, prompting customers to exit." },
          { type: "whatsapp", title: "Email Only Reports", desc: "Monthly exam progress cards are emailed, yielding a low 18% parent open rate." }
        ],
        oppPackage: "Renvix AI Conversational Agent + Automated WhatsApp Scorecard Dispatches.",
        oppDesc: "Replace static rule FAQ links with an AI-driven NLP agent, and push marks cards instantly to parents via automated WhatsApp PDF APIs.",
        status: "discovered"
      },
      {
        id: "sch-04",
        name: "St. Mary's Convent School",
        city: "Delhi",
        website: "stmarysconventdelhi.com",
        phone: "+919811223344",
        email: "stmarys_delhi@gmail.com",
        grade: "F",
        vulnerabilities: [
          { type: "website", title: "Outdated Website Theme", desc: "Built on obsolete templates. Takes 7+ seconds to render on standard 4G devices." },
          { type: "erp", title: "Manual Cash Collections Only", desc: "No online payment link integration. Parents must stand in queues at the bank branch." },
          { type: "whatsapp", title: "No Alert Automation", desc: "Zero WhatsApp automated notifications or alerts for emergency holidays." }
        ],
        oppPackage: "Complete Premium Redesign + Unified Online Payment ERP Integration.",
        oppDesc: "Rebuild a modern, responsive website with integrated digital gateways (Razorpay/UPI) and automated WhatsApp receipt dispatches.",
        status: "discovered"
      },
      {
        id: "sch-05",
        name: "Dnyaneshwar Vidyalaya",
        city: "Pune",
        website: "dnyaneshwarvidyalaya.edu",
        phone: "+919011223355",
        email: "office@dnyaneshwarvidyalaya.edu",
        grade: "D",
        vulnerabilities: [
          { type: "whatsapp", title: "No Digital Parent Outreach", desc: "Circulars and homework schedules printed on paper; zero automated messaging channels." },
          { type: "chatbot", title: "No Intake Funnel", desc: "Visitor traffic to site cannot leave inquiries outside of school hours." }
        ],
        oppPackage: "Renvix WhatsApp Homework Circular Portal & Lead Intake Dashboard.",
        oppDesc: "Deploy a WhatsApp broadcast scheduler enabling teachers to dispatch daily syllabi updates and collect digital enrollment sheets.",
        status: "discovered"
      }
    ],
    coaching: [
      {
        id: "coach-01",
        name: "Apex IIT-JEE Classes",
        city: "Pune",
        website: "apexiitjeepune.com",
        phone: "+919595887766",
        email: "contact@apexiitjeepune.com",
        grade: "C",
        vulnerabilities: [
          { type: "chatbot", title: "No 24/7 Lead Qualifiers", desc: "Marketing budget drives Facebook Ads to site, but no active chatbot pre-filters student stream during off-hours." },
          { type: "whatsapp", title: "Manual Test Result Dispatches", desc: "Weekly mock JEE scorecard ranks are hand-typed and messaged by tutors individually." }
        ],
        oppPackage: "AI Enrollment funnel + Automated WhatsApp Scorecard Dispatches.",
        oppDesc: "Deploy an AI chatbot that answers admission queries, captures student details, and automatically syncs quiz grades to WhatsApp groups.",
        status: "discovered"
      },
      {
        id: "coach-02",
        name: "Chate Coaching Academy",
        city: "Mumbai",
        website: "chatecoachingmumbai.in",
        phone: "+912228899775",
        email: "enquire@chatecoaching.in",
        grade: "D",
        vulnerabilities: [
          { type: "erp", title: "Excel Attendance Logs", desc: "Tutors track attendance on spreadsheets. No instant absent warnings dispatched to guardians." },
          { type: "whatsapp", title: "Manual Admission Invoices", desc: "Receipt files are manually created and sent via slow email chains." }
        ],
        oppPackage: "Tutor ERP Portal & WhatsApp CRM Trigger Dispatcher.",
        oppDesc: "Deploy a Renvix coaching module that sends parent alerts instantly upon attendance checkbox clicks, reducing parent anxiety.",
        status: "discovered"
      },
      {
        id: "coach-03",
        name: "Prime Civil Services Prep",
        city: "Delhi",
        website: "primeupscprep.org",
        phone: "+919717665544",
        email: "primeupsc@gmail.com",
        grade: "B",
        vulnerabilities: [
          { type: "chatbot", title: "Standard Form Only", desc: "Requires prospective candidates to fill long, 10-field forms, leading to high abandonment rates." },
          { type: "whatsapp", title: "No Bulk Notification Pipelines", desc: "Circular updates on batch timings are pushed via Telegram where students mute notifications." }
        ],
        oppPackage: "Conversational AI Admissions Lead Funnel + WhatsApp Broadcaster.",
        oppDesc: "Replace passive forms with an interactive chatbot to qualify candidate fields in a chat-like setting, linked to WhatsApp broadcasts.",
        status: "discovered"
      },
      {
        id: "coach-04",
        name: "Profound Tech Academy",
        city: "Pune",
        website: "profoundtechacademy.com",
        phone: "+918888776655",
        email: "info@profoundtech.com",
        grade: "C",
        vulnerabilities: [
          { type: "whatsapp", title: "No Fee Alerts Automation", desc: "No system alerts set up for installment defaults, leading to high collections lag." },
          { type: "chatbot", title: "No Course Recommender Widget", desc: "Trainees visit site but have no interactive guide to recommend appropriate coding tracks." }
        ],
        oppPackage: "Interactive Course Finder Chatbot & Razorpay Automated Fee Triggers.",
        oppDesc: "Build an interactive chatbot logic recommending specific technology batches based on user interest, integrated with billing notifications.",
        status: "discovered"
      }
    ],
    startup: [
      {
        id: "start-01",
        name: "PixelKraft Creative Studio",
        city: "Pune",
        website: "pixelkraftstudio.com",
        phone: "+919123456789",
        email: "hello@pixelkraftstudio.com",
        grade: "C",
        vulnerabilities: [
          { type: "chatbot", title: "No Automated Client Booking", desc: "Client consultation scheduling is handled through manual email back-and-forth instead of a calendar booking bot." },
          { type: "whatsapp", title: "No Notification Integrations", desc: "When project deliverables are uploaded, clients are not alerted automatically on fast platforms." }
        ],
        oppPackage: "AI Calendar Booking Assistant & Slack/WhatsApp Project Status Sync.",
        oppDesc: "Deploy a Renvix scheduler widget that lets clients book calls and updates status trackers automatically.",
        status: "discovered"
      },
      {
        id: "start-02",
        name: "InnovateX Solutions",
        city: "Bangalore",
        website: "innovatex.tech",
        phone: "+919900112233",
        email: "contact@innovatex.tech",
        grade: "B",
        vulnerabilities: [
          { type: "chatbot", title: "Basic Static Bot", desc: "Simple flow bot that cannot read user queries, only showing fixed external link buttons." },
          { type: "whatsapp", title: "No Lead Routing Automation", desc: "New leads sit in system for 24+ hours before sales team is notified." }
        ],
        oppPackage: "Conversational AI agent + Instant WhatsApp Lead Alert Dispatcher.",
        oppDesc: "Bridge the chatbot directly to the sales reps' phones, forwarding detailed leads on WhatsApp within 30 seconds of submission.",
        status: "discovered"
      },
      {
        id: "start-03",
        name: "Zeta Growth Lab",
        city: "Delhi",
        website: "zetagrowth.agency",
        phone: "+919650443322",
        email: "growth@zetagrowth.agency",
        grade: "D",
        vulnerabilities: [
          { type: "website", title: "Obsolete Tech Stack", desc: "Built using old web layouts that score poorly (~45) on modern speed benchmarks." },
          { type: "chatbot", title: "No Qualifier System", desc: "Receives spam queries through the contact form, consuming valuable sales team hours." }
        ],
        oppPackage: "Next-Gen Web Interface Rebuild + Lead Qualification Assistant.",
        oppDesc: "Rebuild the website in high-performance structures, integrating an AI bot to filter out spam inquiries.",
        status: "discovered"
      }
    ],
    retail: [
      {
        id: "ret-01",
        name: "Kalyani Organics",
        city: "Pune",
        website: "kalyaniorganics.in",
        phone: "+919922334455",
        email: "support@kalyaniorganics.in",
        grade: "D",
        vulnerabilities: [
          { type: "whatsapp", title: "No Automated Order Updates", desc: "Customer order confirmations and delivery status notifications sent via SMS which go unread or blocked." },
          { type: "chatbot", title: "No FAQ Bot", desc: "Support staff spend 10+ hours a week responding to 'Where is my order?' queries." }
        ],
        oppPackage: "WhatsApp eCommerce Notification Engine & Order Tracking AI Bot.",
        oppDesc: "Deploy a Renvix Shopify/WooCommerce WhatsApp webhook dispatcher to alert customers on order statuses, cutting support tickets by 50%.",
        status: "discovered"
      },
      {
        id: "ret-02",
        name: "Pune Furnishings Co.",
        city: "Pune",
        website: "punefurnishings.com",
        phone: "+918800991122",
        email: "sales@punefurnishings.com",
        grade: "C",
        vulnerabilities: [
          { type: "chatbot", title: "No Product Recommender", desc: "Showroom catalog is large, but online visitors have no interactive assistant to narrow design selections." },
          { type: "whatsapp", title: "Manual Catalog Broadcaster", desc: "Client updates on new collections are sent as large bulk images manually." }
        ],
        oppPackage: "Interactive Catalog Chatbot & WhatsApp Cloud API Campaign Manager.",
        oppDesc: "Implement an AI assistant to recommend furniture based on size/color queries, combined with authorized WhatsApp broadcast lists.",
        status: "discovered"
      }
    ]
  };

  // State Management
  let currentVertical = "school";
  let currentCity = "Pune";
  let activeProspects = [];
  let selectedProspect = null;
  let activeOutreachChannel = "whatsapp";
  let activeOutreachDay = 1;

  // Cache DOM elements
  const searchForm = document.getElementById('prospector-search-form');
  const searchVertical = document.getElementById('search-vertical');
  const searchLocation = document.getElementById('search-location');
  const startSearchBtn = document.getElementById('btn-start-search');
  const radarIndicator = document.getElementById('radar-indicator');
  const scannerStatusLog = document.getElementById('scanner-status-log');
  const scannerProgress = document.getElementById('scanner-progress');
  const scannerProgressFill = document.getElementById('scanner-progress-fill');
  
  const prospectsTbody = document.getElementById('prospects-tbody');
  const resultsCount = document.getElementById('results-count');
  
  const siteAuditDrawer = document.getElementById('site-audit-drawer');
  const auditCompanyName = document.getElementById('audit-company-name');
  const auditCompanyUrl = document.getElementById('audit-company-url');
  const auditGradeBadge = document.getElementById('audit-grade-badge');
  const auditGapsList = document.getElementById('audit-gaps-list');
  const oppPackageName = document.getElementById('opp-package-name');
  const oppPackageDesc = document.getElementById('opp-package-desc');
  
  const btnCloseAudit = document.getElementById('btn-close-audit');
  const btnDrawerOpenWorkspace = document.getElementById('btn-drawer-open-workspace');

  // Outreach Workspace Elements
  const outreachProspectName = document.getElementById('outreach-prospect-name');
  const outreachProspectNiche = document.getElementById('outreach-prospect-niche');
  const outreachProspectUrl = document.getElementById('outreach-prospect-url');
  const outreachProspectEmail = document.getElementById('outreach-prospect-email');
  const outreachProspectPhone = document.getElementById('outreach-prospect-phone');
  const outreachProspectGrade = document.getElementById('outreach-prospect-grade');
  const outreachProspectVulns = document.getElementById('outreach-prospect-vulns');

  const wsTabBtns = document.querySelectorAll('.ws-tab-btn');
  const wsPanels = document.querySelectorAll('.workspace-panel');
  const textareaWhatsapp = document.getElementById('textarea-whatsapp');
  const textareaEmail = document.getElementById('textarea-email');
  const textareaLinkedin = document.getElementById('textarea-linkedin');
  const emailSubject = document.getElementById('email-subject');

  const btnWaCopy = document.getElementById('btn-wa-copy');
  const btnWaSend = document.getElementById('btn-wa-send');
  const btnEmailCopy = document.getElementById('btn-email-copy');
  const btnEmailSend = document.getElementById('btn-email-send');
  const btnLinkedinCopy = document.getElementById('btn-linkedin-copy');

  // CRM Columns
  const colDiscovered = document.getElementById('col-discovered');
  const colPitched = document.getElementById('col-pitched');
  const colFollowUp = document.getElementById('col-follow_up');
  const colConverted = document.getElementById('col-converted');

  const countDiscovered = document.getElementById('count-discovered');
  const countPitched = document.getElementById('count-pitched');
  const countFollowUp = document.getElementById('count-follow_up');
  const countConverted = document.getElementById('count-converted');

  // Analytics Stats
  const statScanned = document.getElementById('stat-scanned');
  const statPitched = document.getElementById('stat-pitched');
  const statReplied = document.getElementById('stat-replied');
  const statLeads = document.getElementById('stat-leads');

  // Funnel elements
  const barFunnelTotal = document.getElementById('bar-funnel-total');
  const barFunnelPitched = document.getElementById('bar-funnel-pitched');
  const barFunnelFollow = document.getElementById('bar-funnel-follow');
  const barFunnelConverted = document.getElementById('bar-funnel-converted');

  const valFunnelTotal = document.getElementById('val-funnel-total');
  const valFunnelPitched = document.getElementById('val-funnel-pitched');
  const valFunnelFollow = document.getElementById('val-funnel-follow');
  const valFunnelConverted = document.getElementById('val-funnel-converted');

  // Pie chart elements
  const pieSchool = document.getElementById('pie-school');
  const pieCoaching = document.getElementById('pie-coaching');
  const pieStartup = document.getElementById('pie-startup');
  const pieRetail = document.getElementById('pie-retail');

  const pieLblSchool = document.getElementById('pie-lbl-school');
  const pieLblCoaching = document.getElementById('pie-lbl-coaching');
  const pieLblStartup = document.getElementById('pie-lbl-startup');
  const pieLblRetail = document.getElementById('pie-lbl-retail');

  const toastContainer = document.getElementById('toast-notifications-container');


  /* ==========================================================================
     2. NAVIGATION & TABS CONTROLLER
     ========================================================================== */
  const menuButtons = document.querySelectorAll('.sidebar-menu .menu-item');
  const viewPanels = document.querySelectorAll('.view-panel');
  const viewTitle = document.getElementById('view-title');
  const viewSubtitle = document.getElementById('view-subtitle');

  const viewHeaders = {
    "view-prospector": {
      title: "Prospector Search Console",
      sub: "Scan local regions for institutions and businesses lacking automation assets."
    },
    "view-outreach": {
      title: "AI Outreach Workspace",
      sub: "Compile custom-tailored technical pitches and initiate outbound follow-up campaigns."
    },
    "view-crm": {
      title: "Renvix Lead Pipeline CRM",
      sub: "Drag and drop prospects to advance outreach milestones and verify replies."
    },
    "view-analytics": {
      title: "Outreach & Yield Analytics",
      sub: "Track conversion counts, campaign conversion funnel, and prospect segments."
    }
  };

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetView = button.getAttribute('data-view');
      
      // Deactivate all buttons & panels
      menuButtons.forEach(b => b.classList.remove('active'));
      viewPanels.forEach(p => p.classList.remove('active'));

      // Activate target
      button.classList.add('active');
      const targetPanel = document.getElementById(targetView);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // Update Header Text
      if (viewHeaders[targetView]) {
        viewTitle.innerText = viewHeaders[targetView].title;
        viewSubtitle.innerText = viewHeaders[targetView].sub;
      }

      // If opening CRM, refresh CRM cards
      if (targetView === "view-crm") {
        renderCrmBoard();
      }

      // If opening Analytics, trigger chart fills
      if (targetView === "view-analytics") {
        renderAnalytics();
      }
    });
  });


  /* ==========================================================================
     3. SEARCH & CRAWLER SIMULATION
     ========================================================================== */
  const crawlLogs = [
    "Initializing crawler nodes...",
    "Querying regional directory registry indices...",
    "Crawling site domains and pinging server responses...",
    "Analyzing digital assets (checking meta tags, responsive viewport arrays)...",
    "Running diagnosis: scanning chatbot embeds...",
    "Assessing communications: inspecting WhatsApp click-to-chat links...",
    "Crawl complete! Formatting technical maturity results..."
  ];

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    currentVertical = searchVertical.value;
    currentCity = searchLocation.value.trim();

    // Reset scanner visuals
    radarIndicator.classList.add('active');
    scannerProgress.style.display = 'block';
    scannerProgressFill.style.width = '0%';
    startSearchBtn.setAttribute('disabled', 'true');
    startSearchBtn.innerHTML = 'Scanning...';

    let logIndex = 0;
    scannerStatusLog.innerText = crawlLogs[0];
    
    // Animate logs and progress bar
    const logInterval = setInterval(() => {
      logIndex++;
      if (logIndex < crawlLogs.length) {
        scannerStatusLog.innerText = crawlLogs[logIndex];
        scannerProgressFill.style.width = `${(logIndex / crawlLogs.length) * 100}%`;
      }
    }, 450);

    setTimeout(() => {
      clearInterval(logInterval);
      
      // Execute the search logic
      executeProspectSearch();

      // Reset button and state
      radarIndicator.classList.remove('active');
      scannerProgressFill.style.width = '100%';
      scannerStatusLog.innerText = `Scan Successful. Found ${activeProspects.length} targets in ${currentCity}.`;
      startSearchBtn.removeAttribute('disabled');
      startSearchBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Scan Niche
      `;

      // Show toast
      showToast("Scan Complete", `Located ${activeProspects.length} new prospects in ${currentCity}.`, "info");
      
    }, 3200);
  });

  function executeProspectSearch() {
    const list = PROSPECT_DATABASE[currentVertical] || [];
    
    // Filter database items by city match (case-insensitive) and load them into active prospects
    activeProspects = list.filter(item => item.city.toLowerCase() === currentCity.toLowerCase());

    // Fallback: If no prospects match the city input, let's dynamically morph the cities of the preset database items to the searched city so the user ALWAYS gets results!
    if (activeProspects.length === 0) {
      activeProspects = list.map(item => {
        return {
          ...item,
          city: currentCity
        };
      });
      // Save it back to our state database
      PROSPECT_DATABASE[currentVertical] = activeProspects;
    }

    renderProspectsTable();
  }

  function renderProspectsTable() {
    prospectsTbody.innerHTML = "";
    resultsCount.innerText = `${activeProspects.length} results found`;

    if (activeProspects.length === 0) {
      prospectsTbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">
            No targets found in the entered city. Try searching 'Pune', 'Bangalore', or 'Delhi'.
          </td>
        </tr>
      `;
      return;
    }

    activeProspects.forEach(prospect => {
      const row = document.createElement('tr');
      row.setAttribute('data-id', prospect.id);
      
      // Determine badges
      const chatbotStatus = hasVulnerability(prospect, 'chatbot') 
        ? '<span class="tag-status tag-missing">Missing</span>' 
        : '<span class="tag-status tag-detected">Active</span>';
      
      const whatsappStatus = hasVulnerability(prospect, 'whatsapp') 
        ? '<span class="tag-status tag-missing">Missing</span>' 
        : '<span class="tag-status tag-detected">Active</span>';

      const gradeClass = `grade-${prospect.grade.toLowerCase()}`;

      row.innerHTML = `
        <td>
          <div style="font-weight: 700;">${prospect.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${prospect.city} • ${prospect.website}</div>
        </td>
        <td><span style="color: var(--color-success);">Online</span></td>
        <td>${whatsappStatus}</td>
        <td>${chatbotStatus}</td>
        <td><span class="badge-grade ${gradeClass}">${prospect.grade}</span></td>
      `;

      row.addEventListener('click', () => {
        // Toggle selected state in UI
        const rows = prospectsTbody.querySelectorAll('tr');
        rows.forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');

        // Load details into audit drawer
        loadProspectAudit(prospect);
      });

      prospectsTbody.appendChild(row);
    });
  }

  function hasVulnerability(prospect, type) {
    return prospect.vulnerabilities.some(v => v.type === type);
  }


  /* ==========================================================================
     4. AUDIT DETAIL DRAWER
     ========================================================================== */
  function loadProspectAudit(prospect) {
    selectedProspect = prospect;
    
    auditCompanyName.innerText = prospect.name;
    auditCompanyUrl.innerText = prospect.website;
    
    // Grade badge
    auditGradeBadge.className = `badge-grade audit-grade-large grade-${prospect.grade.toLowerCase()}`;
    auditGradeBadge.innerText = prospect.grade;

    // Load gaps
    auditGapsList.innerHTML = "";
    prospect.vulnerabilities.forEach(v => {
      const item = document.createElement('div');
      item.className = "deficiency-item";
      
      let iconColor = "var(--color-danger)";
      if (v.type === "responsiveness" || v.type === "erp") {
        iconColor = "var(--color-warning)";
      }

      item.innerHTML = `
        <div class="def-icon" style="color: ${iconColor};">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <div class="def-text">
          <h5>${v.title}</h5>
          <p>${v.desc}</p>
        </div>
      `;
      auditGapsList.appendChild(item);
    });

    // Recommended package
    oppPackageName.innerText = prospect.oppPackage;
    oppPackageDesc.innerText = prospect.oppDesc;

    // Slide open drawer
    siteAuditDrawer.classList.add('open');
  }

  btnCloseAudit.addEventListener('click', () => {
    siteAuditDrawer.classList.remove('open');
  });

  btnDrawerOpenWorkspace.addEventListener('click', () => {
    if (!selectedProspect) return;
    
    // Close drawer
    siteAuditDrawer.classList.remove('open');
    
    // Transition to Outreach view
    const menuOutreach = document.getElementById('menu-outreach');
    if (menuOutreach) {
      menuOutreach.click();
    }

    // Populate Outreach workspace fields
    loadOutreachWorkspace(selectedProspect);
  });


  /* ==========================================================================
     5. AI PITCH GENERATOR & OUTREACH WORKSPACE
     ========================================================================== */
  function loadOutreachWorkspace(prospect) {
    selectedProspect = prospect;

    outreachProspectName.innerText = prospect.name;
    outreachProspectNiche.innerText = prospect.oppPackage;
    outreachProspectUrl.innerText = prospect.website;
    outreachProspectEmail.innerText = prospect.email;
    outreachProspectPhone.innerText = prospect.phone;
    outreachProspectGrade.innerText = `Grade ${prospect.grade} Maturity`;

    // Load vulnerabilities
    outreachProspectVulns.innerHTML = "";
    prospect.vulnerabilities.forEach(v => {
      const li = document.createElement('li');
      li.style.color = "var(--text-secondary)";
      li.style.fontSize = "0.82rem";
      li.style.listStyle = "inside";
      li.style.marginBottom = "0.25rem";
      li.innerText = v.title;
      outreachProspectVulns.appendChild(li);
    });

    // Render message drafts
    generatePitchTemplates();
  }

  function generatePitchTemplates() {
    if (!selectedProspect) return;

    const p = selectedProspect;
    const missingFeatures = p.vulnerabilities.map(v => v.title).join(", ");
    
    // Dynamic Pitch Strings
    let waPitch = "";
    let emailSubText = "";
    let emailBody = "";
    let linkedinPitch = "";

    if (currentVertical === "school") {
      // WhatsApp Drafts
      if (activeOutreachDay === 1) {
        waPitch = `Hello Team ${p.name} team, this is Rohit from Renvix Technologies.\n\nWe recently analyzed local school websites in ${p.city} and noted that your primary portal (${p.website}) does not support parent inquiry chatbot automation or instant WhatsApp updates. This typically results in admission lead leakage.\n\nWe help schools automate these processes with our unified Renvix ERP. Could we schedule a brief 5-minute Zoom call this week to demonstrate how?`;
      } else if (activeOutreachDay === 2) {
        waPitch = `Hi there! Following up on our previous message to ${p.name} regarding parent notification automation. We recently integrated a WhatsApp fee collection sync for a nearby academy, saving their administrative staff 30+ hours weekly and increasing timely fee collections by 35%.\n\nI would love to screen-share this layout. Would Wednesday at 3 PM work?`;
      } else {
        waPitch = `Hello! We've prepared a live interactive WhatsApp ERP demo tailored directly for ${p.name}. You can click this link to trigger simulated test notifications: renvixteach.in/demo\n\nLet me know if you would like a custom setup for your admissions office!`;
      }

      // Email Drafts
      emailSubText = `Digital Assessment & ROI Scoping: ${p.name}`;
      emailBody = `Dear Admissions Director,\n\nMy name is Rohit and I represent Renvix Technologies. We specialize in building automated communications infrastructure for educational institutions.\n\nDuring a recent audit of ${p.website}, our scanning system identified key operational vulnerabilities:\n- ${missingFeatures}\n\nBy continuing to handle student check-ins and fee tracking manually, your office loses roughly 15-20 admin hours each week. Our Renvix School ERP solves this directly by syncing attendance logs and billing notices with Meta's cloud APIs.\n\nI have generated a customized Project Scope Blueprint for ${p.name}. May I send over the PDF copy for your review?\n\nSincerely,\nRohit K.\nAutomation Engineer, Renvix Technologies\n+91 9284306159`;

      // LinkedIn Drafts
      linkedinPitch = `Hello! I noticed you manage operations at ${p.name}. We specialize in automating parent communications and ERP registers for campuses in ${p.city}. I'd love to connect and share a brief case study on how we reduced administrative workloads by 40% for local schools.`;

    } else if (currentVertical === "coaching") {
      // Coaching vertical drafts
      if (activeOutreachDay === 1) {
        waPitch = `Hi Admissions Desk at ${p.name}, this is Rohit from Renvix Technologies.\n\nWe audited student enrollment setups in ${p.city} and noticed your site (${p.website}) lacks a 24/7 lead qualification chatbot. In competitive exam prep, replying to inquiries within 5 minutes boosts conversion rates by 80%.\n\nCan we set up a quick WhatsApp demo to show how our AI chatbot screens and qualifies student leads automatically?`;
      } else if (activeOutreachDay === 2) {
        waPitch = `Hello! Following up on our lead qualification audit for ${p.name}. We recently built a course recommendation chatbot for an institute that boosted their enrollment conversion rate by 3x in just 30 days.\n\nI would love to send over the case study. Are you free for a call tomorrow?`;
      } else {
        waPitch = `Hi! Here is a custom interactive course-recommender bot mockup we designed for ${p.name}. Test it instantly here: renvixteach.in/chatbot-demo\n\nWould you like us to connect this directly to your database next week?`;
      }

      emailSubText = `Student Intake Optimization Proposal - ${p.name}`;
      emailBody = `Dear Academy Director,\n\nAt Renvix Technologies, we design high-converting lead pipelines for coaching academies and training institutes.\n\nOur analysis of ${p.website} indicates key digital gaps:\n- ${missingFeatures}\n\nMost training centers experience a 45% drop-off rate when students are forced to complete lengthy contact forms during evenings. Our AI Conversational Chatbots operate 24/7, answering syllabus FAQs and capturing parent contact inputs instantly.\n\nCan we schedule a 10-minute screen share to show how our chatbot pushes hot student leads directly to your sales reps' WhatsApp?\n\nBest regards,\nRohit K.\nLead Solutions Engineer, Renvix Technologies`;

      linkedinPitch = `Hi! I help exam prep academies automate student enrollment structures. I was reviewing ${p.name}'s digital footprint and found a few simple integrations that could double your lead-to-booking conversions. Let's connect to discuss.`;

    } else if (currentVertical === "startup") {
      // Startup Drafts
      if (activeOutreachDay === 1) {
        waPitch = `Hey Team ${p.name}, Rohit from Renvix Technologies here.\n\nLoved your website agency assets, but I noticed you don't have an automated chatbot scheduler. We construct customized booking flows that filter spam and qualify project budgets automatically.\n\nCould we coordinate a 5-minute chat to showcase our CRM routing structures?`;
      } else if (activeOutreachDay === 2) {
        waPitch = `Hi! Quick followup on our CRM integration proposal. We synced automated routing pipelines for a tech studio that cut their lead response time from 12 hours to under 30 seconds.\n\nLet's schedule a Zoom call this Thursday to explore a similar fit.`;
      } else {
        waPitch = `Hey! Check out this dynamic lead-routing simulation we made for ${p.name}'s sales team: renvixteach.in/lead-route\n\nWould you like this deployed for your website traffic?`;
      }

      emailSubText = `CRM Integration & Auto-Routing Audit: ${p.name}`;
      emailBody = `Dear Operations Lead,\n\nWe build custom web systems, chatbot automation pipelines, and WhatsApp CRM linkages for growing startups.\n\nWe took a look at ${p.website} and mapped several performance issues:\n- ${missingFeatures}\n\nInstead of letting new organic inquiries languish in email inboxes for hours, we construct unified routing hubs that trigger instant Slack and WhatsApp alerts the moment a high-value client schedules a call.\n\nI would love to walk you through our custom integration blueprints. Are you open for a call next week?\n\nSincerely,\nRohit K.\nRenvix Technologies`;

      linkedinPitch = `Hi! I help founders automate project delivery alerts and sales pipelines. I saw what you are building at ${p.name} and noticed a few bottlenecks in your client booking funnel. Happy to connect and share our solutions.`;

    } else {
      // Retail Drafts
      if (activeOutreachDay === 1) {
        waPitch = `Hello Customer Care at ${p.name}, Rohit from Renvix Technologies here.\n\nWe noticed your store site (${p.website}) isn't sending automated shipping updates or billing receipts on WhatsApp. Standard SMS notifications have a very low open rate compared to WhatsApp Web API dispatches.\n\nCould we show you a quick demo of our Shopify/WooCommerce automated alerts sync?`;
      } else if (activeOutreachDay === 2) {
        waPitch = `Hi there! Following up on our ecommerce communication proposal. Our e-store automated alerts integration reduces client support tickets regarding 'order tracking status' by 50%.\n\nLet's connect this Friday to explore this!`;
      } else {
        waPitch = `Hello! We've generated a mockup invoice dispatcher trigger for ${p.name}. Test a simulated order placement notification on your phone here: renvixteach.in/order-flow`;
      }

      emailSubText = `WhatsApp Order Automation Opportunity: ${p.name}`;
      emailBody = `Dear Store Manager,\n\nWe design automated customer notification flows and support databases for retail and e-commerce brands.\n\nOur audit of your website ${p.website} indicates key customer support bottlenecks:\n- ${missingFeatures}\n\nBy relying on standard emails or carrier texts, you run the risk of customers missing logistics updates, leading to increased support ticket costs. We build simple webhooks connecting your storefront directly to Meta's authorized Cloud API servers.\n\nWould you be open to review our pricing sheet and integration roadmap?\n\nRegards,\nRohit K.\nRetail Automation Consultant, Renvix Technologies`;

      linkedinPitch = `Hello! I follow ${p.name}'s retail updates closely. We help e-commerce brands set up bulk WhatsApp catalog marketing campaigns and order alert webhooks. Let's connect to talk shop.`;
    }

    // Populate UI Textareas
    textareaWhatsapp.value = waPitch;
    emailSubject.value = emailSubText;
    textareaEmail.value = emailBody;
    textareaLinkedin.value = linkedinPitch;
  }

  // Handle Outreach Workspace Tabs switching
  wsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeOutreachChannel = btn.getAttribute('data-channel');
      
      wsTabBtns.forEach(b => b.classList.remove('active'));
      wsPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`ws-panel-${activeOutreachChannel}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Handle Timeline Steps inside panels (Day 1 / Day 3 / Day 5 switching)
  const timelineSteps = document.querySelectorAll('.cadence-timeline .timeline-step');
  timelineSteps.forEach((step, idx) => {
    step.addEventListener('click', () => {
      // Find parent panel's step list to avoid global conflicts
      const panelTimeline = step.closest('.cadence-timeline');
      const panelSteps = panelTimeline.querySelectorAll('.timeline-step');
      
      panelSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      // Change active day (1, 2, or 3) and regenerate pitch templates
      activeOutreachDay = (idx % 3) + 1;
      generatePitchTemplates();
    });
  });

  // Copy Buttons
  btnWaCopy.addEventListener('click', () => {
    textareaWhatsapp.select();
    document.execCommand('copy');
    showToast("Copied to Clipboard", "WhatsApp pitch script copied successfully.", "success");
  });

  btnEmailCopy.addEventListener('click', () => {
    textareaEmail.select();
    document.execCommand('copy');
    showToast("Copied to Clipboard", "Email pitch text copied successfully.", "success");
  });

  btnLinkedinCopy.addEventListener('click', () => {
    textareaLinkedin.select();
    document.execCommand('copy');
    showToast("Copied to Clipboard", "LinkedIn outreach connection text copied.", "success");
  });

  // Action Triggers: Send WhatsApp & Send Email
  btnWaSend.addEventListener('click', () => {
    if (!selectedProspect) {
      showToast("Error", "Please select a prospect from the search console first.", "error");
      return;
    }

    const message = encodeURIComponent(textareaWhatsapp.value);
    const phone = selectedProspect.phone.replace("+", "");
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    // Open WhatsApp Web in new tab
    window.open(waUrl, '_blank');

    // Move to "Pitched" in our database and show Toast
    advanceProspectStatus(selectedProspect.id, "pitched");
    showToast("WhatsApp Open", `Pre-filled message dispatched for ${selectedProspect.name}. Card advanced to Pitched.`, "success");

    // Simulate Reply sequence
    scheduleSimulatedLeadReply(selectedProspect.id);
  });

  btnEmailSend.addEventListener('click', () => {
    if (!selectedProspect) {
      showToast("Error", "Please select a prospect from the search console first.", "error");
      return;
    }

    const subject = encodeURIComponent(emailSubject.value);
    const body = encodeURIComponent(textareaEmail.value);
    const mailtoUrl = `mailto:${selectedProspect.email}?subject=${subject}&body=${body}`;

    // Open local email client
    window.location.href = mailtoUrl;

    // Move to "Pitched" in our database and show Toast
    advanceProspectStatus(selectedProspect.id, "pitched");
    showToast("Email Dispatched", `Local mail client triggered for ${selectedProspect.email}. Card advanced to Pitched.`, "success");

    // Simulate Reply sequence
    scheduleSimulatedLeadReply(selectedProspect.id);
  });

  function advanceProspectStatus(prospectId, newStatus) {
    // Find inside database
    for (let vertical in PROSPECT_DATABASE) {
      const list = PROSPECT_DATABASE[vertical];
      const match = list.find(item => item.id === prospectId);
      if (match) {
        match.status = newStatus;
        break;
      }
    }
    
    // Update CRM UI
    renderCrmBoard();
  }


  /* ==========================================================================
     6. CRM BOARD CONTROLLER (HTML5 DRAG & DROP)
     ========================================================================== */
  function renderCrmBoard() {
    // Clear lists
    colDiscovered.innerHTML = "";
    colPitched.innerHTML = "";
    colFollowUp.innerHTML = "";
    colConverted.innerHTML = "";

    // Count states
    let counts = { discovered: 0, pitched: 0, follow_up: 0, converted: 0 };

    // Traverse database and append matching status cards
    for (let vertical in PROSPECT_DATABASE) {
      PROSPECT_DATABASE[vertical].forEach(prospect => {
        const status = prospect.status || "discovered";
        counts[status]++;

        const card = createCrmCard(prospect);
        
        if (status === "discovered") {
          colDiscovered.appendChild(card);
        } else if (status === "pitched") {
          colPitched.appendChild(card);
        } else if (status === "follow_up") {
          colFollowUp.appendChild(card);
        } else if (status === "converted") {
          colConverted.appendChild(card);
        }
      });
    }

    // Set numbers in headers
    countDiscovered.innerText = counts.discovered;
    countPitched.innerText = counts.pitched;
    countFollowUp.innerText = counts.follow_up;
    countConverted.innerText = counts.converted;

    // Make columns receptive to drop
    setupDragAndDrop();
  }

  function createCrmCard(prospect) {
    const card = document.createElement('div');
    card.className = "crm-card";
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-id', prospect.id);

    const gradeClass = `grade-${prospect.grade.toLowerCase()}`;
    const cleanUrl = prospect.website.replace("www.", "");

    card.innerHTML = `
      <div class="crm-card-header">
        <div class="crm-card-title">${prospect.name}</div>
        <span class="badge-grade ${gradeClass}" style="width: 22px; height: 22px; font-size: 0.75rem;">${prospect.grade}</span>
      </div>
      <div class="crm-card-body">
        🌐 ${cleanUrl}<br>
        ⚙️ ${prospect.vulnerabilities.length} gap(s) identified
      </div>
      <div class="crm-card-footer">
        <span class="crm-card-meta">${prospect.city}</span>
        <button class="btn-advance-pipeline" style="color: var(--accent-secondary); font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; gap: 0.15rem;">
          Next ➔
        </button>
      </div>
    `;

    // Click on card title / body leads to detailed audit
    card.addEventListener('click', (e) => {
      // Avoid triggering when advance button is clicked
      if (e.target.closest('.btn-advance-pipeline')) return;
      loadProspectAudit(prospect);
    });

    // Advance button click progresses pipeline status sequentially
    const advBtn = card.querySelector('.btn-advance-pipeline');
    advBtn.addEventListener('click', () => {
      let nextStatus = "pitched";
      if (prospect.status === "discovered") nextStatus = "pitched";
      else if (prospect.status === "pitched") nextStatus = "follow_up";
      else if (prospect.status === "follow_up") nextStatus = "converted";
      else {
        showToast("Maximum Status", `${prospect.name} has already been converted!`, "success");
        return;
      }

      advanceProspectStatus(prospect.id, nextStatus);
      showToast("Pipeline Advanced", `Moved ${prospect.name} to ${nextStatus.toUpperCase()}.`, "info");
      
      // If manually converting, trigger congratulations toast
      if (nextStatus === "converted") {
        showToast("Lead Won! 🎉", `${prospect.name} is now a Renvix client.`, "success");
      }
    });

    return card;
  }

  function setupDragAndDrop() {
    const cards = document.querySelectorAll('.crm-card');
    const columns = document.querySelectorAll('.crm-column');

    cards.forEach(card => {
      card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });
    });

    columns.forEach(column => {
      column.addEventListener('dragover', (e) => {
        e.preventDefault();
        column.style.background = "rgba(59, 130, 246, 0.05)";
      });

      column.addEventListener('dragleave', () => {
        column.style.background = "";
      });

      column.addEventListener('drop', () => {
        column.style.background = "";
        const card = document.querySelector('.crm-card.dragging');
        if (!card) return;

        const id = card.getAttribute('data-id');
        const newStatus = column.getAttribute('data-status');
        
        advanceProspectStatus(id, newStatus);
        
        showToast("Pipeline Dragged", `Prospect relocated to ${newStatus.toUpperCase()}`, "info");

        if (newStatus === "converted") {
          showToast("Lead Won! 🎉", `New Renvix system project active.`, "success");
        }
      });
    });
  }


  /* ==========================================================================
     7. ANALYTICS CALCULATIONS & SVG PIE RENDER
     ========================================================================== */
  function renderAnalytics() {
    let counts = { scanned: 0, pitched: 0, follow_up: 0, converted: 0 };
    let niches = { school: 0, coaching: 0, startup: 0, retail: 0 };

    // Scan the active database states
    for (let vertical in PROSPECT_DATABASE) {
      PROSPECT_DATABASE[vertical].forEach(prospect => {
        counts.scanned++;
        niches[vertical]++;

        const st = prospect.status || "discovered";
        if (st === "pitched") counts.pitched++;
        else if (st === "follow_up") {
          counts.pitched++; // Pitched includes subsequent stages
          counts.follow_up++;
        } else if (st === "converted") {
          counts.pitched++;
          counts.follow_up++;
          counts.converted++;
        }
      });
    }

    // Populate Text Stats
    statScanned.innerText = counts.scanned;
    statPitched.innerText = counts.pitched;
    statReplied.innerText = counts.follow_up;
    statLeads.innerText = counts.converted;

    // Funnel Width Fills
    valFunnelTotal.innerText = counts.scanned;
    valFunnelPitched.innerText = counts.pitched;
    valFunnelFollow.innerText = counts.follow_up;
    valFunnelConverted.innerText = counts.converted;

    setTimeout(() => {
      barFunnelTotal.style.width = "100%";
      barFunnelPitched.style.width = counts.scanned ? `${(counts.pitched / counts.scanned) * 100}%` : "0%";
      barFunnelFollow.style.width = counts.scanned ? `${(counts.follow_up / counts.scanned) * 100}%` : "0%";
      barFunnelConverted.style.width = counts.scanned ? `${(counts.converted / counts.scanned) * 100}%` : "0%";
    }, 100);

    // Render Pie Chart Segments
    renderSvgPie(niches);
  }

  function renderSvgPie(niches) {
    const total = niches.school + niches.coaching + niches.startup + niches.retail;
    if (total === 0) return;

    // Calculate percentages
    const pctSchool = Math.round((niches.school / total) * 100);
    const pctCoaching = Math.round((niches.coaching / total) * 100);
    const pctStartup = Math.round((niches.startup / total) * 100);
    const pctRetail = Math.round((niches.retail / total) * 100);

    // Update labels
    pieLblSchool.innerText = `${pctSchool}%`;
    pieLblCoaching.innerText = `${pctCoaching}%`;
    pieLblStartup.innerText = `${pctStartup}%`;
    pieLblRetail.innerText = `${pctRetail}%`;

    // SVG dash calculations
    let currentOffset = 0;
    
    // Segment 1: School
    pieSchool.style.strokeDasharray = `${pctSchool} 100`;
    pieSchool.style.strokeDashoffset = `${currentOffset}`;
    
    // Segment 2: Coaching
    currentOffset -= pctSchool;
    pieCoaching.style.strokeDasharray = `${pctCoaching} 100`;
    pieCoaching.style.strokeDashoffset = `${currentOffset}`;
    
    // Segment 3: Startup
    currentOffset -= pctCoaching;
    pieStartup.style.strokeDasharray = `${pctStartup} 100`;
    pieStartup.style.strokeDashoffset = `${currentOffset}`;
    
    // Segment 4: Retail
    currentOffset -= pctStartup;
    pieRetail.style.strokeDasharray = `${pctRetail} 100`;
    pieRetail.style.strokeDashoffset = `${currentOffset}`;
  }


  /* ==========================================================================
     8. TOAST NOTIFICATION STREAM & ACTIVITY FEED
     ========================================================================== */
  function showToast(title, text, type = "info") {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'success' : ''}`;
    
    const iconColor = type === 'success' ? 'var(--color-success)' : 'var(--accent-secondary)';
    const svgIcon = type === 'success'
      ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

    toast.innerHTML = `
      <div class="toast-icon" style="color: ${iconColor};">
        ${svgIcon}
      </div>
      <div class="toast-content">
        <h5>${title}</h5>
        <p>${text}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Auto-remove toast after 4.5 seconds
    setTimeout(() => {
      toast.style.animation = "fadeIn 0.3s reverse ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4500);
  }

  // Pre-schedule simulated client actions to demonstrate replies
  function scheduleSimulatedLeadReply(prospectId) {
    // Find the prospect's name
    let prospectName = "Prospect";
    for (let vertical in PROSPECT_DATABASE) {
      const match = PROSPECT_DATABASE[vertical].find(item => item.id === prospectId);
      if (match) {
        prospectName = match.name;
        break;
      }
    }

    // Phase 1: Client read the proposal (after 6 seconds)
    setTimeout(() => {
      showToast("Outreach Open", `${prospectName} has opened your pitch message.`, "info");
      
      // Advance stage to follow_up in CRM
      advanceProspectStatus(prospectId, "follow_up");
    }, 6000);

    // Phase 2: Client replies positively (after 14 seconds)
    setTimeout(() => {
      const positiveReplies = [
        "Sounds interesting. Are you free for a call this Thursday?",
        "Could you send over standard package quotation prices for WhatsApp APIs?",
        "I'd love to review details of your School ERP. Share a link?",
        "Can we schedule a 10-minute screenshare call for tomorrow afternoon?"
      ];
      const randomReply = positiveReplies[Math.floor(Math.random() * positiveReplies.length)];
      
      showToast("Incoming Reply! ✉️", `"${randomReply}" — ${prospectName}`, "success");
      
      // Upgrade status to Converted in CRM board
      advanceProspectStatus(prospectId, "converted");
      
      // Trigger a direct congratulations alert
      setTimeout(() => {
        showToast("Lead Won! 🎉", `${prospectName} converted. Setup Renvix system integration logs.`, "success");
      }, 1000);
      
    }, 14000);
  }

  // Seed automated ambient logs every 25 seconds
  const ambientUpdates = [
    { title: "Circular Opened", text: "Symbiosis Kids read WhatsApp circular push logs." },
    { title: "Chatbot Ping", text: "Apex IIT classes qualified a JEE admissions lead (Standard 12)." },
    { title: "System Active", text: "Lotus Valley ERP dispatched 15 daily attendance receipts." },
    { title: "Deliverable Approved", text: "PixelKraft Studio approved their custom portfolio landing page." }
  ];

  setInterval(() => {
    const index = Math.floor(Math.random() * ambientUpdates.length);
    const update = ambientUpdates[index];
    showToast(update.title, update.text, "info");
  }, 22000);


  /* ==========================================================================
     9. DEFAULT INITIALIZATION
     ========================================================================== */
  // Seed first results on application startup
  executeProspectSearch();

});
