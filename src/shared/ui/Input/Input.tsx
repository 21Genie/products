import {
	type ChangeEvent,
	type InputHTMLAttributes,
	memo,
	type RefObject,
	useEffect,
	useRef,
	useState,
} from 'react'

import styles from './Input.module.scss'
import clsx from 'clsx'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
	autofocus?: boolean
	readonly?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		name,
		className,
		placeholder,
		type = 'text',
		value,
		onChange,
		autofocus,
		readonly,
		...otherProps
	} = props

	const inputRef = useRef(null) as RefObject<HTMLInputElement | null>
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true)
			inputRef.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const onBlur = () => setIsFocused(false)
	const onFocus = () => setIsFocused(true)

	const mods = {
		[styles.readonly]: readonly,
	}

	return (
		<div className={clsx(styles.inputWrapper, [className], mods)}>
			<input
				placeholder={placeholder}
				ref={inputRef}
				className={styles.input}
				type={type}
				name={name}
				value={value}
				onChange={onChangeHandler}
				onBlur={onBlur}
				onFocus={onFocus}
				readOnly={readonly}
				{...otherProps}
			/>
		</div>
	)
})
