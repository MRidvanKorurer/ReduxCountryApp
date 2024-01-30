import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/slices/countrySlice";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

const Countries = () => {
  const { countryData, loading } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex flex-wrap justify-center items-center gap-10">
          {countryData.map((item, i) => (
            <CountryItem key={i} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
