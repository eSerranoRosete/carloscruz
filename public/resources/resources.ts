import uid from "tiny-uid";

type ResourceType = {
  uid: string;
  title: string;
  description: string;
  previewUrl: string;
  date: number;
  url: string;
};

export const videoResources: ResourceType[] = [
  {
    uid: uid(),
    title: "¿Sabes la diferencia entre una deuda buena y una deuda mala?",
    description:
      "Explora cómo algunas deudas pueden ser herramientas financieras poderosas mientras que otras pueden llevar al desastre. ",
    url: "https://utfs.io/f/cf12631c-ad79-44ad-b22c-3fa92373736c-1dh.mp4",
    previewUrl:
      "https://utfs.io/f/cff91e16-5aa1-462c-9509-af07a8015b8c-m7w5za.m..png",
    date: Date.now(),
  },
  {
    uid: uid(),
    title: "Riesgos de Depender de una Sola Fuente de Ingresos",
    description:
      "analizamos por qué depender únicamente de una fuente de ingresos es una estrategia arriesgada en el mundo actual",
    url: "https://utfs.io/f/6f83b974-0eaf-4bb8-8c7c-202b66d59da1-1a1.mp4",
    previewUrl:
      "https://utfs.io/f/e49824c7-cc0c-4aef-815d-608de9328659-m7ub8s.m..png",
    date: Date.now(),
  },
  {
    uid: uid(),
    title: "El Dilema del Gasto: ¿A más Ingresos, Más Gastos?",
    description: "No caigas en la trampa de gastar más a medida que ganas más.",
    url: "https://utfs.io/f/d6121093-e823-47a2-900e-4501655b8477-1br.mp4",
    previewUrl:
      "https://utfs.io/f/24c0eb24-7fa8-46a2-b906-62fdb6864f28-m7tjt3.m..png",
    date: Date.now(),
  },
];
