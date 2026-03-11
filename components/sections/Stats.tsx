'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '@/lib/constants';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper className="bg-gradient-to-b from-[rgb(var(--color-bg))] to-[rgb(var(--color-secondary))]">
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-[rgb(var(--color-text-muted))] font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}