import TodoItem from "../../components/todoItem/TodoItem";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-page">
     
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default HomePage;
