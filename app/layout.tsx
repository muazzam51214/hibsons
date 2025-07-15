import "./globals.css";
import Layout from "@/components/Layout";
import Providers from "@/components/Providers";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Top Digital Staffing Agency for Businesses | Hibsons",
  description:
    "Choose digital staffing agency Hibsons for all your hiring needs. Find the best digital marketing recruiters to boost your business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-white text-black`}>
        <Providers>
          {" "}
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
