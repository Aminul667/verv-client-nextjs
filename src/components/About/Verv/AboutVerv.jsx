import AreLandlord from "@/components/Home/AreLandlord";
import Reviews from "@/components/Shared/Reviews";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutVerv = () => {
  return (
    <div>
      <section>
        <h2 className="text-center text-4xl my-24">
          Dhruba&apos;s code is ready to integrate but there are some changes in
          the design
        </h2>
      </section>

      {/* frequent questions */}
      <section className="w-[1009px] m-auto">
        <h2 className="text-colorTextPrimary text-4xl font-bold leading-[44px] text-center mb-[60px]">
          Frequently Asked Questions
        </h2>
        {/* accordion */}
        <div className="px-[20px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                What is Verve all about?
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-colorTextSecondary flex flex-col gap-4">
                  <p className="leading-[24px]">
                    From founding in 2012, to becoming the UK&apos;s biggest
                    letting agent in 2015, Verve has always had one mission: to
                    make renting fairer, safer and cheaper for everyone.
                  </p>
                  <p className="leading-[24px]">
                    We support you all the way from finding the right tenant
                    through to creating the tenancy, and even collecting the
                    rent. This includes gas and electricity certification,
                    inventories, photography, insurance and more - as and when
                    you need it.
                  </p>
                  <p className="leading-[24px]">
                    Over 7,084,000 people have used Verve to find and let
                    property. Helping to create over 1,271,148 tenancies for our
                    landlords and tenants along the way. We&apos;re a member of
                    the Property Ombudsman for Lettings, and multiple other
                    associations so you know you&apos;re in safe hands.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                How does it work?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ad
                rerum numquam ducimus? Impedit odio deleniti autem. Alias unde
                fuga vitae tempore dicta blanditiis quae vel distinctio nesciunt
                reprehenderit. Maxime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                What charges are there for Landlords?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque perspiciatis, quos sunt fugit recusandae, fugiat,
                suscipit sed debitis praesentium ratione minima eveniet eos
                incidunt facere dicta tempore aspernatur quasi aliquid?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                What charges are there for Tenants?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum voluptas quas repellat voluptatum ratione et maiores
                sequi facere, incidunt necessitatibus veritatis impedit odio
                corporis provident dolorem, animi enim dolor magnam.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                What is Rent Now?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus excepturi sed, minus repellendus fugiat vel eum
                inventore corrupti reprehenderit quis aliquid eaque ullam error
                consequuntur saepe voluptatibus eos veniam illo?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                How do I start Rent Now?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus eveniet quisquam voluptas quos aliquid facere et
                odio ut debitis! Odit eaque aperiam error eligendi distinctio,
                nobis voluptatum minima neque ipsam.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                Why do tenants have to place a holding deposit?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                enim animi minus quos natus ea dolor vitae voluptates, veritatis
                necessitatibus nemo, sequi tempora a. Quidem quasi quo in
                temporibus libero!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
                Who keeps the holding deposit?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, consequuntur eveniet, distinctio quia quo minima
                rem, sunt quibusdam reprehenderit facilis placeat modi corrupti
                nemo fugit nihil laborum cum perspiciatis nulla?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* our happy clients */}
      <section className="mt-[100px]">
        <div className="w-[1216px] h-[425px] m-auto flex flex-col items-start gap-7">
          <h1 className="text-colorTextPrimary text-[30px] font-semibold leading-[38px] w-full text-center">
            Our happy clients
          </h1>
          {/* clients review carousel */}
          <Reviews />
        </div>
      </section>
      <AreLandlord />
    </div>
  );
};

export default AboutVerv;
