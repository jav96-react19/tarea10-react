import './App.scss'
import { Pokemon } from '@/components/Pokemon.tsx';
import { Provider } from 'react-redux'
import store from '@/store/configureStore/useStore.js'


export default function App() {
  
  return (
    <>
      <Provider store={store}>
          <Pokemon />
      </Provider>
    </>
  )
}