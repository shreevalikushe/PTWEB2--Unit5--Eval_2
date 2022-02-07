import styles from "./App.module.css";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className={styles.App}>
      <Todo />
    </div>
  );
}

export default App;
