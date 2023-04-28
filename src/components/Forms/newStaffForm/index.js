import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";

const roles = [
  { name: "Doctor" },
  { name: "Compounder" },
  { name: "Nurse" },
  { name: "Clerk" },
  { name: "Helper" },
];

const NewStaffForm = ({ name, setName, phone, setPhone, role, setRole }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="w-full ">
        <label
          for="first_name"
          class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="first_name"
          className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
        >
          Phone
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-20  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <select
              id="currency"
              name="currency"
              className="h-full rounded-l-md border-0 bg-transparent py-0 pl-1  border-y border-l border-r border-gray-300 bg-gray-200  text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>+91</option>
              <option>00</option>
              <option>442</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
        >
          Role
        </label>
        <Listbox value={role} onChange={(e) => setRole(e)}>
          <div className="relative mt-1">
            <Listbox.Button className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md text-left ">
              <span className="block truncate">{role.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {roles.map((role, roleIdx) => (
                  <Listbox.Option
                    key={roleIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={role}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {role.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default NewStaffForm;
