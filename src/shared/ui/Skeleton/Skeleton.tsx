import type { CSSProperties } from 'react'
import cls from './Skeleton.module.scss'
import clsx from 'clsx'

interface SkeletonProps {
	className?: string
	height?: string | number
	width?: string | number
	border?: string
}

export const Skeleton = ({
	className,
	border,
	height,
	width,
}: SkeletonProps) => {
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	}
	return <div className={clsx(cls.skeleton, [className])} style={styles} />
}
