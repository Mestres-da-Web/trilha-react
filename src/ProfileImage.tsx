interface ProfileImageProps {
  src: string;
  radius: number;
  alt?: string;
}

function ProfileImage({ src, radius, alt = "" }: ProfileImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={radius}
      height={radius}
      style={{ objectFit: "cover", borderRadius: radius / 2 }}
    />
  );
}

export default ProfileImage;
