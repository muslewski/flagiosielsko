"use client";

// Motion utility components built on framer-motion v12 (the "motion" rebrand).
// Each component is designed to be lightweight, accessible, and composable.
// All animations respect prefers-reduced-motion via the MotionConfig wrapper.

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  MotionConfig,
  type Variants,
} from "framer-motion";
import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

/**
 * MotionRoot — wrap a page in this to respect prefers-reduced-motion.
 * Use once at the top of any client tree.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}

/**
 * Reveal — fades content up when scrolled into view. Most common primitive.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  className,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "span" | "section" | "article" | "header" | "footer";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger — container that staggers reveal of <StaggerItem> children.
 */
export function Stagger({
  children,
  stagger = 0.08,
  delay = 0,
  className,
  margin = "0px 0px -80px 0px",
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  margin?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: margin as `${number}px ${number}px ${number}px ${number}px` }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

const staggerItemSpringVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 22, mass: 0.8 },
  },
};

export function StaggerItem({
  children,
  className,
  style,
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: "fade" | "spring";
}) {
  return (
    <motion.div
      variants={variant === "spring" ? staggerItemSpringVariants : staggerItemVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextReveal — reveals each word one by one (for hero headlines).
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  duration = 0.7,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration, ease: EASE_OUT_EXPO },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * CountUp — animated number counter when scrolled into view.
 */
export function CountUp({
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = (t - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(to * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("pl-PL")}
      {suffix}
    </span>
  );
}

/**
 * ParallaxY — subtle vertical parallax while element is in viewport.
 */
export function ParallaxY({
  children,
  intensity = 40,
  className,
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * HoverLift — gentle hover scale/translate (perfect for cards).
 */
export function HoverLift({
  children,
  className,
  lift = -6,
  scale = 1.01,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
  scale?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: lift, scale }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SnapIn — abrupt scale-up entrance (for brutalism / statement designs).
 */
export function SnapIn({
  children,
  className,
  delay = 0,
  from = "scale",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "scale" | "y" | "x";
  as?: "div" | "span";
}) {
  const initial =
    from === "scale"
      ? { opacity: 0, scale: 0.9 }
      : from === "y"
        ? { opacity: 0, y: 40 }
        : { opacity: 0, x: -40 };
  const whileInView =
    from === "scale"
      ? { opacity: 1, scale: 1 }
      : from === "y"
        ? { opacity: 1, y: 0 }
        : { opacity: 1, x: 0 };
  const Tag = as === "span" ? motion.span : motion.div;
  return (
    <Tag
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.18, delay, ease: "easeOut" }}
      className={className}
      style={as === "span" ? { display: "inline-block" } : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * DrawLine — animates horizontal line scaling from left (editorial dividers).
 */
export function DrawLine({
  className,
  thickness = 1,
  color = "currentColor",
  delay = 0,
  duration = 0.9,
  style,
}: {
  className?: string;
  thickness?: number;
  color?: string;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{
        height: thickness,
        background: color,
        transformOrigin: "left center",
        ...style,
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration, delay, ease: EASE_OUT_QUART }}
    />
  );
}

/**
 * Pulse — soft pulsing animation (for glow accents / status dots).
 */
export function Pulse({
  children,
  className,
  scale = [1, 1.15, 1],
  opacity = [0.6, 1, 0.6],
  duration = 2.2,
}: {
  children?: ReactNode;
  className?: string;
  scale?: number[];
  opacity?: number[];
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ scale, opacity }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Magnetic — magnetic pull effect for buttons / CTAs.
 */
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPos({ x: x * strength, y: y * strength });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * WobbleHover — slight tilt on hover (for brutalism cards).
 */
export function WobbleHover({
  children,
  className,
  rotation = 1.5,
}: {
  children: ReactNode;
  className?: string;
  rotation?: number;
}) {
  return (
    <motion.div
      whileHover={{ rotate: rotation, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
