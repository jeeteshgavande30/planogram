import React, { useState } from "react";
import styles from "./container2.module.css";
const Container2 = (props) => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [name, setName] = useState("");
  const [color, setColor] = useState("#d8d118");
  const [show, setShow] = useState(false);
  const [planogramName, setPlanogramName] = useState("");

  const rowChangeHandler = (e) => {
    setRow(e.target.value);
  };
  const columnChangeHandler = (e) => {
    setColumn(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const planogramChangeHandler = (e) => {
    setPlanogramName(e.target.value);
  };

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setShow(true);

    const inputData = {
      row,
      column,
      name,
      color
    };

    console.log(row, column, name);

    props.onSubmitForm(inputData);
  };

  const addDBformSubmitHandler = (event) => {
    event.preventDefault();
    const dbData = {
      row,
      column,
      name,
      planogramName,
      color
    };
    props.onSubmitForm(dbData);
    setRow(0);
    setColumn(0);
    setName("");
    setPlanogramName("");
  };

  return (
    <div className={styles.container2}>
      <h2 className={styles.title}>Planogram UI</h2>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.formwrapper}>
          <label>Enter Rows</label>
          <input type="number" onChange={rowChangeHandler} />
        </div>
        <div className={styles.formwrapper}>
          <label>Enter Columns</label>
          <input type="number" onChange={columnChangeHandler} />
        </div>

        <div className={styles.formwrapper}>
          <label>Name a Category</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className={styles.formwrapper}>
          <label>Box Color</label>
          <input type="color" className={styles.colorpicker} value ={color} onChange={colorChangeHandler}/>
        </div>
        <div className={styles.formwrapper}>
          <button type="submit">Fix Selection</button>
        </div>
      </form>
      {show ? (
        <form className={styles.form} onSubmit={addDBformSubmitHandler}>
          <div className={styles.formwrapper}>
            <label>Enter Planogram Name</label>
            <input type="text" onChange={planogramChangeHandler} />
          </div>
          <div className={styles.formwrapper}></div>
          <div className={styles.formwrapper}>
            <button type="submit">Save Planogram</button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Container2;
