import { useEffect, useState } from 'react'
import { HomeComponent } from '../components/Home.component'
import { getAllPizza } from '../firebase/client'

export const HomeController = () => {
	const [pizzas, setPizzas] = useState<any[]>()
	const getData = async () => {
		const arrayOfPizza = await getAllPizza()
		if (arrayOfPizza?.length) setPizzas(arrayOfPizza)
	}

	useEffect(() => {
		getData()
	}, [])

	return <HomeComponent pizzas={pizzas} />
}
