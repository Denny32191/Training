import { useState } from 'react'
import Button from '../../ui/button/Button'
import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'

function Home() {
	const navigate = useNavigate()
	const {isAuth} = useAuth()

	return (
		<Layout bgImage='./../../../../public/images/homebg2.jpeg'>
			<Button clickHandler={() => navigate(!isAuth ? '/new-workout'
			: '/auth')}>
			{!isAuth ?  'New' :  'Log in'}
			</Button>
			<h1 className={styles.heading}>
			Join the training
			</h1>
		</Layout>

	)
}

export default Home
