import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { setUser } from "../Redux/Features/singleUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
function Cards(props) {
  const { user } = useSelector((state) => ({ ...state.single }));
  const Navigation = useNavigate();
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!props.cards) {
      !user && Navigation("/");
    }
  }, [Navigation, active, props.cards, user]);

  const singleUser = (data) => {
    dispatch(setUser(data));
    Navigation("/user");
  };

  const title = [
    { title: "Hi, My name is" },
    { title: "My email address is" },
    { title: "My birthday is" },
    { title: "My address is" },
    { title: "My phone number is" },
    { title: "My password is" },
    { title: "My username is" },
    { title: "My age is" },
  ];

  const icons = [
    { img: "/card_deactive_icons.png", active: "/card_user_icons.png" },
    { img: "/Message.png", active: "/card_MessageActive_icons.png" },
    { img: "/Event.png", active: "/Event_active.png" },
    { img: "/Location.png", active: "/Location_active.png" },
    { img: "/Phone.png", active: "/Phone_Active.png" },
    { img: "/Password.png", active: "/Password_Active.png" },
  ];

  return (
    <div className="">
      <div
        className={`${
          props.cards ? "h-[350px] mt-5 " : "h-auto mt-28"
        } w-[600px]  border-2 bg-white shadow-lg m-auto hover:shadow-2xl cursor-pointer`}
        onClick={() => {
          if (props.cards) {
            singleUser(props.users);
          }
        }}
      >
        {props.cards ? (
          ""
        ) : (
          <div onClick={() => Navigation("/")} className="absolute -mt-14">
            <BackButton />
          </div>
        )}
        <div className="mb-16">
          <hr className="mt-28 relative" />
          <div className=" -mt-24 w-full flex justify-center">
            <img
              className="rounded-full border-2 bg-white p-1 absolute"
              src={
                props.cards ? props.users?.picture.large : user?.picture.large
              }
              alt=""
            />
          </div>
        </div>
        <div
          className={` ${
            props.cards ? "text-center" : "flex space-x-10 justify-center pb-10"
          }`}
        >
          <p className="text-sm text-gray-500 font-sans font-medium leading-9">
            <ul>
              {title.map((item, index) => {
                return (
                  <li key={index}>
                    {props.cards
                      ? active === index
                        ? item.title
                        : ""
                      : item.title}
                  </li>
                );
              })}
            </ul>
          </p>
          {props.cards ? (
            <h1 className="text-2xl">
              {active === 0
                ? props.users?.name.first
                : active === 1
                ? props.users?.email
                : active === 2
                ? dateFormat(props.users?.dob.date, "mm/dd/yyyy")
                : active === 3
                ? props.users?.location.city
                : active === 4
                ? props.users?.phone
                : active === 5
                ? props.users?.login.password
                : ""}
            </h1>
          ) : (
            <div className="leading-9 font-mono">
              <h4>{user?.name.first}</h4>
              <h4>{user?.email}</h4>
              <h4>{dateFormat(user?.dob.date, "mm/dd/yyyy")}</h4>
              <h4>
                {user?.location.city}, {user?.location.country},{" "}
                {user?.location.postcode}{" "}
              </h4>
              <h4>{user?.phone}</h4>
              <h4>{user?.login.password}</h4>
              <h4>{user?.login.username}</h4>
              <h4>{user?.registered.age}</h4>
            </div>
          )}
        </div>
        <div className="ml-5">
          {props.cards ? (
            <ul className="flex justify-center mt-5 h-20 overflow-hidden">
              {icons.map((item, index) => {
                return (
                  <img
                    src={index === active ? item.active : item.img}
                    key={index}
                    onMouseOver={() => setActive(index)}
                    className={`w-10 mr-7 h-12 cursor-pointer duration-300 ${
                      index === active ? "h-[51px] w-20" : ""
                    }`}
                    alt=""
                  />
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
