import { IBanner } from "@/types/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Skeleton } from "@nextui-org/react";
import Image from "next/image";

interface PropTypes {
  banners: IBanner[];
  isLoadingBanners: boolean;
}

const HomeSlider = (props: PropTypes) => {
  const { banners, isLoadingBanners } = props;
  return (
    <div className="mx-6 mb-6 h-[25vw] lg:mx-0 lg:mb-16">
      {!isLoadingBanners ? (
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          spaceBetween={30}
          loop
          modules={[Autoplay, Pagination]}
          className="h-full w-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {banners?.map((banner: IBanner) => (
            <SwiperSlide key={banner._id}>
              <Image
                src={`${banner.image}`}
                alt={`${banner.title}`}
                className="h-[80%] w-full rounded-2xl object-cover lg:h-[90%]"
                width={1920}
                height={800}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Skeleton className="h-[90%] w-full rounded-2xl" />
      )}
    </div>
  );
};

export default HomeSlider;
