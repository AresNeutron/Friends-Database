import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);

  const addFriend = () => {
    const newFriend = {
      name: name,
      age: age,
      description: desc,
    };
    axios.post("http://localhost:3001/addfriend", newFriend).then(() => {
      setList((prev) => [...prev, newFriend]);
    });
  };

  const updateFriend = (id) => {
    const newDesc = prompt("Enter new description: ");
    axios
      .put("http://localhost:3001/update", { description: newDesc, id: id })
      .then(() => {
        setList(
          list.map((friend) => {
            if (friend._id === id) {
              return { ...friend, description: newDesc };
            } else {
              return friend;
            }
          })
        );
      });
  };

  const deleteFriend = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setList(
          list.filter((friend) => friend._id !== id) // Filtramos para eliminar el elemento visualmente
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [list]);

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          value={name}
          placeholder="Friend Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Friend age..."
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Shortly describe your Friend..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <button onClick={addFriend}>Send Friend</button>
      </div>
      <div className="data">
        <h2>Some of my friends of Mac :)</h2>
        {list.map((friend) => {
          return (
            <div
              className="data-display"
              key={friend._id}
              style={{ color: "white", "margin-top": "20px" }}
            >
              <div>
                <h3>Name: {friend.name}</h3>
                <h3>Age: {friend.age}</h3>
                <p>Description: {friend.description}</p>
              </div>
              <div className="divButtons">
                <button
                  onClick={() => {
                    updateFriend(friend._id);
                  }}
                  className="updateButton"
                >
                  Update
                </button>
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteFriend(friend._id);
                  }}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
