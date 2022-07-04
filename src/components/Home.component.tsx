import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
	background-color: #f1f1f1;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	border-radius: 12.5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 95vh;
	max-width: 550px;
	min-height: 480px;
	width: 50%;
	margin: 2.5vh auto;
`

const SSelect = styled.select`
	height: 35px;
	outline: none;
	border-radius: 8px;
	background-color: #ffffff;
	margin: 10px 10%;
	width: 80%;
`

const SOption = styled.option`
	height: 35px;
	outline: none;
	border-radius: 8px;
	background-color: #ffffff;
	padding: 5% 0;
	width: 100%;
	text-transform: capitalize;
`

export const HomeComponent = ({ pizzas }: any) => {
	return (
		<SContainer>
			<h1>Bienvenido a Cesaro</h1>
			<SSelect>
				{pizzas?.map((pizza: any, index: number) => (
					<SOption key={index}>
						{pizza.name.substring(0, 1).toUpperCase() + pizza.name.substring(1, pizza.name.length)}
					</SOption>
				))}
			</SSelect>
		</SContainer>
	)
}
