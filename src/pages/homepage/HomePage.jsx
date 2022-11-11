import TodoItem from "../../components/todoItem/TodoItem";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-page">
      {/* <Header /> */}
      {/* <HeaderSlider /> */}
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
