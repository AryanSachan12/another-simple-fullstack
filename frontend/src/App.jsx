import "./App.css";
import axiosInstance from "./config/axiosConfig";

function App() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await axiosInstance.post("/", data);
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="Username"
          type="text"
          name="username"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
