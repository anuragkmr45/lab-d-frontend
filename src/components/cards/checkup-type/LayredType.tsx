import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaDna } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { PiCurrencyDollarBold } from "react-icons/pi";

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

const CheckupTypeCard = ({ cardData }: { cardData: ServiceType }) => {
  
  if (!cardData) {
    return (
      <div className="w-full mx-auto h-60 bg-[#EDF6F9] rounded-xl shadow-xl m-2 flex items-center justify-center">
        <p className="text-gray-500">Data unavailable</p>
      </div>
    );
  }

  const originalPricing: number = Math.round(
    parseFloat(cardData.discountedPrice || "0") /
      (1 - parseFloat(cardData.discountPercentage || "0") / 100)
  );

  return (
    <div className="w-full mx-auto h-60 bg-[#EDF6F9] rounded-xl shadow-xl m-2 space-y-3">
      <UpperCard
        discount={cardData.discountPercentage || "0"}
        originalPricing={originalPricing}
        discountedPricing={cardData.discountedPrice || "0"}
        title={cardData.serviceName || "Unknown"}
      />
      <LowerCard parameters={cardData.testParameters || []} serviceId={cardData.serviceId} />
    </div>
  );
};

type UpperCardProps = {
  title: string;
  discountedPricing: string;
  originalPricing: number;
  discount: string;
};

const UpperCard = ({
  title,
  discountedPricing,
  originalPricing,
  discount,
}: UpperCardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] h-[106px] rounded-xl p-4">
      <p className="absolute top-0 bg-[#185358] m-2 mt-0 w-28 text-[#efefef] text-center rounded-b-lg">
        Checkup
      </p>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[16px] text-white font-bold">{title}</h1>
        <div className="flex flex-col items-end">
          <p className="opacity-75 line-through text-gray-200 text-sm">
            ₹{originalPricing.toFixed(2)}
          </p>
          <h1 className="font-semibold text-white flex items-center">
            <PiCurrencyDollarBold className="text-white" /> {discountedPricing}
          </h1>
          <p className="text-sm text-white font-semibold bg-green-400 rounded-md px-2 py-1">
            {discount}% Off
          </p>
        </div>
      </div>
    </div>
  );
};

type LowerCardProps = {
  serviceId: number,
  parameters: string[];
};

const LowerCard = ({ parameters, serviceId }: LowerCardProps) => {
  return (
    <div className="space-y-4 px-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <FaDna className="text-2xl text-[#006D77] mr-2" />
          <p className="font-semibold text-[14px]">{parameters.length} Parameters</p>
        </div>
        <div className="flex items-center">
          <TbReport className="text-2xl text-[#006D77] mr-2" />
          <p className="text-[14px] font-semibold">Reports in 7 hours</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link href={`/organ-related/${serviceId}`}>
          <Button className="bg-transparent font-semibold text-[#006D77] hover:bg-[#006D77] hover:text-white shadow-md">
            View Details
          </Button>
        </Link>
        <Link href={`/book-test-deatils/${serviceId}`}>
          <Button className="bg-gradient-to-tr from-[#ff8153] to-[#f9d2c5] shadow-lg">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckupTypeCard;
