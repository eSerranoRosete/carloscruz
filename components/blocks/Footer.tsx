"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";
import { TwoColumnLayout } from "./TwoColumnLayout";
import { Input } from "../ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/server/sendMail";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export const Footer = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    await sendMail({ lead: data });

    toast.success("Email enviado correctamente");

    form.reset();
  };

  return (
    <>
      <section
        id="contact"
        className="w-full bg-dark text-white py-32 flex items-center justify-center relative overflow-clip text-center md:text-left"
      >
        <BackgroundBeams />
        <TwoColumnLayout
          firstCol={
            <div className="flex flex-col gap-8 relative z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#2D2D2D] text-zinc-200 w-fit px-6 py-2 text-sm rounded-full m-auto md:m-0"
              >
                La manera inteligente de invertir
              </motion.div>
              <motion.h6
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-dark-foreground"
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
                sólido y próspero. ¡Únete hoy al camino hacia el éxito
                financiero y descubre nuevas oportunidades que te llevarán más
                cerca de tus metas!
              </motion.p>
            </div>
          }
          secondCol={
            <>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full z-10"
              >
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full  max-w-md flex flex-col gap-6 z-10 mt-16 m-auto"
                >
                  <Input placeholder="Nombre: *" {...form.register("name")} />
                  <Input placeholder="Email: *" {...form.register("email")} />
                  <Input placeholder="Teléfono:" {...form.register("phone")} />
                  <Button
                    size="lg"
                    className="gap-2 text-sm w-fit"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting && (
                      <Loader2Icon className="w-4 animate-spin" />
                    )}
                    Enviar
                    <ArrowRightIcon className="w-4" />
                  </Button>
                </form>
              </motion.div>
            </>
          }
        />
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 left-0 -translate-x-2/3 top-0 -translate-y-1/2"></div>
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-110 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
        <div className="h-full absolute aspect-square rounded-full border border-primary scale-90 right-0 translate-x-2/3 bottom-0 translate-y-1/2"></div>
      </section>
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
    </>
  );
};
