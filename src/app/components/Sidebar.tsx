import Image from "next/image";
import logo from "/public/assets/logoipsum.svg";

export default function Sidebar() {
  return (
    <>
      <aside className="w-60">
        <Image src={logo} alt="logo" height={30} width={30} />
      </aside>
    </>
  );
}
