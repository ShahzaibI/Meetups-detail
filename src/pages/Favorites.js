import { useContext } from "react";
import FavoritesContext from "../storeFavoriteMeetups/favorites-context";
import MeetupList from "../component/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if(favoritesCtx.totalfavorites === 0)
  {
    content = <p>You got no favorites yet. Start adding some?</p>
  }
  else
  {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
