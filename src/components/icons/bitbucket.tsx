import { VALUES } from '@/lib/values'
import { IconProps } from '@/types/common'

export const BitbucketIcon: React.FC<IconProps> = ({
  size = VALUES.ICON_SIZE,
}) => {
  return (
    <svg
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="bitbucket">
      <path
        fill="#2680F8"
        d="M4.297 23h15.659a.776.776 0 0 0 .769-.657L23.99 1.916a.78.78 0 0 0-.635-.897 1.13 1.13 0 0 0-.134-.009L.779 1A.775.775 0 0 0 0 1.775c0 .044.005.093.009.137l3.265 20.196c.082.509.515.887 1.023.892zM15.736 8.391l-1.211 7.205h-5L8.173 8.391h7.563z"></path>
    </svg>
  )
}
