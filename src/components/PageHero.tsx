import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <div className="page-hero">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: image
            ? "linear-gradient(105deg, rgba(69,69,69,0.92) 45%, rgba(69,69,69,0.6) 100%)"
            : "linear-gradient(135deg, #333 0%, #3d4f5e 100%)",
        }}
      />
      <div
        className="container-site"
        style={{ position: "relative", zIndex: 1, padding: "2.75rem 1rem" }}
      >
        <div
          style={{
            width: "3.5rem",
            height: "3px",
            backgroundColor: "var(--color-teal)",
            marginBottom: "0.85rem",
          }}
        />
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "white",
            lineHeight: 1.25,
            marginBottom: subtitle ? "0.6rem" : 0,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "0.95rem",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
