import BlogCategoryList from "./BlogCategoryList";
import Search from "./Search";

const Filter = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="tm-categories-container mb-5 flex justify-between">
          <BlogCategoryList></BlogCategoryList>
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Filter;
