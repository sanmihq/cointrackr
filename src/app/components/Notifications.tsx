import { BellIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

export default function Notifications() {
  return (
    <>
      <Button
        isIconOnly
        size="sm"
        radius="full"
        variant="bordered"
        aria-label="notifications"
      >
        <BellIcon className="w-4 h-4 text-gray-300" />
      </Button>
    </>
  );
}
