import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const Poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main>
      <section className="h-[60vh] flex justify-center space-x-2">

        <div className="flex flex-col justify-center w-1/2 p-5 pl-20">
          <p className={`font-semibold text-2xl ${Poppins.className}`}>This is Fastest URL shortner</p>
          <p className="mt-2">make your URL Short By using us. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dicta laudantium quod tempore nostrum soluta esse quib</p>

          <li className='flex justify-center items-center gap-3 text-white mt-2 font-semibold'>
            <Link href="/shortner"> <button className='px-2 bg-purple-500 p-1 rounded-md hover:bg-purple-400' >Try Now</button></Link>
            <a href="https://github.com/Falcon-Abdullah" target='_blank' ><button className='px-2 bg-purple-500 p-1 rounded-md hover:bg-purple-400'  >GitHub</button> </a>
          </li>
        </div>

        <div className="flex items-center justify-center w-1/2 pr-2">
          <img className="rounded-xl cursor-pointer hover:shadow-lg hover:shadow-purple-200" width={600} src="https://www.digital-ecom.com/images/digital-economy/seo-and-social-network-new-banner.jpg" alt="" />
        </div>

      </section>
    </main>
  );
}
