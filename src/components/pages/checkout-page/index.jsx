import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [formError, setFormError] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name should only contain letters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Email is invalid";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    setFormError(errors);
    return errors;
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setIsFormSubmitted(false);
      console.log(errors, "Error");
      if (errors.name) {
        setFormData((prev) => ({ ...prev, name: "" }));
      }
      if (errors.email) {
        setFormData((prev) => ({ ...prev, email: "" }));
      }
      if (errors.address) {
        setFormData((prev) => ({ ...prev, address: "" }));
      }
    } else {
      console.log(formData, "Submitted");
      setIsFormSubmitted(true);
    }
  };

  return (
    <div>
      <h2 className="home-title">Checkout Page</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-name">
          <label>Name: </label>
          <input
            className="input-name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Name"
          />
          {formError.name && (
            <div className="form-error" style={{ color: "red" }}>
              {formError.name}
            </div>
          )}
        </div>

        <div className="form-email">
          <label>Email: </label>
          <input
            className="input-email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            placeholder="Email"
          />
          {formError.email && (
            <div className="form-error" style={{ color: "red" }}>
              {formError.email}
            </div>
          )}
        </div>

        <div className="form-address">
          <label>Address: </label>
          <input
            className="input-address"
            name="address"
            value={formData.address}
            onChange={handleFormChange}
            placeholder="Address"
          />
          {formError.address && (
            <div className="form-error" style={{ color: "red" }}>
              {formError.address}
            </div>
          )}
        </div>

        <div>
          <button className="submit-button" type="submit">
            Submit Form
          </button>
          <div className="form-message">
            {isFormSubmitted && "Form is submitted!"}
          </div>
        </div>
      </form>
    </div>
  );
}
