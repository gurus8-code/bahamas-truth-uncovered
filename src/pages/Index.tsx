import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import AuthorCard from '@/components/AuthorCard';
import RatingBox from '@/components/RatingBox';
import ComparisonTable from '@/components/ComparisonTable';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

// Image imports
import heroImage from '@/assets/bahamas-hero.jpg';
import nassauImage from '@/assets/nassau-bahamas.jpg';
import mapImage from '@/assets/bahamas-map.jpg';
import flagImage from '@/assets/bahamas-flag.jpg';
import travelImage from '@/assets/travel-requirements.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Aerial view of the crystal clear turquoise waters and white sandy beaches of the Bahamas islands"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        <div className="relative z-10 container-article text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">
            Travel Guide 2026
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight">
            Is the Bahamas Part of the USA?
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            The complete answer, travel requirements, and everything you need to know before visiting this Caribbean paradise in 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-article py-12">
        <Breadcrumbs />

        <div className="grid lg:grid-cols-[1fr_280px] gap-10 mt-8">
          {/* Article Content */}
          <article className="prose-travel">
            {/* Author & Rating */}
            <div className="space-y-6 mb-12">
              <AuthorCard />
              <RatingBox />
            </div>

            {/* Quick Answer */}
            <section id="overview" className="section-anchor">
              <div className="highlight-box mb-8">
                <p className="text-lg font-display font-semibold text-foreground mb-2">
                  Quick Answer
                </p>
                <p className="text-foreground">
                  <strong>No, the Bahamas is NOT part of the United States.</strong> The Bahamas is an independent nation that has been self-governing since July 10, 1973. While it sits just 50 miles off the coast of Florida, it's a completely separate country with its own government, laws, and citizenship.
                </p>
              </div>

              <p>
                I've been traveling to the Bahamas for over 12 years now, and this question comes up more often than you'd think. People see the proximity to Florida, notice that US dollars work everywhere, and naturally wonder if they're still in America when they step off the plane in Nassau.
              </p>
              
              <p>
                The confusion is understandable. When you can see the Florida coast from certain Bahamian islands, when your credit card works just like at home, and when everyone speaks English with familiar American TV playing in the background—it can feel like you never left the US. But here's the reality: the moment you land in the Bahamas, you've entered a foreign country.
              </p>
            </section>

            {/* Why Confusion Section */}
            <section id="why-confusion" className="section-anchor">
              <h2>Why Do People Think the Bahamas is Part of America?</h2>
              
              <figure className="my-8">
                <img
                  src={nassauImage}
                  alt="Colorful colonial architecture in Nassau, Bahamas showing the unique Caribbean culture"
                  className="w-full rounded-xl shadow-lg"
                />
                <figcaption className="image-caption">
                  The colorful colonial architecture of Nassau reflects the Bahamas' unique Caribbean heritage
                </figcaption>
              </figure>

              <p>
                Let me walk you through why this misconception is so common. Having lived in Miami and visited the Bahamas countless times, I've identified the key factors that create this confusion:
              </p>

              <h3>Geographic Proximity</h3>
              <p>
                The Bahamas is incredibly close to the United States. Bimini, the closest Bahamian island to the US, is only about 50 miles from Miami. You can literally take a 25-minute flight from Miami and be in a different country. This closeness makes it feel more like a domestic trip than an international one.
              </p>

              <h3>Currency Acceptance</h3>
              <p>
                US dollars are accepted everywhere in the Bahamas—and I mean everywhere. Hotels, restaurants, taxis, street vendors—they all happily take American currency. The Bahamian dollar is pegged to the US dollar at a 1:1 ratio, so there's no exchange rate confusion. This economic integration makes visitors feel like they never left American soil.
              </p>

              <h3>Language and Culture</h3>
              <p>
                English is the official language of the Bahamas, and with heavy American tourism influence, you'll hear familiar accents and see American TV channels in most hotels. The cultural overlap is significant, which further blurs the perception of being in a foreign country.
              </p>

              <h3>Tourism Infrastructure</h3>
              <p>
                Major American airlines operate multiple daily flights to Nassau and Freeport. American hotel chains are everywhere. Even your cell phone might connect to US carriers on some islands near the coast. This seamless integration of American travel infrastructure creates a "home away from home" feeling.
              </p>
            </section>

            {/* History Section */}
            <section id="history" className="section-anchor">
              <h2>The History of the Bahamas: How It Became Independent</h2>
              
              <figure className="my-8">
                <img
                  src={flagImage}
                  alt="The Bahamian flag representing the nation's independence and sovereignty"
                  className="w-full rounded-xl shadow-lg"
                />
                <figcaption className="image-caption">
                  The Bahamian flag symbolizes the nation's independence gained on July 10, 1973
                </figcaption>
              </figure>

              <p>
                Understanding the Bahamas' history helps explain why it was never part of the United States—and why it's such a unique nation today.
              </p>

              <h3>Pre-Colonial Era</h3>
              <p>
                Long before Europeans arrived, the Bahamas was home to the Lucayan people, a branch of the Taíno natives. These indigenous inhabitants lived on the islands for centuries before Christopher Columbus made his famous 1492 landing on what he called San Salvador—which many historians believe was in the Bahamas.
              </p>

              <h3>British Colonial Period (1718-1973)</h3>
              <p>
                The Bahamas became a British Crown Colony in 1718, after the British expelled pirates who had made Nassau their base. For over 250 years, the islands remained under British rule. This is fundamentally different from the history of US territories, which were acquired by the United States through various means.
              </p>

              <h3>Independence Day: July 10, 1973</h3>
              <p>
                On July 10, 1973, the Bahamas gained full independence from the United Kingdom. Unlike US territories which moved toward greater integration with America, the Bahamas chose sovereignty. Today, the Bahamas remains a member of the Commonwealth with King Charles III as its constitutional monarch, but it operates as a fully independent parliamentary democracy.
              </p>

              <div className="highlight-box">
                <p className="text-sm font-medium text-foreground mb-2">Historical Fact</p>
                <p className="text-sm text-muted-foreground">
                  The Bahamas has never been under US control at any point in its history. It transitioned directly from British colony to independent nation, bypassing any American influence on its governance.
                </p>
              </div>
            </section>

            {/* Geography Section */}
            <section id="geography" className="section-anchor">
              <h2>Geographic Location: Where Exactly is the Bahamas?</h2>
              
              <figure className="my-8">
                <img
                  src={mapImage}
                  alt="Map showing the geographic location of the Bahamas in relation to Florida and the United States"
                  className="w-full rounded-xl shadow-lg"
                />
                <figcaption className="image-caption">
                  The Bahamas archipelago stretches southeast from Florida across the Atlantic Ocean
                </figcaption>
              </figure>

              <p>
                The Bahamas is an archipelago consisting of approximately 700 islands and 2,400 cays (small islands), stretching across 100,000 square miles of ocean. Here's what you need to know about its location:
              </p>

              <ul>
                <li><strong>Position:</strong> Located in the Atlantic Ocean, southeast of Florida</li>
                <li><strong>Distance from USA:</strong> Approximately 50 miles from Miami at the closest point (Bimini)</li>
                <li><strong>Not in the Caribbean Sea:</strong> Technically, the Bahamas is in the Atlantic Ocean, not the Caribbean Sea, though it's often grouped with Caribbean nations</li>
                <li><strong>Coordinates:</strong> Between 20° and 27° North latitude, 72° and 80° West longitude</li>
                <li><strong>Total Land Area:</strong> About 5,358 square miles</li>
                <li><strong>Inhabited Islands:</strong> Only about 30 of the 700 islands are permanently inhabited</li>
              </ul>

              <p>
                This geographic proximity to Florida is precisely why so many Americans visit the Bahamas each year—and why the confusion about its national status persists. But remember: being close to a country doesn't make you part of that country. Canada is right next to the US too, and nobody confuses them.
              </p>
            </section>

            {/* Travel Requirements Section */}
            <section id="travel-requirements" className="section-anchor">
              <h2>Travel Requirements for US Citizens in 2026</h2>
              
              <figure className="my-8">
                <img
                  src={travelImage}
                  alt="US passport and travel documents needed for visiting the Bahamas"
                  className="w-full rounded-xl shadow-lg"
                />
                <figcaption className="image-caption">
                  A valid US passport is required for all American travelers visiting the Bahamas in 2026
                </figcaption>
              </figure>

              <p>
                Because the Bahamas is a foreign country, there are specific entry requirements that American travelers must meet. Here's what you need to know for 2026:
              </p>

              <h3>Passport Requirements</h3>
              <p>
                All US citizens must have a valid passport to enter the Bahamas. This is non-negotiable. Your passport should be valid for the duration of your stay, though many recommend having at least 6 months validity remaining as a general travel best practice.
              </p>

              <h3>Visa Requirements</h3>
              <p>
                Good news: US citizens do not need a visa for tourist visits up to 90 days. You'll receive an entry stamp upon arrival. However, if you plan to stay longer, work, or study, you'll need to apply for the appropriate visa or permit.
              </p>

              <h3>Entry Documents Checklist for 2026</h3>
              <ol>
                <li><strong>Valid US Passport</strong> — Required for all travelers including infants</li>
                <li><strong>Return or Onward Ticket</strong> — Proof you'll be leaving the country</li>
                <li><strong>Hotel Reservation or Address</strong> — Where you'll be staying</li>
                <li><strong>Bahamas Travel Health Visa</strong> — Check current requirements as these can change</li>
                <li><strong>Customs Declaration</strong> — Completed on arrival</li>
              </ol>

              <h3>What About Cruise Ships?</h3>
              <p>
                If you're arriving by cruise ship on a closed-loop cruise (departing from and returning to the same US port), you might be able to use a birth certificate and government-issued photo ID instead of a passport. However, I strongly recommend having a passport anyway—if you have a medical emergency and need to fly home, you'll need one.
              </p>

              <div className="highlight-box">
                <p className="text-sm font-medium text-foreground mb-2">Pro Tip from Experience</p>
                <p className="text-sm text-muted-foreground">
                  I always recommend having a passport for any international travel, including to the Bahamas. It provides the most flexibility and peace of mind. Passport processing times in 2026 can be lengthy, so plan ahead!
                </p>
              </div>
            </section>

            {/* Comparison Table */}
            <ComparisonTable />

            {/* Currency Section */}
            <section id="currency" className="section-anchor">
              <h2>Currency and Money in the Bahamas</h2>
              
              <p>
                One of the factors that contributes most to the "is this still America?" feeling is how seamlessly US money works in the Bahamas. Let me break down what you need to know:
              </p>

              <h3>The Bahamian Dollar (BSD)</h3>
              <p>
                The official currency is the Bahamian Dollar (BSD), which has been pegged to the US dollar at a 1:1 ratio since 1966. This means 1 BSD always equals 1 USD. Bahamian bills and coins look different from American currency but have the same value.
              </p>

              <h3>Using US Dollars</h3>
              <p>
                You can use US dollars absolutely everywhere in the Bahamas. Shops, restaurants, hotels, taxis, markets—they all accept American currency without any exchange. Most prices are even listed in dollars without specifying which country's currency. It's incredibly convenient for American visitors.
              </p>

              <h3>Credit Cards and ATMs</h3>
              <p>
                Major credit cards (Visa, Mastercard, American Express) are widely accepted at hotels, restaurants, and larger shops. ATMs are available in Nassau, Freeport, and most tourist areas, dispensing either Bahamian or US dollars. Smaller islands and local shops may prefer cash.
              </p>

              <h3>Important Money Tips</h3>
              <ul>
                <li>Notify your bank before traveling to avoid card blocks</li>
                <li>Carry some cash for small purchases and tips</li>
                <li>You may receive Bahamian dollars as change—they work identically to USD</li>
                <li>Bahamian coins won't work in US vending machines when you return home</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Conclusion */}
            <section className="mt-16 p-8 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
                Final Thoughts: Embracing the Bahamas as Its Own Destination
              </h2>
              <p className="text-foreground/80 mb-4">
                After all my years of visiting and studying the Bahamas, I think the real beauty of this nation lies in its unique identity. Yes, it's close to America. Yes, you can use dollars and speak English. But the Bahamas has its own rhythm, its own culture, its own way of life that makes it distinctly different from anything you'll find in the United States.
              </p>
              <p className="text-foreground/80 mb-4">
                From the Junkanoo festivals to the traditional rake and scrape music, from the conch salad vendors to the pink sand beaches of Harbour Island—the Bahamas offers experiences you simply cannot find in any US state or territory.
              </p>
              <p className="text-foreground/80">
                So while the Bahamas is definitely not part of the USA, it's something even better: a friendly, welcoming, independent nation that's close enough for a weekend trip but different enough to feel like a true adventure. Pack your passport and come see for yourself what makes these islands so special.
              </p>
            </section>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;