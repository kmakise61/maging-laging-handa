// Data
const hotlinesData = {
  national: [
    { name: "Emergency Hotline", number: "911", service: "National Emergency Response", hours: "24/7" },
    { name: "NDRRMC Hotline", number: "(02) 8911-5061 to 65", service: "Disaster Risk Reduction and Management", hours: "24/7" },
    { name: "Philippine Red Cross", number: "143", service: "Emergency Medical Aid and Disaster Response", hours: "24/7" },
    { name: "PNP Emergency", number: "117", service: "Police Emergency Response", hours: "24/7" },
    { name: "Bureau of Fire Protection", number: "(02) 8426-0219", service: "Fire Emergency and Rescue", hours: "24/7" }
  ],
  meteorological: [
    { name: "PAGASA Hotline", number: "(02) 8284-0800", service: "Weather Updates and Typhoon Info", hours: "24/7" },
    { name: "PHIVOLCS Hotline", number: "(02) 8426-1468 to 79", service: "Earthquake and Volcano Advisories", hours: "24/7" }
  ]
};

const disasterGuides = {
  typhoon: {
    name: "Typhoon/Tropical Storm",
    icon: "🌪️",
    before: [
      "Update family emergency contact list and communication plan",
      "Secure loose items outdoors (furniture, equipment, trash cans)",
      "Stock water (1-2 liters per person per day) and non-perishable food",
      "Prepare evacuation kit with essentials and documents",
      "Know the location of nearest evacuation center",
      "Charge all electronic devices and power banks",
      "Secure important documents in waterproof containers"
    ],
    during: [
      "Stay indoors and away from windows",
      "Keep doors and windows locked and secured",
      "Avoid downed power lines and flooded areas",
      "Keep updated with PAGASA weather bulletins",
      "Move to the safest room in your house (interior room on ground floor)",
      "Do not attempt to go outside during the eye of the storm",
      "Keep emergency supplies accessible"
    ],
    after: [
      "Check for injuries among family members",
      "Inspect house for structural damage before entering",
      "Document all damage with photos for insurance claims",
      "Clear debris carefully, watch for sharp objects",
      "Seek medical aid if needed, use 911 or emergency hotlines",
      "Boil water before drinking until declared safe",
      "Report to local authorities if you need assistance"
    ]
  },
  earthquake: {
    name: "Earthquake/Tsunami",
    icon: "🌊",
    before: [
      "Secure heavy furniture and appliances to walls",
      "Identify safe spots in each room (under sturdy tables, against interior walls)",
      "Practice Drop, Cover, and Hold On drills with family",
      "Prepare emergency kit with water, food, first aid, flashlight",
      "Know tsunami evacuation routes if you live in coastal areas",
      "Keep a whistle accessible to signal for help"
    ],
    during: [
      "DROP to the ground, take COVER under sturdy furniture, HOLD ON",
      "Stay away from windows, mirrors, and heavy objects that could fall",
      "If outdoors, move to open area away from buildings and power lines",
      "If in a coastal area and shaking is strong, evacuate to higher ground immediately",
      "Do not use elevators during or immediately after earthquake",
      "If driving, pull over safely and stay in vehicle"
    ],
    after: [
      "Check for injuries and provide first aid",
      "Inspect home for damage; evacuate if structure is unsafe",
      "Expect aftershocks and be prepared to Drop, Cover, Hold On again",
      "Turn off gas, water, and electricity if damage suspected",
      "Listen to radio for official information and tsunami warnings",
      "Stay away from damaged buildings and infrastructure",
      "Use text messages instead of calls to conserve battery and network"
    ]
  },
  flooding: {
    name: "Flooding/Landslides",
    icon: "💧",
    before: [
      "Know if you live in a flood-prone or landslide-prone area",
      "Elevate important items and documents above potential flood level",
      "Prepare evacuation kit and identify evacuation routes",
      "Monitor weather forecasts and flood warnings from PAGASA",
      "Have a family communication plan",
      "Keep emergency supplies on higher floors"
    ],
    during: [
      "Evacuate immediately if told to do so by authorities",
      "Never walk, swim, or drive through floodwater",
      "Move to higher ground immediately if flooding begins",
      "Avoid contact with floodwater (risk of leptospirosis and contamination)",
      "If trapped in building, go to highest level but do not go into closed attic",
      "Signal for help if stranded"
    ],
    after: [
      "Return home only when authorities say it's safe",
      "Avoid floodwater; wear protective boots if you must walk through",
      "Document damage with photos for insurance",
      "Clean and disinfect everything that got wet",
      "Watch for contaminated water; boil before drinking",
      "Seek medical attention if you develop fever after exposure to floodwater",
      "Be alert for leptospirosis symptoms (5-30 days after exposure)"
    ]
  },
  volcanic: {
    name: "Volcanic Eruption",
    icon: "🌋",
    before: [
      "Know the alert level system and what each level means",
      "Prepare evacuation plan and routes",
      "Stock N95 masks or wet cloth for ash protection",
      "Prepare emergency supplies including goggles and long-sleeved clothing",
      "Keep car fuel tank full for evacuation",
      "Secure livestock and pets' evacuation plans"
    ],
    during: [
      "Follow evacuation orders immediately",
      "Protect yourself from ashfall with masks and goggles",
      "Stay indoors with windows and doors closed",
      "Avoid driving in heavy ashfall",
      "Listen to official PHIVOLCS bulletins",
      "Avoid river valleys and low-lying areas (lahar risk)",
      "Turn off air conditioning and ventilation systems"
    ],
    after: [
      "Wait for official clearance before returning home",
      "Wear protective gear when cleaning ash",
      "Keep ash away from drains; dispose properly",
      "Check roof for ash accumulation; may cause collapse",
      "Avoid contact with ash; it can cause respiratory and skin irritation",
      "Continue monitoring PHIVOLCS for ongoing activity",
      "Be prepared for lahars during rainy season"
    ]
  },
  fire: {
    name: "Fire Emergency",
    icon: "🔥",
    before: [
      "Install smoke detectors and test them monthly",
      "Prepare fire extinguishers and learn how to use them",
      "Create and practice a fire escape plan with two exits per room",
      "Keep important documents in fireproof safe",
      "Store flammable materials safely away from heat sources",
      "Ensure electrical wiring is safe and up to code"
    ],
    during: [
      "Alert everyone immediately; shout 'Fire!'",
      "Evacuate immediately using planned escape routes",
      "Feel doors before opening; use alternate route if door is hot",
      "Stay low to the ground where air is clearer",
      "Once out, stay out; never go back inside",
      "Call Bureau of Fire Protection: (02) 8426-0219",
      "If clothes catch fire: Stop, Drop, and Roll"
    ],
    after: [
      "Ensure everyone is accounted for",
      "Seek medical attention for burns or smoke inhalation",
      "Do not enter building until fire officials declare it safe",
      "Contact insurance company to report damage",
      "Document all damage with photos",
      "Secure the property to prevent further damage or theft",
      "Arrange for temporary housing if needed"
    ]
  }
};

const marketplaceCategories = [
  {
    name: "Water & Food",
    icon: "💧",
    items: [
      "Drinking water (1-2 liters per person per day)",
      "Ready-to-eat canned goods",
      "Instant noodles and cup noodles",
      "Energy bars and crackers",
      "Powdered milk and coffee"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=emergency%20food%20kit",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=emergency+food+supplies"
  },
  {
    name: "First Aid & Medicine",
    icon: "🏥",
    items: [
      "Complete first aid kit",
      "Bandages and gauze",
      "Antiseptic and alcohol",
      "Pain relievers and fever reducers",
      "7-day supply of prescription medications"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=first%20aid%20kit",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=first+aid+kit"
  },
  {
    name: "Tools & Equipment",
    icon: "🔧",
    items: [
      "Multi-purpose tool or Swiss knife",
      "Emergency whistle",
      "Duct tape and rope",
      "Work gloves",
      "Waterproof bags"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=emergency%20tools",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=emergency+tools"
  },
  {
    name: "Lighting & Power",
    icon: "🔦",
    items: [
      "LED flashlight with extra batteries",
      "Rechargeable power bank (20000mAh+)",
      "Hand-crank emergency radio",
      "Solar-powered charger",
      "Emergency candles and matches"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=emergency%20flashlight%20powerbank",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=emergency+lighting"
  },
  {
    name: "Safety & Communication",
    icon: "📡",
    items: [
      "N95 masks and face shields",
      "Emergency poncho or raincoat",
      "Portable AM/FM radio",
      "Waterproof document holder",
      "Emergency contact list (printed)"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=emergency%20safety%20kit",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=emergency+preparedness"
  },
  {
    name: "Hygiene & Sanitation",
    icon: "🧼",
    items: [
      "Wet wipes and hand sanitizer",
      "Toilet paper and tissues",
      "Toothbrush and toothpaste",
      "Soap and shampoo",
      "Garbage bags"
    ],
    shopeeLink: "https://shopee.ph/search?keyword=hygiene%20kit",
    lazadaLink: "https://www.lazada.com.ph/catalog/?q=hygiene+supplies"
  }
];

const newsUpdates = [
  {
    title: "PAGASA: Tropical Depression Monitoring",
    content: "A tropical depression was spotted 850 km east of Mindanao. Expected to intensify into a tropical storm within 24-48 hours. Residents in Eastern Visayas and Mindanao should monitor updates.",
    source: "PAGASA",
    type: "warning",
    time: "2 hours ago"
  },
  {
    title: "PHIVOLCS: Taal Volcano Alert Level 2",
    content: "Taal Volcano remains at Alert Level 2. Entry to Volcano Island is strictly prohibited. Batangas residents should remain vigilant for possible sudden steam or phreatic explosions.",
    source: "PHIVOLCS",
    type: "alert",
    time: "4 hours ago"
  },
  {
    title: "DOH: Dengue Cases Rising in Metro Manila",
    content: "The Department of Health reports 75% increase in dengue cases nationwide with 95,262 cases recorded. Enhanced 4S strategy implementation urged in all communities.",
    source: "DOH",
    type: "alert",
    time: "6 hours ago"
  },
  {
    title: "NDRRMC: Pre-Positioning Relief Goods",
    content: "NDRRMC is pre-positioning relief goods in strategic areas in preparation for potential tropical storm. Family food packs and emergency supplies ready for deployment.",
    source: "NDRRMC",
    type: "info",
    time: "8 hours ago"
  },
  {
    title: "LGU Advisory: Flood Monitoring Systems Active",
    content: "Local government units activated flood monitoring systems in Metro Manila and nearby provinces. Residents in low-lying areas advised to prepare for possible evacuation.",
    source: "Various LGUs",
    type: "info",
    time: "12 hours ago"
  },
  {
    title: "Weather Update: Southwest Monsoon Affecting Luzon",
    content: "The southwest monsoon continues to bring cloudy skies with scattered rainshowers and thunderstorms over Western Luzon. Flash floods and landslides possible in mountainous areas.",
    source: "PAGASA",
    type: "info",
    time: "14 hours ago"
  }
];

const quizQuestions = [
  {
    question: "What is the primary role of the NDRRMC (National Disaster Risk Reduction and Management Council)?",
    options: [
      "Manage public hospitals",
      "Coordinate disaster response and risk reduction efforts",
      "Control airport operations",
      "Manage traffic systems"
    ],
    correct: 1,
    explanation: "The NDRRMC coordinates and oversees all disaster risk reduction and management activities in the Philippines, including preparedness, response, and recovery efforts."
  },
  {
    question: "During an earthquake, what should you do first?",
    options: [
      "Run outside immediately",
      "Stand in a doorway",
      "Drop, Cover, and Hold On",
      "Call emergency services"
    ],
    correct: 2,
    explanation: "Drop to the ground, take Cover under a sturdy table or desk, and Hold On until the shaking stops. This protects you from falling objects and debris."
  },
  {
    question: "How many days after exposure can leptospirosis symptoms appear?",
    options: [
      "1-3 days",
      "5-30 days",
      "45-60 days",
      "3 months"
    ],
    correct: 1,
    explanation: "Leptospirosis symptoms typically appear 5-30 days after exposure to contaminated water or soil, with an average incubation period of 10 days."
  },
  {
    question: "What is the correct Philippine emergency hotline number?",
    options: [
      "911",
      "999",
      "112",
      "000"
    ],
    correct: 0,
    explanation: "911 is the official national emergency hotline in the Philippines for all types of emergencies including medical, fire, and police."
  },
  {
    question: "True or False: You should wade through floodwater during a flood emergency.",
    options: [
      "True",
      "False"
    ],
    correct: 1,
    explanation: "Never wade through floodwater. It can be contaminated with sewage and chemicals, hide dangers like sharp objects or open manholes, and expose you to leptospirosis. Six inches of moving water can knock you down."
  },
  {
    question: "Which mosquito species transmits dengue fever?",
    options: [
      "Anopheles",
      "Culex",
      "Aedes aegypti",
      "Mansonia"
    ],
    correct: 2,
    explanation: "Aedes aegypti mosquitoes transmit dengue virus. They typically bite during early morning and late afternoon, and breed in stagnant water."
  },
  {
    question: "What should you NOT do immediately after a typhoon passes?",
    options: [
      "Check for injuries",
      "Go outside to inspect damage during the eye of the storm",
      "Listen to official advisories",
      "Document damage for insurance"
    ],
    correct: 1,
    explanation: "Never go outside during the eye of the storm. The calm period is temporary, and violent winds from the opposite direction will resume. Wait for official all-clear signals."
  },
  {
    question: "How much water should you store per person per day for emergencies?",
    options: [
      "0.5 liters",
      "1-2 liters",
      "3-4 liters",
      "5 liters"
    ],
    correct: 1,
    explanation: "Store 1-2 liters of drinking water per person per day. For a family of four, this means 4-8 liters per day. Plan for at least 3-7 days of supply."
  },
  {
    question: "What does PAGASA stand for?",
    options: [
      "Philippine Atmospheric, Geophysical and Astronomical Services Administration",
      "Philippine Agency for Government and Safety Administration",
      "Philippine Association of Geographical and Survey Agencies",
      "Philippine Alliance for General Atmospheric Studies"
    ],
    correct: 0,
    explanation: "PAGASA is the Philippine Atmospheric, Geophysical and Astronomical Services Administration, responsible for weather forecasting, flood and typhoon warnings, and climate monitoring."
  },
  {
    question: "If you smell gas after an earthquake, what should you do?",
    options: [
      "Turn on lights to inspect",
      "Leave immediately and call authorities from a safe location",
      "Try to fix the leak yourself",
      "Open all windows and stay inside"
    ],
    correct: 1,
    explanation: "If you smell gas, leave immediately without turning on/off lights or electronics (could create sparks). Call authorities from a safe location. Do not attempt repairs yourself."
  }
];

// State management
let currentSection = 'home';
let map = null;
let reports = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;
// Theme functionality removed - light mode only

// Navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  document.getElementById(sectionId).classList.add('active');
  if (event && event.target) {
    event.target.classList.add('active');
  }
  currentSection = sectionId;

  if (sectionId === 'incidents' && !map) {
    initMap();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize hotlines
function initHotlines() {
  const nationalContainer = document.getElementById('nationalHotlines');
  const weatherContainer = document.getElementById('weatherHotlines');

  hotlinesData.national.forEach(hotline => {
    nationalContainer.appendChild(createHotlineCard(hotline));
  });

  hotlinesData.meteorological.forEach(hotline => {
    weatherContainer.appendChild(createHotlineCard(hotline));
  });
}

function createHotlineCard(hotline) {
  const card = document.createElement('div');
  card.className = 'hotline-card';
  card.innerHTML = `
    <div class="hotline-info" style="flex: 1;">
      <h4 style="font-size: var(--font-size-xl); margin-bottom: var(--space-8); color: var(--color-text); font-weight: var(--font-weight-bold);">${hotline.name}</h4>
      <div class="hotline-number" style="font-size: var(--font-size-2xl); margin-bottom: var(--space-12);">${hotline.number}</div>
      <div class="hotline-service" style="line-height: 1.6;">${hotline.service}</div>
      <div class="hotline-service" style="margin-top: var(--space-8); font-weight: var(--font-weight-semibold); color: var(--color-success);">⏰ Available: ${hotline.hours}</div>
    </div>
    <div class="hotline-actions" style="display: flex; flex-direction: column; gap: var(--space-12);">
      <button class="btn btn-secondary" onclick="copyToClipboard('${hotline.number}')" style="padding: var(--space-12) var(--space-20);">📋 Copy</button>
      <a href="tel:${hotline.number.replace(/[^0-9]/g, '')}" class="btn btn-call" style="padding: var(--space-12) var(--space-20); text-align: center; text-decoration: none;">📞 Call</a>
    </div>
  `;
  return card;
}

function copyToClipboard(text) {
  // Modern clipboard API with fallback
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('Phone number copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showNotification('Phone number copied to clipboard!');
  } catch (err) {
    showNotification('Failed to copy. Please copy manually: ' + text);
  }
  document.body.removeChild(textarea);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: var(--color-primary);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function searchHotlines() {
  const searchTerm = document.getElementById('hotlineSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.hotline-card');
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(searchTerm) ? 'flex' : 'none';
  });
}

// Map initialization
function initMap() {
  map = L.map('map').setView([14.5995, 120.9842], 11);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add sample markers
  const sampleReports = [
    { lat: 14.5995, lng: 120.9842, type: 'flooding', severity: 'medium' },
    { lat: 14.6091, lng: 121.0223, type: 'fire', severity: 'high' },
    { lat: 14.5547, lng: 121.0244, type: 'earthquake', severity: 'low' }
  ];

  sampleReports.forEach(report => {
    const color = report.severity === 'high' ? 'red' : report.severity === 'medium' ? 'orange' : 'yellow';
    L.circleMarker([report.lat, report.lng], {
      radius: 10,
      fillColor: color,
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.7
    }).addTo(map).bindPopup(`<b>${report.type}</b><br>Severity: ${report.severity}`);
  });
}

function submitReport() {
  const type = document.getElementById('incidentType').value;
  const severity = document.getElementById('severity').value;
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;

  if (!location || !description) {
    alert('Please fill in all required fields');
    return;
  }

  const report = {
    id: Date.now(),
    type,
    severity,
    location,
    description,
    timestamp: new Date().toLocaleString()
  };

  reports.unshift(report);
  displayReports();

  // Clear form
  document.getElementById('location').value = '';
  document.getElementById('description').value = '';
  
  alert('Report submitted successfully!');
}

function displayReports() {
  const container = document.getElementById('reportsList');
  container.innerHTML = '';

  if (reports.length === 0) {
    reports = [
      {
        id: 1,
        type: 'Active Evacuation Center',
        severity: 'medium',
        location: 'Marikina Sports Center, Metro Manila',
        description: 'Evacuation center currently active. Capacity: 500 families. Relief goods available. Medical team on-site.',
        timestamp: 'Updated 1 hour ago',
        source: 'NDRRMC'
      },
      {
        id: 2,
        type: 'Flooding Incident',
        severity: 'high',
        location: 'Cagayan Valley Region',
        description: 'Major flooding reported in low-lying areas. Road closures on major highways. Residents advised to evacuate to higher ground.',
        timestamp: 'Updated 2 hours ago',
        source: 'NDRRMC'
      },
      {
        id: 3,
        type: 'Relief Operations',
        severity: 'low',
        location: 'Northern Luzon - Multiple Barangays',
        description: 'NDRRMC relief distribution ongoing. 2,500 family packs distributed. Mobile medical units deployed.',
        timestamp: 'Updated 3 hours ago',
        source: 'NDRRMC'
      },
      {
        id: 4,
        type: 'Road Closure',
        severity: 'medium',
        location: 'Baguio-La Trinidad Road, Benguet',
        description: 'Road closed due to landslide. DPWH clearing operations in progress. Expected reopening: 24-48 hours.',
        timestamp: 'Updated 5 hours ago',
        source: 'DPWH/NDRRMC'
      }
    ];
  }

  reports.forEach(report => {
    const card = document.createElement('div');
    card.className = 'report-card';
    card.innerHTML = `
      <div class="report-header">
        <div class="report-type">${report.type}</div>
        <span class="severity-badge severity-${report.severity}">${report.severity}</span>
      </div>
      <div class="report-description">${report.description}</div>
      <div class="report-meta">📍 ${report.location} • 🕒 ${report.timestamp} • 📡 Source: ${report.source}</div>
    `;
    container.appendChild(card);
  });
}

// Disaster guides
function initGuides() {
  const accordion = document.getElementById('guidesAccordion');
  
  Object.keys(disasterGuides).forEach((key, index) => {
    const guide = disasterGuides[key];
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <div class="accordion-header" onclick="toggleAccordion(${index})">
        <h3>${guide.icon} ${guide.name}</h3>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        <div style="text-align: right; margin-bottom: var(--space-16);">
          <button class="btn btn-secondary" onclick="printSingleGuide('${key}')" style="font-size: var(--font-size-sm);">🖨️ Print This Guide</button>
        </div>
        <div class="disaster-phase">
          <h4>✓ Before the Disaster</h4>
          <ul>
            ${guide.before.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="disaster-phase">
          <h4>⚠️ During the Disaster</h4>
          <ul>
            ${guide.during.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="disaster-phase">
          <h4>🔄 After the Disaster</h4>
          <ul>
            ${guide.after.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div style="margin-top: var(--space-20); padding: var(--space-16); background: var(--color-bg-1); border-radius: var(--radius-base);">
          <strong>📞 Emergency Contacts:</strong> 911 (Emergency) | 143 (Red Cross) | (02) 8911-5061 (NDRRMC)
        </div>
      </div>
    `;
    accordion.appendChild(item);
  });
}

function printSingleGuide(guideKey) {
  const guide = disasterGuides[guideKey];
  const printWindow = window.open('', '', 'width=900,height=700');
  printWindow.document.write(`
    <html>
      <head>
        <title>${guide.name} Preparedness Guide</title>
        <style>
          @page { margin: 20mm; }
          body { 
            font-family: 'Arial', 'Helvetica', sans-serif; 
            padding: 0;
            margin: 0;
            line-height: 1.8; 
            color: #1f2937;
            font-size: 12pt;
          }
          .page-header {
            text-align: center;
            border-bottom: 3px solid #1d4ed8;
            padding-bottom: 15pt;
            margin-bottom: 20pt;
          }
          h1 { 
            color: #1d4ed8; 
            font-size: 26pt; 
            margin: 0 0 8pt 0;
            font-weight: bold;
          }
          .subtitle {
            color: #6b7280;
            font-size: 11pt;
            margin: 0;
          }
          h2 { 
            color: white;
            background: linear-gradient(135deg, #1d4ed8 0%, #0066cc 100%);
            margin-top: 25pt; 
            padding: 15pt; 
            border-radius: 8pt; 
            font-size: 18pt;
            page-break-after: avoid;
          }
          ul { 
            margin: 15pt 0 15pt 30pt; 
            line-height: 1.8;
            padding: 0;
          }
          li { 
            margin-bottom: 12pt;
            padding-left: 5pt;
          }
          .emergency-box { 
            background: #fee2e2; 
            border: 4px solid #dc2626; 
            padding: 20pt; 
            margin: 25pt 0; 
            font-weight: bold; 
            text-align: center; 
            border-radius: 10pt;
            font-size: 14pt;
            color: #dc2626;
            page-break-inside: avoid;
          }
          .guide-section { 
            background: #f9fafb; 
            padding: 20pt; 
            border-radius: 10pt; 
            margin: 20pt 0;
            border-left: 6pt solid #1d4ed8;
            page-break-inside: avoid;
          }
          .page-footer {
            margin-top: 40pt;
            padding-top: 15pt;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 10pt;
          }
          .checkboxes {
            margin-top: 15pt;
            padding: 15pt;
            background: white;
            border: 1px solid #d1d5db;
            border-radius: 6pt;
          }
          .checkboxes h3 {
            margin: 0 0 10pt 0;
            font-size: 12pt;
            color: #1d4ed8;
          }
          .checkbox-item {
            margin: 8pt 0;
          }
          .checkbox-item::before {
            content: '☐ ';
            font-size: 14pt;
            margin-right: 8pt;
          }
        </style>
      </head>
      <body>
        <div class="page-header">
          <h1>${guide.icon} ${guide.name}</h1>
          <p class="subtitle">Official Disaster Preparedness Guide - Operation L!STO Framework</p>
          <p class="subtitle">Maging Laging Handa PH</p>
        </div>
        
        <div class="emergency-box">
          🚨 EMERGENCY HOTLINES<br>
          911 (National Emergency) | 143 (Red Cross) | (02) 8911-5061 (NDRRMC)
        </div>
        
        <div class="guide-section">
          <h2>✓ BEFORE THE DISASTER - Preparation Phase</h2>
          <ul>${guide.before.map(item => `<li>${item}</li>`).join('')}</ul>
          <div class="checkboxes">
            <h3>📝 Preparation Checklist (Check as completed):</h3>
            ${guide.before.slice(0, 5).map(item => `<div class="checkbox-item">${item}</div>`).join('')}
          </div>
        </div>
        
        <div class="guide-section">
          <h2>⚠️ DURING THE DISASTER - Action Phase</h2>
          <ul>${guide.during.map(item => `<li>${item}</li>`).join('')}</ul>
          <div class="checkboxes">
            <h3>✅ Action Items:</h3>
            ${guide.during.slice(0, 5).map(item => `<div class="checkbox-item">${item}</div>`).join('')}
          </div>
        </div>
        
        <div class="guide-section">
          <h2>🔄 AFTER THE DISASTER - Recovery Phase</h2>
          <ul>${guide.after.map(item => `<li>${item}</li>`).join('')}</ul>
          <div class="checkboxes">
            <h3>📋 Recovery Checklist:</h3>
            ${guide.after.slice(0, 5).map(item => `<div class="checkbox-item">${item}</div>`).join('')}
          </div>
        </div>
        
        <div class="page-footer">
          <p><strong>Maging Laging Handa PH - Always Be Ready Philippines</strong></p>
          <p>Based on Operation L!STO Framework | NDRRMC &amp; Office of Civil Defense</p>
          <p>Sources: NDRRMC, PAGASA, PHIVOLCS, Philippine Red Cross, DOH</p>
          <p>Document Reference: RA 10121 (Philippine Disaster Risk Reduction and Management Act)</p>
          <p style="margin-top: 10pt;"><strong>Printed:</strong> ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}</p>
          <p style="margin-top: 10pt; font-weight: bold; color: #dc2626;">⚠️ For emergencies, ALWAYS CALL 911 FIRST</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function downloadSingleGuide(guideKey) {
  showNotification('💡 Use Print > Save as PDF to download this guide');
  setTimeout(() => printSingleGuide(guideKey), 1000);
}

function toggleAccordion(index) {
  const items = document.querySelectorAll('.accordion-item');
  const item = items[index];
  const isActive = item.classList.contains('active');
  
  // Don't close other items - allow multiple open
  // items.forEach(i => i.classList.remove('active'));
  
  if (isActive) {
    item.classList.remove('active');
  } else {
    item.classList.add('active');
  }
}

// Marketplace
function initMarketplace() {
  const grid = document.getElementById('marketplaceGrid');
  
  marketplaceCategories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <h3>${category.icon} ${category.name}</h3>
      <ul>
        ${category.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <div class="shop-links">
        <a href="${category.shopeeLink}" target="_blank" class="btn btn-primary shop-btn">Shopee</a>
        <a href="${category.lazadaLink}" target="_blank" class="btn btn-primary shop-btn">Lazada</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Disease tabs
function showDiseaseTab(disease) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(`${disease}-tab`).classList.add('active');
}

// News feed
function initNews() {
  const feed = document.getElementById('newsFeed');
  
  newsUpdates.forEach(news => {
    const item = document.createElement('div');
    item.className = 'news-item';
    const badgeClass = news.type === 'alert' ? 'badge-alert' : news.type === 'warning' ? 'badge-warning' : 'badge-info';
    item.innerHTML = `
      <div class="news-badge ${badgeClass}">${news.type.toUpperCase()}</div>
      <div class="news-content">
        <h4>${news.title}</h4>
        <p style="color: var(--color-text-secondary); margin: var(--space-8) 0;">${news.content}</p>
        <div class="news-meta">Source: ${news.source} • ${news.time}</div>
      </div>
    `;
    feed.appendChild(item);
  });
}

// Hazard maps
function checkHazardRisk() {
  const location = document.getElementById('hazardLocation').value;
  
  if (!location) {
    alert('Please enter a location');
    return;
  }

  const resultDiv = document.getElementById('hazardResult');
  
  // Simulate hazard assessment
  const risks = ['Low', 'Moderate', 'High'];
  const risk = risks[Math.floor(Math.random() * risks.length)];
  
  const hazards = [
    { name: 'Earthquake Risk', level: 'Moderate', description: 'Located near West Valley Fault' },
    { name: 'Flood Risk', level: risk, description: 'Check during monsoon season' },
    { name: 'Typhoon Path', level: 'High', description: 'Within common typhoon trajectory' }
  ];

  resultDiv.innerHTML = `
    <div class="hazard-result">
      <div class="risk-level risk-${risk.toLowerCase()}">Overall Risk: ${risk}</div>
      <p style="margin-bottom: var(--space-16); color: var(--color-text-secondary);">Hazard assessment for: <strong>${location}</strong></p>
      <div class="hazards-detected">
        ${hazards.map(h => `
          <div class="hazard-item">
            <h4>${h.name}</h4>
            <p style="color: var(--color-text-secondary); margin-top: var(--space-4);">${h.description}</p>
            <p style="margin-top: var(--space-4); font-weight: var(--font-weight-bold);">Risk Level: ${h.level}</p>
          </div>
        `).join('')}
      </div>
      <p style="margin-top: var(--space-16); font-size: var(--font-size-sm); color: var(--color-text-secondary);">For detailed hazard maps, visit the official resources linked above.</p>
    </div>
  `;
}

// Quiz functions
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  quizScore = 0;
  
  document.getElementById('quizStart').style.display = 'none';
  document.getElementById('quizQuestion').style.display = 'block';
  document.getElementById('quizResults').style.display = 'none';
  
  displayQuestion();
}

function displayQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  
  document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('scoreDisplay').textContent = `Score: ${quizScore}/${currentQuestionIndex}`;
  document.getElementById('progressBar').style.width = `${((currentQuestionIndex) / quizQuestions.length) * 100}%`;
  document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}`;
  document.getElementById('questionText').textContent = question.question;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    
    if (userAnswers[currentQuestionIndex] !== undefined) {
      if (index === userAnswers[currentQuestionIndex]) {
        button.classList.add('selected');
        if (index === question.correct) {
          button.classList.add('correct');
        } else {
          button.classList.add('incorrect');
        }
      } else if (index === question.correct && userAnswers[currentQuestionIndex] !== undefined) {
        button.classList.add('correct');
      }
    }
    
    optionsContainer.appendChild(button);
  });
  
  document.getElementById('feedbackContainer').innerHTML = '';
  if (userAnswers[currentQuestionIndex] !== undefined) {
    showFeedback();
  }
  
  document.getElementById('nextBtn').disabled = userAnswers[currentQuestionIndex] === undefined;
}

function selectAnswer(answerIndex) {
  if (userAnswers[currentQuestionIndex] !== undefined) return;
  
  userAnswers[currentQuestionIndex] = answerIndex;
  
  const question = quizQuestions[currentQuestionIndex];
  if (answerIndex === question.correct) {
    quizScore++;
  }
  
  displayQuestion();
}

function showFeedback() {
  const question = quizQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const isCorrect = userAnswer === question.correct;
  
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackDiv.innerHTML = `
    <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
    <p style="margin-top: var(--space-8);">${question.explanation}</p>
  `;
  
  document.getElementById('feedbackContainer').appendChild(feedbackDiv);
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function showResults() {
  document.getElementById('quizQuestion').style.display = 'none';
  document.getElementById('quizResults').style.display = 'block';
  
  const percentage = (quizScore / quizQuestions.length) * 100;
  document.getElementById('finalScore').textContent = `${quizScore}/${quizQuestions.length}`;
  
  let message = '';
  if (percentage >= 90) {
    message = 'Excellent! You are well-prepared for disaster situations! 🌟';
  } else if (percentage >= 70) {
    message = 'Good job! You have solid knowledge of disaster preparedness. Keep learning! 👍';
  } else if (percentage >= 50) {
    message = 'Not bad! Review the guides to improve your preparedness knowledge. 📚';
  } else {
    message = 'Keep studying! Disaster preparedness knowledge can save lives. 💪';
  }
  
  document.getElementById('resultsMessage').textContent = message;
}

function restartQuiz() {
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizStart').style.display = 'block';
}

// First Aid functions
function showFirstAidTab(tabName) {
  document.querySelectorAll('.firstaid-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.firstaid-content').forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(tabName + '-tab').classList.add('active');
}

function printGuide(guideName) {
  const guideContent = document.getElementById(guideName + '-tab');
  if (!guideContent) return;
  
  const titles = {
    cuts: '🩹 Cuts & Wounds',
    burns: '🔥 Burns',
    sprains: '🦵 Sprains & Strains',
    fractures: '🦴 Fractures (Broken Bones)',
    shock: '⚡ Shock (Medical Emergency)'
  };
  
  const printWindow = window.open('', '', 'width=900,height=700');
  printWindow.document.write(`
    <html>
      <head>
        <title>${titles[guideName]} - First Aid Guide</title>
        <style>
          @page { margin: 20mm; }
          body { 
            font-family: 'Arial', 'Helvetica', sans-serif; 
            padding: 0;
            margin: 0;
            line-height: 1.8; 
            color: #1f2937;
            font-size: 12pt;
          }
          h1 { 
            color: #1d4ed8; 
            border-bottom: 3px solid #1d4ed8; 
            padding-bottom: 15pt; 
            font-size: 24pt;
            margin-bottom: 20pt;
            text-align: center;
          }
          h3 { 
            color: #1d4ed8; 
            font-size: 20pt; 
            margin-top: 20pt;
            page-break-after: avoid;
          }
          h4 { 
            color: white;
            background: #0066cc;
            padding: 12pt;
            border-radius: 6pt;
            margin-top: 20pt; 
            font-size: 16pt;
            page-break-after: avoid;
          }
          ul, ol { 
            margin-left: 30pt;
            line-height: 1.8;
          }
          li {
            margin-bottom: 10pt;
          }
          .warning-box { 
            background: #fee2e2; 
            border: 3px solid #dc2626; 
            padding: 20pt; 
            margin: 20pt 0;
            border-radius: 8pt;
            page-break-inside: avoid;
          }
          .warning-box h4 {
            background: transparent;
            color: #dc2626;
            padding: 0;
            margin-top: 0;
          }
          .procedure-steps { 
            list-style: decimal;
            counter-reset: step-counter;
          }
          .procedure-steps li {
            background: #f9fafb;
            padding: 12pt;
            margin-bottom: 10pt;
            border-radius: 6pt;
            border-left: 4pt solid #0066cc;
          }
          .burn-type-card { 
            border-left: 6pt solid #0066cc; 
            padding: 15pt; 
            margin: 12pt 0; 
            background: #dbeafe;
            border-radius: 4pt;
            page-break-inside: avoid;
          }
          .rice-item { 
            background: #d1fae5; 
            padding: 15pt; 
            margin: 12pt 0;
            border-radius: 6pt;
            border-left: 6pt solid #059669;
            page-break-inside: avoid;
          }
          .emergency-banner {
            background: #dc2626;
            color: white;
            padding: 20pt;
            text-align: center;
            border-radius: 8pt;
            margin: 20pt 0;
            font-weight: bold;
            font-size: 14pt;
          }
          .page-footer {
            margin-top: 40pt;
            padding-top: 15pt;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 10pt;
          }
          button, .btn { display: none; }
        </style>
      </head>
      <body>
        <h1>🏥 MAGING LALING HANDA PH<br>First Aid Guide</h1>
        <div class="emergency-banner">🚨 FOR SEVERE INJURIES OR EMERGENCIES: CALL 911 IMMEDIATELY</div>
        ${guideContent.innerHTML}
        <div class="page-footer">
          <p><strong>Maging Laling Handa PH - Always Be Ready Philippines</strong></p>
          <p><strong>Emergency Contacts:</strong> 911 (National Emergency) | 143 (Red Cross) | (02) 8911-5061 (NDRRMC)</p>
          <p>Sources: Philippine Red Cross, American Red Cross, Community-Based Health First Aid</p>
          <p style="margin-top: 10pt;">Printed: ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}</p>
          <p style="margin-top: 10pt; font-weight: bold; color: #dc2626;">This guide is for informational purposes. Seek professional medical care for serious injuries.</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function printAllGuides() {
  window.print();
}

function downloadAllGuides() {
  showNotification('PDF download functionality requires server-side processing. Use Print > Save as PDF instead.');
  setTimeout(() => window.print(), 1000);
}

function printShoppingList() {
  const section = document.getElementById('marketplace');
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>Emergency Essentials Shopping Checklist</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #1d4ed8; }
          .category-card { page-break-inside: avoid; margin-bottom: 20px; border: 1px solid #ccc; padding: 15px; }
          ul { list-style: none; }
          li::before { content: '☐ '; font-size: 18px; margin-right: 8px; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>Emergency Essentials Shopping Checklist</h1>
        <p><em>Check off items as you purchase them</em></p>
        ${section.innerHTML}
        <hr style="margin-top: 30px;">
        <p><small>Maging Laging Handa PH | Printed: ${new Date().toLocaleDateString()}</small></p>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function printAllFirstAid() {
  const printWindow = window.open('', '', 'width=900,height=700');
  const guides = ['cuts', 'burns', 'sprains', 'fractures', 'shock'];
  const titles = {
    cuts: '🩹 Cuts & Wounds',
    burns: '🔥 Burns',
    sprains: '🦵 Sprains & Strains',
    fractures: '🦴 Fractures (Broken Bones)',
    shock: '⚡ Shock (Medical Emergency)'
  };
  
  let guidesHTML = '';
  guides.forEach((guide) => {
    const content = document.getElementById(guide + '-tab');
    if (content) {
      guidesHTML += `
        <div class="guide-section">
          <h2 style="color: #1d4ed8; border-bottom: 3px solid #1d4ed8; padding: 15px 0; margin-top: 30px;">${titles[guide]}</h2>
          ${content.innerHTML}
        </div>
        <div style="page-break-after: always;"></div>
      `;
    }
  });
  
  printWindow.document.write(`
    <html>
      <head>
        <title>Complete First Aid Guide - Maging Laling Handa PH</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 30px; line-height: 1.6; color: #1f2937; }
          h1 { color: #1d4ed8; text-align: center; font-size: 28px; margin-bottom: 30px; border-bottom: 4px solid #1d4ed8; padding-bottom: 15px; }
          h2 { font-size: 22px; }
          h3 { color: #1d4ed8; font-size: 20px; margin-top: 20px; }
          h4 { color: #0066cc; background: #dbeafe; padding: 10px; border-radius: 6px; margin-top: 20px; }
          ul, ol { margin-left: 25px; line-height: 1.8; }
          li { margin-bottom: 10px; }
          .warning-box { background: #fee2e2; border: 3px solid #dc2626; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .emergency-banner { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; font-weight: bold; font-size: 18px; }
          .burn-type-card { border-left: 4px solid #0066cc; padding: 15px; margin: 12px 0; background: #dbeafe; border-radius: 4px; }
          .rice-item { background: #d1fae5; padding: 15px; margin: 12px 0; border-radius: 4px; border-left: 4px solid #059669; }
          @media print {
            body { margin: 0.5in; }
            .guide-section { page-break-inside: avoid; }
            h2 { page-break-after: avoid; }
            button, .btn { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>🏥 MAGING LALING HANDA PH<br>Complete First Aid Guide</h1>
        <div class="emergency-banner">🚨 FOR SEVERE INJURIES OR EMERGENCIES: CALL 911 IMMEDIATELY</div>
        ${guidesHTML}
        <hr style="margin: 40px 0; border: 2px solid #e5e7eb;">
        <div style="text-align: center; color: #6b7280; font-size: 14px;">
          <p><strong>Maging Laling Handa PH - Always Be Ready Philippines</strong></p>
          <p><strong>Emergency Contacts:</strong></p>
          <p>911 (National Emergency) | 143 (Red Cross) | (02) 8911-5061 (NDRRMC)</p>
          <p style="margin-top: 15px;">Sources: Philippine Red Cross, American Red Cross, Community-Based Health First Aid</p>
          <p>Printed: ${new Date().toLocaleString()}</p>
          <p style="margin-top: 15px; font-weight: bold; color: #dc2626;">This guide is for informational purposes. Seek professional medical care for serious injuries.</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function download72HourKit() {
  showNotification('Creating pocket-sized 72-hour kit card...');
  const printWindow = window.open('', '', 'width=400,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>72-Hour Emergency Kit Card</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 10px; font-size: 10px; }
          h2 { font-size: 14px; text-align: center; color: #dc2626; margin-bottom: 10px; }
          .section { margin-bottom: 10px; border: 1px solid #ccc; padding: 8px; }
          .section h3 { font-size: 11px; margin: 0 0 5px 0; color: #0066cc; }
          ul { margin: 0; padding-left: 15px; }
          li { line-height: 1.4; }
          .emergency { background: #fee; padding: 8px; text-align: center; font-weight: bold; }
          @page { size: 3.5in 5in; margin: 0.25in; }
        </style>
      </head>
      <body>
        <h2>72-HOUR EMERGENCY KIT</h2>
        <div class="emergency">CALL 911 FOR EMERGENCIES</div>
        <div class="section">
          <h3>WATER & FOOD (3 days)</h3>
          <ul>
            <li>1-2L water/person/day</li>
            <li>Canned goods, energy bars</li>
            <li>Can opener</li>
          </ul>
        </div>
        <div class="section">
          <h3>FIRST AID</h3>
          <ul>
            <li>Bandages, gauze, tape</li>
            <li>Antiseptic, alcohol</li>
            <li>Pain relievers</li>
            <li>Prescription meds (7-day)</li>
          </ul>
        </div>
        <div class="section">
          <h3>TOOLS & SUPPLIES</h3>
          <ul>
            <li>Flashlight + batteries</li>
            <li>Power bank (20000mAh)</li>
            <li>Whistle, multi-tool</li>
            <li>Duct tape, rope</li>
          </ul>
        </div>
        <div class="section">
          <h3>DOCUMENTS</h3>
          <ul>
            <li>IDs (laminated copies)</li>
            <li>Insurance papers</li>
            <li>Medical records</li>
          </ul>
        </div>
        <div class="section">
          <h3>EMERGENCY CONTACTS</h3>
          <ul>
            <li>911 - Emergency</li>
            <li>143 - Red Cross</li>
            <li>(02) 8911-5061 - NDRRMC</li>
            <li>117 - PNP</li>
          </ul>
        </div>
        <p style="text-align: center; margin-top: 10px; font-size: 8px;">Maging Laging Handa PH | ${new Date().toLocaleDateString()}</p>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// Add CSS animations for notifications
if (!document.getElementById('notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(400px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Theme functionality removed - application uses light mode only per V4 requirements

// Enhanced print functionality with better formatting
function printAllGuides() {
  const printWindow = window.open('', '', 'width=900,height=700');
  const guides = disasterGuides;
  
  let guidesHTML = '';
  Object.keys(guides).forEach((key) => {
    const guide = guides[key];
    guidesHTML += `
      <div class="guide-section">
        <h2 style="color: #0066cc; border-bottom: 3px solid #0066cc; padding: 15px 0; margin-top: 30px;">${guide.icon} ${guide.name}</h2>
        <div class="emergency-box" style="background: #fee2e2; border: 3px solid #dc2626; padding: 15px; margin: 20px 0; text-align: center; font-weight: bold; border-radius: 8px;">
          📞 EMERGENCY: 911 | RED CROSS: 143 | NDRRMC: (02) 8911-5061
        </div>
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #1d4ed8; margin-bottom: 15px;">✓ BEFORE THE DISASTER</h3>
          <ul style="line-height: 1.8;">${guide.before.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ DURING THE DISASTER</h3>
          <ul style="line-height: 1.8;">${guide.during.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div style="background: #d1fae5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #059669; margin-bottom: 15px;">🔄 AFTER THE DISASTER</h3>
          <ul style="line-height: 1.8;">${guide.after.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
      <div style="page-break-after: always;"></div>
    `;
  });
  
  printWindow.document.write(`
    <html>
      <head>
        <title>Complete Disaster Preparedness Guides - Maging Laging Handa PH</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 30px; line-height: 1.6; color: #1f2937; }
          h1 { color: #1d4ed8; text-align: center; font-size: 28px; margin-bottom: 30px; border-bottom: 4px solid #1d4ed8; padding-bottom: 15px; }
          h2 { font-size: 22px; }
          h3 { font-size: 18px; }
          ul { margin-left: 25px; }
          li { margin-bottom: 10px; }
          .toc { background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
          .toc ul { list-style: none; margin-left: 0; }
          .toc li { padding: 8px 0; border-bottom: 1px solid #d1d5db; }
          @media print {
            body { margin: 0.5in; }
            .guide-section { page-break-inside: avoid; }
            h2 { page-break-after: avoid; }
          }
        </style>
      </head>
      <body>
        <h1>🛡️ MAGING LALING HANDA PH<br>Complete Disaster Preparedness Guides</h1>
        <div class="toc">
          <h2 style="margin-top: 0; color: #374151;">📋 Table of Contents</h2>
          <ul>
            ${Object.keys(guides).map(key => `<li>${guides[key].icon} ${guides[key].name}</li>`).join('')}
          </ul>
        </div>
        ${guidesHTML}
        <hr style="margin: 40px 0; border: 2px solid #e5e7eb;">
        <div style="text-align: center; color: #6b7280; font-size: 14px;">
          <p><strong>Maging Laging Handa PH - Always Be Ready Philippines</strong></p>
          <p>Official Sources: NDRRMC | PAGASA | PHIVOLCS | Philippine Red Cross | DOH</p>
          <p>Printed: ${new Date().toLocaleString()}</p>
          <p style="margin-top: 15px; font-weight: bold; color: #dc2626;">For emergencies, ALWAYS CALL 911 first</p>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function downloadAllGuides() {
  showNotification('💡 Tip: Use Print > Save as PDF to download all guides as a PDF file');
  setTimeout(() => printAllGuides(), 1500);
}

function downloadAllFirstAid() {
  showNotification('💡 Tip: Use Print > Save as PDF to download all first aid guides');
  setTimeout(() => printAllFirstAid(), 1500);
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  initHotlines();
  displayReports();
  initGuides();
  initMarketplace();
  initNews();
  console.log('Maging Laling Handa PH V4 - Light Mode Only');
  console.log('Based on RA 10121 & Operation LISTO Framework');
});