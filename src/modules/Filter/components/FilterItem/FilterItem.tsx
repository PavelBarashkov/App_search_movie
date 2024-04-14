import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

export interface IOption {
  value: string;
  label: string;
}

interface IFilterItemProps {
  options: IOption[];
  title: string;
  nameQuery: string;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const FilterItem: React.FC<IFilterItemProps> = ({
  options,
  title,
  nameQuery,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataQuery = searchParams.get(nameQuery);
  const [data, setData] = React.useState<string>(dataQuery ? dataQuery : "");

  const handleChange = (event: SelectChangeEvent<any>) => {
    setData(event.target.value);

    if (event.target.value === "") {
      searchParams.delete(nameQuery);
      setSearchParams(searchParams);
    } else {
      searchParams.set(nameQuery, event.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel className="custom-Input-Label">{title}</InputLabel>
        <Select
          MenuProps={MenuProps}
          value={data}
          label={title}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Без фильтра</em>
          </MenuItem>
          {options.map((item: IOption) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
