import { useParams } from 'react-router-dom'
import styles from './ProductItem.module.scss'

interface ProductItemProps {
	className?: string
}

export const ProductItem = ({ className }: ProductItemProps) => {
	const { id } = useParams()
	console.log(id)

	return <div className={styles.productItem}>product</div>
}
