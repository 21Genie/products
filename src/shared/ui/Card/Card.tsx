import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
	return (
		<div className={clsx(styles.card)} {...otherProps}>
			{children}
		</div>
	)
}
