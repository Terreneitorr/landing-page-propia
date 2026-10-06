export default function Thumb({ src, alt, className = "post-thumb", style }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ objectFit: "cover", ...style }}
      />
    );
  }
  return (
    <div className={className} style={style}>
      img
    </div>
  );
}
