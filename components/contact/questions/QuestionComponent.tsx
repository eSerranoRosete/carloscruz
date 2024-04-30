"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormSchema } from "../ContactForm";
import { Question } from "./QuestionTypes";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

type Props = {
  form: UseFormReturn<FormSchema, any, undefined>;

  question: Question;
};

export const QuestionComponent = ({ form, question }: Props) => {
  const [other, setOther] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  if (isChildQuestion(question.id)) return null;

  useEffect(() => {
    if (question.type === "date") {
      form.setValue(question.id, date.toLocaleDateString());
    }
  }, [date]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      key={question.id}
      className="w-full m-auto text-center flex flex-col gap-5"
    >
      <label className="text-xl font-medium mb-5">{question.question}</label>

      {question.type === "select" && (
        <Select
          {...form.register(question.id)}
          onValueChange={(val) => {
            form.setValue(question.id, val);

            if (val === "Otros") {
              setOther(true);
            } else setOther(false);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            {question.options?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {question.children?.map((child) => (
        <div className="w-full flex flex-col">
          <label className="text-md text-left font-medium">
            {child.question}
          </label>
          <Input {...form.register(child.id)} />
        </div>
      ))}

      {question.type === "date" && (
        <div className="flex flex-col gap-4">
          <Calendar
            {...form.register(question.id)}
            initialFocus
            mode="single"
            selected={date}
            onSelect={(date) => {
              date && setDate(date);
            }}
            className="rounded-md w-fit border m-auto"
          />

          <Select
            {...form.register("time")}
            onValueChange={(val) => {
              form.setValue("time", val);
            }}
          >
            <SelectTrigger className="w-full max-w-xs m-auto">
              <SelectValue placeholder="Selecciona un horario" />
            </SelectTrigger>
            <SelectContent className="w-32">
              {hours.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {other && (
        <Textarea
          {...form.register("1.1")}
          placeholder="Especifique"
          className="w-full"
          rows={3}
        />
      )}
    </motion.div>
  );
};

export const isChildQuestion = (id: string) => id.includes(".");

const hours = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
];
