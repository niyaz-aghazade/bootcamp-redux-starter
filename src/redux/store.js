import { createStore } from 'redux';
import reducer from './reducer';

// здесь мы связываем наш самописный редьюсер
// с редаксом, в результате чего рождается STORE
const store = createStore(reducer)
export default store;