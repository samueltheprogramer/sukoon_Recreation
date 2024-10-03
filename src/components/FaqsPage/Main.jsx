import React, { useCallback, useState } from "react";
import { TextField, Autocomplete, InputAdornment } from "@mui/material";
import { MdOutlineSearch } from "react-icons/md";
import { faqsPageData } from "../../variables";
import Accordiant from "../common/Accordiant";
import { debounce } from "lodash";

//data
const faqData = faqsPageData;

const categories = [
  ...new Set(
    faqData.map((faq) => faq.attributes.faq_category.data.attributes.Title)
  ),
];

const subCategoriesByCategory = (category) => {
  const filteredSubCategories = faqData
    .filter(
      (faq) => faq.attributes.faq_category.data.attributes.Title === category
    )
    .map((faq) => faq.attributes.faq_sub_category.data.attributes.Title);
  return [...new Set(filteredSubCategories)];
};

function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleSearch = useCallback(
    debounce((newTerm) => {
      setDebouncedSearchTerm(newTerm);
    }, 500),
    []
  );

  const handleSearchInput = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value); //trigger debounce
  };

  // handle search function
  const searchResults = faqData.filter((faq) => {
    return faq.attributes.title
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase());
  });

  const filteredFaqData = faqData.filter((faq) => {
    const categoryMatch =
      !selectedCategory ||
      faq.attributes.faq_category.data.attributes.Title === selectedCategory;

    const subCategoryMatch =
      !selectedSubCategory ||
      faq.attributes.faq_sub_category.data.attributes.Title ===
        selectedSubCategory;

    return categoryMatch && subCategoryMatch;
  });

  return (
    <div className="lg:my-32 lg:px-20 p-5 flex flex-col lg:gap-10 gap-3">
      <div className="flex flex-col lg:gap-3">
        <h1 className="text-2xl lg:text-5xl font-semibold font-serif text-black/90">
          FAQs
        </h1>
        <h2 className="text-lg lg:text-2xl text-gray-600">
          We're here to help
        </h2>
      </div>
      <div className="lg:flex-row  flex gap-3  flex-col w-full p-5 text-center rounded-xl lg:rounded-2xl lg:p-7  bg-[rgb(240,247,244)]  lg:justify-between lg:items-center">
        <div className="lg:flex lg:text-center lg:gap-5 lg:w-5/12 lg:justify-center lg:items-center lg:flex-row flex flex-col gap-3 ">
          <h1 className="lg:text-2xl   lg:text-center text-xl font-medium pb-5 lg:pb-0 text-black/85">
            Filter
          </h1>
          <div className="lg:flex-row lg:w-full flex flex-col gap-3">
            <Autocomplete
              options={categories}
              value={selectedCategory}
              onChange={(event, newValue) => {
                setSelectedCategory(newValue);
                setSelectedSubCategory(null);
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

            <Autocomplete
              sx={{
                width: "100%",
                "& .MuiAutocomplete-option[aria-selected='true']": {
                  backgroundColor: "blue",
                  color: "white",
                },
                "& .MuiAutocomplete-option.Mui-focused": {
                  backgroundColor: "blueviolet",
                },
              }}
              options={subCategoriesByCategory(selectedCategory)}
              value={selectedSubCategory}
              onChange={(event, newValue) => setSelectedSubCategory(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Sub-Category"
                  sx={{ bgcolor: "white", border: 0 }}
                />
              )}
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
            onChange={handleSearchInput}
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

      <div className="lg:px-10">
        {!debouncedSearchTerm
          ? filteredFaqData.map((faq) => (
              <Accordiant data={faq} isFaqPage={true} />
            ))
          : searchResults.map((faq) => (
              <Accordiant data={faq} isFaqPage={true} />
            ))}
        {searchResults.length === 0 && (
          <h1 className="text-xl text-bold text-gray-500 w-full text-center">
            No data found{" "}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Main;
