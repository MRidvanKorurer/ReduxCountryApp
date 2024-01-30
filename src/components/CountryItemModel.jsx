import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModel, setOpenModelFalse } from "../redux/slices/countrySlice";
import { useNavigate } from "react-router-dom";

const CountryItemModel = () => {
  const { singleItem, searchTerm } = useSelector((state) => state.country);

    const navigate = useNavigate();

  console.log(singleItem);




  const dispatch = useDispatch();
  return (
    <div className=" relative shadow-xl w-2/3 h-[600px] rounded mx-auto py-10  z-10">
      {singleItem?.map((item, i) => (
        <div key={i} className=" flex flex-col justify-center items-center gap-20">
          <div>
            <img
              className=" w-full h-full"
              src={item.flags.png}
              alt={item.flags.alt}
            />
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

     
          </div>
        </div>
      ))}

      <div
        onClick={() => dispatch(setOpenModelFalse())}
        className=" absolute bg-red-500 rounded-full w-4 top-1 right-1 flex justify-center items-center text-white text-sm  cursor-pointer"
      >
        X
      </div>
    </div>
  );
};

export default CountryItemModel;
