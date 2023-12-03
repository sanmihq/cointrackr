import Messages from "./Messages";
import Notifications from "./Notifications";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between p-6 border-b border-gray-500 fixed top-0 right-0 left-0 bg-black">
        <div className="w-[30%]">
          <Search />
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Messages />
          <Notifications />
          <UserProfile />
        </div>
      </nav>
    </>
  );
}
