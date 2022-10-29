import React from "react"
import { useGlobalContext } from "../context"

const Submenu = () => {
  const { isSubMenuOpen } = useGlobalContext()
  console.log(isSubMenuOpen)
  return <div className={`${isSubMenuOpen ? "block" : "hidden"}`}>Submenu</div>
}

export default Submenu
