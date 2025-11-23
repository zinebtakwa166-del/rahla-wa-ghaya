
import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
