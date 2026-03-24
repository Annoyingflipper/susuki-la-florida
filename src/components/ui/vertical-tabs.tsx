"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgServiceVentas from "../../assets/images/service-ventas.jpg";
import imgServiceTaller from "../../assets/images/service-taller.jpg";
import imgServiceRepuestos from "../../assets/images/service-repuestos.jpg";

const SERVICES = [
  {
    id: "01",
    title: "Venta de Vehículos",
    description:
      "Asesoría personalizada para que encuentres el Suzuki perfecto que se adapte a tus necesidades, estilo de vida y presupuesto.",
    image: imgServiceVentas,
  },
  {
    id: "02",
    title: "Servicio Técnico",
    description: "Taller especializado con mecánicos altamente capacitados. Mantenimiento preventivo, correctivo y diagnóstico computarizado.",
    image: imgServiceTaller,
  },
  {
    id: "03",
    title: "Repuestos y Accesorios",
    description:
      "Piezas, repuestos 100% originales Suzuki y mercancía oficial para garantizar el mejor rendimiento y vida útil de tu auto.",
    image: imgServiceRepuestos,
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Only autoplay when section is visible in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  // Autoplay ONLY when visible and not paused
  useEffect(() => {
    if (isPaused || !isVisible) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isVisible, handleNext]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section ref={sectionRef} id="servicios" className="w-full bg-deep-black py-16 md:py-24 overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-20 mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-2 mb-12">
               <h2 className="text-primary-red font-bold tracking-widest text-sm uppercase mb-2">Respaldo Total</h2>
              <h3 className="tracking-tighter text-balance text-4xl md:text-5xl font-black text-white">
                Servicios FCG Suzuki
              </h3>
            </div>

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-gray-800 first:border-0",
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-white"
                    )}
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-gray-800">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}-${isVisible}`}
                          className="absolute top-0 left-0 w-full bg-primary-red origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused || !isVisible ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-bold mt-1 tabular-nums opacity-50 text-primary-red">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-500",
                          isActive ? "text-white" : ""
                        )}
                      >
                        {service.title}
                      </span>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2 mt-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/11] rounded-sm md:rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="sync"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0 p-0 block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-80" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-deep-black/60 backdrop-blur-md border border-gray-700 flex items-center justify-center text-white hover:bg-primary-red transition-all hover:border-primary-red hover:shadow-lg hover:shadow-primary-red/30 active:scale-90"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-deep-black/60 backdrop-blur-md border border-gray-700 flex items-center justify-center text-white hover:bg-primary-red transition-all hover:border-primary-red hover:shadow-lg hover:shadow-primary-red/30 active:scale-90"
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
