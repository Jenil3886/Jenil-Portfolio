'use client';

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
  iconName: string;
}

export function IconRenderer({ iconName, ...props }: IconRendererProps) {
  // Map of icon names to their components
  const iconComponents: Record<string, React.FC<IconProps>> = {
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