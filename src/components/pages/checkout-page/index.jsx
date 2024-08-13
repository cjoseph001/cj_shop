import { useContext, useState } from "react";
import { GlobalContext } from "../../global-state";

export default function CheckoutPage() {
  const { cart } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    console.log(cart);
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        ></input>
        <input
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        ></input>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
