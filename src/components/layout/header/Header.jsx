import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate} from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import {TfiUser} from 'react-icons/tfi'

const Header = ({ backLink  = ''}) => {
	
const  {pathname} = useLocation()
const navigate = useNavigate ()

const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
		{pathname != '/' ? (
			<button onClick={() => {navigate(backLink )
			}}
			>
				<IoMdArrowBack fill='#fff' fontSize={29} />
			</button>
			):<button 
			onClick={() => {navigate('/profile' )
			}}
			>
				<TfiUser fill='#fff' fontSize={20} />
			</button>}
			
			<Hamburger />
		</header>
	)
}

export default Header
