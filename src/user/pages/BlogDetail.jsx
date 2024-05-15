import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = (data) => {
  const { id } = useParams();
  return <div>Blog Id {id}</div>;
};
export default BlogDetail;
