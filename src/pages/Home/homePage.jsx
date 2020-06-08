import React from "react";
import axios from "axios";
import Pic from "../../components/picture";
import { useState, useEffect } from "react";

const Home = () => {
  const [pictures, setPictures] = useState([]);
  const [cachedPage, setCachedPage] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;

  useEffect(() => {
    fetchData();
    console.log(cachedPage);
    return () => {
      setPictures([]);
    };
  }, [page]);

  const fetchData = async () => {
    if (page < cachedPage.length) {
      setPictures(cachedPage[page - 1].page);
      return;
    }

    let data = await axios
      .get(url)
      .then((res) => {
        setCachedPage(cachedPage.concat({ page: res.data }));
        // console.log(res.data);
        return res.data;
      })
      .catch((err) => err);
    setPictures(data);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page <= 0) return;
    setPage(page - 1);
  };

  return (
    <>
      <h1>Explore cool picutres</h1>
      <div>
        {pictures.map((item) => {
          return <Pic key={item.id} pic={item} />;
        })}
      </div>
      <div className="page-btn-container">
        <button onClick={prevPage} className="btn">
          Prev Page
        </button>
        <span>{page}</span>
        <button onClick={nextPage} className="btn">
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;
