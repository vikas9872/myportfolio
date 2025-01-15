import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from 'react';
import { StoreContext } from '../../StoreContextComponent/StoreContext';
import { Link } from 'react-router-dom';
const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Education', href: '/education', current: false },
    { name: 'Skills', href: '/skills', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

const Navbar = () => {
    const { theme, toggleTheme } = useContext(StoreContext);
    return (
        <Disclosure as="nav" className="z-50 fixed top-0 left-0 right-0 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center">
                        <h1 className="text-black dark:text-white font-extrabold tracking-widest">{"</Vikas>"}</h1>
                    </div>
                    <div className="hidden sm:ml-6 sm:block p-2 rounded-full border-2 border-gray-900 shadow-xl bg-white dark:bg-black dark:border-gray-100">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className='text-black dark:text-white rounded-full  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-2 text-sm font-medium'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='mr-12'>
                        <button onClick={toggleTheme} className="text-gray-800 dark:text-orange-400">
                            {theme === "light" ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className='text-black dark:text-white rounded-full  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-2 text-sm font-medium'
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Navbar;
