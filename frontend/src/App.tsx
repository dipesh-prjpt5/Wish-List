import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { SignIn } from "./pages/auth/SignIn"
import { SignUp } from "./pages/auth/SignUp"
import DashboardLayout from "./Layout/DashBoardLayout"

import WishList from "./pages/dashboard/WishListPage"
import Recomendations from "./pages/dashboard/RecomendationsPage"
import Friends from "./pages/dashboard/FriendsPage"
import Settings from "./pages/dashboard/SettingsPage"
import NewItem from "./pages/NewItemPage"

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {/* Dashboard layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/wishlist/new" element={<NewItem />} />
        <Route path="/recomendations" element={<Recomendations />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
