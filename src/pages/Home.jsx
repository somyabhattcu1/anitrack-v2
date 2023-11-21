import {
    Login,
    Search
  } from '../pages/index'
import { useAppContext } from '../context/AppContext'
  
const Home = () => {
    // access token
    const {token} = useAppContext()
  
    return (
      <div>
        {
          token? <Search /> : <Login />
        }
      </div>
    )
  }

export default Home