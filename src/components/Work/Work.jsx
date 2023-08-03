import React, { useEffect, useState } from "react";
import Workcat from "./Workcat";
import WorkItem from "./WorkItem";
import './Work.css'

const Work = () => {
  const [filter, setFilter] = useState("popular");
  const [data, setData] = useState();
  const active = "active-btn"

  useEffect(() => {
    if (filter === "popular") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "backend") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "frontend") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "vite") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "vanila") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "creative") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
    if (filter === "design") {
      const filteredData = Workcat.filter((item) => item.category === filter);
      setData(filteredData);
    }
  }, [filter]);
  return (
      <div className="work-section section">
        <h3 className="work-text">Boot a fresh environment in <strong> milliseconds.</strong></h3>
        <div className="cat-btns">
          <button className={filter === "popular" ? active : "btn"}  onClick={() => setFilter("popular")}>Popular</button>
          <button className={filter === "creative" ? active : "btn"}  onClick={() => setFilter("creative")}>Creative</button>
          <button className={filter === "backend" ? active : "btn"}  onClick={() => setFilter("backend")}>Backend</button>
          <button className={filter === "frontend" ? active : "btn"}  onClick={() => setFilter("frontend")}>Frontend</button>
          <button className={filter === "design" ? active : "btn"}  onClick={() => setFilter("design")}>Design</button>
          <button className={filter === "vanila" ? active : "btn"}  onClick={() => setFilter("vanila")}>Vanila</button>
          <button className={filter === "vite" ? active : "btn"}  onClick={() => setFilter("vite")}>Vite</button>
        </div>
        <div className="work-categories">
          {data?.map((item) => (
            <div key={item.id}>
              <WorkItem item={item} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Work;
