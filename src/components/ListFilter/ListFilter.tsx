import React from "react";
import classes from "./listFilter.module.css";
import { FilterItem } from "../FilterItem";

export const ListFilter: React.FC = () => {
  const data = [
    { value: "gf", label: "sdf" },
    { value: "sdf", label: "jgj" },
    { value: "ghj", label: "123" },
  ];
  return (
    <div className={classes.container}>
      <FilterItem title="Год:" options={data} />
      <FilterItem title="Год:" options={data} />
      <FilterItem title="Год:" options={data} />
    </div>
  );
};
