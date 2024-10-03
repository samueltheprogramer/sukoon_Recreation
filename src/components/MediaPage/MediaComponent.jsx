import React, { useState } from "react";
import { TextField, Autocomplete, InputAdornment } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import { faqsPageData, mediaPageData } from "../../variables";
import NewsAndBlogsCard from "../AboutusPage/NewAndBlogs/NewsAndBlogsCard";
import {
  IoIosArrowBack,
  IoIosArrowDropleft,
  IoIosArrowForward,
} from "react-icons/io";

/* 
faqData
categories
subCategoriesByCategory
searcharesults
searchTearm
filterdFaqdata

*/
//data

const categories = ["Pets", "Nomophobia", "Gourmet Diet", "Pomodoro Technique"];
const MediaData = mediaPageData;

function MediaComponent() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(1);

  const searchResults = MediaData.filter((media) => {
    return media.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredMediaData = MediaData.filter((media) => {
    console.log(media.title);
    const categoryMatch = !selectedCategory || media.Slug === selectedCategory;

    return categoryMatch;
  });

  return (
    <div className="lg:my-32 lg:px-20 p-5 flex flex-col lg:gap-10 gap-3">
      <div className="flex flex-col lg:gap-3">
        <h1 className="text-2xl lg:text-5xl font-semibold font-serif text-black/90">
          Sukoon in the Spotlight
        </h1>
        <h2 className="text-lg lg:text-2xl text-gray-600">
          Welcome to Sukoon's Media Page – Here, we share our journey,
          innovations, and perspectives on mental health resources and services.
        </h2>
      </div>
      <div className="lg:flex-row  flex gap-3  flex-col w-full p-5 text-center rounded-xl lg:rounded-2xl lg:p-7  bg-[rgb(240,247,244)]  lg:justify-between lg:items-center">
        <div className="lg:flex lg:text-center lg:gap-5 lg:w-5/12 lg:justify-center lg:items-center lg:flex-row flex flex-col gap-3 ">
          <h1 className="lg:text-2xl sm:text-start   lg:text-center text-xl font-medium pb-5 lg:pb-0 text-black/85">
            Filter
          </h1>
          <div className="lg:flex-row lg:w-full flex flex-col gap-3">
            <Autocomplete
              options={categories}
              value={selectedCategory}
              onChange={(event, newValue) => {
                setSelectedCategory(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  sx={{ bgcolor: "white", border: 0 }}
                  placeholder="Category"
                  {...params}
                />
              )}
              sx={{ width: "100%", border: 0 }}
            />
          </div>
        </div>
        <div className="lg:w-4/12">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdOutlineSearch className="text-2xl text-black/70" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              bgcolor: "white",
              width: "100%",
              border: 0,
            }}
            placeholder="Search"
            helperText={null}
          />
        </div>
      </div>

      <div className="lg:px-10 grid lg:grid-cols-3 lg:gap-10 grid-cols-1  gap-5 sm:gap-8">
        {!searchTerm
          ? filteredMediaData.map((media) => (
              <NewsAndBlogsCard
                data={media}
                isNewsAndMediaCard={true}
                isMediaPage={true}
              />
            ))
          : searchResults.map((media) => (
              <NewsAndBlogsCard
                data={media}
                isNewsAndMediaCard={true}
                isMediaPage={true}
              />
            ))}
      </div>
      <div className="w-full text-center flex justify-center items-center mx-auto ">
        {searchResults.length === 0 && (
          <h1 className="text-3xl  text-bold text-gray-500 w-full text-center">
            No data found{" "}
          </h1>
        )}
      </div>

      <div className="flex gap-3 justify-center items-center w-full h-10 pt-5 lg:pt-10  ">
        <h1 className="flex justify-center items-center rounded-full border w-8 h-8 text-center  text-xs  border-black/20">
          <IoIosArrowBack />
          <IoIosArrowBack className="-ml-4" />
        </h1>
        <h1
          onClick={() => setCount(count - 1)}
          className="flex cursor-pointer  justify-center items-center rounded-full border w-8 h-8 text-center  text-xs  border-black/20"
        >
          <IoIosArrowBack />
        </h1>
        <h1 className="flex justify-center items-center rounded-full border w-8 h-8 text-center  text-xs bg-green-950 text-white font-semibold    border-black/20">
          {count}
        </h1>
        <h1
          onClick={() => setCount(count + 1)}
          className="flex cursor-pointer justify-center items-center rounded-full border w-8 h-8 text-center  text-xs  border-black/20"
        >
          <IoIosArrowForward />
        </h1>
        <h1 className="flex justify-center items-center rounded-full border w-8 h-8 text-center  text-xs  border-black/20">
          <IoIosArrowForward /> <IoIosArrowForward className="-ml-4" />
        </h1>
      </div>
    </div>
  );
}

export default MediaComponent;
