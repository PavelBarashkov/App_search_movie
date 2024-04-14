import React from "react";
import classes from "./listItem.module.css";
import { Country, Product } from "../../interface";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getTextOrPlaceholder } from "../../helpers/getTextOrPlaceholder";
import { PRODUCT } from "../../pages/helpers/const/const";

interface IListItemProps {
  item: Product;
}

export const ListItem: React.FC<IListItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <li
      className={classes.item}
      onClick={() => {
        navigate(PRODUCT + "/" + item.id)
        localStorage.setItem('queryParams', location.search)
      }}
    >
      <NavLink to={""} className={classes.itemLink}>
        <div className={classes.itemLink_name}>
          <strong>{getTextOrPlaceholder(item.name, "Названии")}</strong>
        </div>
        <div className={classes.itemLink_info}>
          <div>Год: {getTextOrPlaceholder(item.year.toString(), "Дате")}</div>
          <div>
            Страна:{" "}
            {item.countries.map((item: Country) => (
              <span>{getTextOrPlaceholder(item.name, "Стране")}. </span>
            ))}
          </div>
        </div>
      </NavLink>
    </li>
  );
};
