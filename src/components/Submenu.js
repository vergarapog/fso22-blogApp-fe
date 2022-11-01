import React from "react"
import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"

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
        isSubMenuOpen ? "block" : "hidden"
      } bg-secondary shadow-lg absolute top-16 left-1/2 -translate-x-1/2 p-8 rounded-md`}
      ref={container}
    >
      Submenu
    </aside>
  )
}

export default Submenu
