'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function SectionWrapper({
  id,
  className,
  children,
  delay = 0,
  ...props
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={cn('py-20 lg:py-32', className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
}
