import React, { useRef } from "react";
import styles from "./TodoItem.module.css";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.key === "Enter") {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li
      key={item.id}
      className={
        item.completed === true
          ? `${styles.card}`
          : `${styles.card} ${styles.active}`
      }
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className={styles.buttons}>
        <button onClick={() => changeFocus()} className={styles.button}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            onClick={() => completeTodo(item.id)}
            className={styles.button}
          >
            <AiOutlineCheck />
          </button>
        )}
        <button onClick={() => removeTodo(item.id)} className={styles.button}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
