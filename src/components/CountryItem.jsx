import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchData, setOpenModel } from "../redux/slices/countrySlice";

const CountryItem = ({ item }) => {
  const { searchTerm, openModel, singleItem } = useSelector((state) => state.country);
console.log(singleItem)
  const dispatch = useDispatch();

  const handleCLickDetail = (name) => {
    dispatch(setOpenModel());
    dispatch(getSearchData(name));

  }

  
  return (
    <div className="  rounded-lg p-4 shadow-xl flex flex-col gap-5">
      <div>
        <img className=" w-80 h-52" src={item.flags.png} alt={item.flags.alt} />
      </div>

      <div className=" flex flex-col justify-center items-center gap-3">
        <p className=" font-bold">
          {item.name.common} <span>{item.flag}</span>
        </p>
        <p className=" flex">
          <p className=" font-bold">Nüfus</p>: {item.population.toFixed()}
        </p>

        <p className=" flex">
          <p className=" font-bold">Başkent</p>:{" "}
          {item.capital && item.capital[0]}{" "}
        </p>

        <p>
          <a
            className=" text-sky-800  font-bold"
            target="_blank"
            href={item.maps.googleMaps}
          >
            Harita
          </a>{" "}
        </p>

        <a
          onClick={() => handleCLickDetail(item.name.common)}
          className=" bg-sky-800 text-white text-center  p-1 rounded w-20 hover:bg-sky-900 transition-all"
          href="#"
        >
          Detay
        </a>
      </div>
    </div>
  );
};

export default CountryItem;
