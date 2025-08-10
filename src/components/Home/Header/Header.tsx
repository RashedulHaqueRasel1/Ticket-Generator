type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="text-center ">

      <h1
        className="mt-6 text-4xl md:text-5xl font-bold text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 text-sm text-gray-300 max-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;
