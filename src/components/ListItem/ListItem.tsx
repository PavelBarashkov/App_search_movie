import React from "react";
import classes from "./listItem.module.css";
import { Product } from "../../interface";
import { NavLink } from "react-router-dom";
import { getTextOrPlaceholder } from "../../helpers/getTextOrPlaceholder";

interface IListItemProps {
  item: Product;
}


export const ListItem: React.FC<IListItemProps> = ({ item }) => {
  return (
    <li className={classes.item}>
      <NavLink to={""} className={classes.itemLink}>
        <div className={classes.itemLink_name}>
          <strong>{getTextOrPlaceholder(item.name, "Названии")}</strong>
        </div>
        <div className={classes.itemLink_info}>
          <div>Год: {getTextOrPlaceholder(item.year.toString(), "Дате")}</div>
          <div>
            Страна:{" "}
            {item.countries.map((item: any) => (
              <span>{getTextOrPlaceholder(item.name, "Стране")}. </span>
            ))}
          </div>
        </div>
      </NavLink>
    </li>
  );
};
