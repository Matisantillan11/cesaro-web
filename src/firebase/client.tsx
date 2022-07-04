import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)

const database = getFirestore(app)

export const getAllPizza = async () => {
	const data = await getDocs(collection(database, 'products'))
	const pizzas: any[] = []
	if (!data.empty) {
		data.forEach((doc) => pizzas.push(doc.data()))
		return pizzas
	}
}
