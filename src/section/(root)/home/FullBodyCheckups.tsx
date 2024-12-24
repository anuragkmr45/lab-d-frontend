"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/services/service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CheckupTypeCard from "@/components/cards/checkup-type/LayredType";

type ServiceType = {
  serviceId: number;
  serviceName: string;
  serviceDesc: string;
  testParameters: string[];
  sampleType: string;
  tubeType: string;
  packageIncludes: string;
  discountedPrice: string;
  discountPercentage: string;
};

const FullBodyCheckUps = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGetAllServices = async () => {
      try {
        const res = await getAllServices();
        setServices(res);
      } catch (error) {
        console.error("Error while fetching all services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetAllServices();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <section className="bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9] p-4 py-10 md:p-10 lg:p-14">
            {
              services.length !== 0 && (
                <h1 className="font-semibold text-lg">
                  {services?.length} Full body checkups in Hyderabad
                </h1>
              )
            }
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full mx-auto"
            >
              <CarouselContent>
                {services.length !== 0 &&
                  services.map((service) => (
                    <CarouselItem
                      key={service.serviceId}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <CheckupTypeCard cardData={service} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </section>
        </>
      ) : (
        <h1>loading ...</h1>
      )}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-11/12">
        <Image
          src="/assets/homepage/visit-a-lab-near-you.svg"
          alt="Visit a lab"
          height={30}
          width={430}
          className="w-full m-auto"
        />
        <Link href="/book-test-deatils">
          <Image
            src="/assets/homepage/health-test-at-your-home.svg"
            alt="Health test at home"
            height={30}
            width={430}
            className="m-auto w-full"
          />
        </Link>
      </section>
    </>
  );
};

export default FullBodyCheckUps;
