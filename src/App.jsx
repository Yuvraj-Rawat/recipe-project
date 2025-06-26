import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./template/Home";
import Recipe from "./template/recipe";
import Contact from "./template/contact";
import Search from "./template/search";
import Sign_up from "./template/sign_up";
import Sign_in from "./template/sign-in";
import RecipeTags from "./template/RecipeTags";
import RecipeByTags from "./template/RecipeByTags";
import RecipeByMeal from "./template/RecipeByMeal";
import SearchResults from "./template/searchResults";

function App() {
  return (
    <>
      <BrowserRouter basename="/recipe-project">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/searchresults" element={<SearchResults />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign_up" element={<Sign_up />}></Route>
          <Route path="/sign_in" element={<Sign_in />}></Route>
          <Route path="/recipeTags" element={<RecipeTags />}></Route>
          <Route path="/recipebytags/:tag" element={<RecipeByTags />}></Route>
          <Route path="/recipebymeal/:meal" element={<RecipeByMeal />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
