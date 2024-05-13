import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const navigate = useNavigate();
  const openCreateModalFunc = () => {
    navigate("/");
    dispatch(modalFunc());
  };

  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div className="px-4">
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg text-black"
            type="text"
            placeholder="Arama yapınız..."
          />
        </div>
        <div
          onClick={() => openCreateModalFunc()}
          className="bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24}></MdPostAdd>
        </div>
      </div>
    </div>
  );
};

export default Header;
