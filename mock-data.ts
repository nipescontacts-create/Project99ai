// All data starts empty — fill it in from the app
export const ownerName = ""; // Set in Configuración → Perfil

// Revenue chart — 12 months, all zeros until real data
export const revenueData = [
  { month: "Ene", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Feb", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Mar", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Abr", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "May", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Jun", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Jul", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Ago", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Sep", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Oct", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Nov", ingresos: 0, gastos: 0, ganancia: 0 },
  { month: "Dic", ingresos: 0, gastos: 0, ganancia: 0 },
];

export const topServices: { name: string; value: number; count: number }[] = [];
export const pipelineData: { stage: string; count: number; value: number }[] = [];
export const todayTasks: { id: number; title: string; time: string; priority: string; done: boolean }[] = [];
export const recentActivity: { id: number; type: string; text: string; time: string; icon: string }[] = [];
export const leads: any[] = [];
export const crmClients: any[] = [];
export const projects: any[] = [];
export const budgets: any[] = [];
export const invoices: any[] = [];
export const teamMembers: any[] = [];
export const portfolioItems: any[] = [];
export const promptTemplates: any[] = [];

export const academyCourses = [
  {
    id: 1, titulo: "Chatbots con IA Avanzada", categoria: "IA aplicada",
    nivel: "Intermedio", lecciones: 12, duracion: "4h 30m", progreso: 0,
    precio: "€800–3.000/proyecto", rating: 4.9, estudiantes: 0,
    descripcion: "Crea chatbots enterprise con Claude API desde cero hasta producción.",
    color: "orange", nuevo: false
  },
  {
    id: 2, titulo: "Apps con Claude Code", categoria: "Desarrollo",
    nivel: "Principiante", lecciones: 8, duracion: "3h 15m", progreso: 0,
    precio: "€2.000–10.000/app", rating: 5.0, estudiantes: 0,
    descripcion: "MVP completo en horas usando Claude Code como co-piloto.",
    color: "cyan", nuevo: true
  },
  {
    id: 3, titulo: "Agentes IA Personalizados", categoria: "IA avanzada",
    nivel: "Avanzado", lecciones: 15, duracion: "6h", progreso: 0,
    precio: "€5.000–20.000/proyecto", rating: 4.8, estudiantes: 0,
    descripcion: "Agentes autónomos que automatizan negocios 24/7.",
    color: "green", nuevo: true
  },
  {
    id: 4, titulo: "Análisis de Datos con IA", categoria: "Data",
    nivel: "Intermedio", lecciones: 10, duracion: "5h", progreso: 0,
    precio: "€1.500–5.000/proyecto", rating: 4.7, estudiantes: 0,
    descripcion: "Transforma datos en insights accionables con IA.",
    color: "amber", nuevo: false
  },
  {
    id: 5, titulo: "Automatización de Procesos", categoria: "Automatización",
    nivel: "Intermedio", lecciones: 9, duracion: "4h", progreso: 0,
    precio: "€500–2.000/mes", rating: 4.8, estudiantes: 0,
    descripcion: "Zapier + Make + Claude para workflows enterprise.",
    color: "orange", nuevo: false
  },
  {
    id: 6, titulo: "SEO con IA", categoria: "Marketing",
    nivel: "Principiante", lecciones: 6, duracion: "2h 30m", progreso: 0,
    precio: "€200–500/mes", rating: 4.6, estudiantes: 0,
    descripcion: "Contenido y posicionamiento automático con IA.",
    color: "cyan", nuevo: false
  },
];

export const integrations = [
  // AI Providers
  { name: "Claude (Anthropic)", status: "desconectado", icon: "🤖", desc: "IA principal — razonamiento avanzado", categoria: "ia", proveedor: "anthropic" },
  { name: "ChatGPT (OpenAI)", status: "desconectado", icon: "⚡", desc: "GPT-4o, GPT-4 Turbo", categoria: "ia", proveedor: "openai" },
  { name: "Gemini (Google)", status: "desconectado", icon: "✦", desc: "Gemini 1.5 Pro / Flash", categoria: "ia", proveedor: "google" },
  { name: "Mistral AI", status: "desconectado", icon: "🌪", desc: "Mistral Large / Codestral", categoria: "ia", proveedor: "mistral" },
  { name: "Grok (xAI)", status: "desconectado", icon: "𝕏", desc: "Grok-2", categoria: "ia", proveedor: "xai" },
  { name: "Llama (Meta)", status: "desconectado", icon: "🦙", desc: "Llama 3.1 405B via Groq", categoria: "ia", proveedor: "meta" },
  // Tools
  { name: "Google Maps API", status: "desconectado", icon: "📍", desc: "Lead hunting local", categoria: "herramienta", proveedor: null },
  { name: "Stripe", status: "desconectado", icon: "💳", desc: "Pagos y facturación", categoria: "herramienta", proveedor: null },
  { name: "Gmail / SMTP", status: "desconectado", icon: "📧", desc: "Emails automáticos", categoria: "herramienta", proveedor: null },
  { name: "Slack", status: "desconectado", icon: "💬", desc: "Notificaciones equipo", categoria: "herramienta", proveedor: null },
  { name: "Calendly", status: "desconectado", icon: "📅", desc: "Reserva de reuniones", categoria: "herramienta", proveedor: null },
  { name: "GitHub", status: "desconectado", icon: "🐙", desc: "Código y proyectos", categoria: "herramienta", proveedor: null },
  { name: "Zapier", status: "desconectado", icon: "⚙️", desc: "Automatización no-code", categoria: "herramienta", proveedor: null },
  { name: "Figma", status: "desconectado", icon: "🎨", desc: "Diseños y prototipos", categoria: "herramienta", proveedor: null },
];

export const pricingTable = [
  { servicio: "Chatbot básico", min: 800, max: 2000, recurrente: false },
  { servicio: "Chatbot avanzado + NLP", min: 2500, max: 5000, recurrente: false },
  { servicio: "App con IA (MVP)", min: 3000, max: 8000, recurrente: false },
  { servicio: "App completa + backend", min: 8000, max: 25000, recurrente: false },
  { servicio: "Automatización procesos", min: 500, max: 2000, recurrente: true },
  { servicio: "SEO con IA", min: 200, max: 500, recurrente: true },
  { servicio: "Agente IA personalizado", min: 5000, max: 20000, recurrente: false },
  { servicio: "Dashboard analytics", min: 1500, max: 4000, recurrente: false },
];

export const promptTemplates2 = [
  {
    id: 1, titulo: "Cold Email — Primera toma de contacto", categoria: "Ventas",
    contenido: `Eres un experto en ventas B2B de servicios de IA.
Escribe un cold email para [EMPRESA] en el sector [SECTOR].
El email debe:
- Ser conciso (máx 150 palabras)
- Mencionar un problema específico del sector
- Ofrecer una solución concreta con IA
- Incluir un CTA claro (demo de 20 min)
- Tono profesional pero cercano

Empresa: [NOMBRE]
Sector: [SECTOR]
Pain point: [PROBLEMA]`
  },
  {
    id: 2, titulo: "Análisis de competencia digital", categoria: "Estrategia",
    contenido: `Analiza la presencia digital de [EMPRESA] y sus competidores.

Incluye:
1. Análisis web actual (velocidad, UX, SEO)
2. Presencia en redes (calidad, engagement)
3. Top 3 competidores y qué hacen mejor
4. Oportunidades con IA
5. Estimación de inversión
6. Quick wins (< 2 semanas)

Empresa: [URL o nombre]
Competidores conocidos: [lista]`
  },
  {
    id: 3, titulo: "Propuesta de proyecto IA", categoria: "Ventas",
    contenido: `Genera una propuesta profesional para:

Cliente: [EMPRESA]
Servicio: [TIPO DE SERVICIO IA]
Presupuesto: [RANGO]
Duración: [TIEMPO]

Incluye:
- Executive summary
- Problema identificado
- Solución con IA
- Entregables concretos
- Timeline con hitos
- Inversión detallada
- ROI esperado
- Próximos pasos`
  },
  {
    id: 4, titulo: "Script cold call personalizado", categoria: "Ventas",
    contenido: `Crea un script para cold call a [EMPRESA] del sector [SECTOR].

Incluye:
- Apertura (10 seg)
- Propuesta de valor (30 seg)
- 3 preguntas de cualificación
- Manejo de 5 objeciones comunes
- Cierre para agendar demo

Empresa: [NOMBRE]
Ciudad: [CIUDAD]
Pain point estimado: [PROBLEMA]`
  },
  {
    id: 5, titulo: "Generador de chatbot desde briefing", categoria: "Desarrollo",
    contenido: `Diseña un chatbot con IA para [EMPRESA].

Casos de uso:
1. [CASO 1]
2. [CASO 2]
3. [CASO 3]

Genera:
- Flujos conversacionales principales
- 20 preguntas frecuentes + respuestas
- Manejo de escalaciones
- Personalidad y tono del bot
- Integraciones necesarias
- Código base (Next.js + Claude API)`
  },
  {
    id: 6, titulo: "Email onboarding nuevo cliente", categoria: "Cliente",
    contenido: `Crea una secuencia de onboarding de 3 emails para [CLIENTE].

Email 1 (día 0) — Bienvenida:
- Agradecimiento
- Qué esperar del proyecto
- Próximos pasos
- Contacto directo

Email 2 (día 3) — Kickoff:
- Recap reunión inicial
- Hitos del proyecto
- Documentos a preparar

Email 3 (día 7) — Check-in:
- Primer avance
- Dudas frecuentes respondidas
- Invitación a reunión semanal`
  },
];
