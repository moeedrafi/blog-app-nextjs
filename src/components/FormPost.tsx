"use client";

import { FormInputPost } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: React.FC<FormPostProps> = ({ submit, isEditing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputPost>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      tag: "Select Tags",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", {
          required: { value: true, message: "Title is Required" },
        })}
        placeholder="Post Title..."
        className="input input-bordered w-full max-w-lg"
      />
      <p className="text-red-400">{errors.title?.message}</p>

      <textarea
        {...register("content", {
          required: { value: true, message: "Title is Required" },
        })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content..."
      ></textarea>
      <p className="text-red-400">{errors.content?.message}</p>

      <select
        {...register("tag", {
          required: { value: true, message: "Tag is Required" },
        })}
        className="select select-bordered w-full max-w-lg"
      >
        <option disabled value="Select Tags">
          Select Tags
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="Python">Python</option>
      </select>
      <p className="text-red-400">{errors.tag?.message}</p>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
