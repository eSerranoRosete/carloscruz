"use client";

import { useForm } from "react-hook-form";
import {
  QuestionComponent,
  isChildQuestion,
} from "./questions/QuestionComponent";
import { QuestionIndex, questions } from "./questions/QuestionTypes";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export type FormSchema = { [key: QuestionIndex]: any };

export default function ContactForm() {
  const [curr, setCurr] = useState<number>(0);

  const next = (skip?: number) => {
    if (curr < questions.length - 1) setCurr(curr + (skip || 1));
  };

  const prev = () => {
    if (curr > 0) setCurr(curr - 1);
  };

  const form = useForm<FormSchema>();

  const submit = (vals: FormSchema) => {
    console.log(vals);

    if (isChildQuestion(questions[curr + 1].id)) next(2);
    else next();
  };

  console.log(form.getValues(), "✅");

  return (
    <div className="flex flex-col gap-10 w-full max-w-md">
      <form
        className="flex flex-col gap-5 w-full"
        onSubmit={form.handleSubmit(submit)}
      >
        {curr < questions.length - 1 ? (
          <div className="flex flex-col gap-5">
            <QuestionComponent
              key={questions[curr].id}
              form={form}
              question={questions[curr]}
            />
            <Button type="submit" className="w-full">
              Continuar
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <h5 className="text-2xl font-medium text-center">
              Tu cita ha sido agendada con éxito
            </h5>
            <p className="text-center">
              Confirmaremos tu cita en las próximas 24 horas. Si tienes alguna
              duda, no dudes en contactarnos.
            </p>

            <Button asChild className="mt-10">
              <Link href="/">Regresar al inicio</Link>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
