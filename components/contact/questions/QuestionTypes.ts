export type Question = {
  id: string;
  question: string;
  type?: "text" | "select" | "date";
  options?: string[];
  children?: Question[];
};

export type QuestionIndex = (typeof questions)[number]["id"];

export const questions: Question[] = [
  {
    id: "1",
    question:
      "¿Cuentas con alguna experiencia previa en diversificación y ahorros con rendimientos?",
    type: "select",
    options: [
      "Bienes Raíces",
      "Restaurantes y franquicias",
      "Crypto monedas",
      "Forex Trading",
      "PYMES",
      "Negocios Multinivel",
      "Bolsa de Valores",
      "CETES",
      "Otros",
    ],
  },
  {
    id: "1.1",
    question: "Otro (Especifique)",
    type: "text",
  },
  {
    id: "2",
    question: "¿En que sector comercial te interesaría diversificar?",
    type: "select",
    options: ["Real Estate", "Forex Trading", "Franquicias"],
  },
  {
    id: "3",
    question: "¿Que tipo de ahorrador te consideras?",
    type: "select",
    options: ["Ahorrador agresivo", "Ahorrador conservador", "Ahorrador mixto"],
  },
  {
    id: "4",
    question:
      "¿Que capital te gustaría destinar a tu plan de diversificación y ahorro?",
    type: "select",
    options: [
      "$50,000-$200,000 MXN",
      "$200,000-$500,000 MXN",
      "$500,000-$2,000,000 MXN",
      "Más de $2,000,000 MXN",
    ],
  },
  {
    id: "5",
    question:
      "¿Estás consiente de los grandes beneficios así como de los riesgos de diversificar en el mercado actual?",
    type: "select",
    options: [
      "Si, estoy consiente y quiero ser parte de esos grandes beneficios.",
      "No, esto es nuevo para mi pero me gustaría aprender a disminuir el riesgo.",
    ],
  },
  {
    id: "6",
    question:
      "Agende una pequeña llamada virtual con uno de nuestros consejereos",
    type: "date",
  },
  {
    id: "7",
    question: "Déjanos tus datos para poder atenderte mejor:",
    type: "text",
    children: [
      {
        id: "7.1",
        question: "Nombre",
        type: "text",
      },
      {
        id: "7.2",
        question: "Edad",
        type: "text",
      },
      {
        id: "7.3",
        question: "Teléfono",
        type: "text",
      },
    ],
  },
];
