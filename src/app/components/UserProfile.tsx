import { User } from "@nextui-org/react";

export default function UserProfile() {
  return (
    <>
      <User
        name="Sanmi Akinwunmi"
        description="Software Developer"
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/62479013?v=4",
        }}
      />
    </>
  );
}
