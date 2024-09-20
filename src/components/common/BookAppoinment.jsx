import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "name is invalid")
    .required(),
  email: yup
    .string()
    .email("email in valid")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "must in email formate eg:name@gmail.com"
    )
    .typeError("")
    .trim()
    .required(),
  number: yup
    .string()
    .matches(/^\d{10}$/, "Phone number is not valid must 10 digit"),
  Atype: yup.string().required(),
});

const BookAppoinment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log("first");
    console.log(data);
  };
  return (
    <div className="p-5 lg:mt-16 mt-12 lg:p-20 bg-zinc-200 flex flex-col gap-10 lg:gap-16">
      <div className="lg:flex lg:flex-col lg:gap-8">
        <h1 className=" lg:text-5xl text-2xl font-semibold font-serif">
          Book Appointment
        </h1>
        <p className="lg:text-2xl lg:font-normal text-lg font-medium text-gray-600">
          Reach out and take the first step towards recovery.
        </p>
      </div>
      <form
        onSubmit={handleSubmit((e) => onSubmit(e))}
        action=""
        className="w-full flex gap-5  flex-col lg:gap-10"
      >
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-72">
          <div className="w-full flex flex-col gap-3">
            <label className="text-lg text-gray-700 font-medium" htmlFor="">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className="border hover:ring-0 p-3 lg:p-5 rounded-md"
              {...register("name")}
              type="text"
              placeholder="Enter Name "
            />
            <p className="text-sm text-red-700">{errors?.name?.message}</p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="text-lg text-gray-700 font-medium" htmlFor="">
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              {...register("number")}
              className="border hover:ring-0 p-3 lg:p-5 rounded-md"
              type="text"
              placeholder="Enter Phone Number "
            />
            <p className="text-sm text-red-700">{errors?.number?.message}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-72">
          <div className="w-full flex flex-col  gap-3">
            <label className="text-lg text-gray-700 font-medium" htmlFor="">
              Email ID <span className="text-red-600">*</span>
            </label>
            <input
              className="border hover:ring-0  lg:p-5 p-3 rounded-md"
              {...register("email")}
              type="text"
              placeholder="Enter Email ID "
            />
            <p className="text-sm text-red-700">{errors?.email?.message}</p>
          </div>
          <div className="w-full flex flex-col  gap-3">
            <label className="text-lg text-gray-700 font-medium" htmlFor="">
              Appoinment type
            </label>
            <select
              className="border  hover:ring-0  lg:p-5 p-3 rounded-md"
              {...register("Atype")}
              type="text"
              placeholder="Select Appointment type "
            >
              <option className="lg:p-10" value="In Person">
                In Person
              </option>
              <option className="lg:p-10" value="Online">
                Online
              </option>
            </select>
          </div>
        </div>
        <div className="sm:mt-10 lg:mt-0 lg:w-full lg:flex lg:justify-center lg:items-center">
          <button
            type="submit"
            className="bg-[#075740] p-3 lg:w-fit w-full flex justify-center items-center  text-white rounded-2xl lg:p-5 lg:text-2xl"
          >
            Request a Call Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppoinment;
