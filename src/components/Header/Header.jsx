import React, { useState } from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { addTodos } from "../TodosSlice";
import { FaPlus, FaTasks } from "react-icons/fa";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (item) => dispatch(addTodos(item)),
  };
};

const Header = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty!");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className={styles.header_todos}>
      <div>
      <h1 className={styles.title}><FaTasks className={styles.logo}/> My Todo List</h1>
      </div>
     
      <div className={styles.add_todo}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className={styles.input}
          value={todo}
          placeholder='Write an essay...'
        />
        <button className={styles.add_btn} onClick={() => add()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
