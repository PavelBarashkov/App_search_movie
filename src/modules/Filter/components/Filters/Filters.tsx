import React from "react";
import classes from "./filters.module.css";
import { FilterItem, IOption } from "../FilterItem/FilterItem";
import { useGetCountriesQuery, useGetProductsQuery } from "../../../../API/myApi";

export const Filters: React.FC = () => {
  const year = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2020-2024", label: "2020-2024" },
    { value: "2010-2019", label: "2010-2019" },
    { value: "2000-2009", label: "2000-2009" },
    { value: "1990-1999", label: "1990-1999" },
    { value: "1980-1989", label: "1980-1989" },
    { value: "1970-1979", label: "1970-1979" },
    { value: "1960-1969", label: "1960-1969" },
    { value: "1940-1949", label: "1940-1949" },
    { value: "1930-1939", label: "1930-1939" },
    { value: "1920-1929", label: "1920-1929" },
    { value: "1910-1919", label: "1910-1919" },
    { value: "1900-1909", label: "1900-1909" },
    { value: "1890-1899", label: "1890-1899" },
    { value: "1950-1959", label: "1950-1959" },
  ];

  const ageRating = [
    { value: "18", label: "18+" },
    { value: "12-18", label: "12-18" },
    { value: "6-12", label: "6-12" },
    { value: "3-6", label: "3-6" },
    { value: "0-3", label: "0-3" },
  ];


  const {
    data: countries,
    isError,
    isFetching,
    refetch,
  } = useGetCountriesQuery('');

  const resultCountries: IOption[] = []

  if(countries) {
    countries.forEach((item: any) => {
    resultCountries.push({value: item.name, label: item.name})  
    })
  }

  return (
    <div className={classes.container}>
      <FilterItem title="Год" options={year} nameQuery={"year"} />
      <FilterItem
        title="Возрастной рейтинг"
        options={ageRating}
        nameQuery={"ageRating"}
      />
      {isFetching && <div className={classes.textInfo}>Получение информации о странах</div>}
      {isError && <div className={classes.textError}>Ошибка при получении информации</div>}
      {resultCountries.length !== 0 && (
         <FilterItem
         title="Страна"
         options={resultCountries}
         nameQuery={"countries.name"}
       />
      )}
    </div>
  );
};
