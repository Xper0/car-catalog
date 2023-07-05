"use client";
import { ISearhManufacturer } from "@/types";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufactures } from "@/constants";

export const SearhManufacturer = ({
  manufacturer,
  setManufacturer,
}: ISearhManufacturer) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufactures
      : manufactures
          .filter((item: string) => item.toLowerCase().replace(/\s+/g, ""))
          .includes(query.toLowerCase().replace(/\s+/g, ""));
          console.log(filteredManufacturers)

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-3">
            <Image
              className="ml-4"
              src={""}
              alt="car logo"
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer_input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition easy-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length > 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer_option"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer_option ${
                        active ? "bg-blue-400 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
