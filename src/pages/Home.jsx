import Navbar from "../components/Navbar"
import Api from "../components/Api"
import SearchApi from "../components/SearchApi"
import Footer from "../components/Footer"
const Home = () => {
  return (
      <div className="max-w-325 mx-auto">
      <Navbar />
      <SearchApi />
<Api />
<Footer />
</div>
  )
}

export default Home
