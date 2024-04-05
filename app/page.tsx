"use client";

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

export default function Home() {
  return (
    <div>
      <header className="absolute w-full hidden md:block">
        <nav className="container w-full flex items-center justify-between py-4">
          <Link href="/" className="font-bold text-md">
            Carlos Cruz
          </Link>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <Link href="#about">Acerca De</Link>
            </li>
            <li>
              <Link href="#methodology">Metodología</Link>
            </li>
            <li>
              <Link href="/">Experiencia</Link>
            </li>
            <li>
              <Link href="/">Recursos</Link>
            </li>
          </ul>

          <Button size="sm" className="gap-2 text-sm">
            Agenda una Llamada
            <ArrowRightIcon className="w-4" />
          </Button>
        </nav>
      </header>
      <main className="w-full">
        <section className="w-full h-full min-h-dvh bg-muted flex items-center">
          <div className="h-4/6 container grid md:grid-cols-2 gap-10">
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
                <Button className="gap-2 w-fit" size="lg">
                  Agenda una Llamada
                  <ArrowRightIcon className="w-4" />
                </Button>
              </motion.div>
              <hr className="bg-foreground h-0.5 mt-auto" />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm">
                  <b>50+ </b>
                  <span className="text-muted-foreground">
                    Trusted Partners
                  </span>
                </p>
                <img
                  src="/partners.png"
                  alt="Partners Logos"
                  className="w-full"
                />
              </motion.div>
            </div>
            <div className="w-full grid grid-cols-3 gap-6">
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
          </div>
        </section>

        <div className="my-20" />

        <section>
          <div className="bg-dark rounded-xl py-20 container flex items-center relative overflow-clip">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl m-auto gap-10 md:gap-32 relative z-10 w-full">
              <img
                src="/talk.png"
                alt="Carlos Cruz giving a finance talk"
                className="w-full max-w-md aspect-square object-cover object-center rounded-xl hover:scale-105 duration-500"
              />
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
                  Utilizando un enfoque personalizado, diversifico las
                  inversiones de mis clientes para proporcionar seguridad
                  financiera a largo plazo.
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button className="gap-2 w-fit" size="lg">
                    Agenda una Llamada
                    <ArrowRightIcon className="w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 right-0 translate-x-2/3"></div>
            <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 right-0 translate-x-2/3"></div>
          </div>
        </section>

        <div className="my-20" />

        <section id="about">
          <div className="rounded-xl py-20 container flex items-center">
            <div className="grid md:grid-cols-2 max-w-6xl m-auto gap-5 relative w-full h-full items-stretch">
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
                  He ganado la confianza de miles de inversionistas en México,
                  EE. UU. y Latinoamérica, mediante eventos de educación
                  financiera, ayudando a empresas y familias a alcanzar sus
                  metas. Con amplia experiencia en el mercado bursátil y
                  extrabursátil, me he posicionado como un líder reconocido en
                  grupos de inversión.
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
              <div className="w-full h-full grid md:grid-cols-3 gap-4">
                <div className="w-full h-full col-span-2 aspect-square md:aspect-auto bg-[url('/videoCover.png')] bg-cover bg-center rounded-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer duration-500">
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
                <div className="w-full h-full  bg-[url('/conference2.jpeg')] bg-cover bg-center rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-20" />

        <section
          id="methodology"
          className="w-full min-h-dvh flex items-center"
        >
          <div className="w-full container rounded-xl bg-muted p-10 grid md:grid-cols-2 gap-10 relative overflow-clip">
            <div className="w-full h-full bg-[url('/conference2.jpeg')] bg-cover bg-center rounded-xl relative z-10"></div>
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
                      Atención <br className="hidden md:block" /> Personalizada
                    </h3>
                    <p className="text-muted-foreground">
                      No hay dos colores iguales, igual que en las finanzas;
                      cada situación es única. Analizaré tu caso para brindarte
                      ayuda precisa y oportuna.
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
                      Trabajaré en una solución de inversión personalizada para
                      ti, asegurando que tu dinero crezca de manera efectiva y
                      segura.
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
                  <Button className="gap-2 w-fit" size="lg">
                    Agenda una Llamada
                    <ArrowRightIcon className="w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="h-full absolute aspect-square rounded-full border border-muted-foreground scale-110 right-0 translate-x-2/3 -translate-y-1/2 opacity-40"></div>
            <div className="h-full absolute aspect-square rounded-full border border-muted-foreground scale-90 right-0 translate-x-2/3 -translate-y-1/2 opacity-40"></div>
          </div>
        </section>

        <div className="my-20" />

        <section className="w-full h-full flex justify-center flex-col">
          <div className="container grid md:grid-cols-2 gap-10 max-w-6xl mb-10">
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
                Con más de <b>100</b> empresas y clientes satisfechos.
              </p>
            </motion.div>
            <div className="w-full rounded-xl h-full bg-[url('/hands.png')] bg-cover bg-center hidden md:block"></div>
          </div>

          <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              pauseOnHover={false}
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </section>

        <div className="my-20" />

        <section className="w-full bg-dark text-white py-32 flex items-center justify-center text-center relative overflow-clip">
          <div className="max-w-2xl m-auto flex flex-col gap-8 relative z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#2D2D2D] text-zinc-200 w-fit px-6 py-2 text-sm rounded-full m-auto"
            >
              La manera inteligente de invertir
            </motion.div>
            <motion.h6
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-dark-foreground max-w-lg m-auto"
            >
              Da el Siguiente Paso Hacia una Mejor Alternativa para Invertir.
            </motion.h6>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="md:text-lg text-zinc-400 text-md"
            >
              Explora un enfoque innovador y estratégico para invertir y
              maximizar tus ganancias mientras aseguras un futuro financiero
              sólido y próspero. ¡Únete hoy al camino hacia el éxito financiero
              y descubre nuevas oportunidades que te llevarán más cerca de tus
              metas!
            </motion.p>
            <Button className="gap-2 w-fit m-auto" size="lg">
              Agenda una Llamada
              <ArrowRightIcon className="w-4" />
            </Button>
          </div>
          <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
          <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
          <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
          <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
        </section>
      </main>

      <footer className="bg-zinc-900 py-10 text-white text-xs text-center md:text-left">
        <div className="container grid md:grid-cols-3 items-center gap-4">
          <p>
            <b>Carlos Cruz</b> <br />
            Impulsando tu Potencial Financiero al Máximo.
          </p>

          <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-8 justify-center">
            <li>
              <Link href="/">Acerca De</Link>
            </li>
            <li>
              <Link href="/">Metodología</Link>
            </li>
            <li>
              <Link href="/">Experiencia</Link>
            </li>
            <li>
              <Link href="/">Recursos</Link>
            </li>
          </ul>

          <p className="md:text-right">contacto@carloscruz.com</p>
        </div>
      </footer>
    </div>
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
