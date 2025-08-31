import Footer from "../components/Footer"
import Navbar from "../components/navbar/Navbar"
import type { ComponentType } from "react"

const DefaultLayout = (Component: ComponentType<any>) => 
    ({...props}) => {
  return (
    <div className="dark">
      <Navbar />
      <Component {...props} />
      <Footer />
    </div>
  ) 
}

export default DefaultLayout
