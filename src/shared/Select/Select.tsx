import { type ChangeEvent, type SelectHTMLAttributes, useMemo } from 'react'
import cls from './Select.module.scss'
import clsx from 'clsx'

export interface SelectOptions<T> {
	value: T
	content: string
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

interface SelectProps<T extends string> extends HTMLSelectProps {
	className?: string
	label?: string
	options?: SelectOptions<T>[]
	value?: T
	onChange?: (value: T) => void
	readonly?: boolean
}

export const Select = <T extends string>({
	className,
	label,
	value,
	onChange,
	options,
	readonly,
	...otherProps
}: SelectProps<T>) => {
	const optionsList = useMemo(
		() =>
			options?.map(item => (
				<option value={item.value} key={item.value}>
					{item.content}
				</option>
			)),
		[options]
	)

	const mods = {
		[cls.readonly]: readonly,
	}

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T)
	}

	return (
		<div className={clsx(cls.wrapper, [className], mods)}>
			{label && <span className={cls.label}>{`${label}>`}</span>}
			<select
				className={cls.select}
				value={value}
				onChange={onChangeHandler}
				disabled={readonly}
				{...otherProps}
			>
				{optionsList}
			</select>
		</div>
	)
}
