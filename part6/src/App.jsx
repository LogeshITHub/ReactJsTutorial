import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Reducer function
// All in One
let reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "Reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

function App() {
  // useReducer State Management
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UseReducer Hooks</h1>
      <div className="card">
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch({ type: "Decrement" })}
        >
          Decrement
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch({ type: "Reset" })}
        >
          Reset
        </button>
        <br />
        <br />
        <button>count is {state.count}</button>
      </div>
    </>
  );
}

export default App;
