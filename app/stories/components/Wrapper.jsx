function Wrapper({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="pt-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent ">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
