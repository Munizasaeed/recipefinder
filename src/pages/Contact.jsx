import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Contacts = () => {
  return (
 
      <div className="max-w-325 mx-auto min-h-screen flex flex-col">
      <Navbar />
       <main className="flex-1">
             <Contact />
  </main>
  
       <Footer />

</div>
  )
}

export default Contacts
