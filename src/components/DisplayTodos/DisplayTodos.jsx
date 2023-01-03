import React, { useState } from "react";
import styles from "./DisplayTodos.module.css";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { completeTodos, removeTodos, updateTodos } from "../TodosSlice";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (item) => dispatch(updateTodos(item)),
    completeTodo: (item) => dispatch(completeTodos(item)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div className={styles.display_todos}>
      <div className={styles.buttons}>
        <button onClick={() => setSort("active")} className={styles.button}>
          Active
        </button>
        <button onClick={() => setSort("completed")} className={styles.button}>
          Completed
        </button>
        <button onClick={() => setSort("all")} className={styles.button}>
          All
        </button>
      </div>
      <ul className={styles.list_todos}>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
