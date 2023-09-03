import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/images/icons/Search.svg";
import { Input } from "reactstrap";
import "./Search.css";
import { useDispatch } from "react-redux";
import { searchProduct } from "../products/ProductSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="Search">
      <div className="Search-input">
        <Input
          placeholder="Search for a product"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(searchProduct(searchValue));
            }
          }}
          bsSize="lg"
        />
      </div>
      <div className="Search-icon">
        <SearchIcon onClick={() => dispatch(searchProduct(searchValue))} />
      </div>
    </div>
  );
};

export default Search;
