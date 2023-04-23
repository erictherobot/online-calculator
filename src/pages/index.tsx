import Head from "next/head";
import Calculator from "@/components/Calculator";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Online Calculator</title>
        <meta
          name="description"
          content="Use my fast and user-friendly online calculator to effortlessly perform basic arithmetic operations like addition, subtraction, multiplication, and division. Ideal for quick calculations on the go!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="-mt-10 container mx-auto min-h-screen flex items-center justify-center">
        <main className="w-7xl p-5 bg-gray-100 rounded-lg shadow-md">
          <Calculator />
        </main>
      </div>
    </>
  );
};

export default Home;
