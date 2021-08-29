import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [fruitName, setFruitName] = useState("");
  const [furitPrice, setFruitPrice] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [updateFruit, setUpdateFruit] = useState("");

  const handleSubmit = () => {
    console.log(furitPrice, fruitName);
    axios
      .post("http://localhost:3001/create", {
        fruitName: fruitName,
        furitPrice: furitPrice,
      })
      .then(() => console.log("data sent"))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => setFoodList(res.data));
  }, []);

  const handleUpdate = (id) => {
    console.log(id, updateFruit);
    axios
      .patch("http://localhost:3001/update", {
        id: id,
        fruitName: updateFruit,
      })
      .then(() => console.log("update data was sended to backend sucessfully"))
      .catch((e) => console.log(e));
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => console.log("delete requested")) //.then doesnot work in delete request
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <h1>APP</h1>

      <label>FruitName</label>
      <input onChange={(e) => setFruitName(e.target.value)} type="text" />
      <label>FruitPrice</label>
      <input type="number" onChange={(e) => setFruitPrice(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Add to list
      </button>

      <br />
      <div>
        <h1>FOOD LIST</h1>
        {foodList.map((item, index) => {
          return (
            <div className="card" key={index}>
              <h4>FoodName:{item.fruitName}</h4>
              <input
                type="text"
                placeholder="update fruit"
                onChange={(e) => setUpdateFruit(e.target.value)}
              />
              <h5>Foodprice:{item.furitPrice}</h5>
              <button onClick={() => handleUpdate(item._id)}>update</button>
              <button onClick={() => handleDelete(item._id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
