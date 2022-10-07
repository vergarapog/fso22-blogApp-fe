import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { resetNotification } from "../reducers/notifReducer"

const Notification = () => {
  const { message, type, time } = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(resetNotification())
    }, `${time}000`)

    return () => clearTimeout(timer)
  }, [message])

  if (message === "") {
    return
  }

  const isErrorOrMultiPurpose =
    type === "error"
      ? "w-100 bg-red-500 py-2 text-center text-white text-2xl"
      : "w-100 bg-green-500 py-2 text-center text-white text-2xl"
  return <div className={isErrorOrMultiPurpose}>{message}</div>
}

export default Notification
