import React from "react";
import classes from "./filterItem.module.css";

interface IOption {
  value: string;
  label: string;
}

interface IFilterItemProps {
  options: IOption[];
  title: string;
}

export const FilterItem: React.FC<IFilterItemProps> = ({ options, title }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>{title}</div>
      <select className={classes.select}>
        <option value="">Все</option>
        {options.map((e: IOption) => (
          <option value={e.value}>{e.label}</option>
        ))}
      </select>
    </div>
  );
};
