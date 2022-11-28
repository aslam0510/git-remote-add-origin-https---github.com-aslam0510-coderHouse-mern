import React from 'react'
import styles from './Home.module.css'
import Card from '../../Components/Shared/Card/Card'
import { Link , useNavigate} from 'react-router-dom';
import Button from '../../Components/Shared/Button/Button';

const Home = () => {
  const navigate = useNavigate()
  const signInLink = {
    color: '#0077FF',
    fontWeight: 'bold',
    textDecoration: 'none'
  }

  const startRegister = () => {
    navigate('/register')
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coder's House !" icon='Vectorlogo'>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to
          make sure nothing breaks :)
        </p>
        <div>
          <Button onClick={startRegister} label='Get your Username'/>
        </div>
        <div className={styles.siginWrapper}>
          <span className={styles.invite}>Have an invite text?</span>
          <Link style={signInLink} to='/login'>Sign in</Link>
        </div>
      </Card>
    </div>
  )
}

export default Home