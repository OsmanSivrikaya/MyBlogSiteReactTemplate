const BlogCategoryList = () => {
  return (
    <div>
      <ul className="nav tm-category-list">
        <li className="nav-item tm-category-item">
          <a href="#" className="nav-link tm-category-link active">
            All
          </a>
        </li>
        <li className="nav-item tm-category-item">
          <a href="#" className="nav-link tm-category-link">
            Drone Shots
          </a>
        </li>
        <li className="nav-item tm-category-item">
          <a href="#" className="nav-link tm-category-link">
            Nature
          </a>
        </li>
        <li className="nav-item tm-category-item">
          <a href="#" className="nav-link tm-category-link">
            Actions
          </a>
        </li>
        <li className="nav-item tm-category-item">
          <a href="#" className="nav-link tm-category-link">
            Featured
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategoryList;
