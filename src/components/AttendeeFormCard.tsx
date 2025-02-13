"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageUploader from "@/components/ImageUploader";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  avatar: string;
  aboutProject?: string;
}

function AttendeeFormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>();

  // Load stored form values once on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("attendeeData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        Object.keys(parsedData).forEach((key) => {
          setValue(key as keyof FormData, parsedData[key]);
        });
      }
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("attendeeData", JSON.stringify(value));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: FormData) => {
    console.log({ ...data });
  };

  return (
    <section className="md:mx-auto w-full md:max-w-[604px] md:border md:border-[#0E464F] rounded-3xl mt-4 md:bg-[#08252B] mb-5 overflow-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-4 mt-5 md:px-4 md:py-4"
      >
        {/* Avatar Upload Section */}
        <section className="file-upload border border-[#07373F] shadow-lg rounded-3xl w-full max-w-[556px] mt-6 px-4 py-2 mb-4">
          <h4 className="text-base font-normal text-[#FAFAFA] text-left mt-3 font-Roboto">
            Upload Profile Photo
          </h4>
          <section className="border border-[#041E23] bg-[#041E23] w-full max-w-[508px] mt-4 flex justify-center items-center">
            <ImageUploader
              onUpload={(url: string) =>
                setValue("avatar", url, { shouldValidate: true })
              }
            />
          </section>
          {errors.avatar && (
            <p className="text-red-500" role="alert">
              Avatar is required.
            </p>
          )}
        </section>

        {/* Attendee Form */}
        <div className="flex flex-col gap-4">
          <span className="mt-4 border-t-4 border-[#07373F]"></span>
          <label htmlFor="fullName" className="text-[#FFFFFF] font-roboto">
            Enter your name
          </label>
          <input
            id="fullName"
            {...register("fullName", { required: "Full Name is required" })}
            placeholder="Full Name"
            className="border border-[#07373F] p-2 rounded-md bg-[#08252B] w-full text-white font-roboto"
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && (
            <p role="alert" className="text-red-500">
              {errors.fullName.message}
            </p>
          )}

          <label htmlFor="email" className="text-[#FFFFFF] font-roboto">
            Enter your email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Valid Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="border border-[#07373F] p-2 rounded-md bg-[#08252B] w-full text-white font-roboto"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p role="alert" className="text-red-500">
              {errors.email.message}
            </p>
          )}

          <label htmlFor="aboutProject" className="text-[#FFFFFF] font-roboto">
            About the project
          </label>
          <textarea
            id="aboutProject"
            {...register("aboutProject")}
            placeholder="Describe your project..."
            className="border border-[#07373F] p-2 rounded-md h-24 bg-[#08252B] w-full text-white font-roboto"
          />
        </div>

        {/* Form Buttons */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 mt-8">
          <button
            type="submit"
            className="w-full md:w-[40%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-[#FFFFFF] rounded-lg font-normal text-base font-jejuMyengjo"
          >
            <Link href="/attendee-display" aria-label="Get My Ticket">
              Get My Free Ticket
            </Link>
          </button>
          <button
            type="button"
            className="w-full md:w-[40%] h-12 hover:bg-[#197686] border border-[#24A0B5] text-[#24A0B5] py-4 md:py-0 hover:text-white rounded-lg font-normal text-base font-jejuMyeongjo"
          >
            <Link href="/events" aria-label="Back">
              Back
            </Link>
          </button>
        </section>
      </form>
    </section>
  );
}

export default AttendeeFormCard;
