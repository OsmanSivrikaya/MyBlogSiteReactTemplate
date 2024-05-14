import { Link } from "react-router-dom";

const BlogCardList = () => {
  return (
    <div>
      <div className="row tm-catalog-item-list">
        <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
          <div className="position-relative">
            <div className="tm-thumbnail-container">
              <img
                src="./src/img/tn-01.jpg"
                alt="Image"
                className="img-fluid tm-catalog-item-img"
              />
              <Link
                to="/blog/1"
                className="position-absolute tm-img-overlay"
              ></Link>
            </div>
            <div className="p-4 tm-bg-gray tm-catalog-item-description">
              <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                Aenean aliquet sapien
              </h3>
              <p className="tm-catalog-item-text">
                Video thumbnail has a link to another HTML page. Categories
                <span className="tm-text-secondary">do not need</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul className="nav tm-paging-links">
          <li className="nav-item active">
            <a href="#" className="nav-link tm-paging-link">
              1
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link tm-paging-link">
              2
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link tm-paging-link">
              3
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link tm-paging-link">
              4
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link tm-paging-link">
              {">"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCardList;
