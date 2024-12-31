import { useState } from "react"
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobatom, messagingatom, networkatom, notificationatom, totalNotificationSelector } from "./atoms"

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp() {
  const NetworkCount = useRecoilValue(networkatom)
  const NotificationCount = useRecoilValue(notificationatom)
  const jobCount = useRecoilValue(jobatom)
  const [messagingCount, setMessageacount] = useRecoilState(messagingatom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <div>
      <button> Home </button>
      <button> Network ({NetworkCount >= 100 ? "99+" : NetworkCount})</button>
      <button> Jobs ({jobCount})</button>
      <button> Messaging ({messagingCount})</button>
      <button> Notification ({NotificationCount})</button>
      <button>ME {totalNotificationCount}</button>
    </div>
  )

}
export default App
