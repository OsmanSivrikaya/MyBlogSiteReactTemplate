//rafce kısayolu

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, search } = useSelector((state) => state.data);
  const location = useLocation();
  const dispatch = useDispatch();

  // create func
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  //update func
  const updateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    useNavigate("/");
  };

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  const onChange = (e, type) => {
    console.log(e.target.name);
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];
  // sayfa yüklenince çalışıyor
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((x) => x.id == loc));
    }
  }, [loc]);

  const contetModal = (
    <>
      <Input
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        value={productInfo?.name}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        value={productInfo?.price}
        onChange={(e) => onChange(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChange(e, "url")}
      />
      <Button
        btnText={loc ? "Ürün güncelle" : "Ürün Oluştur"}
        onClick={loc ? updateFunc : buttonFunc}
      />
    </>
  );

  const filterData = data.filter((x) => x.name.toLowerCase().includes(search));

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filterData?.map((dt, i) => (
          <ProductCard key={i} dt={dt}></ProductCard>
        ))}
      </div>
      {modal && (
        <Modal
          title={loc ? "Ürün güncelle" : "Ürün Oluştur"}
          content={contetModal}
        />
      )}
    </div>
  );
};

export default Product;
