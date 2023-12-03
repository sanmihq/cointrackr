import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";

export default function Search() {
  return (
    <>
      <Input
        startContent={<MagnifyingGlassIcon className="w-5 h-5" />}
        size="sm"
        radius="full"
        color="primary"
        placeholder="Type to search"
      />
    </>
  );
}
