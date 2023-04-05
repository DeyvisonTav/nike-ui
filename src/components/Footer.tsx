export function Footer() {
  return (
    <div className="w-full">
      <div
        className="py-10 bg-black text-white text-center items-center
         text-xl"
      >
        Todos os direitos reservados Nike Shop © {new Date().getFullYear()}
      </div>
    </div>
  );
}
