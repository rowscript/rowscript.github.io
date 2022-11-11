import { Navbar } from "../components/navbar";
import { MenuLinkContent } from "./types";
import classNames from "classnames";

export default function Home() {
  const links: MenuLinkContent[] = [
    {
      id: "download",
      url: "/",
      title: "Download",
    },
    {
      id: "docs",
      url: "/docs",
      title: "Docs",
    },
    {
      id: "api",
      url: "/api",
      title: "API",
    },
    {
      id: "playground",
      url: "/playground",
      title: "Playground",
    },
    {
      id: "blog",
      url: "/blog",
      title: "Blog",
    },
    {
      id: "community",
      url: "/community",
      title: "Community",
    },
  ];
  return (
    <div>
      <Navbar links={links}></Navbar>
      <Body className="bg"></Body>
    </div>
  );
}
function Body({ className }) {
  return (
    <div className={classNames(className, "absolute top-16 w-full")}>
      <div className="mt-16 md:mt-32 lg:mt-40 mb-12">
        <section className="flex justify-center">
          <div className="max-w-1060 flex flex-col items-center px-5 sm:px-8 lg:box-content">
            <h1 className="text-center max-w-[53rem] text-6xl">
              Robust, Functional, Fully Typed JavaScript from the Future
            </h1>
            <h2 className="body-lg text-center text-gray-60 my-4 max-w-[40rem]">
              RowScript is a robustly-typed functional language that compiles to
              efficient and reliable JavaScript.
            </h2>
            <div className="mt-4 mb-2">
              <a
                className="select-none hover:cursor-pointer transition-colors duration-200 body-button focus:outline-none bg-blue-500 hover:bg-blue-700 text-white px-8 py-4 rounded-lg"
                role="button"
                href="/docs/manual/latest/installation"
              >
                Get started
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
