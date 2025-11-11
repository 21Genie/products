import clsx from 'clsx'
import cls from './ProductForm.module.scss'

interface ProductFormProps {
	className?: string
}

export const ProductForm = ({ className }: ProductFormProps) => {
	return <div className={clsx(cls.productForm, [className])}></div>
}
