import Delete from '../../../../shared/assets/icons/delete2.svg'

interface DeleteProductProps {
	className?: string
}

export const DeleteProduct = ({ className }: DeleteProductProps) => {
	return (
		<div>
			<Delete />
		</div>
	)
}
