document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     1. STICKY HEADER & SCROLL STATE
     ========================================================================== */
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once in case page starts scrolled down


  /* ==========================================================================
     2. MOBILE NAVIGATION BURGER MENU
     ========================================================================== */
  const burger = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  const toggleMobileMenu = () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle body scroll locking when menu is active
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  burger.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });


  /* ==========================================================================
     3. SCROLL REVEAL INTERSECTION OBSERVER
     ========================================================================== */
  const revealElements = [
    document.querySelector('.section-header'),
    document.getElementById('services-header'),
    ...document.querySelectorAll('.service-card'),
    document.getElementById('about-content-left'),
    document.getElementById('about-visual-right'),
    document.getElementById('solutions-header'),
    document.getElementById('audience-tabs'),
    document.getElementById('demo-content-left'),
    document.getElementById('demo-card-right'),
    document.getElementById('contact-info-left'),
    document.getElementById('contact-form-right')
  ].filter(el => el !== null); // Filter out any null references safely

  const revealObserverOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // If it's the about visual, trigger the chart animation
        if (entry.target.id === 'about-visual-right') {
          animateChartBars();
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, revealObserverOptions);
  
  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Chart animation helper
  function animateChartBars() {
    const bar1 = document.getElementById('bar-1');
    const bar2 = document.getElementById('bar-2');
    const bar3 = document.getElementById('bar-3');
    
    if (bar1 && bar2 && bar3) {
      setTimeout(() => { bar1.classList.add('fill-active-1'); }, 200);
      setTimeout(() => { bar2.classList.add('fill-active-2'); }, 400);
      setTimeout(() => { bar3.classList.add('fill-active-3'); }, 600);
    }
  }


  /* ==========================================================================
     4. SOLUTIONS AUDIENCE TABS
     ========================================================================== */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      
      // Deactivate all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Hide all panels
      tabPanels.forEach(p => p.classList.remove('active'));

      // Activate selected
      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });


  /* ==========================================================================
     5. INTERACTIVE CHATBOT SIMULATOR
     ========================================================================== */
  const chatBody = document.getElementById('chat-body');
  const choicesContainer = document.getElementById('choices-container');
  const typingIndicator = document.getElementById('typing-indicator');

  const chatScripts = {
    school: [
      {
        sender: 'user',
        text: 'School & Institute Solutions Demo 🎓'
      },
      {
        sender: 'bot',
        text: 'Excellent choice! Our School ERP simplifies academic operations. Parents receive auto-invoices & fee links direct to WhatsApp.',
        delay: 1000
      },
      {
        sender: 'bot',
        text: 'Example WhatsApp alert:\n\n*"Dear Parent, fee installment for June is pending. Click to clear dues online in 1-click: renvixteach.in/pay/s_1024"*',
        delay: 1500
      },
      {
        sender: 'bot',
        text: 'Admin alerts reduce overdue balances by 35%! Would you like a custom ERP blueprint for your campus?',
        delay: 1200
      }
    ],
    whatsapp: [
      {
        sender: 'user',
        text: 'WhatsApp API Notification Sync 💬'
      },
      {
        sender: 'bot',
        text: 'WhatsApp messages have a 98% open rate compared to standard email templates. We connect automated pipelines directly.',
        delay: 1000
      },
      {
        sender: 'bot',
        text: 'When a new lead completes a registration, the Renvix sync dispatcher forwards them a dynamic greeting and links them instantly with your CRM.',
        delay: 1500
      },
      {
        sender: 'bot',
        text: 'Let us build a customized WhatsApp notification strategy for your business operations.',
        delay: 1200
      }
    ],
    lead: [
      {
        sender: 'user',
        text: 'Lead Capture Demo 📈'
      },
      {
        sender: 'bot',
        text: 'Static web contact forms are boring. Our active landing systems qualify user intent automatically.',
        delay: 1000
      },
      {
        sender: 'bot',
        text: 'Instead of cold-calling raw inputs, our bot prompts qualifying steps (e.g. services needed, budget range) and notifies your sales crew on WhatsApp.',
        delay: 1500
      },
      {
        sender: 'bot',
        text: 'Try submitting the form below to test our real-time notification engine!',
        delay: 1200
      }
    ]
  };

  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const appendMessage = (sender, text) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg msg-${sender}`;
    
    // Convert newlines to breaks
    const formattedText = text.replace(/\n/g, '<br>');

    msgDiv.innerHTML = `
      <div class="msg-bubble">${formattedText}</div>
      <span class="msg-time">${formatTime()}</span>
    `;
    
    // Insert message before typing indicator
    chatBody.insertBefore(msgDiv, typingIndicator);
    
    // Auto-scroll chat body to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const showTypingIndicator = (show) => {
    typingIndicator.style.display = show ? 'flex' : 'none';
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChoiceClick = async (choiceKey) => {
    // Disable all choice buttons during sequence
    const buttons = choicesContainer.querySelectorAll('.sim-choice-btn');
    buttons.forEach(btn => btn.setAttribute('disabled', 'true'));
    
    const script = chatScripts[choiceKey];
    if (!script) return;

    // Send user message first (instantly)
    appendMessage(script[0].sender, script[0].text);
    
    // Process bot responses with delayed timing
    for (let i = 1; i < script.length; i++) {
      const step = script[i];
      
      // Wait for specified delay
      await new Promise(resolve => setTimeout(resolve, step.delay || 800));
      
      // Show typing indicator
      showTypingIndicator(true);
      
      // Wait a typing duration simulating realistic speed
      const typingTime = Math.min(Math.max(step.text.length * 15, 600), 1800);
      await new Promise(resolve => setTimeout(resolve, typingTime));
      
      // Hide typing indicator and append bot reply
      showTypingIndicator(false);
      appendMessage(step.sender, step.text);
    }
    
    // Re-enable choice buttons
    buttons.forEach(btn => btn.removeAttribute('disabled'));
  };

  choicesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.sim-choice-btn');
    if (!btn || btn.hasAttribute('disabled')) return;
    
    const choiceKey = btn.getAttribute('data-choice');
    handleChoiceClick(choiceKey);
  });


  /* ==========================================================================
     6. CONTACT FORM & LEAD INTAKE SYSTEM
     ========================================================================== */
  const leadForm = document.getElementById('lead-form');
  const formRight = document.getElementById('contact-form-right');
  
  // TODO: Replace this with your Google Apps Script Web App URL after deploying it
  const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

  if (leadForm && formRight) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('form-submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      
      // Collect input values
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const needSelect = document.getElementById('form-need');
      const needText = needSelect.options[needSelect.selectedIndex].text;
      const message = document.getElementById('form-message').value;
      
      // Disable inputs and button, show loading spinner text
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.innerHTML = 'Securing Connection...';
      
      const showSuccessUI = () => {
        // Transition form wrapper content with beautiful visual success message
        formRight.style.opacity = '0';
        formRight.style.transform = 'translateY(15px)';
        formRight.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
          formRight.innerHTML = `
            <div style="text-align: center; padding: 1.5rem 0;">
              <div style="width: 70px; height: 70px; background: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem auto; box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style="font-size: 1.75rem; margin-bottom: 1rem; color: #fff;">Inquiry Transmitted</h3>
              <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.6;">
                Thank you <strong>${name}</strong>! Your request for <strong>${needText}</strong> integration has been registered in our system.
              </p>
              <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 1.25rem; border-radius: 16px; text-align: left; margin-bottom: 2rem; font-size: 0.9rem;">
                <div style="margin-bottom: 0.5rem; color: var(--text-muted);"><strong>Verification Details:</strong></div>
                <div style="color: var(--text-secondary); margin-bottom: 0.25rem;">📧 Email: ${email}</div>
                <div style="color: var(--text-secondary);">📞 Phone: ${phone}</div>
              </div>
              <p style="color: var(--accent-secondary); font-size: 0.95rem; font-weight: 600;">
                ⚡ An automation engineer will contact you on WhatsApp/Phone shortly.
              </p>
            </div>
          `;
          formRight.style.opacity = '1';
          formRight.style.transform = 'translateY(0)';
        }, 500);
      };

      if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        // Simulate API submit delay (1.5 seconds) for local/placeholder testing
        setTimeout(() => {
          showSuccessUI();
        }, 1500);
      } else {
        // Real submit to Google Sheet via Google Apps Script
        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            interest: needText,
            message: message
          })
        })
        .then(response => response.json())
        .then(result => {
          if (result.result === 'success') {
            showSuccessUI();
          } else {
            throw new Error(result.error || 'Server error');
          }
        })
        .catch(error => {
          console.error('Submission error:', error);
          // Re-enable button and show error message
          submitBtn.removeAttribute('disabled');
          submitBtn.innerHTML = originalBtnText;
          alert('Submission failed. Please check your network connection and try again.');
        });
      }
    });
  }

  // Newsletter form logic
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const originalValue = input.value;
      
      input.value = 'Subscribed successfully!';
      input.setAttribute('disabled', 'true');
      
      setTimeout(() => {
        input.value = '';
        input.removeAttribute('disabled');
      }, 3000);
    });
  }

});
