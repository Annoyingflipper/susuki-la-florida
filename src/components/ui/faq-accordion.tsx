"use client";

import * as React from "react";
import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../lib/utils";

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200 last:border-0", className)}
    {...props}
  />
));
CustomAccordionItem.displayName = "CustomAccordionItem";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 py-5 text-left transition-all hover:text-primary-red",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red/50 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <HelpCircle className="h-6 w-6 text-primary-red shrink-0" />
        <span className="text-base font-bold text-deep-black group-hover:text-primary-red transition-colors tracking-wide leading-tight mt-1">
          {children}
        </span>
      </div>
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-light-grey transition-transform duration-300 group-hover:scale-105 group-data-[state=open]:rotate-180">
        <ChevronDown className="h-5 w-5 text-deep-black" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-dark-grey text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-6 ml-10">
      <div className="flex items-start gap-4 p-5 rounded-md bg-white border-l-4 border-primary-red shadow-sm transition-all border border-gray-100">
        <span className="flex-1 leading-relaxed text-sm">{children}</span>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-light-grey transition-transform hover:scale-105 shadow-sm">
          <MessageCircle className="h-4 w-4 text-primary-red" />
        </div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = "CustomAccordionContent";

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};

const faqs = [
  {
    question: "¿Aceptan vehículos como parte de pago?",
    answer:
      "Sí, contamos con peritos especializados. Evaluamos tu vehículo usado de forma gratuita y podemos recibirlo como parte de pago para la compra de tu nuevo equipo Suzuki 0Km.",
  },
  {
    question: "¿De cuánto es la garantía de los autos nuevos?",
    answer:
      "Todos nuestros vehículos Suzuki cuentan con una sólida garantía oficial de 3 años o 100,000 km, lo que ocurra primero, respaldando tu inversión con total seguridad.",
  },
  {
    question: "¿Tienen servicio técnico y repuestos originales en la sede?",
    answer:
      "Totalmente. Somos un Concesionario Integral, lo que significa que en nuestra ubicación física contamos con taller autorizado, mecánicos certificados y amplio inventario de repuestos genuinos.",
  },
  {
    question: "¿Cuáles son las formas de pago y financiamiento?",
    answer:
      "Aceptamos pagos de contado, cuentas custodio y Zelle. Además, nuestros asesores te brindarán opciones y planes de financiamiento pre-aprobado para brindarte mayores facilidades de llevarte tu Suzuki.",
  },
];

export function AccordionComponent() {
  return (
    <div className="container mx-auto px-6 max-w-4xl pt-24 pb-12 relative z-10 w-full" id="faq">
      <h2 className="text-primary-red font-bold tracking-widest text-sm uppercase mb-2 text-center">Te Asesoramos</h2>
      <h3 className="text-4xl md:text-5xl font-black text-deep-black tracking-tight mb-12 text-center">
        Dudas Frecuentes
      </h3>
      <CustomAccordion
        type="single"
        collapsible
        className="bg-white rounded-md shadow-2xl border border-gray-200 p-4 md:p-8"
      >
        {faqs.map((faq, index) => (
          <CustomAccordionItem
            key={index}
            value={`item-${index}`}
          >
            <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
            <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
          </CustomAccordionItem>
        ))}
      </CustomAccordion>
    </div>
  );
}
