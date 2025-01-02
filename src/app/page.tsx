import Image from "next/image";

const Homeimg = "/bloodHome.png";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen max-w-screen-2xl px-4 py-6 mx-auto font-primary">
        <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-20 py-8 max-w-screen-xl">
          <div className="container mx-auto md:mx-9">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-9 text-wrap md:font-semibold">
              Welcome to Blood Donation. <br />
              Nepal Blood Bank <br />
              Donate Blood Save Life!!!!
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 text-justify font-light">
              In a world where every second counts, your decision to donate
              blood can be the difference between life and death for someone in
              need. Every year, millions of people face life-threatening
              conditions, injuries, and surgeries requiring blood transfusions.
              Your small act of kindness donating just a pint of blood can save
              up to three lives.
              <br />
              <br />
              Think about the impact: A mother in labor, a child battling
              leukemia, an accident victim, or a person in need of surgery.
              These are just a few examples of those who rely on the generosity
              of donors like you. By donating blood, you’re not just giving a
              part of yourself; you’re giving hope, strength, and a chance at
              life.
            </p>
          </div>
          {/* photoHome */}
          <div className="container flex justify-center py-10 mx-auto w-full">
            <Image
              src={Homeimg}
              alt="Homeimg"
              width={1000}
              height={800}
              className="max-w-full object-cover h-fit md:h-fit"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
