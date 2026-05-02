import type { Variants, Transition } from 'framer-motion'

/* ============================================
   EASING DEFINITIONS
   ============================================ */

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  inOutExpo: [0.87, 0, 0.13, 1] as const,
  outCirc: [0, 0.55, 0.45, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
}

/* ============================================
   BASE TRANSITIONS
   ============================================ */

export const transitions = {
  fast: { duration: 0.3, ease: easing.outQuart } satisfies Transition,
  base: { duration: 0.5, ease: easing.outExpo } satisfies Transition,
  slow: { duration: 0.8, ease: easing.outExpo } satisfies Transition,
  xSlow: { duration: 1.2, ease: easing.outExpo } satisfies Transition,
  spring: { type: 'spring', damping: 25, stiffness: 200 } satisfies Transition,
  softSpring: { type: 'spring', damping: 35, stiffness: 120 } satisfies Transition,
}

/* ============================================
   FADE VARIANTS
   ============================================ */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.base,
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
}

/* ============================================
   SCALE VARIANTS
   ============================================ */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
}

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.softSpring,
  },
}

/* ============================================
   STAGGER CONTAINER VARIANTS
   ============================================ */

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const staggerFast = staggerContainer(0.05)
export const staggerBase = staggerContainer(0.08)
export const staggerSlow = staggerContainer(0.12)

/* ============================================
   TEXT REVEAL VARIANTS
   ============================================ */

/** Wraps a word — each word clips up from below */
export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

export const wordRevealChild: Variants = {
  hidden: {
    y: '110%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing.outExpo,
    },
  },
}

/** Character by character reveal */
export const charRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
}

export const charRevealChild: Variants = {
  hidden: {
    y: '110%',
    rotateX: '30deg',
    opacity: 0,
  },
  visible: {
    y: '0%',
    rotateX: '0deg',
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.outExpo,
    },
  },
}

/* ============================================
   CLIP PATH REVEAL
   ============================================ */

export const clipRevealLeft: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.9,
      ease: easing.outExpo,
    },
  },
}

export const clipRevealBottom: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 0.8,
      ease: easing.outExpo,
    },
  },
}

/* ============================================
   SLIDE-UP MASK REVEAL (for headings)
   ============================================ */

export const maskReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: {
      duration: 0.8,
      ease: easing.outExpo,
    },
  },
}

/* ============================================
   HOVER ANIMATIONS
   ============================================ */

export const hoverLift = {
  rest: { y: 0, transition: transitions.fast },
  hover: { y: -4, transition: transitions.fast },
}

export const hoverScale = {
  rest: { scale: 1, transition: transitions.fast },
  hover: { scale: 1.03, transition: transitions.fast },
}

export const hoverTilt = {
  rest: { rotateY: 0, rotateX: 0, transition: transitions.fast },
  hover: { rotateY: 5, rotateX: -3, transition: transitions.fast },
}

/* ============================================
   PAGE TRANSITIONS
   ============================================ */

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: easing.outQuart } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: easing.inOutExpo } },
}

/* ============================================
   PRELOADER VARIANTS
   ============================================ */

export const preloaderExit: Variants = {
  visible: { y: '0%' },
  exit: {
    y: '-100%',
    transition: {
      duration: 0.9,
      ease: easing.inOutExpo,
      delay: 0.2,
    },
  },
}

/* ============================================
   DRAWER / MODAL
   ============================================ */

export const drawerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easing.outExpo },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: easing.inOutExpo },
  },
}

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } },
}
