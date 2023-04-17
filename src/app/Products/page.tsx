"use client";
import { useScreenSize } from "../../components/utils/screen-size";
import { BoxProducts } from "./components/BoxProducts";

export default function Products() {
  const { widthState } = useScreenSize();
  return (
    <div className="pt-20 w-full">
      <div className="flex justify-end  pt-5 pr-[30rem]">
        <h1>filtros</h1>
      </div>
      <div className="border-t mt-32"></div>
      <div className={`${widthState} mx-auto h-full`}>
        <div className="flex flex-row mt-20">
          <div className="flex flex-col gap-10 px-5 ">
            <ul>
              <li>especificação 1</li>
              <li>especificação 2</li>
              <li>especificação 3</li>
            </ul>
          </div>

          <div className="pl-20">
            <BoxProducts />
            <BoxProducts />
            <BoxProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
