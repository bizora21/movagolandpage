'use client';

import { 
  MapPin, 
  Navigation, 
  Clock, 
  Crosshair, 
  Users, 
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/Card';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  'map-pin': MapPin,
  'navigation': Navigation,
  'clock': Clock,
  'location-crosshairs': Crosshair,
  'users': Users,
  'message-circle': MessageCircle,
  'alert-triangle': AlertTriangle,
};

export function Features() {
  return (
    <SectionWrapper className="bg-[rgb(var(--color-secondary))]" id="features">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Por Que Escolher a MOVAGO?
        </h2>
        <p className="text-lg sm:text-xl text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
          Recursos pensados para a sua segurança e conveniência
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FEATURES.map((feature) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <Card key={feature.title} variant="default" className="h-full hover:border-[rgb(var(--color-primary))]/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="text-[rgb(var(--color-primary))]" size={28} />}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}