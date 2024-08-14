import React from "react";
import { useState } from "react";

const PromptArea = () => {
  const [formData, setFormData] = useState({
    model: "dalle-2",
    prompt: "",
    imageSize: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };
  return (
    <div className="flex fixed justify-start items-center h-screen w-full lg:w-[37%] xl:w-[20%] bg-n-7 mt-[5.5rem]">
      <div className="flex flex-col justify-start w-full h-full mt-[1rem] ">
        <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Model
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
            <option
              value="dalle-2"
              onChange={() => {
                setFormData({ ...formData, model: "dalle-2" });
              }}
            >
              Inspire v1.0{" "}
            </option>
            <option
              value="dalle-3"
              onChange={() => {
                setFormData({ ...formData, model: "dalle-3" });
              }}
            >
              Inspire v1.3 (Premium)
            </option>
          </select>
          <label
            htmlFor="prompt"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Prompt
          </label>
          <textarea
            name="prompt"
            id="prompt"
            rows="4"
            value={formData.prompt}
            onChange={(e) => {
              setFormData({ ...formData, prompt: e.target.value });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Enter your prompt here"
          ></textarea>
          <label
            htmlFor="Style"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image Size
          </label>
          <div className="flex flex-wrap justify-center mt-2 gap-4 md:gap-0">
            <label className="inline-flex items-center mr-3">
              <input
                type="radio"
                className="hidden"
                name="imageSize"
                value="846x846"
                onChange={() => {
                  setFormData({ ...formData, imageSize: "small" });
                }}
              />
              <div className="bg-gray-700 hover:bg-gray-800 rounded-lg px-4 py-2 cursor-pointer">
                846 x 846
              </div>
            </label>
            <label className="inline-flex items-center mr-3">
              <input
                type="radio"
                className="hidden"
                name="imageSize"
                value="1024x1024"
                onChange={() => {
                  setFormData({ ...formData, imageSize: "medium" });
                }}
              />
              <div className="bg-gray-700 hover:bg-gray-800 rounded-lg px-4 py-2 cursor-pointer ">
                1024 x 1024
              </div>
            </label>
            <label className="inline-flex items-center mr-3 lg:mt-4 xl:mt-0">
              <input
                type="radio"
                className="hidden"
                name="imageSize"
                value="2048x2048"
                onChange={() => {
                  setFormData({ ...formData, imageSize: "large" });
                }}
              />
              <div className="bg-gray-700 hover:bg-gray-800 rounded-lg px-4 py-2 cursor-pointer">
                2048 x 2048
              </div>
            </label>
          </div>
          <div>
            <label
              htmlFor="style"
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Style
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
              <option value="default">Default</option>
              <option value="fantasy">Fantasy</option>
              <option value="anime">Anime</option>
              <option value="cartoon">Cartton</option>
              <option value="portrait">Portrait</option>
              <option value="cinematic">Cinematic</option>
              <option value="futurastic">Futurastic</option>
              <option value="comicbook">Comic Book</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Generate Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default PromptArea;
