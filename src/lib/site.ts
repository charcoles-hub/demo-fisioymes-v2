export type Bi = { ca: string; es: string };

export const tr = (pair: Bi) => ({ "data-ca-text": pair.ca, "data-es-text": pair.es });

export const WA = "https://wa.me/34664762570?text=Hola%20FisioyM%C3%A9s%2C%20voldria%20demanar%20cita.";
export const TEL = "tel:+34664762570";
export const MAIL = "mailto:info@fisioymes.com";

export const navLinks = [
  { href: "/", ca: "Inici", es: "Inicio" },
  { href: "/tractaments/", ca: "Tractaments", es: "Tratamientos" },
  { href: "/equip/", ca: "Equip", es: "Equipo" },
  { href: "/la-clinica/", ca: "La Clínica", es: "La Clínica" },
  { href: "/tarifes/", ca: "Tarifes", es: "Precios" },
];

export const footTractaments = [
  { href: "/tractaments/#massatge", ca: "Massatge Terapèutic", es: "Masaje Terapéutico" },
  { href: "/tractaments/#teraparia-manual", ca: "Teràpia Manual", es: "Terapia Manual" },
  { href: "/tractaments/#radiofrequencia", ca: "Radiofreqüència / Tecarteràpia", es: "Radiofrecuencia / Tecarterapia" },
  { href: "/tractaments/#magnetoterapia", ca: "Magnetoteràpia", es: "Magnetoterapia" },
  { href: "/tractaments/#puncio-seca", ca: "Punció Seca", es: "Punción Seca" },
  { href: "/tractaments/#epte", ca: "Electròlisi Percutània", es: "Electrólisis Percutánea" },
  { href: "/tractaments/#ecografia", ca: "Ecografia", es: "Ecografía" },
];

export const i18nCommon = {
  skip: { ca: "Saltar a demanar cita", es: "Saltar a pedir cita" },
  navToggleAria: { ca: "Obrir el menú", es: "Abrir el menú" },
  whatsapp: { ca: "WhatsApp", es: "WhatsApp" },
  addrLabel: { ca: "Adreça", es: "Dirección" },
  hoursLabel: { ca: "Horari", es: "Horario" },
  phoneLabel: { ca: "Telèfon", es: "Teléfono" },
  emailLabel: { ca: "Email", es: "Email" },
  footTag: { ca: "Fisioteràpia a Sant Cugat del Vallès. 5,0★ sobre 66 ressenyes a Google.", es: "Fisioterapia en Sant Cugat del Vallès. 5,0★ sobre 66 reseñas en Google." },
  footDemo: { ca: "Pàgina de demostració a mida — no és el lloc web oficial.", es: "Página de demostración a medida — no es el sitio web oficial." },
  footMore: { ca: "Més", es: "Más" },
  footTreatments: { ca: "Tractaments", es: "Tratamientos" },
  footHours: { ca: "Horari", es: "Horario" },
  legalPrivacy: { ca: "Pàgina de privadesa", es: "Página de privacidad" },
  legalNotice: { ca: "Avís legal", es: "Aviso legal" },
  legalCookies: { ca: "Política de cookies", es: "Política de cookies" },
};

export const hoursRows = [
  { day: { ca: "Dilluns", es: "Lunes" }, hours: "9:00 – 21:00" },
  { day: { ca: "Dimarts", es: "Martes" }, hours: "9:00 – 21:00" },
  { day: { ca: "Dimecres", es: "Miércoles" }, hours: "9:00 – 21:00" },
  { day: { ca: "Dijous", es: "Jueves" }, hours: "9:00 – 21:00" },
  { day: { ca: "Divendres", es: "Viernes" }, hours: "9:00 – 20:00" },
  { day: { ca: "Dissabte", es: "Sábado" }, hours: "10:00 – 14:00" },
];
