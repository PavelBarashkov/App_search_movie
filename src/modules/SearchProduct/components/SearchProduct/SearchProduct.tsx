import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetSearchMovieQuery } from "../../../../API/myApi";
import { debounce } from "@mui/material/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { PRODUCT } from "../../../../pages/helpers/const/const";

export const SearchProduct: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    data: movies,
    isError,
    isFetching,
    refetch,
  } = useGetSearchMovieQuery(searchValue);

  useEffect(() => {
    refetch();
  }, [searchValue]);

  useEffect(() => {
    if (movies) {
      const movieOptions = movies.docs.map((movie: any) => ({
        label: `${movie.name}. Год: ${movie.year}. ${
          movie.type === "movie" ? "Фильм" : "Сериал"
        }`,
        id: movie.id,
      }));
      setOptions(movieOptions);
    }
  }, [movies]);

  const handleMovieSelect = (event: React.ChangeEvent<{}>, value: any) => {
    navigate(PRODUCT + "/" + value?.id);
    localStorage.setItem("queryParams", location.search);
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      componentsProps={{
        paper: {
          sx: {
            width: 300,
            textAlign: "start",
          },
        },
      }}
      onChange={handleMovieSelect}
      sx={{ width: 300 }}
      loading={isFetching}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Поиск"
          onChange={debounce((e) => {
            setSearchValue(e.target.value);
          }, 1000)}
        />
      )}
    />
  );
};
