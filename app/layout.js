
import "./globals.css";
import LeftColumn from "@/partials/components/LeftColumn/LeftColumn";
import RightColumn from "@/partials/components/RightColumn/RightColumn";

export const metadata = {
  title: "Sheehan Rahman",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`h-[100dvh] w-[100vw] bg-[#1A1A1A] text-white grid grid-cols-[25%,75%]`}>
        <LeftColumn />
        <div>
          <RightColumn />
          {children}
        </div>
      </body>
    </html>
  );
}
