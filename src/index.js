import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaMusic } from "react-icons/fa6";
import { TbLivePhoto } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { MdPodcasts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Searchbar />
        <VideoGrid />
        <VideoGrid1 />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h2>YOUTUBE <FaYoutube /></h2>
      <ul>
        <li><a href="#home"><IoHome /></a></li>
        <li><a href="#trending"><SiYoutubeshorts /></a></li>
        <li><a href="#subscriptions"><FaHistory /></a></li>
        <li><a href="#library"><MdOutlineWatchLater /></a></li>
        <li><a href="#library"><AiFillLike /></a></li>
        <li><a href="#library"><FaMusic /></a></li>
        <li><a href="#library"><TbLivePhoto /></a></li>
        <li><a href="#subscriptions"><MdPodcasts /></a></li>
        <li><a href="#library"><IoMdSettings /></a></li>
      </ul>
    </div>
  );
}
function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search 🔍" />
    </div>
  );
}

function VideoGrid() {
  return (
    <div className="video-grid">
      <VideoItem title="How to Actually learn to code..?Roadmaps for 2023" thumbnail="https://img.youtube.com/vi/5MgBikgcWnY/0.jpg" sub="Firemap" year="3 years ago"/>
      <VideoItem title="How I Learned to code in 4 months & got a job!" thumbnail="https://res.cloudinary.com/practicaldev/image/fetch/s--2dKki2rg--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/j8weiejuhylagisj3c3p.png" sub="Tim Kim" year="3 months ago" />
      <VideoItem title="Software Development Course after 12th std" thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdEjJHoaWAzuABeSVOCBHuVBy2XbBn21GlQ&s" sub="Simple learning" year="1 year ago" />
      <VideoItem title="Starting a Career in Coding // Beyond Coding " thumbnail="https://img.youtube.com/vi/hYip_Vuv8J0/0.jpg" sub="Beyond Coding " year="1 month ago" />
    </div>
  );
}
function VideoGrid1() {
  return (
    <div className="video-grid1">
      <VideoItem title="How I'd Learn Web Development" thumbnail='https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg' sub="Dylan Cole" year="3 years ago"/>
      <VideoItem title=" Difference Between Coding And Programming? " thumbnail='https://cdn.pixabay.com/photo/2017/09/05/10/20/business-2717066_1280.jpg' sub=" Simplilearn" year="9 months ago" />
      <VideoItem title="Hack your brain - mindset of successful programmers" thumbnail='https://cdn.pixabay.com/photo/2023/06/17/13/37/computer-8070002_1280.jpg' sub="Motivation motion" year="6 year ago" />
      <VideoItem title="This video will change the way you think when coding" thumbnail='https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_960_720.jpg' sub="Sahil & Sarra" year="2 years ago" />
    </div>
  );
}

function VideoItem({ title, thumbnail,sub,year }) {
  return (
    <div className="video-item">
      <img src={thumbnail} alt={title} />
      <h5>{title}</h5>
      <p>{sub}</p>
      <p>{year}</p>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));

