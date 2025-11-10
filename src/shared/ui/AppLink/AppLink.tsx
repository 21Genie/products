import { Link, type LinkProps } from 'react-router-dom'
import { memo } from 'react'

import styles from './AppLink.module.scss'
import clsx from 'clsx'

export const enum AppLinkTheme {
	PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={clsx(styles.AppLink, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
