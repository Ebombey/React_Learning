import { useForm, SubmitHandler } from "react-hook-form";
import "./style.css";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
};

const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="form-container">
      <h2>Registration From</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register("firstname", { required: "First name is required" })}
          />

          {errors.firstname && (
            <p className="error">{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: "Last name is required" })}
          />

          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="border border-black"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
          />

          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
          />

          {errors.state && <p>{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="zip">ZIP</label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "Zip is required" })}
          />

          {errors.zip && <p>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />

          {errors.country && <p>{errors.country.message}</p>}
        </div>

        <div>
          <label htmlFor="completeLocation">Complete Location</label>
          <input
            type="text"
            id="completeLocation"
            {...register("completeLocation", {
              required: "Complete Location is required",
            })}
          />

          {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdvanceForm;
