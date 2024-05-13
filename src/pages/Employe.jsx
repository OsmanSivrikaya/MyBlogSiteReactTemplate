import api from "../utils/api";
import React, { useState, useEffect } from "react";
import CardList from "../components/albumCard/cardList";

const Employe = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/photos");
      setData(response.data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // sayfa yüklendiğinde çalışıyor
  useEffect(() => {
    fetchData(); // Verileri çekmek için fetchData fonksiyonunu çağır
  }, []); // useEffect'in sadece ilk kez çağrılmasını sağlamak için boş bir dependency array kullanıyoruz

  return (
    <div>
      <CardList photos={data}></CardList>
    </div>
  );
};

export default Employe;
