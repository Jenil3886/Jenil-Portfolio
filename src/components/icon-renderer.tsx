'use client';

import type { FC } from 'react';
import { IconProps } from '@/types/common';
import {
  IconJavascript,
  IconMongodb,
  IconNextjs,
  IconNodejs,
  IconReact,
  IconTailwind,
} from '@/components/icons';

interface IconRendererProps extends IconProps {
  icon?: FC<IconProps> | null;
  iconName?: string;
}

export function IconRenderer({ icon, iconName, ...props }: IconRendererProps) {
  if (icon) {
    const IconComponent = icon;
    return <IconComponent {...props} />;
  }

  if (!iconName) {
    return null;
  }

  // Map of icon names to their components
  const iconComponents: Record<string, FC<IconProps>> = {
    IconReact,
    IconNextjs,
    IconNodejs,
    IconJavascript,
    IconMongodb,
    IconTailwind,
  };

  // Get the icon component based on the iconName
  const IconComponent = iconComponents[iconName];

  // If the icon component exists, render it with the props
  if (IconComponent) {
    return <IconComponent {...props} />;
  }

  // If the icon component doesn't exist, return null
  return null;
}