import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
    const [opentEdit, setOpenEdit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateFunc = () => {
        dispatch(modalFunc());
        setOpenEdit(false);
        navigate(`/?update=${dt?.id}`);
    };

    return (
        <div className="w-[200px] h-[200px] relative m-2 rounded-md">
            <img
                className="w-full h-full absolute rounded-md"
                alt=""
                src={dt.url}
            ></img>
            <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
                <div className="text-lg font-semibold">{dt?.name}</div>
                <div>{dt?.price} €</div>
            </div>
            <div
                onClick={() => setOpenEdit(!opentEdit)}
                className="absolute right-2 top-0 cursor-pointer"
            >
                <BsThreeDots color="white" size={24}></BsThreeDots>
            </div>
            {opentEdit && (
                <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm">
                    <div
                        className="cursor-pointer"
                        onClick={() => dispatch(deleteDataFunc(dt?.id))}
                    >
                        Sil
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => updateFunc()}
                    >
                        Güncelle
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
