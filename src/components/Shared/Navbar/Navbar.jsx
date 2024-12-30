"use client";

import Image from "next/image";
import logo from "../../../assets/images/logo.png";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/user.provider";
import { logout } from "@/services/AuthService";

const Navbar = () => {
  const { user, setIsLoading: userLoading } = useUser();

  // handle logout and reload after logout
  const handleLogout = () => {
    logout();
    userLoading(true);

    // if (protectedRoutes.some((route) => pathName.match(route))) {
    //   router.push("/");
    // }
  };

  return (
    <nav className="py-6 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.10)] hidden md:block sticky top-0 z-20">
      <div className="w-[1216px] m-auto flex justify-between items-center text-[#314660]">
        <Link href="/">
          <Image src={logo} width={137.951} alt="verv logo" />
        </Link>
        <div className="text-lg flex justify-end items-center gap-14">
          <div className="font-medium">
            <ul className="flex justify-between items-center gap-6">
              {/* className="flex justify-center items-center" */}
              <li>
                {/* About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#314660"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg p-0 m-0">
                      About
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 14L17 10"
                          stroke="#314660"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <Link href="/about/verv">
                        <DropdownMenuItem>Verv</DropdownMenuItem>
                      </Link>
                      <Link href="/about/landlords">
                        <DropdownMenuItem>Landlords</DropdownMenuItem>
                      </Link>
                      <Link href="/about/tenants">
                        <DropdownMenuItem>Tenants</DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="flex justify-center items-center">
                {/* Pricing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#314660"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg p-0 m-0">
                      Pricing
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 14L17 10"
                          stroke="#314660"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span>Pricing I</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Pricing II</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Pricing III</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="flex justify-center items-center">Agent Finder</li>
            </ul>
          </div>
          <div className="flex justify-end items-center gap-6 font-medium">
            <ul className="flex items-center justify-center gap-2">
              {user?.userEmail ? (
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleLogout()}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="flex justify-center items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
                        stroke="#314660"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="3"
                        cy="3"
                        r="3"
                        transform="matrix(1 0 0 -1 9 12)"
                        stroke="#314660"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sign In/Register
                  </Link>
                </li>
              )}
            </ul>
            <Button className="text-lg font-semibold rounded-[32px] bg-[#50B533] w-[180px] h-[56px] py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.5 11V17M15.5 14H9.5M16.6804 22H8.31965C6.0109 22 4.1393 20.214 4.1393 18.0108V13.133C4.1393 12.4248 3.84447 11.7456 3.31969 11.2448C2.10381 10.0845 2.26187 8.16205 3.65251 7.19692L10.0412 2.763C11.5071 1.74567 13.4929 1.74567 14.9588 2.763L21.3475 7.19691C22.7381 8.16205 22.8962 10.0845 21.6803 11.2448C21.1555 11.7456 20.8607 12.4248 20.8607 13.133V18.0108C20.8607 20.214 18.9891 22 16.6804 22Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Add Listing
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
