import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const PostCommunity = () => {
  const [file, setFile] = useState("");
  const [complement, setComplement] = useState("");

  const handlePostCommunity = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=d2c54ff163b45c91f6a001f23886d677",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();

      const imageURL = data?.data?.url;
      setFile(imageURL);

      const result = {
        file: imageURL,
        complement,
      };

      axios.post("http://localhost:5000/community", result);
      toast.success("apply successfully");
    } catch (error) {
      console.error("Error uploading image");
    }
  };

  const handleImageChange = (e) => {
    setFile(e.target?.files[0]);
  };

  const handleComplementChange = (e) => {
    setComplement(e.target?.value);
  };

  return (
    <div className="w-full pt-2 ">
      {/* post community  */}
      <form
        onSubmit={handlePostCommunity}
        className="w-4/5 p-6 mx-auto shadow-lg shadow-[#20131c]"
      >
        <h1 className="text-[20px] text-accent-400 font-semibold pb-4 ">
          Drop Your Post
        </h1>
        <textarea
          className="w-4/5 outline-none bg-dark-mid textarea"
          placeholder="say your complement"
          type="text"
          name="complement"
          onChange={handleComplementChange}
        ></textarea>
        <div className="p-4 rounded-md shadow-md bg-dark-mid w-36">
          <label
            for="upload"
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 fill-white stroke-indigo-500"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-medium text-pink-500">Upload file</span>
          </label>
          <input
            id="upload"
            type="file"
            name="image"
            className="hidden "
            onChange={handleImageChange}
          />
        </div>

        <button className="w-[180px] rounded-md px-6 mt-2 py-2 mr-4 btn-all">
          Submit
        </button>
      </form>
      {/* post show */}

      {/* post card */}
    </div>
  );
};

export default PostCommunity;
