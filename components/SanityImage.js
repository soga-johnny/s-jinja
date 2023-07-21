import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const SanityImage = ({ image }) => {
  const imageProps = useNextSanityImage(image);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      width={500}
      height={500}
      alt={'postsImage'}
    />
  );
};

export default SanityImage;
