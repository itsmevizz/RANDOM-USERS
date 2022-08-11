import React, { useEffect, useRef, useState } from "react";
import Cards from "../components/Cards";
import { getUsers } from "../Redux/Features/fetchUsers";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
function Home() {
  const { users, loading } = useSelector((state) => ({ ...state.users }));
  const [page, setPage] = useState(1);
  const scrollRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(page));
    document.title = "Home";
  }, [dispatch, page]);

  const nextPage = (num) => {
    setPage(num);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={scrollRef} className="">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {users?.map((items, index) => {
            return <Cards key={index} cards={true} users={items} />;
          })}
          <div className="flex justify-center mt-20 mb-10 cursor-pointer">
            <ul className="flex">
              {[...Array(10)].map((item, index) => {
                index++;
                return (
                  <li
                    key={index}
                    className={`m-2 border-2 text-center rounded-2xl w-7 h-auto hover:bg-slate-100 ${
                      index === page ? "bg-slate-500 bg-opacity-50" : ""
                    }`}
                    onClick={() => nextPage(index)}
                  >
                    {index}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
