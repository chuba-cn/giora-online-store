import { footer, socials } from "@/constants"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <MaxWidthWrapper className="py-6 lg:py-10 bg-green-primary-normal text-backgrounds-light">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 md:gap-16 lg:gap-32 mb-10">
        {footer.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-start justify-start space-y-4"
          >
            <p className="font-open font-bold text-2xl">{section.title}</p>
            {section.sections.map((item) => (
              <Link href={"/"} className="font-nunitosans text-[16px]" key={item}>
                {item}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="font-open font-bold text-2xl">Follow Us</p>
          <div className="flex justify-between items-center space-x-4">
            {socials.map((icon, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={icon}
                  alt="socials icons"
                  width={24}
                  height={24}
                  className="w-auto max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="font-nunitosans text-[16px]">© 2024 Giora, Inc</p>
    </MaxWidthWrapper>
  );
}

export default Footer