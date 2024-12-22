import { ChangeEvent, FormEvent, useState } from "react";

type ContactFormProps = {
  name: string;
  email: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
