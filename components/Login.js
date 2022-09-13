import { useMetamask } from "@thirdweb-dev/react";
import styles from '../styles/login.module.css'

const Login = () => {
    const connectWithMetamask = useMetamask()

    return (
        <>
            <div className={styles.loginPage}>
                <div className={styles.loginContaner}>
                    <h1>Login to view app</h1>

                    <button className={styles.loginButton} onClick={connectWithMetamask}>
                        Connect MetaMask
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login