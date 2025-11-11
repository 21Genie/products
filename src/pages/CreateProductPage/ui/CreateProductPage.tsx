import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store/store'
import type { Product } from '../../../entities/Product/model/types/product'
import { Button } from '../../../shared/ui/Button/Button'
import { Input } from '../../../shared/ui/Input/Input'
import { productListActions } from '../../ProductsListPage/model/slice/productListSlice'
import styles from './CreateProductPage.module.scss'

export const CreateProductPage = () => {
	const [title, setTitle] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [image, setImage] = useState<string>('')
	const dispatch = useAppDispatch()

	const createProduct = () => {
		const product: Product = {
			id: Number(price) + 1,
			title,
			price: Number(price),
			description,
			images: [image],
			isFavorite: false,
		}
		dispatch(productListActions.createProduct(product))
		navigate('/products')
	}

	const navigate = useNavigate()

	const backToProducts = useCallback(() => {
		navigate('/products')
	}, [navigate])

	return (
		<div className={styles.createProductPage}>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={image} />
			</div>

			<div className={styles.infoWrapper}>
				<h1 className={styles.title}>Create product</h1>
				<Button onClick={backToProducts} className={styles.button}>
					Back
				</Button>

				<form className={styles.form}>
					<Input
						value={title}
						onChange={setTitle}
						name='name'
						type='text'
						placeholder='name'
						required
					/>
					<Input
						value={price}
						onChange={setPrice}
						name='price'
						type='number'
						placeholder='price'
						required
					/>
					<Input
						value={description}
						onChange={setDescription}
						name='description'
						type='text'
						placeholder='description'
					/>
					<Input
						value={image}
						onChange={setImage}
						name='url'
						type='text'
						placeholder='picture url'
						required
					/>

					<Button onClick={createProduct} className={styles.createBtn}>
						Create
					</Button>
				</form>
			</div>
		</div>
	)
}
