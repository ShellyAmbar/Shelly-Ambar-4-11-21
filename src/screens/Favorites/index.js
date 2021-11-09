import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";
import GridView from "../../customs/GridView";
import { getFavorites } from "../../store/actions/Favorites";

const Index = () => {
  const dispatch = useDispatch();
  const { favoritesList } = useSelector((state) => state.favorites);
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  useEffect(() => {
    console.log("favorites in page", favoritesList);
  }, [favoritesList]);
  return (
    <div className="page-container">
      {favoritesList && favoritesList.length > 0 && (
        <GridView data={favoritesList} isRow={false} />
      )}
    </div>
  );
};

export default Index;
