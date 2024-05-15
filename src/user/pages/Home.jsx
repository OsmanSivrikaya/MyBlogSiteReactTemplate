import Filter from "../components/filter/Filter";
import BlogCardList from "../components/blogCard/BlogCardList";

const Home = () => {
  return (
    <div className="container-fluid">
      <div id="content" className="mx-auto tm-content-container">
        <main>
          <Filter></Filter>
          <BlogCardList></BlogCardList>
        </main>
      </div>
    </div>
  );
};

export default Home;
