import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'
import React from 'react'

export const MUIIcon: React.FC<IconProps> = ({
  size = VALUES.ICON_SIZE,
  color = VALUES.ICON_COLOR,
}) => {
  return (
    <svg
      width={size}
      fill={color}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Material-UI icon</title>
        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
      </g>
    </svg>
  )
}
