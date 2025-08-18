import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'

export const VSCodeIcon: React.FC<IconProps> = ({
  size = VALUES.ICON_SIZE,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      id="visual-studio-code">
      <path
        fill="#0179cb"
        d="M17.172 29.664 5.215 38.981 0 36.384V12.1l5.195-2.617 11.874 9.338L35.869 0l12.368 4.927v38.528l-12.306 5.009ZM35.5 32.942V15.523l-11.255 8.72ZM5.628 29.808l5.916-5.38-5.916-5.9Z"></path>
    </svg>
  )
}
