import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
}

const baseStyles = "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-lg transition-all duration-300 relative overflow-hidden";

const variantStyles = {
  primary: "bg-[#2A62EB] text-primary-foreground shadow-brand hover:shadow-lg",
  outline: "border-2 border-[#2A62EB] bg-transparent text-foreground hover:bg-[#2A62EB] hover:text-primary-foreground",
  ghost: "text-foreground hover:text-[#2A62EB] hover:bg-[#2A62EB]/10",
};

const sizeStyles = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const AnimatedButton = ({
  children,
  to,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  showArrow = false,
}: AnimatedButtonProps) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  const motionProps = {
    // Translate slightly on hover for a consistent "lift" effect.
    whileHover: { scale: 1.02, x: 3, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>{content}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} onClick={onClick} type={type}>
      {content}
    </motion.button>
  );
};

export default AnimatedButton;
