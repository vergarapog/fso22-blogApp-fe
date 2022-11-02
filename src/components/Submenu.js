import React from "react"
import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"
import LogoutButton from "../components/LogoutButton"

const Submenu = () => {
  const { isSubMenuOpen, location } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside
      className={`${
        isSubMenuOpen ? "block" : "hidden transition-all"
      } bg-gray-600 shadow-lg absolute top-16 left-1/2 -translate-x-1/2 p-6 rounded-md`}
      ref={container}
    >
      <LogoutButton />
    </aside>
  )
}

export default Submenu
