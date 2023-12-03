"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Switch } from "@nextui-org/react";

export default function ThemeSwitcher() {
  return (
    <>
      <Switch
        defaultSelected
        size="md"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      ></Switch>
    </>
  );
}
