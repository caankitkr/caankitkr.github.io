// ---------- Data ----------
const SERVICES = [
  {
    tag: "POPULAR",
    title: "Accounting Automation & AI Workflows",
    desc: "Eliminate manual bookkeeping. Automated invoice ingestion, bank reconciliation, and Tally/Zoho sync powered by AI.",
    features: ["AI Invoice OCR Ingestion","Automated Bank Reconciliation","Real-Time P&L Dashboards","ERP & Tally Integration"]
  },
  {
    tag: "HIGH IMPACT",
    title: "Virtual CFO & Strategic Advisory",
    desc: "High-level financial leadership without executive overhead. Cash flow management, budgeting, and investor reporting.",
    features: ["3-Year Financial Forecasting","Cash Flow Optimization","Board & Investor Reports","Unit Economics Analysis"]
  },
  {
    tag: "ESSENTIAL",
    title: "GST Implementation & Audit Defense",
    desc: "End-to-end GST compliance, GSTR-1/3B filing, 2B reconciliation, and expert notice resolution.",
    features: ["Automated GSTR-2B Matching","GST Registration & Advisory","Input Tax Credit Optimization","E-Way Bill & E-Invoicing"]
  },
  {
    tag: "AI POWERED",
    title: "Business Process Automation with AI",
    desc: "Custom AI bots for expense approvals, vendor management, payment reminders, and payroll processing.",
    features: ["Automated Payment Collection","Vendor Invoice Verification","Custom WhatsApp Alert Bots","Financial Risk Audits"]
  },
  {
    tag: "CORE PRACTICE",
    title: "Audit Support & Assurance Readiness",
    desc: "We don't audit — we make you audit-ready. Preparation, documentation, internal controls, and end-to-end coordination with your statutory auditors.",
    features: ["Audit Preparation & Coordination","Internal Control Systems","Compliance Risk Mapping","Stock & Asset Audit Support"]
  },
  {
    tag: "TURNKEY",
    title: "Business Registration & Structuring",
    desc: "Pvt Ltd, LLP, OPC incorporation, Startup India registration, and capital structure advisory.",
    features: ["Pvt Ltd / LLP Incorporation","Startup India Tax Exemptions","MSME & Udyam Registration","PAN/TAN & Bank Setup"]
  },
  {
    tag: "ANNUAL CORE",
    title: "Income Tax & Return Filing",
    desc: "Strategic tax planning for corporates, founders, and HNIs. Timely ITR filing and advance tax computation.",
    features: ["Corporate Tax Optimization","Advance Tax Computation","TDS/TCS Compliance & Filing","Assessment & Appeal Defense"]
  },
  {
    tag: "MANDATORY",
    title: "Secretarial & ROC Compliance",
    desc: "Company law compliance, ROC filing, Director DIN maintenance, and governance managed by a certified CS.",
    features: ["Annual ROC Filing (MGT-7/AOC-4)","Board Resolution Management","Share Allotment & ESOPs","DIN & Director KYC"]
  },
];

const TEAM = [
  { initials:"AK", cred:"FCA · AI FINANCE PIONEER", name:"CA Ankit Kumar", role:"Founder & Principal Advisor",
    bio:"7+ years across statutory audits, tax audits, internal audit, and finance — now leading AI-driven accounting transformation for Indian SMEs. Holds a Certificate of Practice from ICAI." },
  { initials:"CS", cred:"ACS · COMPANY SECRETARY", name:"CS Shipali", role:"Head of Compliance & Governance",
    bio:"Specializes in corporate law, secretarial audits, MCA filings, and regulatory structuring for fast-growing firms." },
  { initials:"AD", cred:"LL.B · HIGH COURT PRACTITIONER", name:"Adv Arun Drall", role:"Legal & Regulatory Counsel",
    bio:"Focuses on commercial litigation, tax dispute resolution, contract drafting, and GST tribunal representation." },
  { initials:"S", cred:"M.COM · TALLY & AI WORKFLOW SPECIALIST", name:"Shilpi", role:"Lead, Bookkeeping & Automation",
    bio:"Leads day-to-day accounting automation operations, vendor reconciliation, and cloud bookkeeping delivery." },
];

const TESTIMONIALS = [
  { quote:"Our books now close in three days instead of three weeks. The AI reconciliation setup paid for itself in the first month.", name:"Rohit M.", role:"FOUNDER · D2C BRAND, DELHI" },
  { quote:"They recovered over ₹3 lakh in missed input tax credit we didn't even know we were losing.", name:"Priya S.", role:"DIRECTOR · MANUFACTURING SME, BAHADURGARH" },
  { quote:"Finally, a finance partner that speaks in dashboards and cash flows, not jargon.", name:"Arjun K.", role:"CO-FOUNDER · SAAS STARTUP, GURUGRAM" },
  { quote:"GST notices used to keep me up at night. Now everything is matched, filed, and closed before deadlines.", name:"Sunita R.", role:"PROPRIETOR · TRADING FIRM, DELHI" },
  { quote:"The Virtual CFO reports got us through funding due diligence without a single follow-up question from investors.", name:"Vikram T.", role:"FOUNDER · FINTECH STARTUP, NOIDA" },
  { quote:"Vendor payments, payroll, TDS — everything runs on autopilot. I finally get to focus on sales.", name:"Neha G.", role:"MD · LOGISTICS COMPANY, DELHI NCR" },
];

const RESOURCES = [
  { tag:"GST ADVISORY", title:"GST Amnesty Scheme 2026: What SMEs Must Know", desc:"A quick brief on the latest amnesty window and how to regularise past filings.", date:"September 2026", read:"5 min read" },
  { tag:"VIRTUAL CFO", title:"When Should an Indian Startup Hire a Virtual CFO vs a Full-Time CFO?", desc:"Cost-benefit breakdown of Virtual CFO advisory vs traditional finance hiring for growing firms.", date:"May 2026", read:"6 min read" },
  { tag:"GST ADVISORY", title:"Maximizing Input Tax Credit (ITC): 5 Common GSTR-2B Traps to Avoid", desc:"Avoid costly GST demand notices and maximize cash flow with proactive reconciliation strategies.", date:"June 2026", read:"7 min read" },
  { tag:"AUTOMATION", title:"How SMEs Can Automate 80% of Tally Accounting Using AI Workflows", desc:"Step-by-step guide to integrating AI OCR and automated bank feeds directly into Indian accounting systems.", date:"July 2026", read:"5 min read" },
];

// ---------- Render ----------
function renderServices(){
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <span class="service-tag">${s.tag}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul class="service-features">
        ${s.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <a href="#contact" class="btn btn-outline">Enquire Now</a>
    </div>
  `).join("");
}

function renderTeam(){
  const grid = document.getElementById("teamGrid");
  grid.innerHTML = TEAM.map(t => `
    <div class="team-card">
      <div class="team-avatar">${t.initials}</div>
      <span class="team-cred">${t.cred}</span>
      <h3>${t.name}</h3>
      <span class="team-role">${t.role}</span>
      <p>${t.bio}</p>
    </div>
  `).join("");
}

function renderTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  track.innerHTML = doubled.map(t => `
    <div class="testi-card">
      <p>&ldquo;${t.quote}&rdquo;</p>
      <span class="testi-name">${t.name}</span>
      <span class="testi-role">${t.role}</span>
    </div>
  `).join("");
}

function renderResources(){
  const grid = document.getElementById("resourcesGrid");
  grid.innerHTML = RESOURCES.map(r => `
    <div class="res-card">
      <span class="res-tag">${r.tag}</span>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="res-meta"><span>${r.date}</span><span>${r.read}</span></div>
    </div>
  `).join("");
}

renderServices();
renderTeam();
renderTestimonials();
renderResources();

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");
if(navToggle){
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");
    mainNav.style.display = mainNav.classList.contains("nav-open") ? "flex" : "";
  });
}

// ---------- Contact form ----------
const form = document.getElementById("enquiryForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("fullName") || "there";
    alert(`Thanks, ${name}! Your enquiry has been noted. Our team will reach out within 24 hours.`);
    form.reset();
  });
}
