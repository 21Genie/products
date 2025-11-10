import clsx from 'clsx'
import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Button.module.scss'

export const enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outlineRed',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		type = 'button',
		...otherProps
	} = props

	const mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	}

	return (
		<button
			className={clsx(cls.button, [className, cls[theme], cls[size]], mods)}
			{...otherProps}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	)
})
