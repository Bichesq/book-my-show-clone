import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import type { ComponentType } from "react"

const DefaultLayout = (Component: ComponentType<any>) => 
    ({...props}) => {
  return (
    <div>
      <Navbar />
      <Component {...props} />
      <Footer />
    </div>
  )
}

export default DefaultLayout
