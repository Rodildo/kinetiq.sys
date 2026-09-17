import './style.css'
import * as echarts from 'echarts/core';
import { LineChart, GaugeChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, GaugeChart, GridComponent, TooltipComponent, CanvasRenderer]);

// Multilingual Dictionary
const translations = {
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_contact: "Contáctanos",
    nav_about: "Nosotros",
    nav_request: "Solicitud de Servicio",

    // Hero Section
    hero_title: "Telemetría y Automatización IoT<br>para el Sector Petrolero",
    hero_subtitle: "Modernizamos la supervisión en campo. Soluciones de monitoreo remoto en tiempo real, integración de variadores y telemetría avanzada para maximizar la producción y reducir el tiempo de inactividad.",
    hero_cta: "Agendar Consultoría",
    hero_secondary: "Ver Servicios",

    // Services Section
    services_title: "Servicios que Ofrecemos",
    service_card_cta: "Agendar Consultoría →",
    service_1_title: "Integración y Control de Variadores",
    service_1_desc: "Establecemos protocolos de comunicación robustos para la lectura, extracción de datos y control de parámetros operativos de variadores, optimizando el consumo energético y protegiendo los motores.",
    service_2_title: "Sistemas de Hardware y Supervisión 24/7",
    service_2_desc: "Diseñamos e implementamos sistemas de hardware para la supervisión de pozos 24/7. Monitoreamos variables críticas y enviamos alertas automáticas ante fallas eléctricas o caídas de tensión en los equipos de superficie.",
    service_3_title: "Análisis y Optimización de Sistemas BCP",
    service_3_desc: "Desarrollamos herramientas de cálculo y software a medida para evaluar la eficiencia y operación de Bombas de Cavidad Progresiva, asegurando que los equipos trabajen en su punto óptimo de extracción.",
    service_4_title: "Capacitación y Consultoría Técnica Especializada",
    service_4_desc: "En alianza con expertos en ingeniería de campo, estructuramos programas de formación para el personal petrolero, cerrando la brecha entre la operatividad tradicional y las nuevas tecnologías de automatización.",

    // Request Form Section
    form_badge: "Atención Directa",
    form_title: "Solicitud de Servicio y Consultoría",
    form_desc: "Complete el formulario y nuestro equipo de ingenieros especializados se pondrá en contacto con usted de inmediato para evaluar las necesidades técnicas de su campo u operación.",
    form_feat1_title: "Respuesta Rápida",
    form_feat1_desc: "Contacto técnico en menos de 24 horas hábiles.",
    form_feat2_title: "Confidencialidad",
    form_feat2_desc: "Protección estricta de datos e información operativa.",
    form_feat3_title: "Diagnóstico a Medida",
    form_feat3_desc: "Propuesta técnica adaptada a su infraestructura.",
    
    label_name: "Nombre y Apellido *",
    label_company: "Empresa / Operadora *",
    label_email: "Correo Corporativo *",
    label_phone: "Teléfono / WhatsApp *",
    label_service: "Servicio Requerido *",
    label_location: "Ubicación / Cuenca Operativa",
    label_details: "Detalles del Requerimiento / Proyecto",
    
    ph_name: "Ej: Ing. Carlos Morales",
    ph_company: "Ej: PetroEnergy Corp",
    ph_email: "nombre@empresa.com",
    ph_phone: "+1 234 567 8900",
    ph_location: "Ej: Cuenca Neuquina / Golfo",
    ph_details: "Describa el número de pozos, tipo de variadores o necesidades específicas...",
    
    opt_select: "Seleccione una opción",
    opt_1: "Integración y Control de Variadores",
    opt_2: "Sistemas de Hardware y Supervisión 24/7",
    opt_3: "Análisis y Optimización de Sistemas BCP",
    opt_4: "Capacitación y Consultoría Especializada",
    opt_5: "Diagnóstico y Solución Integral",

    btn_submit: "Enviar Solicitud de Servicio",
    btn_submitting: "Enviando Solicitud...",
    
    // Telemetry Simulator
    sim_title: "Monitorización IoT en Tiempo Real",
    sim_status: "Conexión Estable - Pozo #42",
    sim_freq_title: "Velocidad de Operación (PCP)",
    sim_chart_title: "Tendencia de Amperaje (Tiempo Real)",
    sim_pump_status: "Estado de la bomba",
    sim_rod_torque: "Torque Varilla",
    sim_rod_speed: "Velocidad de Varilla",
    sim_level_title: "Nivel",
    sim_current_level: "Nivel Actual",
    sim_vsd_temp_title: "Temperatura de VSD",
    sim_temp: "Temperatura",
    sim_vsd_status: "Estado de VSD",
    sim_motor_torque: "Torque de Motor",
    sim_motor_speed: "Velocidad de Motor",
    sim_out_current: "Corriente de salida",
    sim_out_power: "Potencia de salida",
    sim_dc_voltage: "Voltaje DC",
    sim_run_hours: "Horas de funcionamiento",
    sim_kwh_monitoring: "kWh monitoreo",
    sim_rpm_label: "RPM Estimado:",
    sim_current: "Corriente (Amperaje)",
    sim_out_v: "Voltaje de Salida",
    sim_dc_v: "Voltaje Bus DC",
    sim_pf: "Factor de Potencia",
    sim_footer: "Simulación de dashboard. Implementamos paneles HMI/SCADA a medida accesibles desde cualquier dispositivo.",

    // ROI Metrics
    roi_title: "Casos de Éxito y Rentabilidad (ROI)",
    roi_subtitle: "Resultados comprobados en campos maduros e infraestructura de superficie.",
    roi_1_title: "Tiempo Operativo (Uptime)",
    roi_1_desc: "Garantizamos continuidad operativa mediante monitoreo 24/7 y detección predictiva de fallas en VFD y BCP.",
    roi_2_title: "Ahorro Energético",
    roi_2_desc: "Ajuste automatizado de RPM según la carga del pozo, reduciendo significativamente el consumo eléctrico de los motores.",
    roi_3_title: "Detección de Fallas",
    roi_3_desc: "Alertas enviadas directamente a operadores vía SMS/Email ante caídas de tensión o sobrepresiones repentinas.",

    // About Section
    about_title: "Presencia Global, Experiencia Local",
    about_desc1: "Con operaciones a nivel mundial, Kinetiq System provee tecnologías y servicios innovadores que ayudan a las compañías de petróleo y gas a maximizar su producción y reducir riesgos.",
    about_desc2: "Nuestro compromiso con la <strong>seguridad y el medio ambiente</strong> es el núcleo de todas nuestras operaciones.",
    about_feat1: "Liderazgo Tecnológico",
    about_feat2: "Excelencia Operacional",
    about_feat3: "Sostenibilidad",
    stat_countries: "Países Operativos",
    stat_projects: "Proyectos Completados",

    // Footer
    footer_slogan: "Excelencia y tecnología avanzada en la industria energética.",
    footer_company: "Compañía",
    footer_link_about: "Sobre Nosotros",
    footer_link_services: "Servicios",
    footer_link_request: "Solicitar Cotización",
    footer_link_careers: "Carreras",
    footer_headquarters: "Sede Central",
    footer_rights: "Todos los derechos reservados."
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact Us",
    nav_about: "About Us",
    nav_request: "Service Request",

    // Hero Section
    hero_title: "IoT Telemetry & Automation<br>for the Oil & Gas Industry",
    hero_subtitle: "Modernizing field supervision. Real-time remote monitoring solutions, VFD integration, and advanced telemetry to maximize production and reduce downtime.",
    hero_cta: "Schedule Consultation",
    hero_secondary: "View Services",

    // Services Section
    services_title: "Our Services",
    service_card_cta: "Schedule Consultation →",
    service_1_title: "VFD Integration & Control",
    service_1_desc: "We establish robust communication protocols for reading, data extraction, and operational parameter control of variable frequency drives, optimizing energy consumption and protecting motors.",
    service_2_title: "24/7 Hardware & Monitoring Systems",
    service_2_desc: "We design and implement hardware systems for 24/7 well monitoring. We track critical variables and send automatic alerts for electrical faults or voltage drops in surface equipment.",
    service_3_title: "PCP Systems Analysis & Optimization",
    service_3_desc: "We develop custom calculation tools and software to evaluate the efficiency and operation of Progressive Cavity Pumps, ensuring equipment operates at its optimal extraction point.",
    service_4_title: "Specialized Technical Training & Consulting",
    service_4_desc: "In partnership with field engineering experts, we structure training programs for petroleum personnel, closing the gap between traditional operations and emerging automation technologies.",

    // Request Form Section
    form_badge: "Direct Support",
    form_title: "Service & Consulting Request",
    form_desc: "Fill out the form and our team of specialized engineers will contact you promptly to evaluate the technical requirements of your field or operation.",
    form_feat1_title: "Fast Response",
    form_feat1_desc: "Technical contact in less than 24 business hours.",
    form_feat2_title: "Confidentiality",
    form_feat2_desc: "Strict protection of operating data and project information.",
    form_feat3_title: "Customized Diagnostic",
    form_feat3_desc: "Technical proposal tailored to your specific infrastructure.",
    
    label_name: "Full Name *",
    label_company: "Company / Operator *",
    label_email: "Corporate Email *",
    label_phone: "Phone / WhatsApp *",
    label_service: "Service Required *",
    label_location: "Location / Operating Basin",
    label_details: "Project Requirements / Details",
    
    ph_name: "e.g., Eng. Carlos Morales",
    ph_company: "e.g., PetroEnergy Corp",
    ph_email: "name@company.com",
    ph_phone: "+1 234 567 8900",
    ph_location: "e.g., Permian Basin / Gulf Coast",
    ph_details: "Describe number of wells, VFD models, or specific needs...",
    
    opt_select: "Select an option",
    opt_1: "VFD Integration & Control",
    opt_2: "24/7 Hardware & Monitoring Systems",
    opt_3: "PCP Systems Analysis & Optimization",
    opt_4: "Specialized Technical Training & Consulting",
    opt_5: "Comprehensive Diagnostic & Solution",

    btn_submit: "Submit Service Request",
    btn_submitting: "Submitting Request...",
    
    // Telemetry Simulator
    sim_title: "Real-Time IoT Monitoring",
    sim_status: "Stable Connection - Well #42",
    sim_freq_title: "Operating Speed (PCP)",
    sim_chart_title: "Amperage Trend (Real Time)",
    sim_pump_status: "Pump Status",
    sim_rod_torque: "Rod Torque",
    sim_rod_speed: "Rod Speed",
    sim_level_title: "Level",
    sim_current_level: "Current Level",
    sim_vsd_temp_title: "VSD Temperature",
    sim_temp: "Temperature",
    sim_vsd_status: "VSD Status",
    sim_motor_torque: "Motor Torque",
    sim_motor_speed: "Motor Speed",
    sim_out_current: "Output Current",
    sim_out_power: "Output Power",
    sim_dc_voltage: "DC Voltage",
    sim_run_hours: "Run Hours",
    sim_kwh_monitoring: "kWh Monitoring",
    sim_rpm_label: "Estimated RPM:",
    sim_current: "Current (Amperage)",
    sim_out_v: "Output Voltage",
    sim_dc_v: "DC Bus Voltage",
    sim_pf: "Power Factor",
    sim_footer: "Dashboard simulation. We implement custom HMI/SCADA panels accessible from any device.",

    // ROI Metrics
    roi_title: "Success Cases & ROI",
    roi_subtitle: "Proven results in mature fields and surface infrastructure.",
    roi_1_title: "Operational Uptime",
    roi_1_desc: "We ensure continuous operation through 24/7 monitoring and predictive fault detection in VFDs and PCPs.",
    roi_2_title: "Energy Savings",
    roi_2_desc: "Automated RPM adjustment based on well load, significantly reducing engine electrical consumption.",
    roi_3_title: "Fault Detection",
    roi_3_desc: "Alerts sent directly to operators via SMS/Email in case of voltage drops or sudden overpressures.",

    // About Section
    about_title: "Global Presence, Local Expertise",
    about_desc1: "With operations worldwide, Kinetiq System provides innovative technologies and services that help oil and gas companies maximize production and mitigate risk.",
    about_desc2: "Our commitment to <strong>safety and the environment</strong> is at the core of all our operations.",
    about_feat1: "Technological Leadership",
    about_feat2: "Operational Excellence",
    about_feat3: "Sustainability",
    stat_countries: "Operating Countries",
    stat_projects: "Completed Projects",

    // Footer
    footer_slogan: "Excellence and cutting-edge technology in the energy sector.",
    footer_company: "Company",
    footer_link_about: "About Us",
    footer_link_services: "Services",
    footer_link_request: "Request Quote",
    footer_link_careers: "Careers",
    footer_headquarters: "Headquarters",
    footer_rights: "All rights reserved."
  }
};

let currentLang = localStorage.getItem('kinetiq_lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kinetiq_lang', lang);
  document.documentElement.lang = lang;

  // Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update Language Buttons Active State
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Language
  setLanguage(currentLang);

  // Language switcher event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Scroll Reveal Animation
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 80;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Form Submission & Email Delivery Handling
  const serviceForm = document.getElementById('serviceForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');

  if (serviceForm) {
    serviceForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(serviceForm);
      const data = Object.fromEntries(formData.entries());

      // Show submitting state
      btnText.textContent = translations[currentLang].btn_submitting;
      submitBtn.disabled = true;
      formStatus.style.display = 'none';

      try {
        // Enviar vía Formspree o servicio de relay directo
        // Se puede configurar el endpoint propio o servicio gratuito como Web3Forms / Formspree
        const response = await fetch('https://formsubmit.co/ajax/georjucho@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...data,
            _subject: `Nueva Solicitud de Servicio Petrolero - ${data.company || data.name}`,
            origin: 'Kinetiq System Web'
          })
        }).catch(() => null);

        // Success state feedback
        formStatus.className = 'form-status success';
        if (currentLang === 'es') {
          formStatus.innerHTML = `<strong>¡Solicitud enviada con éxito!</strong><br>Hemos registrado su requerimiento para <strong>${data.company || data.name}</strong>. Nuestro equipo de ingenieros revisará los datos y se pondrá en contacto con usted a <strong>${data.email}</strong>.`;
        } else {
          formStatus.innerHTML = `<strong>Request sent successfully!</strong><br>We have registered your requirement for <strong>${data.company || data.name}</strong>. Our engineering team will review the details and contact you at <strong>${data.email}</strong>.`;
        }
        formStatus.style.display = 'block';

        serviceForm.reset();
      } catch (error) {
        formStatus.className = 'form-status error';
        if (currentLang === 'es') {
          formStatus.textContent = 'Hubo un inconveniente al enviar la solicitud. Por favor contáctenos directamente a info@kinetiqsystem.com';
        } else {
          formStatus.textContent = 'There was an issue sending your request. Please contact us directly at info@kinetiqsystem.com';
        }
        formStatus.style.display = 'block';
      } finally {
        btnText.textContent = translations[currentLang].btn_submit;
        submitBtn.disabled = false;
      }
    });
  }
  
  // Telemetry Simulator Logic with ECharts
  const gaugeEl = document.getElementById('gauge-chart');
  const lineEl = document.getElementById('line-chart');

  if (gaugeEl && lineEl) {
    // Inicializar Gráficos ECharts
    const gaugeChart = echarts.init(gaugeEl);
    const lineChart = echarts.init(lineEl);

    // Opciones iniciales para el Gauge (Velocidad PCP)
    const gaugeOption = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          radius: '100%',
          min: 40,
          max: 200,
          splitNumber: 8,
          itemStyle: {
            color: '#E14B3B'
          },
          progress: {
            show: true,
            width: 15
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[1, 'rgba(255,255,255,0.05)']]
            }
          },
          axisTick: {
            distance: -25,
            length: 8,
            lineStyle: {
              color: '#4a5568',
              width: 1
            }
          },
          splitLine: {
            distance: -30,
            length: 12,
            lineStyle: {
              color: '#4a5568',
              width: 2
            }
          },
          axisLabel: {
            distance: -10,
            color: '#a0aec0',
            fontSize: 10,
            formatter: function (value) {
              return Math.round(value);
            }
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} RPM',
            color: '#fff',
            fontSize: 24,
            offsetCenter: [0, '0%']
          },
          data: [{ value: 120.0 }]
        }
      ]
    };

    // Historial para el gráfico de línea (60 puntos max)
    const maxDataPoints = 60;
    const timeData = Array.from({ length: maxDataPoints }, (_, i) => {
      const d = new Date();
      d.setSeconds(d.getSeconds() - (maxDataPoints - i) * 2);
      const baseAmps = 83.39;
      const fakeAmps = parseFloat((baseAmps + (Math.random() * 1.5 - 0.75)).toFixed(2));
      return [d.getTime(), fakeAmps]; 
    });

    // Opciones iniciales para la Línea de Tendencia (Amperaje)
    const lineOption = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          const date = new Date(params[0].value[0]);
          return `${date.toLocaleTimeString()}<br/>Amperaje: ${params[0].value[1]} A`;
        }
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '5%',
        top: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'time',
        splitLine: { show: false },
        axisLabel: { color: '#a0aec0', fontSize: 10 },
        axisLine: { lineStyle: { color: '#2d3748' } }
      },
      yAxis: {
        type: 'value',
        min: 60,
        max: 100,
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#a0aec0', formatter: '{value} A' }
      },
      series: [
        {
          name: 'Amperaje',
          type: 'line',
          showSymbol: false,
          smooth: true,
          itemStyle: { color: '#E14B3B' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(225,75,59,0.5)' },
              { offset: 1, color: 'rgba(225,75,59,0.0)' }
            ])
          },
          data: timeData
        }
      ]
    };

    gaugeChart.setOption(gaugeOption);
    lineChart.setOption(lineOption);

    // Actualización de Telemetría cada 2 segundos
    setInterval(() => {
      // 1. Velocidad PCP (Gauge)
      const baseRpm = 120.02;
      const currentRpm = parseFloat((baseRpm + (Math.random() * 2.0 - 1.0)).toFixed(2));
      
      gaugeChart.setOption({
        series: [{ data: [{ value: currentRpm }] }]
      });
      
      // 2. Amperaje (Line Chart)
      const baseAmps = 83.39;
      const currentAmps = parseFloat((baseAmps + (Math.random() * 1.5 - 0.75)).toFixed(2));
      const now = new Date().getTime();
      
      timeData.shift();
      timeData.push([now, currentAmps]);
      
      lineChart.setOption({
        series: [{ data: timeData }]
      });
      
      // 3. Data Tables Update
      const updateEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      updateEl('sim-torque-varilla', (784.89 + (Math.random() * 2.0 - 1.0)).toFixed(2));
      updateEl('sim-vel-varilla', currentRpm.toFixed(2));
      updateEl('sim-temp-vsd', (31.0 + (Math.random() * 0.4 - 0.2)).toFixed(1));

      updateEl('sim-torque-motor', (35.30 + (Math.random() * 1.0 - 0.5)).toFixed(2));
      updateEl('sim-vel-motor', (689.4 + (Math.random() * 2.0 - 1.0)).toFixed(1));
      updateEl('sim-corriente-salida', currentAmps.toFixed(2));
      updateEl('sim-potencia-salida', (17.9 + (Math.random() * 0.4 - 0.2)).toFixed(1));
      updateEl('sim-voltaje-dc', (580.9 + (Math.random() * 2.0 - 1.0)).toFixed(1));
      
    }, 2000);

    // Responsive resize
    window.addEventListener('resize', () => {
      gaugeChart.resize();
      lineChart.resize();
    });
  }
});
