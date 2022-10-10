import {useEffect, useState} from 'react'
import categoriesData from './api/categories.json'
import Category from 'components/ui/Category';
import Title from './ui/Title';

function Categories() {

	const [categories, setCategories] = useState([])

	useEffect(() => {
		setCategories(categoriesData)
	}, [])

	return (
		<div className="bg-white py-6">
			<div className="container mx-auto">
      <Title>Kategoriler</Title>
				<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
					{categories && categories.map(category => <Category key={category.id} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories