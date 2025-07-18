import React from 'react'
import { Rating, RatingButton } from '../ui/rating'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

interface CustomRatingProps extends ComponentProps<typeof Rating> {
  max?: number
  size?: number
  className?: string
  readOnly?: boolean
  disabled?: boolean
}

const CustomRatingComponent = ({
  max = 5,
  className,
  readOnly = false,
  size = 20,
  ...rest
}: CustomRatingProps) => {
  return (
    <div>
      <Rating
        className={clsx('text-yellow-500/90', className)}
        readOnly={readOnly}
        {...rest}
      >
        {Array.from({ length: max }).map((_, index) => (
          <RatingButton key={index} size={size} />
        ))}
      </Rating>
    </div>
  )
}

export default CustomRatingComponent
