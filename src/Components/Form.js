import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "Faire les courses", id: uuidv4() },
    { txt: "Sport", id: uuidv4() },
    { txt: "Dormir", id: uuidv4() },
    { txt: "Coder en react", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState("");

  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => item.id !== id);
    setDataArr(filteredState);
  };

  const linkedInput = (e) => {
    setStateInput(e);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (stateInput !== "") {
      const newArr = [...dataArr, { txt: stateInput, id: uuidv4() }];
      setDataArr(newArr);
      setStateInput("");
    }
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Choses a faire
        </label>
        <input
          type="text"
          id="todo"
          className="form-control"
          onInput={(e) => linkedInput(e.target.value)}
          value={stateInput}
        />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>List des choses a faire :</h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              txt={item.txt}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}
