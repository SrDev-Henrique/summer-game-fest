const spring = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.85,
} as const;

export const hamburgerMenuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: spring,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
};
