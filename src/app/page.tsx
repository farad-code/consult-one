import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import Head from "next/head";
import WorkWithUS from "@/components/WorkWithUs/WorkWithUS";

export default function Home() {
  return (
    <div>
      <div className="mb-96 relative bottom-0 lg:bottom-36">
        <Image src="/home.svg" alt="" width={10000} height={1000} />

        <div className="hidden  md:flex justify-center">
          <div className="md:w-2/3 w-full flex p-7 gap-20 flex-wrap items-center">
            <div className="">
              <Image src="/partner1.svg" width={150} height={1000} alt="" />
            </div>
            <div className="">
              <Image src="/centric.svg" width={120} height={1000} alt="" />
            </div>
            <div className="">
              <Image src="/discord.svg" width={100} height={1000} alt="" />
            </div>
            <div className="">
              <Image src="/norton.svg" width={90} height={1000} alt="" />
            </div>
            <div className="">
              <Image src="/nature.svg" width={90} height={1000} alt="" />
            </div>
            <div className="">
              <Image src="/air.svg" width={90} height={1000} alt="" />
            </div>
          </div>
        </div>
        <div className="divider divider-start hidden  md:flex"></div>
        <div className="flex justify-center items-center mt-20">
          <div className="w-full block md:w-2/3 lg:w-2/3 md:flex flex-col lg:flex-row gap-16 p-4 justify-between">
            <div className=" flex-1">
              <div className="p-3">
                <p className="text-3xl md:text-5xl text-main font-semibold my-2">
                  Partners for your
                </p>
                <p className="text-3xl md:text-5xl text-main font-semibold">
                  <span className="text-sub">long-term </span>
                  successs
                </p>
                <div className="text-base md:text-lg mt-4">
                  We have years-long relationships with many of our clients. As
                  trusted development partners, we take full ownership of the
                  projects and continuously optimize apps, stores, websites, and
                  implement new features, or automate workflows.
                </div>

                <div className="text-base md:text-lg mt-4">
                  We have years-long relationships with many of our clients. As
                  trusted development partners, we take full ownership of the
                  projects and continuously optimize apps, stores, websites, and
                  implement new features, or automate workflows.
                </div>

                <div className="text-base md:text-lg mt-4">
                  We have years-long relationships with many of our clients. As
                  trusted development partners, we take full ownership of the
                  projects and continuously optimize apps, stores, websites, and
                  implement new features, or automate workflows.
                  implement new features, or automate workflows.
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src="/about-first.svg"
                  width={900}
                  height={1200}
                  alt=""
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <WorkWithUS/>
      </div>
    </div>
  );
}
