import store from './Store';
import { bugAdded, bugResolved } from './actions';

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));
console.log(store.getState());

export default App;
