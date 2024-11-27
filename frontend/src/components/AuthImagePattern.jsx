const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <section className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <article className="max-w-md text-center">
        <figure className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </figure>
        <header>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </header>
        <p className="text-base-content/60">{subtitle}</p>
      </article>
    </section>
  );
};

export default AuthImagePattern;
