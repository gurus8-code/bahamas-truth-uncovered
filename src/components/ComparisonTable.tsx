import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "Political Status",
    bahamas: "Independent Nation",
    usTerritory: "US Territory",
    bahamasPositive: true
  },
  {
    feature: "US Passport Required",
    bahamas: "Yes",
    usTerritory: "No",
    bahamasPositive: false
  },
  {
    feature: "US Citizens Residents",
    bahamas: "No (Foreign Nationals)",
    usTerritory: "Yes",
    bahamasPositive: false
  },
  {
    feature: "Currency",
    bahamas: "Bahamian Dollar (USD accepted)",
    usTerritory: "US Dollar",
    bahamasPositive: true
  },
  {
    feature: "Government",
    bahamas: "Parliamentary Democracy",
    usTerritory: "US Federal Oversight",
    bahamasPositive: true
  },
  {
    feature: "Head of State",
    bahamas: "King Charles III (Constitutional Monarchy)",
    usTerritory: "US President",
    bahamasPositive: true
  },
  {
    feature: "Independence",
    bahamas: "Since July 10, 1973",
    usTerritory: "N/A - Under US Control",
    bahamasPositive: true
  },
  {
    feature: "Visa for US Citizens",
    bahamas: "Not required (up to 90 days)",
    usTerritory: "N/A - Domestic Travel",
    bahamasPositive: true
  },
  {
    feature: "Distance from Florida",
    bahamas: "~50 miles",
    usTerritory: "Varies",
    bahamasPositive: true
  },
  {
    feature: "Official Language",
    bahamas: "English",
    usTerritory: "English (varies)",
    bahamasPositive: true
  }
];

const ComparisonTable = () => {
  return (
    <section id="comparison" className="section-anchor">
      <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-foreground">
        Bahamas vs. US Territories: Complete Comparison
      </h2>
      <p className="text-muted-foreground mb-6">
        Understanding the key differences between the Bahamas and actual US territories helps clarify why this confusion exists and what it means for travelers.
      </p>

      <div className="overflow-x-auto">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="min-w-[180px]">Feature</th>
              <th className="min-w-[200px]">The Bahamas</th>
              <th className="min-w-[200px]">US Territories (e.g., Puerto Rico)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className="font-medium text-foreground">{row.feature}</td>
                <td>
                  <div className="flex items-center gap-2">
                    {row.bahamasPositive ? (
                      <Check className="w-4 h-4 text-palm flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-accent flex-shrink-0" />
                    )}
                    <span>{row.bahamas}</span>
                  </div>
                </td>
                <td>{row.usTerritory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="highlight-box mt-6">
        <p className="text-sm font-medium text-foreground mb-2">Key Takeaway</p>
        <p className="text-sm text-muted-foreground">
          While the Bahamas shares many cultural and economic ties with the United States, it operates as a completely independent nation with its own laws, government, and international relations. US territories, on the other hand, fall under US federal jurisdiction and their residents are US citizens.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;