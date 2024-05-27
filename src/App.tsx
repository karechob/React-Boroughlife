import MainLayout from "./Layout/MainLayout";
import Carousel from "./components/Carrousel";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <MainLayout>
      <Carousel></Carousel>
      <NewsFeed></NewsFeed>
    </MainLayout>
  );
}

export default App;
