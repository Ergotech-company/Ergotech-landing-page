export const CONTENT = {
  es: {
    nav: {
      links: [
        { id: 'servicios', label: 'Especialidades' },
        { id: 'laboratorio', label: 'Laboratorio' },
        { id: 'proceso', label: 'Proceso' },
        { id: 'contacto', label: 'Contacto' },
      ],
      cta: 'Cotizar ahora',
    },
    hero: {
      badge: 'ODOO · N8N · WEB · SERVIDORES',
      titleLine1: 'Especialistas en',
      titleHighlight: 'Odoo, n8n, Web',
      titleLine2: 'y Servidores.',
      subtitle:
        'En ERGOTECHNOLOGY desarrollamos módulos a medida y migraciones para Odoo, diseñamos flujos automatizados en n8n, creamos páginas web y landing pages de alto impacto y configuramos servidores listos para producción.',
      primaryCta: 'Cotizar proyecto',
      secondaryCta: 'Ver laboratorio técnico',
      metrics: [
        { value: '100%', label: 'Migraciones íntegras' },
        { value: '24/7', label: 'Flujos n8n activos' },
        { value: '99.98%', label: 'Uptime en servidores' },
      ],
      orbitCards: {
        top: { tag: 'ODOO CORE', value: 'Módulos & Migraciones' },
        bottomLeft: { tag: 'N8N FLOWS', value: 'Automatización & APIs' },
        bottomRight: { tag: 'WEB & SERVERS', value: 'Landing Pages · Linux' },
      },
    },
    marquee: {
      label: 'ECOSISTEMA TÉCNICO & ESPECIALIDADES',
    },
    bento: {
      eyebrow: 'ESPECIALIDADES CORE',
      title: 'Soluciones técnicas diseñadas para escalar tu operación digital.',
      subtitle:
        'Desde el corazón de tu ERP en Odoo hasta automatizaciones en n8n, presencia web de alto impacto y servidores blindados en la nube.',
      items: [
        {
          id: 'odoo-modules',
          span: 'lg:col-span-3',
          tag: '01 / ODOO DEVELOPMENT',
          title: 'Creación de Módulos para Odoo',
          description:
            'Desarrollo de módulos personalizados desde cero para Odoo Community y Enterprise: modelos ORM, vistas OWL, reglas de seguridad por roles, reportes QWeb y flujos contables/RRHH.',
          highlights: ['Python & ORM', 'Vistas OWL / XML', 'Odoo 15 – 19'],
          theme: 'dark',
        },
        {
          id: 'odoo-migration',
          span: 'lg:col-span-3',
          tag: '02 / ODOO UPGRADES',
          title: 'Migración de Odoo',
          description:
            'Actualizamos tu instancia y base de datos entre versiones de Odoo sin pérdida de información, adaptando módulos propios, integraciones fiscales y datos históricos.',
          highlights: ['Migración de BD', 'Porting de addons', 'Zero Data Loss'],
          theme: 'cobalt',
        },
        {
          id: 'n8n-workflows',
          span: 'lg:col-span-2',
          tag: '03 / AUTOMATION',
          title: 'Flujos de n8n',
          description:
            'Orquestación visual y webhooks en n8n para conectar Odoo, WhatsApp, CRMs, facturación, correo y agentes IA en piloto automático.',
          highlights: ['Self-Hosted n8n', 'Webhooks & IA'],
          theme: 'teal',
        },
        {
          id: 'web-landing',
          span: 'lg:col-span-2',
          tag: '04 / WEB STUDIO',
          title: 'Páginas Web & Landing Pages',
          description:
            'Diseño y programación de sitios corporativos y landing pages modernas en React con animaciones fluidas, carga ultrarrápida y enfoque en conversión.',
          highlights: ['React & Vite', 'SEO & Animaciones'],
          theme: 'light-bordered',
        },
        {
          id: 'server-config',
          span: 'lg:col-span-2',
          tag: '05 / INFRASTRUCTURE',
          title: 'Configuración de Servidores',
          description:
            'Despliegue, optimización y hardening de servidores Linux/VPS, Docker, Nginx, certificados SSL, backups automáticos y monitoreo continuo.',
          highlights: ['Linux / Docker', 'Nginx, SSL & Firewall'],
          theme: 'dark',
        },
      ],
    },
    lab: {
      eyebrow: 'LABORATORIO DE ARQUITECTURA',
      title: 'Inspecciona cómo implementamos cada especialidad.',
      subtitle:
        'Explora nuestras verticales principales para ver la topología de ejecución, configuración real y métricas objetivo.',
      tabs: [
        {
          id: 'odoo',
          label: 'Módulos & Migración Odoo',
          badge: 'Odoo 15 → 19',
          latency: '24 ms',
          throughput: '9.4k tx/min',
          reliability: '100% Datos',
          nodes: ['Schema Audit', 'SQL Refactor', 'Addon Porting', 'QA Staging'],
          filename: 'addons/ergo_migrator/models/upgrade.py',
          code: `class ErgoOdooMigrator(models.AbstractModel):
    _name = 'ergo.odoo.migrator'

    def migrate_records(self, batch_size=500):
        legacy = self.env['legacy.appraisal'].search([], limit=batch_size)
        for rec in legacy:
            self.env['eh.hr.appraisal'].create({
                'employee_id': rec.emp_id.id,
                'state': self._map_workflow_state(rec.stage),
            })`,
        },
        {
          id: 'n8n',
          label: 'Flujos de n8n',
          badge: 'Event-Driven',
          latency: '38 ms',
          throughput: '18k exec/hr',
          reliability: '99.99%',
          nodes: ['Webhook Trigger', 'Odoo RPC Node', 'AI Classifier', 'WhatsApp / Mail'],
          filename: 'workflows/odoo-lead-automation.n8n.json',
          code: `{
  "name": "Ergo_Odoo_CRM_Sync",
  "nodes": [
    { "type": "n8n-nodes-base.webhook", "path": "/ergo/inbound-lead" },
    { "type": "n8n-nodes-base.httpRequest", "url": "https://erp.client/jsonrpc" },
    { "type": "n8n-nodes-base.respondToWebhook", "status": 200 }
  ],
  "retryOnFail": true,
  "maxTries": 4
}`,
        },
        {
          id: 'web',
          label: 'Web & Landing Pages',
          badge: 'React Kinetic UI',
          latency: '16 ms',
          throughput: '100 Lighthouse',
          reliability: 'Edge CDN',
          nodes: ['Design System', 'Framer Motion', 'SEO Schema', 'Lead Capture'],
          filename: 'src/components/HeroLaunch.tsx',
          code: `export function HeroLaunch({ headline, ctaLabel }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <NeonCanvas />
      <MagneticButton href="#contact">{ctaLabel}</MagneticButton>
    </motion.section>
  );
}`,
        },
        {
          id: 'servers',
          label: 'Servidores & DevOps',
          badge: 'Hardened VPS',
          latency: '12 ms',
          throughput: 'HTTP/3 + TLS',
          reliability: '99.98%',
          nodes: ['Ubuntu LTS', 'Docker Compose', 'Nginx + Certbot', 'Auto Backups'],
          filename: 'infra/nginx-odoo-n8n.conf',
          code: `server {
    listen 443 ssl http2;
    server_name erp.ergotech.io;

    ssl_certificate /etc/letsencrypt/live/erp/fullchain.pem;
    location /longpolling { proxy_pass http://127.0.0.1:8072; }
    location / { proxy_pass http://127.0.0.1:8069; }
}`,
        },
      ],
    },
    process: {
      eyebrow: 'METODOLOGÍA DE EJECUCIÓN',
      title: 'De la auditoría técnica al despliegue productivo sin interrupciones.',
      steps: [
        {
          step: '01',
          title: 'Auditoría & Blueprint',
          duration: 'Semana 1',
          description:
            'Evaluamos tu instancia de Odoo, procesos automatizables en n8n, requerimientos web o arquitectura de servidor antes de escribir código.',
          deliverables: ['Diagnóstico técnico', 'Plan de migración / dev', 'Presupuesto cerrado'],
        },
        {
          step: '02',
          title: 'Construcción Modular',
          duration: 'Sprints ágiles',
          description:
            'Programamos módulos Odoo, flujos n8n, landing pages en React o infraestructura en staging para que valides avances reales cada semana.',
          deliverables: ['Repositorio Git', 'Entorno Staging', 'Demos semanales'],
        },
        {
          step: '03',
          title: 'Pruebas & Hardening',
          duration: 'QA & Seguridad',
          description:
            'Validación integral de datos migrados, pruebas de carga, permisos por rol, SSL y políticas de respaldo automático.',
          deliverables: ['Integridad de BD', 'Hardening Firewall', 'Tests automatizados'],
        },
        {
          step: '04',
          title: 'Go-Live & Soporte',
          duration: 'Producción 24/7',
          description:
            'Paso a producción controlado, monitoreo de servicios y acompañamiento continuo para evolucionar nuevas integraciones.',
          deliverables: ['Despliegue Zero-Downtime', 'Monitoreo activo', 'Documentación'],
        },
      ],
    },
    contact: {
      eyebrow: 'CONVERSEMOS DE TU PROYECTO',
      title: 'Llevemos tu plataforma Odoo, flujos y web al siguiente nivel.',
      subtitle:
        'Selecciona los servicios que necesitas y te enviamos una propuesta técnica detallada en menos de 24 horas hábiles.',
      scopes: [
        'Módulos Odoo',
        'Migración Odoo',
        'Flujos n8n',
        'Web & Landing Pages',
        'Configuración de Servidores',
      ],
      form: {
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Ej. Alejandro Méndez',
        emailLabel: 'Correo corporativo',
        emailPlaceholder: 'nombre@empresa.com',
        companyLabel: 'Empresa u organización',
        companyPlaceholder: 'Nombre de tu empresa',
        detailsLabel: 'Detalles del requerimiento',
        detailsPlaceholder:
          'Indícanos tu versión actual de Odoo, flujos n8n deseados, tipo de web o características de tu servidor...',
        submit: 'Enviar solicitud técnica',
        sending: 'Procesando brief...',
        successTitle: 'Brief técnico registrado',
        successBody:
          'Revisaremos tu solicitud y te contactaremos pronto. También puedes escribirnos directo a ergotechnologysupport@gmail.com.',
        reset: 'Enviar otra consulta',
      },
      directLabel: 'Canal directo de ingeniería',
    },
    footer: {
      tagline:
        'Módulos y migraciones Odoo, flujos n8n, páginas web, landing pages y configuración de servidores.',
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    nav: {
      links: [
        { id: 'servicios', label: 'Specialties' },
        { id: 'laboratorio', label: 'Tech Lab' },
        { id: 'proceso', label: 'Process' },
        { id: 'contacto', label: 'Contact' },
      ],
      cta: 'Start project',
    },
    hero: {
      badge: 'ODOO · N8N · WEB · SERVERS',
      titleLine1: 'Specialists in',
      titleHighlight: 'Odoo, n8n, Web',
      titleLine2: '& Servers.',
      subtitle:
        'At ERGOTECHNOLOGY we build custom Odoo modules and seamless version migrations, engineer n8n workflow automations, craft high-converting websites and landing pages, and configure production-grade servers.',
      primaryCta: 'Request a quote',
      secondaryCta: 'Explore tech lab',
      metrics: [
        { value: '100%', label: 'Data-safe migrations' },
        { value: '24/7', label: 'Active n8n workflows' },
        { value: '99.98%', label: 'Server uptime SLA' },
      ],
      orbitCards: {
        top: { tag: 'ODOO CORE', value: 'Modules & Migrations' },
        bottomLeft: { tag: 'N8N FLOWS', value: 'Automation & APIs' },
        bottomRight: { tag: 'WEB & SERVERS', value: 'Landing Pages · Linux' },
      },
    },
    marquee: {
      label: 'ENGINEERING STACK & SPECIALTIES',
    },
    bento: {
      eyebrow: 'CORE SPECIALTIES',
      title: 'Precision engineering built to power and automate your business.',
      subtitle:
        'From deep Odoo ERP customization and version upgrades to n8n workflows, modern React landing pages, and hardened server deployments.',
      items: [
        {
          id: 'odoo-modules',
          span: 'lg:col-span-3',
          tag: '01 / ODOO DEVELOPMENT',
          title: 'Custom Odoo Module Development',
          description:
            'End-to-end custom addons for Odoo Community & Enterprise: Python ORM models, OWL components, role-based access rules, QWeb PDF reports, and tailored business workflows.',
          highlights: ['Python & ORM', 'OWL / XML Views', 'Odoo 15 – 19'],
          theme: 'dark',
        },
        {
          id: 'odoo-migration',
          span: 'lg:col-span-3',
          tag: '02 / ODOO UPGRADES',
          title: 'Odoo Version & Data Migration',
          description:
            'Clean, zero-data-loss upgrades across Odoo versions, including PostgreSQL schema refactoring, custom module porting, and historical record verification.',
          highlights: ['DB Schema Upgrade', 'Addon Porting', 'Zero Data Loss'],
          theme: 'cobalt',
        },
        {
          id: 'n8n-workflows',
          span: 'lg:col-span-2',
          tag: '03 / AUTOMATION',
          title: 'n8n Workflow Automation',
          description:
            'Self-hosted n8n pipelines linking Odoo, WhatsApp, CRMs, invoicing, webhooks, and AI agents into reliable automated operations.',
          highlights: ['Self-Hosted n8n', 'Webhooks & AI'],
          theme: 'teal',
        },
        {
          id: 'web-landing',
          span: 'lg:col-span-2',
          tag: '04 / WEB STUDIO',
          title: 'Websites & Landing Pages',
          description:
            'Custom React websites and kinetic landing pages engineered for visual impact, crisp motion, mobile responsiveness, and conversion.',
          highlights: ['React & Vite', 'SEO & Motion UI'],
          theme: 'light-bordered',
        },
        {
          id: 'server-config',
          span: 'lg:col-span-2',
          tag: '05 / INFRASTRUCTURE',
          title: 'Server Configuration & DevOps',
          description:
            'Deployment, tuning, and security hardening for Linux/VPS servers, Docker stacks, Nginx reverse proxies, SSL certificates, and automated backups.',
          highlights: ['Linux / Docker', 'Nginx, SSL & Firewall'],
          theme: 'dark',
        },
      ],
    },
    lab: {
      eyebrow: 'ARCHITECTURE LAB',
      title: 'Inspect how we engineer each specialty in production.',
      subtitle:
        'Switch between our core verticals to inspect node topology, production configuration, and target performance.',
      tabs: [
        {
          id: 'odoo',
          label: 'Odoo Modules & Migration',
          badge: 'Odoo 15 → 19',
          latency: '24 ms',
          throughput: '9.4k tx/min',
          reliability: '100% Data',
          nodes: ['Schema Audit', 'SQL Refactor', 'Addon Porting', 'QA Staging'],
          filename: 'addons/ergo_migrator/models/upgrade.py',
          code: `class ErgoOdooMigrator(models.AbstractModel):
    _name = 'ergo.odoo.migrator'

    def migrate_records(self, batch_size=500):
        legacy = self.env['legacy.appraisal'].search([], limit=batch_size)
        for rec in legacy:
            self.env['eh.hr.appraisal'].create({
                'employee_id': rec.emp_id.id,
                'state': self._map_workflow_state(rec.stage),
            })`,
        },
        {
          id: 'n8n',
          label: 'n8n Workflows',
          badge: 'Event-Driven',
          latency: '38 ms',
          throughput: '18k exec/hr',
          reliability: '99.99%',
          nodes: ['Webhook Trigger', 'Odoo RPC Node', 'AI Classifier', 'WhatsApp / Mail'],
          filename: 'workflows/odoo-lead-automation.n8n.json',
          code: `{
  "name": "Ergo_Odoo_CRM_Sync",
  "nodes": [
    { "type": "n8n-nodes-base.webhook", "path": "/ergo/inbound-lead" },
    { "type": "n8n-nodes-base.httpRequest", "url": "https://erp.client/jsonrpc" },
    { "type": "n8n-nodes-base.respondToWebhook", "status": 200 }
  ],
  "retryOnFail": true,
  "maxTries": 4
}`,
        },
        {
          id: 'web',
          label: 'Web & Landing Pages',
          badge: 'React Kinetic UI',
          latency: '16 ms',
          throughput: '100 Lighthouse',
          reliability: 'Edge CDN',
          nodes: ['Design System', 'Framer Motion', 'SEO Schema', 'Lead Capture'],
          filename: 'src/components/HeroLaunch.tsx',
          code: `export function HeroLaunch({ headline, ctaLabel }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <NeonCanvas />
      <MagneticButton href="#contact">{ctaLabel}</MagneticButton>
    </motion.section>
  );
}`,
        },
        {
          id: 'servers',
          label: 'Servers & DevOps',
          badge: 'Hardened VPS',
          latency: '12 ms',
          throughput: 'HTTP/3 + TLS',
          reliability: '99.98%',
          nodes: ['Ubuntu LTS', 'Docker Compose', 'Nginx + Certbot', 'Auto Backups'],
          filename: 'infra/nginx-odoo-n8n.conf',
          code: `server {
    listen 443 ssl http2;
    server_name erp.ergotech.io;

    ssl_certificate /etc/letsencrypt/live/erp/fullchain.pem;
    location /longpolling { proxy_pass http://127.0.0.1:8072; }
    location / { proxy_pass http://127.0.0.1:8069; }
}`,
        },
      ],
    },
    process: {
      eyebrow: 'EXECUTION METHODOLOGY',
      title: 'From technical audit to zero-downtime production launch.',
      steps: [
        {
          step: '01',
          title: 'Audit & Technical Blueprint',
          duration: 'Week 1',
          description:
            'We assess your Odoo database, n8n automation opportunities, web UX goals, or server topology before writing a single line of code.',
          deliverables: ['Technical diagnosis', 'Migration / dev plan', 'Clear roadmap'],
        },
        {
          step: '02',
          title: 'Modular Engineering',
          duration: 'Agile Sprints',
          description:
            'We build custom Odoo addons, n8n pipelines, React landing pages, or Docker server stacks in staging for weekly verification.',
          deliverables: ['Git repository', 'Staging environment', 'Weekly demos'],
        },
        {
          step: '03',
          title: 'QA, Data Integrity & Hardening',
          duration: 'Security & Load',
          description:
            'End-to-end validation of migrated records, role-based access rules, SSL/TLS encryption, firewall hardening, and automated backups.',
          deliverables: ['DB integrity check', 'Firewall hardening', 'Automated tests'],
        },
        {
          step: '04',
          title: 'Go-Live & Ongoing Support',
          duration: '24/7 Production',
          description:
            'Controlled production rollout, active service monitoring, and continuous engineering support as your operations expand.',
          deliverables: ['Zero-Downtime launch', 'Live monitoring', 'Technical docs'],
        },
      ],
    },
    contact: {
      eyebrow: 'START A CONVERSATION',
      title: 'Let’s upgrade your Odoo, automations, web & servers.',
      subtitle:
        'Select the services you need and we will send a detailed technical proposal within 24 business hours.',
      scopes: [
        'Odoo Modules',
        'Odoo Migration',
        'n8n Workflows',
        'Web & Landing Pages',
        'Server Configuration',
      ],
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'e.g. Alex Morgan',
        emailLabel: 'Work email',
        emailPlaceholder: 'name@company.com',
        companyLabel: 'Company or organization',
        companyPlaceholder: 'Your company name',
        detailsLabel: 'Project brief',
        detailsPlaceholder:
          'Tell us your current Odoo version, target n8n workflows, website needs, or server setup requirements...',
        submit: 'Send technical brief',
        sending: 'Submitting brief...',
        successTitle: 'Technical brief received',
        successBody:
          'We are reviewing your requirements and will reach out shortly. You can also email us directly at ergotechnologysupport@gmail.com.',
        reset: 'Send another inquiry',
      },
      directLabel: 'Direct engineering channel',
    },
    footer: {
      tagline:
        'Custom Odoo modules & migrations, n8n workflow automation, websites, landing pages, and server configuration.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
};

export const TECH_STACK_ROW_1 = [
  { label: 'Odoo Modules', icon: 'cubes' },
  { label: 'Odoo Migrations', icon: 'merge' },
  { label: 'n8n Workflows', icon: 'diagram' },
  { label: 'React & Vite', icon: 'react' },
  { label: 'Landing Pages', icon: 'rocket' },
  { label: 'Python & ORM', icon: 'python' },
  { label: 'PostgreSQL', icon: 'database' },
  { label: 'TypeScript', icon: 'code' },
];

export const TECH_STACK_ROW_2 = [
  { label: 'Linux Servers', icon: 'linux' },
  { label: 'Docker & Compose', icon: 'docker' },
  { label: 'Nginx & SSL', icon: 'shield' },
  { label: 'Node.js APIs', icon: 'node' },
  { label: 'AWS & Cloud VPS', icon: 'aws' },
  { label: 'Git CI/CD', icon: 'git' },
  { label: 'Webhooks & REST', icon: 'bolt' },
  { label: 'Server Hardening', icon: 'server' },
];
