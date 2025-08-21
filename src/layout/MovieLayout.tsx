import type { ComponentType } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/navbar/Navbar"

const MovieLayout = (Component: ComponentType<any>) => ({...props}) => {
  return (
    <div>
        <Navbar />
        <Component {...props} />
        <Footer />
    </div>
  )
}

export default MovieLayout
