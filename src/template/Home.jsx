import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [recipe, setrecipe] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((response) => {
      setrecipe(response.data["recipes"]);
    });
  }, []);
  return (
    <div>
      <div className="uk-container">
        <div
          className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
          style={{ backgroundImage: "url(img/header.jpg)" }}
        >
          <div className="uk-position-cover uk-header-overlay" />
          <div className="uk-position-relative" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div className="uk-padding-large uk-padding-remove-right">
                <h1 className="uk-heading-small uk-margin-remove-top">
                  Choose from thousands of recipes
                </h1>
                <p className="uk-text-secondary">
                  Appropriately integrate technically sound value with scalable
                  infomediaries negotiate sustainable strategic theme areas
                </p>
                <Link
                  className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
                  to="/sign_up"
                >
                  Sign up today
                  <span
                    className="uk-margin-small-left"
                    data-uk-icon="arrow-right"
                  />
                </Link>
              </div>
            </div>
            <div className="uk-width-expand@m"></div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-expand@m">
              <div data-uk-grid>
                <div className="uk-width-expand@m">
                  <form className="uk-search uk-search-default uk-width-1-1">
                    <span data-uk-search-icon />
                    <input
                      className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                      type="search"
                      placeholder="Search for recipes..."
                    />
                  </form>
                </div>
                <div className="uk-width-1-3@m uk-text-right@m uk-light">
                  <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
                    <option>Sort by: Latest</option>
                    <option>Sort by: Top Rated</option>
                    <option>Sort by: Trending</option>
                  </select>
                </div>
              </div>
              <div
                className="uk-child-width-1-2 uk-child-width-1-3@s"
                data-uk-grid
              >
                {recipe.map((value) => {
                  return (
                    <>
                      <div>
                        <div className="uk-card">
                          <div className="uk-card-media-top uk-inline uk-light">
                            <img
                              className="uk-border-rounded-medium"
                              src={value.image}
                              alt="Course Title"
                            />
                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                            <div className="uk-position-xsmall uk-position-top-right">
                              <a
                                href="#"
                                className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                data-uk-icon="heart"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                              {value.name}
                            </h3>
                            <div
                              className="uk-text-xsmall uk-text-muted"
                              data-uk-grid
                            >
                              <div className="uk-width-auto uk-flex uk-flex-middle">
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.7"
                                />
                                <span className="uk-margin-xsmall-left">
                                  {value.rating}
                                </span>
                                <span>({value.reviewCount})</span>
                              </div>
                              <div className="uk-width-expand uk-text-right">
                                {value.cuisine}
                              </div>
                            </div>
                          </div>
                          <Link
                            to={`/recipe/${value.id}`}
                            className="uk-position-cover"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* <div>
                  <div className="uk-card">
                    <div className="uk-card-media-top uk-inline uk-light">
                      <img
                        className="uk-border-rounded-medium"
                        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                        alt="Course Title"
                      />
                      <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                      <div className="uk-position-xsmall uk-position-top-right">
                        <a
                          href="#"
                          className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                          data-uk-icon="heart"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                        Chef John's Turkey Sloppy Joes
                      </h3>
                      <div
                        className="uk-text-xsmall uk-text-muted"
                        data-uk-grid
                      >
                        <div className="uk-width-auto uk-flex uk-flex-middle">
                          <span
                            className="uk-rating-filled"
                            data-uk-icon="icon: star; ratio: 0.7"
                          />
                          <span className="uk-margin-xsmall-left">5.0</span>
                          <span>(73)</span>
                        </div>
                        <div className="uk-width-expand uk-text-right">
                          by John Keller
                        </div>
                      </div>
                    </div>
                    <a href="recipe.html" className="uk-position-cover" />
                  </div>
                </div> */}
              </div>
              <div className="uk-margin-large-top uk-text-small">
                <ul
                  className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
                  data-uk-margin
                >
                  <li>
                    <a href="#">
                      <span data-uk-pagination-previous />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="uk-active">
                    <span>2</span>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <span data-uk-pagination-next />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
