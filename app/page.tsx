"use client";

import { Container } from "@/components/blocks/Container";
import { ScreenSection } from "@/components/blocks/ScreenSection";
import { SectionSeparator } from "@/components/blocks/SectionSeparator";
import { TwoColumnLayout } from "@/components/blocks/TwoColumnLayout";
import { VideoDialog } from "@/components/blocks/VideoDialog";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsLight } from "@/components/ui/background-beams-light";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  HeadsetIcon,
  RouteIcon,
  TrendingUpIcon,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <ScreenSection>
        <TwoColumnLayout
          className="z-10 relative"
          size="lg"
          firstCol={
            <div className="max-w-xl flex flex-col gap-10 h-full">
              <motion.h1
                className="text-5xl md:text-6xl mt-20"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Impulsando tu Potencial Financiero al Máximo.
              </motion.h1>
              <motion.p
                className="text-xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Te asesoro con herramientas y estrategias para optimizar tus
                finanzas y alcanzar tus objetivos económicos con confianza y
                éxito.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact" className="gap-2 text-sm">
                    Comienza a ahorrar para el futuro
                    <ArrowRightIcon className="w-4" />
                  </Link>
                </Button>
              </motion.div>
              <hr className="bg-foreground h-0.5 mt-auto" />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm mb-5">
                  <b>15+ </b>
                  <span className="text-muted-foreground">
                    Empresas Asesoradas
                  </span>
                </p>
                <img
                  src="/partners.png"
                  alt="Partners Logos"
                  className="w-full rounded-lg"
                />
              </motion.div>
            </div>
          }
          secondCol={
            <div className="w-full grid grid-cols-3 gap-6 h-full">
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                src="/portrait.png"
                alt="Carlos Cruz Potrait Picture"
                className="w-full h-full object-cover object-center rounded-xl"
              />
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                src="/conference.png"
                alt="Carlos Cruz Potrait Picture"
                className="w-full h-full object-cover object-center rounded-xl col-span-2"
              />
            </div>
          }
        />
        <BackgroundBeamsLight />
      </ScreenSection>
      <SectionSeparator />
      <Container id="about" className="bg-dark">
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 right-0 translate-x-2/3"></div>
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 right-0 translate-x-2/3"></div>
        <TwoColumnLayout
          firstCol={
            <img
              src="/talk.png"
              alt="Carlos Cruz giving a finance talk"
              className="w-full max-w-md aspect-square object-cover object-center rounded-xl hover:scale-105 duration-500"
            />
          }
          secondCol={
            <div className="max-w-lg flex flex-col gap-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#2D2D2D] text-zinc-200 w-fit px-6 py-2 text-sm rounded-full translate-y-1/2"
              >
                La manera inteligente de invertir
              </motion.div>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-dark-foreground"
              >
                Ofrezco Asesoramiento Financiero Especializado en
                Diversificación de Inversiones para Maximizar Rendimientos y
                Minimizar Riesgos.
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-zinc-400"
              >
                Utilizando un enfoque personalizado, diversifico las inversiones
                de mis clientes para proporcionar seguridad financiera a largo
                plazo.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact" className="gap-2 text-sm">
                    Haz que tu dinero trabaje para ti
                    <ArrowRightIcon className="w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          }
        />
      </Container>
      <ScreenSection id="experience">
        <TwoColumnLayout
          firstCol={
            <div className="max-w-lg flex flex-col gap-10 h-full py-20">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl"
              >
                Más de 20 Años Ayudando a las Personas y Empresas a
                Diversificar.
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Con más de 20 años de liderazgo en empresas de mercadotecnia e
                inversión, Carlos Cruz ha ganado la confianza de miles de
                inversionistas en México, Estados Unidos y Latinoamérica. A
                través de eventos masivos de educación financiera, ha brindado
                asesoramiento crucial que ha permitido a empresas y familias
                alcanzar sus metas económicas. Con una trayectoria destacada,
                Carlos Cruz ha sido galardonado con premios internacionales por
                su excelencia en el campo de las inversiones. Su profundo
                conocimiento del mercado bursátil y extrabursátil lo ha
                posicionado como un referente respetado en el mundo de las
                finanzas, siendo reconocido como un líder influyente en grupos
                financieros.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button className="gap-2 w-fit" size="lg" variant="outline">
                  Ver más recursos
                  <ArrowRightIcon className="w-4" />
                </Button>
              </motion.div>
            </div>
          }
          secondCol={
            <div className="w-full h-96 md:h-full grid grid-cols-3 gap-4">
              <VideoDialog
                src="https://utfs.io/f/092a87e7-30ce-4d04-87e5-e94f0b422c24-1aw.mp4"
                trigger={
                  <div className="w-full h-full col-span-2 md:aspect-auto bg-[url('/videoCover.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer duration-500">
                    <svg
                      width="53"
                      height="53"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.5 53C41.1355 53 53 41.1355 53 26.5C53 11.8645 41.1355 0 26.5 0C11.8645 0 0 11.8645 0 26.5C0 41.1355 11.8645 53 26.5 53ZM19.25 39.0574L41 26.5L19.25 13.9426L19.25 39.0574Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                }
              />
              <div className="w-full h-full bg-[url('/conference2.jpeg')] bg-cover bg-center rounded-xl"></div>
            </div>
          }
        />
      </ScreenSection>
      <ScreenSection id="methodology">
        <Container className="bg-muted">
          <div className="h-full absolute aspect-square rounded-full border border-muted-foreground scale-110 right-0 translate-x-2/3 -translate-y-1/2 opacity-40"></div>
          <div className="h-full absolute aspect-square rounded-full border border-muted-foreground scale-90 right-0 translate-x-2/3 -translate-y-1/2 opacity-40"></div>
          <TwoColumnLayout
            firstCol={
              <div className="w-full h-full bg-[url('/conference2.jpeg')] bg-cover bg-center rounded-xl relative z-10"></div>
            }
            secondCol={
              <div className="relative z-10">
                <div className="flex flex-col gap-10 h-full py-10">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl max-w-xl"
                  >
                    Descubre Cómo Puedo Ayudarte a Alcanzar tus Metas de
                    Prosperidad Financiera.
                  </motion.h2>
                  <hr className="bg-foreground h-0.5" />
                  <div className="w-full grid md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-4"
                    >
                      <div className="bg-dark w-1/4 aspect-square rounded-xl flex items-center justify-center">
                        <HeadsetIcon className="w-16 m-auto text-primary" />
                      </div>
                      <h3 className="font-semibold leading-tight">
                        Atención <br className="hidden md:block" />{" "}
                        Personalizada
                      </h3>
                      <p className="text-muted-foreground">
                        No hay dos colores iguales, igual que en las finanzas;
                        cada situación es única. Analizaré tu caso para
                        brindarte ayuda precisa y oportuna.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-4"
                    >
                      <div className="bg-dark w-1/4 aspect-square rounded-xl flex items-center justify-center">
                        <RouteIcon className="w-16 m-auto text-primary" />
                      </div>
                      <h3 className="font-semibold leading-tight">
                        Una Ruta <br className="hidden md:block" /> Bien
                        Establecida
                      </h3>
                      <p className="text-muted-foreground">
                        Trabajaré en una solución de inversión personalizada
                        para ti, asegurando que tu dinero crezca de manera
                        efectiva y segura.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-4"
                    >
                      <div className="bg-dark w-1/4 aspect-square rounded-xl flex items-center justify-center">
                        <TrendingUpIcon className="w-16 m-auto text-primary" />
                      </div>
                      <h3 className="font-semibold leading-tight">
                        Generar el <br className="hidden md:block" /> Mejor
                        Rendimiento
                      </h3>
                      <p className="text-muted-foreground">
                        Mi propia trayectoria financiera ha influido en mi
                        compromiso de ayudar a otros a tomar decisiones más
                        informadas y seguras en sus inversiones.
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button size="lg" asChild>
                      <Link href="/contact" className="gap-2 text-sm">
                        Contacta a Carlos
                        <ArrowRightIcon className="w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            }
          />
        </Container>
      </ScreenSection>
      <ScreenSection direction="column">
        <TwoColumnLayout
          firstCol={
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="py-10"
            >
              <h3 className="text-2xl md:text-3xl">
                Hago Que la Decisión de <br /> Comenzar Hoy, Sea Sencilla.
              </h3>
              <p>
                Con más de <b className="text-primary">100</b> empresas y
                clientes satisfechos.
              </p>
            </motion.div>
          }
          secondCol={
            <div className="w-full rounded-xl h-full bg-[url('/hands.png')] bg-cover bg-center hidden md:block"></div>
          }
        />
        <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden w-full">
          <InfiniteMovingCards
            pauseOnHover={true}
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </ScreenSection>
    </>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    location: "London, England",
    title: "A Tale of Two Cities",
    avatarUrl: "/avatar.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    location: "Stratford-upon-Avon, England",
    title: "Hamlet",
    avatarUrl: "/avatar.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    location: "Boston, Massachusetts",
    title: "A Dream Within a Dream",
    avatarUrl: "/avatar.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    location: "Steventon, England",
    title: "Pride and Prejudice",
    avatarUrl: "/avatar.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    location: "New York City, New York",
    title: "Moby-Dick",
    avatarUrl: "/avatar.jpg",
  },
];
