import Navbar from "../components/Navbar"
import Api from "../components/Api"
import SearchApi from "../components/SearchApi"
import Footer from "../components/Footer"
const Home = () => {
  return (
    
      <div className="min-h-screen max-w-325 mx-auto flex flex-col">
      <Navbar />
      <main className="flex-1">
      <SearchApi />
<Api />
  </main>

<Footer />
</div>
  )
}

export default Home
