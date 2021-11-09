import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";
import GridView from "../../customs/GridView";
import { getFavorites, deleteFavorite } from "../../store/actions/Favorites";

const Index = () => {
  const dispatch = useDispatch();
  const { favoritesList } = useSelector((state) => state.favorites);
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  useEffect(() => {
    console.log("favorites in page", favoritesList);
  }, [favoritesList]);
  const handleRemoveFromFavorites = (obj) => {
    dispatch(deleteFavorite(obj));
  };
  return (
    <div className="page-container">
      <div className="favorites-container">
        {favoritesList && favoritesList.length > 0 && (
          <GridView
            isExpanded={false}
            data={favoritesList}
            isRow={false}
            handleClickSimpleCard={handleRemoveFromFavorites}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
