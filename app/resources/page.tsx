"use client";
import { Container } from "@/components/blocks/Container";

import { ResourceCard } from "@/components/blocks/ResourceCard";
import { SectionSeparator } from "@/components/blocks/SectionSeparator";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <SectionSeparator />
      <Container className="flex items-center justify-center flex-col">
        <div className="text-center max-w-md flex flex-col gap-2">
          <div className="bg-primary text-primary-foreground m-auto w-fit px-6 py-1 text-sm rounded-full">
            Blog
          </div>

          <h1 className="text-2xl font-medium md:text-3xl">Recursos Útiles</h1>

          <p className="text-md text-muted-foreground">
            En esta sección encontrarás recursos útiles para tu aprendizaje y
            desarrollo financiero.
          </p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full mt-16"
        >
          <ResourceCard
            isNew
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
          <ResourceCard
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
          <ResourceCard
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
          <ResourceCard
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
          <ResourceCard
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
          <ResourceCard
            title="Título del Recurso"
            description="Descripción del recurso"
            imgSrc="/conference.png"
          />
        </motion.div>
      </Container>
    </>
  );
}
