import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the Bahamas part of the United States?",
    answer: "No, the Bahamas is not part of the United States. The Bahamas is an independent sovereign nation that has been self-governing since July 10, 1973. While located only about 50 miles from Florida, the Bahamas has its own government, currency, and laws completely separate from the United States."
  },
  {
    question: "Do I need a passport to visit the Bahamas from the USA?",
    answer: "Yes, US citizens need a valid passport to travel to the Bahamas in 2026. Since the Bahamas is a foreign country, you must go through customs and immigration when arriving. US citizens can stay up to 90 days for tourism without a visa, but a passport is mandatory."
  },
  {
    question: "Can I use US dollars in the Bahamas?",
    answer: "Yes, US dollars are widely accepted throughout the Bahamas and are used interchangeably with the Bahamian dollar at a 1:1 exchange rate. Most businesses, hotels, and restaurants accept USD, making the Bahamas very convenient for American tourists. Credit cards are also widely accepted."
  },
  {
    question: "Why do people think the Bahamas is part of the USA?",
    answer: "Common misconceptions arise because the Bahamas is very close to Florida (about 50 miles), uses the US dollar widely, has strong tourism ties to America, English is the official language, and many Americans vacation there. The heavy American influence in tourism can create confusion, but the Bahamas has been an independent nation since 1973."
  },
  {
    question: "Was the Bahamas ever part of the United States?",
    answer: "No, the Bahamas was never part of the United States. The Bahamas was a British colony from 1718 until it gained independence on July 10, 1973. Before British rule, the islands were inhabited by the Lucayan people. Christopher Columbus made his first landing in the New World on one of the Bahamian islands in 1492."
  },
  {
    question: "What is the difference between the Bahamas and US territories like Puerto Rico?",
    answer: "US territories like Puerto Rico, US Virgin Islands, and Guam are governed by the United States, use the US dollar as their official currency, and residents are US citizens who can travel to mainland USA without a passport. The Bahamas is completely independent with its own citizenship, parliament, prime minister, and the Bahamian dollar as its official currency."
  },
  {
    question: "Do US cell phones work in the Bahamas?",
    answer: "US cell phones can work in the Bahamas, but you'll typically incur international roaming charges unless your carrier offers a specific Bahamas plan. The Bahamas has its own telecommunications network. It's recommended to check with your carrier about international plans or purchase a local SIM card for extended stays."
  },
  {
    question: "Is the Bahamas safe for American tourists in 2026?",
    answer: "The Bahamas is generally safe for American tourists, especially in resort areas and tourist zones like Paradise Island and the Out Islands. As with any travel destination, visitors should exercise normal precautions, stay in well-traveled areas, and be aware of their surroundings. The Bahamian government and tourism industry prioritize visitor safety."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-anchor">
      <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-foreground">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground mb-8">
        Here are the most common questions travelers ask about the Bahamas and its relationship to the United States.
      </p>
      
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="card-elevated border-0 px-6"
          >
            <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;