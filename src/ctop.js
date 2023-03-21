import { useState } from "react";
export default function ctop(props) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
