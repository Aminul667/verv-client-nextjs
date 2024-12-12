import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutVerv = () => {
  return (
    <div>
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
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default AboutVerv;
