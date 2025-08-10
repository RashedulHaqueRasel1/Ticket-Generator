 


type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-[#0C0C0C] font-bold text-5xl mb-3">
        {text}
      </h1>

    </div>
  );
};


export default Header;
