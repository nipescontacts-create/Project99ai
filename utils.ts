import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function getScoreColor(score: number): string {
  if (score >= 8) return "emerald";
  if (score >= 6) return "amber";
  return "rose";
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    lead_frio: "Lead Frío",
    lead_caliente: "Lead Caliente",
    propuesta: "Propuesta enviada",
    negociacion: "Negociación",
    cliente: "Cliente",
    cliente_feliz: "Cliente Feliz",
    churn: "Churn",
    proyectos_en_curso: "En curso",
    briefing: "Briefing",
    diseño: "Diseño",
    desarrollo: "Desarrollo",
    testing: "Testing",
    entrega: "Entrega",
    cerrado: "Cerrado",
    pendiente: "Pendiente",
    aceptado: "Aceptado",
    borrador: "Borrador",
    pagada: "Pagada",
    enviada: "Enviada",
    vencida: "Vencida",
    nuevo: "Nuevo",
    contactado: "Contactado",
    conectado: "Conectado",
    desconectado: "Desconectado",
  };
  return labels[status] || status;
}
