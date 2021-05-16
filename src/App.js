import React from "react";
import "./App.css";
import "./responsive.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Reels from "./Pages/Reels";
import IGTV from "./Pages/IGTV";
import Activity from "./Pages/Activity";
import Setting from "./Pages/Settings";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Messagebar from "./components/Messagebar";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { RiShareCircleFill } from "react-icons/ri";
import { HiOutlineSave } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import profile1 from "./assets/images/photo-1.jpg";
import profile2 from "./assets/images/photo-2.jpg";
import profile3 from "./assets/images/photo-3.jpg";
import profile4 from "./assets/images/photo-4.jpg";
import profile5 from "./assets/images/photo-5.jpg";
import profile6 from "./assets/images/photo-6.jpg";
import profile7 from "./assets/images/photo-7.jpg";
import profile8 from "./assets/images/photo-8.jpg";
import profile9 from "./assets/images/photo-9.jpg";
import { RiMessengerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const App = () => {
  localStorage.setItem("dark", false);
  var data = {
    navData: [
      {
        id: 1,
        name: "Home",
        path: "/instagram",
        icon: <AiOutlineHome />,
      },
      {
        id: 2,
        name: "Search",
        path: "/Search",
        icon: <AiOutlineSearch />,
      },
      {
        id: 3,
        name: "Reels",
        path: "/Reels",
        icon: <MdSlowMotionVideo />,
      },
      {
        id: 4,
        name: "IGTV",
        path: "/IGTV",
        icon: <RiMovie2Line />,
      },
      {
        id: 5,
        name: "Activity",
        path: "/Activity",
        icon: <AiOutlineHeart />,
      },
      {
        id: 5,
        name: "Settings",
        path: "/Settings",
        icon: <AiOutlineSetting />,
      },
    ],
    StorieData: [
      {
        id: 1,
        name: "Your Story",
        img: profile2,
        classname: "own",
      },
      {
        id: 2,
        name: "Jane Doe",
        img: profile1,
        classname: "active",
      },
      {
        id: 3,
        name: "Matthew Hinkle",
        img: profile3,
        classname: "active",
      },
      {
        id: 4,
        name: "Amy Smith",
        img: profile4,
        classname: "active",
      },
      {
        id: 5,
        name: "Ed Morris",
        img: profile5,
        classname: "active",
      },
      {
        id: 6,
        name: "Carolyn Duncan",
        img: profile6,
        classname: "active",
      },
      {
        id: 7,
        name: "Paul Pinnock",
        img: profile7,
        classname: "active",
      },
      {
        id: 8,
        name: "Elizabeth Wong",
        img: profile8,
        classname: "active",
      },
      {
        id: 9,
        name: "James Lathrop",
        img: profile9,
        classname: "active",
      },
    ],
    postData: [
      {
        id: 1,
        name: "Jane Doe",
        img: profile2,
        likes: 1743,
        comments: 49,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 2,
        name: "David Brooks",
        img: profile1,
        likes: 1364,
        comments: 43,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 3,
        name: "Matthew Hinkle",
        img: profile3,
        likes: 1200,
        comments: 64,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 4,
        name: "Amy Smith",
        img: profile4,
        likes: 2021,
        comments: 77,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 5,
        name: "Ed Morris",
        img: profile5,
        likes: 3234,
        comments: 564,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 6,
        name: "Carolyn Duncan",
        img: profile6,
        likes: 1456,
        comments: 58,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 7,
        name: "Paul Pinnock",
        img: profile7,
        likes: 560,
        comments: 20,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 8,
        name: "Elizabeth Wong",
        img: profile8,
        likes: 2300,
        comments: 150,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
      {
        id: 9,
        name: "James Lathrop",
        img: profile9,
        likes: 1250,
        comments: 70,
        heartIcon: <AiOutlineHeart />,
        commentIcon: <BiMessageRounded />,
        shareIcon: <RiShareCircleFill />,
        saveIcon: <HiOutlineSave />,
        moreIcon: <BsThreeDotsVertical />,
      },
    ],
    messageData: [
      {
        id: 1,
        name: "David brooks",
        img: profile1,
        icon: <FiCamera />,
      },
      {
        id: 2,
        name: "Jane Doe",
        img: profile2,
        icon: <FiCamera />,
      },
      {
        id: 3,
        name: "Matthew Hinkle",
        img: profile3,
        icon: <FiCamera />,
      },
      {
        id: 4,
        name: "Amy Smith",
        img: profile4,
        icon: <FiCamera />,
      },
      {
        id: 5,
        name: "Ed Morris",
        img: profile5,
        icon: <FiCamera />,
      },
      {
        id: 6,
        name: "Carolyn Duncan",
        img: profile6,
        icon: <FiCamera />,
      },
      {
        id: 7,
        name: "Paul Pinnock",
        img: profile7,
        icon: <FiCamera />,
      },
      {
        id: 8,
        name: "Elizabeth Wong",
        img: profile8,
        icon: <FiCamera />,
      },
      {
        id: 9,
        name: "James Lathrop",
        img: profile9,
        icon: <FiCamera />,
      },
    ],
  };
  const sidebarOpen = () => {
    document.getElementById("main").style.marginLeft = "0%";
  };
  const messagebarOpen = () => {
    document.getElementById("main").style.marginLeft = "-200%";
  };
  return (
    <div className="main" id="main">
      <Sidebar value={data.navData} id="sidebar" mainId="main" />
      <div className="topbar-for-mobile">
        <i onClick={sidebarOpen}>
          <CgProfile />
        </i>
        <h6 className="ml-auto">Instagram</h6>
        <i className="ml-auto" onClick={messagebarOpen}>
          <RiMessengerLine />
        </i>
      </div>
      <Switch>
        <Route
          path="/instagram"
          component={() => (
            <Home
              dataStorie={data.StorieData}
              dataPost={data.postData}
              mainId="main"
            />
          )}
          exact
        />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Reels" component={Reels} />
        <Route exact path="/IGTV" component={IGTV} />
        <Route exact path="/Activity" component={Activity} />
        <Route exact path="/Settings" component={() => <Setting />} />
      </Switch>
      <Messagebar value={data.messageData} mainId="main" />
    </div>
  );
};

export default App;
