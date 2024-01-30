import React, { useCallback, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch, clearInput, getSearchData, setOpenModel } from "../redux/slices/countrySlice";
import { Link, useNavigate } from "react-router-dom";
import CountryItemModel from "../components/CountryItemModel";

const Header = () => {
  const { countryData, searchTerm, openModel } = useSelector((state) => state.country);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // console.log(useSelector((state) => state.country));

  const handleClickSearch = () => {
    dispatch(getSearchData(searchTerm));
    dispatch(setOpenModel());
    dispatch(clearInput());
  };

  const handleChange = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <>
    <div className=" flex justify-around items-center  p-8 border-b bg-indigo-900 text-white">
      <div>
        <Link to={"/"} className=" font-bold text-4xl italic cursor-pointer">
          DÜNYA ÜLKELERİ
        </Link>
      </div>
      <div className=" flex  gap-1">
        <div className=" relative">
          <input
            type="text"
            placeholder="Arama yap..."
            className=" border  p-2 rounded w-80 text-black outline-none"
            value={searchTerm}
            name="searchTerm"
            onChange={handleChange}
            
          />
          <span className="text-black absolute top-3 right-2 text-xl">
            <FaSearch
              onClick={handleClickSearch}
              className=" cursor-pointer hover:scale-125 transition-all"
            />
          </span>
        </div>
      </div>
    </div>
    {openModel && <div>
        <CountryItemModel />
      </div>}
    </>
  );
};

export default Header;
