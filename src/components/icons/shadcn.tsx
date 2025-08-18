import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'
import React from 'react'

export const ShadCNIcon: React.FC<IconProps> = ({
  size,
  color = VALUES.ICON_COLOR,
}) => {
  return (
    <svg
      width={size}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 256 256">
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1="208"
        y1="128"
        x2="128"
        y2="208"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1="192"
        y1="40"
        x2="40"
        y2="192"
      />
    </svg>
  )
}
