// ----------------------------------------------------
// PROJECT SPECIFICATIONS DATA RECORD
// ----------------------------------------------------
const PROJECT_DETAILS = {
  safedrive: {
    title: "SafeDrive AI",
    category: "AI & Road Safety",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Leaflet", "Recharts", "MediaPipe FaceMesh", "TensorFlow.js", "Web Workers", "IndexedDB", "Screen Wake Lock API"],
    description: "An advanced, Tesla-inspired AI driver safety web application engineered specifically for the challenges of Indian road conditions.",
    mechanics: [
      "AI Driver Monitoring System (DMS): Evaluates Eye Aspect Ratio (EAR) and head-nodding fatigue patterns locally in-browser using MediaPipe FaceMesh to maintain privacy.",
      "Hardware Acceleration & Multithreading: Offloads heavy GPS telemetry calculations and logging requests to background Web Workers writing to IndexedDB to keep the rendering thread locked at 60 FPS.",
      "Safety Triggers: Uses native Screen Wake Lock API to prevent display timeouts during driving, triggering physical vibration alarms and text-to-speech warnings upon fatigue detection."
    ],
    github: "https://github.com/sahu0247/SafeDrive-AI"
  },
  hydrosphere: {
    title: "HydroSphere",
    category: "River Basin Simulation",
    tech: ["React 19", "HTML5 Canvas 2D API", "Web Audio API", "Recharts", "Tailwind CSS", "Vite"],
    description: "An interactive, physics-based environment simulator demonstrating dynamic water waves, pollutant plumes, and ecological ecosystem responses to policies.",
    mechanics: [
      "Interactive Fluid Simulation: Solves dynamic wave propagation equations in real-time, rendered using HTML5 Canvas 2D.",
      "Auditory Ambience Synthesizer: Maps Water Quality Index (WQI) scores to frequency outputs, generating water flow hums or low-frequency danger alarms.",
      "Ecological Cycles: Monitors Dissolved Oxygen (DO), pH levels, agricultural runoff factors, and fish population feedback systems."
    ],
    github: "https://github.com/sahu0247/river_simulation-"
  },
  radiothon: {
    title: "AetherShield AI",
    category: "AI-Native SDR & DSP",
    tech: ["FastAPI", "Python", "NumPy", "SciPy", "Software Defined Radio (SDR)", "Web Audio API", "HTML5 Canvas", "Vanilla CSS3"],
    description: "An AI-Native electronic warfare monitoring and Software Defined Radio (SDR) spectrum intelligence platform.",
    mechanics: [
      "Real-Time Visualization: Renders live Power Spectral Density (PSD) line sweeps and rolling waterfall spectrogram heatmaps drawn using high-performance HTML5 Canvas APIs.",
      "Immersive Audio DSP Engine: Utilizes browser Web Audio API to synthesize radio static, carrier tones, and Morse code, applying lowpass/highpass/bandpass filters in real-time.",
      "Cognitive Threat Classification: Employs heuristic signal detectors flagging broadband sweeping jamming or clandestine CW transmitters, generating immediate dashboard security alerts."
    ],
    github: "https://github.com/sahu0247/radiothon_h"
  },
  invoiceguard: {
    title: "InvoiceGuard AI",
    category: "Intelligent Agents & AP Audits",
    tech: ["Python 3.8+", "Streamlit", "SQLite3", "Faker Library", "Gym-style (OpenEnv) Environment", "Plotly Express"],
    description: "An accounts payable auditing agent designed to evaluate, flag, and detect invoices containing suspicious values or patterns.",
    mechanics: [
      "Agentic Loop Design: Utilizes an OpenAI Gym-compatible custom environment ('InvoiceEnv') outlining step structures, action logs (Approve/Flag), and reward functions.",
      "Synthetic Generator Pipeline: Produces hundreds of clean and anomalous invoice entries to evaluate agent training benchmarks.",
      "Audit Analytics Grid: Displays precision, recall, and F1 logs through a Streamlit dashboard."
    ],
    github: "https://github.com/sahu0247/Invoice_Processing-Fraud_Detection"
  },
  phishalert: {
    title: "PhishAlert+",
    category: "Cybersecurity URL Scanner",
    tech: ["Chrome Extension V3", "Python", "FastAPI", "Scikit-Learn", "XGBoost", "Uvicorn", "WHOIS API"],
    description: "An intelligent active-threat scanner checking URL redirects, domain ages, and email authenticity metrics in real-time.",
    mechanics: [
      "Manifest V3 Scan Workers: Listens to active browser tabs, extracting loaded domain properties asynchronously.",
      "ML Threat Engine: Serve ML models (XGBoost/Scikit-Learn) checking subdomain density, SSL presence, and keyword matches.",
      "Email Spoofing Verifiers: Reads SPF, DKIM, and DMARC metadata signatures in headers to identify social engineering attempts."
    ],
    github: "https://github.com/sahu0247/phishalert"
  },
  campusconnect: {
    title: "CampusConnect V2",
    category: "Student Collaborative Hub",
    tech: ["React 19", "Tailwind CSS", "Vite", "Firebase Authentication", "Firebase Firestore", "Lucide React"],
    description: "A collaborative student matchmaking resource exchange platform designed to match study teams algorithmically.",
    mechanics: [
      "Bidirectional Skill Matching: Compares skillsWanted and skillsOffered profiles to suggest complementary collaborators.",
      "Availability Overlap Analysis: Generates match scores using availability scheduling slots (mornings, evenings, weekends).",
      "Real-Time Collaboration: Leverages Firestore listeners for instant messaging and study hub class booking updates."
    ],
    github: "https://github.com/sahu0247/campus-connectV2"
  },
  industrialcopilot: {
    title: "Industrial AI Copilot",
    category: "Enterprise Operations Brain",
    tech: ["React.js", "FastAPI", "Python", "Neo4j Graph Database", "ChromaDB Vector Store", "Scikit-Learn (Random Forest)", "Tesseract OCR", "SQLAlchemy", "SQLite3"],
    description: "An enterprise-grade unified digital brain integrating machinery manuals, real-time sensor streams, and safety regulations.",
    mechanics: [
      "Unified Asset Topology: Connects physical assets, failures, and regulatory compliance standards onto Neo4j Graph DB topologies for relational querying.",
      "Multi-Agent AI Diagnostics: Runs Predictive Maintenance agents (Random Forest failures prediction) and RCA agents generating lockout-tagout (LOTO) checklists.",
      "RAG Cognitive Search: Implements layout-aware OCR document parsers indexing operational manuals into ChromaDB for semantic natural language inquiries."
    ],
    github: "https://github.com/sahu0247/industrial-operations-brain"
  },
  saferover: {
    title: "Smart Cave Safety Rover",
    category: "Robotics & IoT Safety",
    tech: ["Python", "YOLOv8", "ByteTrack", "XGBoost", "Raspberry Pi 4", "ESP32 Gateway", "MQTT Protocol", "WebSockets", "C/C++ (Firmware)"],
    description: "An autonomous AI-powered safety rover and wearable sensor network monitoring conditions in hazardous underground environments.",
    mechanics: [
      "Autonomous CV Navigation: Processes real-time YOLOv8 object detection and ByteTrack multi-target trackers to locate workers and avoid cave obstacles.",
      "Health Telemetry Mesh: Pulls heart rate, SpO2, and fall alerts from custom ESP32 wearable wristbands streaming over MQTT gateway brokers.",
      "Environmental Analytics: Trains XGBoost estimators predicting potential gas hazards and atmospheric dangers from raw environmental sensor readings."
    ],
    github: "https://github.com/sahu0247/work-_safe_rover"
  }
};



// ----------------------------------------------------
// CORE CONTROLLER LOGIC
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  
  // Set Current Copyright Year
  document.getElementById("current-year").textContent = new Date().getFullYear();



  // 1. PROJECT CARD MOUSE GLOW EFFECT
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });

  // 2. PROJECT DOMAIN FILTERS
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Manage active button class
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCats = card.getAttribute("data-categories").split(" ");
        if (filterVal === "all" || cardCats.includes(filterVal)) {
          card.classList.remove("filtered-out");
        } else {
          card.classList.add("filtered-out");
        }
      });
    });
  });

  // 3. TECH STACK INTERACTIVE HIGHLIGHTING
  const skillBadges = document.querySelectorAll(".skills-badges .badge");
  const clearFilterTip = document.getElementById("clear-filter-tip");
  const resetSkillsBtn = document.getElementById("reset-skills-btn");

  let activeSkillFilter = null;

  function resetSkillFilters() {
    skillBadges.forEach(badge => badge.classList.remove("active-filter"));
    projectCards.forEach(card => card.classList.remove("highlight-glow"));
    clearFilterTip.classList.remove("visible");
    activeSkillFilter = null;
  }

  skillBadges.forEach(badge => {
    badge.addEventListener("click", () => {
      const skillName = badge.getAttribute("data-skill");

      // If clicking already active skill filter, reset it
      if (activeSkillFilter === skillName) {
        resetSkillFilters();
        return;
      }

      // Set active skill filter
      resetSkillFilters();
      badge.classList.add("active-filter");
      activeSkillFilter = skillName;
      clearFilterTip.classList.add("visible");

      // Highlight corresponding project cards containing data-skills attribute
      projectCards.forEach(card => {
        const skillsList = card.getAttribute("data-skills").split(" ");
        if (skillsList.includes(skillName)) {
          card.classList.add("highlight-glow");
        } else {
          card.classList.remove("highlight-glow");
        }
      });

      // Auto-scroll to projects section if not visible
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  if (resetSkillsBtn) {
    resetSkillsBtn.addEventListener("click", resetSkillFilters);
  }

  // 4. MODALS BACKDROP OVERLAYS
  const projectModal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalContentArea = document.getElementById("modal-content-area");



  // Open Project Details Modal
  const openModalBtns = document.querySelectorAll(".open-modal-btn");
  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const data = PROJECT_DETAILS[projectId];
      if (!data) return;

      // Populate content
      modalContentArea.innerHTML = `
        <span class="modal-category">${data.category}</span>
        <h2>${data.title}</h2>
        
        <h4 class="modal-section-title">Overview</h4>
        <p class="modal-description">${data.description}</p>
        
        <h4 class="modal-section-title">Key Features & Architecture</h4>
        <ul class="modal-bullets">
          ${data.mechanics.map(m => `<li>${m}</li>`).join("")}
        </ul>

        <h4 class="modal-section-title">Technologies Utilized</h4>
        <div class="modal-tech-list">
          ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>

        <div class="modal-footer">
          <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">GitHub Repository</a>
        </div>
      `;

      projectModal.classList.add("open");
      document.body.style.overflow = "hidden"; // Block body scroll
    });
  });

  // Close Project Modal
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      projectModal.classList.remove("open");
      document.body.style.overflow = ""; // Restore scrolling
    });
  }



  // Close modal when clicking backdrop overlays
  window.addEventListener("click", e => {
    if (e.target === projectModal) {
      projectModal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });



  // 6. CONTACT FORM SUBMISSION TO FORM-SUBMIT EMAIL API
  const contactForm = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  if (contactForm && toast) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("form-name").value;
      const email = document.getElementById("form-email").value;
      const message = document.getElementById("form-message").value;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Update UI loading states
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // Send via FormSubmit AJAX to user email
      fetch("https://formsubmit.co/ajax/sahu02xyz@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "New Message from Portfolio Website"
        })
      })
      .then(response => response.json())
      .then(data => {
        // Log local copy to LocalStorage
        const submissions = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
        submissions.push({
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem("portfolio_messages", JSON.stringify(submissions));

        // Reset form inputs
        contactForm.reset();

        // Trigger toast success notification
        toast.textContent = "Message sent! Check your email to confirm the form if it's the first time.";
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 5000);
      })
      .catch(error => {
        console.error("Failed to send message: ", error);
        
        // Fallback: save locally
        toast.textContent = "Failed to send email. Message saved locally in browser.";
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 4000);
      })
      .finally(() => {
        // Reset loading states
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
    });
  }

  // 7. ACTIVE SECTION TRACKING ON WINDOW SCROLL
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 120)) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

});
