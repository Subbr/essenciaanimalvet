import { motion } from "framer-motion";
import bambu from "@/assets/img/bambu.png";

type Props = {
  className?: string;
  opacity?: number;
  rotate?: number;
  drift?: boolean;
  flip?: boolean;
};

export function Bamboo({ className = "", opacity = 0.18, rotate = 0, drift = true, flip = false }: Props) {
  return (
    <motion.img
      src={bambu}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none absolute ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
        filter: "saturate(0.85)",
      }}
      animate={drift ? { y: [0, -10, 0], rotate: [rotate, rotate + 1.5, rotate] } : undefined}
      transition={drift ? { duration: 9, repeat: Infinity, ease: "easeInOut" } : undefined}
    />
  );
}
