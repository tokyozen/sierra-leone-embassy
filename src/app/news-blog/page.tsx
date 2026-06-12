import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News Blog",
  description:
    "News, events, and announcements from the Embassy of the Republic of Sierra Leone in Washington, D.C.",
};

const articles = [
  {
    id: 0,
    title:
      "Sierra Leone's Ambassador to United States Presents Letters of Credence to President Trump, and Trump Expresses Goodwill Message to President Bio and the People of Sierra Leone",
    date: "July 25, 2025",
    category: "Diplomatic Affairs",
    author: "PEL Koroma, Embassy of Sierra Leone, Washington, DC",
    coverImage: "/images/Blog/Blog_pic1.jpg",
    gallery: ["/images/Blog/Blog_pic2.jpg", "/images/Blog/Blog_pic3.jpg"],
    body: [
      "His Excellency Ambassador Amara Sheikh Mohammed Sowa has yesterday 24th, July 2025 presented to President Donald J. Trump, President of United States of America his Letter of Accreditation as Ambassador Extraordinary and Plenipotentiary of Sierra Leone to the United States.",
      "Presenting his Letters of Credence and that of the Recall of his Predecessor, Ambassador Amara Sowa conveyed to President Trump on behalf of His Excellency Rtd. Brigadier President Dr. Julius Maada Bio's best wishes for President Trump's continued good health and success in improving the lives of the people of America.",
      "In his presentation, Ambassador Sowa recalled the long-standing relationship between Sierra Leone and United States, spanning over a century. He informed President Trump that Sierra Leone's connection to United States go beyond the Atlantic Slave Trade, and that many African slaves shipped to the Americas went to the Caribbeans and South America, but most of those from Bunce Island in Sierra Leone were taken to Georgia and South Carolina due to their rice cultivation skills.",
      "His Excellency Ambassador Sowa admonished his audience at the White House that his country's historical connections to United States have led to the establishment of the excellent relations between the two countries, particularly the Gullah people who are descendants from Sierra Leone, and the story of the Amistad — \"The Amistad revolt, led by Sengbeh Pieh, was the first human rights case before the U.S. Court, and marked a united front against slavery. President John Quincy Adams, who argued for the slaves' freedom, is fondly remembered in my country\", Ambassador Sowa noted.",
      "As a member of the United Nations, Sierra Leone and the United States share common goals in promoting international peace, human rights, and development. Ambassador Sowa reiterated that the government of Sierra Leone appreciates the support given by the United States during Sierra Leone's bid for the United Nations Security Council.",
      "Ambassador Sowa mentioned that upon President Bio's assumption of his second term in June 2023, he introduced ambitious policy guidelines to transform Sierra Leone's economy, boosting agricultural productivity, developing human capital, implementing youth employment schemes, revamping public service architecture, and investing in infrastructure, technology, and digitization.",
      "Ambassador Sowa asserted President Bio's commitment to fighting corruption and creating a conducive business climate. He noted that American investors are thriving in Sierra Leone, and that the people of Sierra Leone are grateful to the United States for significantly contributing to Sierra Leone's socio-economic development, especially in health, democracy, and through U.S. financial institutions like DFC and the MCC.",
      "\"As I prepare to embark on my diplomatic tour as Ambassador of your beautiful country, I am confident that I will always rely on your support and guidance to make my mission successful\", H.E. Sowa concluded.",
      "The Ambassador was accompanied to the White House by his wife, Ms. Sowa.",
      "Long live the United States and Sierra Leone relationship.",
      "— PEL Koroma, Embassy of Sierra Leone, Washington, DC",
      "Photo Credit: The White House",
    ],
  },
  {
    id: 1,
    title: "Ambassador Amara Sheikh Mohammed Sowa Presents Letters of Credence to President Trump",
    date: "July 24, 2025",
    category: "Diplomatic Affairs",
    author: "Embassy of Sierra Leone",
    coverImage: "/images/news/news-1.jpg",
    gallery: ["/images/news/news-2.jpg"],
    body: [
      "His Excellency Ambassador Amara Sheikh Mohammed Sowa, Sierra Leone's new Ambassador Extraordinary and Plenipotentiary to the United States of America, formally presented his Letters of Credence to President Donald J. Trump at the White House on July 24, 2025, in a ceremony steeped in diplomatic tradition.",
      "The presentation of Letters of Credence is a formal act by which a diplomat is officially accredited to a foreign head of state. The ceremony at the White House marked Ambassador Sowa's formal commencement of his duties as Sierra Leone's top diplomat in Washington, D.C., with accreditation to the United States and nine other countries in the Americas.",
      "During the ceremony, Ambassador Sowa conveyed fraternal greetings and goodwill from His Excellency President Julius Maada Bio and the people of Sierra Leone to President Trump and the American people. The two leaders also engaged in a brief but substantive exchange on the state of Sierra Leone–U.S. bilateral relations.",
      "The Ambassador expressed Sierra Leone's commitment to deepening the longstanding friendship and partnership between the two countries, with a focus on expanding trade and investment ties, strengthening development cooperation, and collaborating on security and governance matters of mutual interest.",
      "Ambassador Sowa expressed his enthusiasm for his new role and his determination to advance the interests of Sierra Leone and its citizens in the United States during his tenure. 'I am deeply honoured to serve my country in this capacity,' the Ambassador said. 'I look forward to building on the strong foundation of friendship between Sierra Leone and the United States and to working closely with all stakeholders in both countries to deepen this partnership for the mutual benefit of our peoples.'",
      "The Embassy of Sierra Leone in Washington, D.C. was established on April 27, 1961, the day Sierra Leone gained independence from the United Kingdom. Since then, Sierra Leone and the United States have maintained warm and cordial relations built on shared democratic values and a common commitment to peace, security, and sustainable development.",
    ],
  },
  {
    id: 2,
    title: "Embassy Celebrates Sierra Leone's 64th Independence Day",
    date: "April 27, 2025",
    category: "National Events",
    author: "Embassy of Sierra Leone",
    coverImage: "/images/news/news-3.jpg",
    gallery: ["/images/news/news-4.jpg"],
    body: [
      "The Embassy of the Republic of Sierra Leone in Washington, D.C. marked Sierra Leone's 64th Independence Day with a flag-raising ceremony and a reception attended by Sierra Leonean nationals, U.S. government officials, members of the diplomatic community, and friends of Sierra Leone.",
      "April 27, 1961, stands as one of the most significant dates in Sierra Leonean history — the day the country gained independence from the United Kingdom under the leadership of Prime Minister Sir Milton Margai. Each year, Sierra Leoneans at home and in the diaspora come together to celebrate this milestone with pride and renewed commitment to national unity and progress.",
      "The ceremony at the Embassy began with the raising of the Sierra Leone national flag to the strains of the national anthem, 'High We Exalt Thee, Realm of the Free.' Ambassador Sowa delivered remarks reflecting on Sierra Leone's journey over the past 64 years, the challenges the nation has overcome, and the bright future that lies ahead.",
      "'Independence Day is not merely a date on the calendar — it is a solemn reminder of the sacrifices made by those who came before us and a call to each of us to play our part in building the prosperous and just society they envisioned,' Ambassador Sowa said in his address.",
      "The Ambassador also highlighted President Julius Maada Bio's government's ambitious agenda for national transformation, including the free quality education programme, the Feed Salone agricultural initiative, and ongoing efforts to strengthen democratic institutions and the rule of law.",
      "The event provided an excellent opportunity for the Sierra Leonean diaspora in the Washington metropolitan area to connect with the Embassy and with each other. Cultural performances, traditional food, and music celebrated the richness and diversity of Sierra Leonean culture. Representatives of the Sierra Leonean community expressed their pride and their continued support for the development of their homeland.",
    ],
  },
  {
    id: 3,
    title: "Sierra Leone Strengthens Economic Ties with the United States",
    date: "February 12, 2025",
    category: "Trade & Investment",
    author: "Embassy of Sierra Leone",
    coverImage: "/images/news/news-5.jpg",
    gallery: ["/images/news/news-6.jpg"],
    body: [
      "The Embassy of Sierra Leone in Washington, D.C. hosted a high-level trade and investment forum bringing together American business leaders, investors, and representatives of the Sierra Leonean government to explore opportunities for enhanced economic collaboration between the two countries.",
      "The forum, held at the Embassy's premises on 19th Street NW, featured presentations from senior officials of the Sierra Leone Investment and Export Promotion Agency (SLIEPA) and the Ministry of Trade and Industry on investment opportunities in key sectors, including mining, agriculture, tourism, fisheries, and renewable energy.",
      "Participants heard firsthand from U.S.-based investors and entrepreneurs who have already established successful business operations in Sierra Leone. Their testimonies highlighted the country's improving business environment, its young and entrepreneurial population, and the government's commitment to facilitating private sector investment.",
      "Ambassador Sowa, who hosted the forum, emphasised Sierra Leone's strategic advantages as an investment destination: abundant natural resources, AGOA eligibility for preferential access to the U.S. market, competitive labour costs, and a stable democratic government. 'Sierra Leone is open for business, and we invite American investors to be part of our growth story,' the Ambassador declared.",
      "A key highlight of the forum was the announcement of a new bilateral business matchmaking initiative facilitated by the Embassy, which will connect U.S. companies with vetted Sierra Leonean counterparts in priority sectors. The initiative aims to generate concrete business partnerships and facilitate investment flows between the two countries.",
      "The Embassy plans to organise follow-up sectoral workshops on mining, agriculture, and tourism in the coming months, and will lead a business delegation to Sierra Leone later in the year to provide U.S. investors with on-the-ground exposure to the country's investment landscape. Interested parties may contact the Embassy's Trade and Investment Section at trade@embassyofsierraleone.net.",
    ],
  },
  {
    id: 4,
    title: "Embassy Issues Update on Consular Services for Sierra Leoneans in the United States",
    date: "January 15, 2025",
    category: "Consular Affairs",
    author: "Consular Section",
    coverImage: "/images/news/news-7.jpg",
    gallery: ["/images/news/news-8.jpg"],
    body: [
      "The Consular Section of the Embassy of the Republic of Sierra Leone in Washington, D.C. wishes to bring to the attention of all Sierra Leonean nationals in the United States and other accredited countries the following updates to consular service procedures, effective immediately.",
      "Effective January 2025, the Embassy has streamlined its passport application and renewal process to reduce processing times and improve the experience for applicants. Sierra Leonean nationals are now required to submit passport applications in person or by mail to the Embassy in Washington, D.C., accompanied by all required documentation and the applicable fee.",
      "The Embassy strongly encourages all Sierra Leonean nationals residing in the United States whose passports have expired or will expire within the next six months to initiate the renewal process as soon as possible. Traveling on an expired passport is not permitted and may result in denial of entry at ports of entry in Sierra Leone and other countries.",
      "With respect to the Authentication of Documents service, the Embassy confirms that the fee remains US$100 per document. Documents submitted for authentication must first be notarised by a licensed Notary Public and, where applicable, must carry an Apostille certification from the relevant state authority before submission to the Embassy.",
      "Sierra Leonean nationals who require Emergency Travel Certificates (ETCs) due to lost or stolen passports should contact the Consular Section immediately at consular@embassyofsierraleone.net or by calling +1 (202) 939-9261 during consular hours (Monday–Friday, 10:00 AM – 3:00 PM). Please have all supporting documentation ready, including a police report for lost or stolen passports.",
      "The Embassy reminds all Sierra Leonean nationals that registration with the Embassy is strongly encouraged. Registration enables the Embassy to communicate important information regarding consular services, national events, and emergency notifications. To register, please contact the Consular Section or visit the Embassy in person.",
    ],
  },
];

export default function NewsBlogPage() {
  return (
    <>
      <PageHero
        title="News Blog"
        subtitle="Latest news, events, and announcements from the Embassy of Sierra Leone in Washington, D.C."
      />

      <section style={{ padding: "4.5rem 0" }}>
        <div className="container-site" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {articles.map((article, index) => {
              const isFeatured = index === 0;
              return (
                <article
                  key={article.id}
                  style={
                    isFeatured
                      ? {
                          backgroundColor: "var(--color-cream)",
                          borderRadius: "0.75rem",
                          padding: "2rem",
                          border: "1px solid rgba(61,176,163,0.25)",
                          boxShadow: "var(--shadow-card)",
                        }
                      : {}
                  }
                >
                  {/* Article header */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {isFeatured && (
                        <span
                          style={{
                            backgroundColor: "var(--color-navy)",
                            color: "white",
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "0.65rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "2px",
                          }}
                        >
                          ★ Featured Story
                        </span>
                      )}
                      <span
                        style={{
                          backgroundColor: "var(--color-teal)",
                          color: "white",
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          fontSize: "0.68rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "2px",
                        }}
                      >
                        {article.category}
                      </span>
                      <span
                        style={{
                          color: "var(--color-text-light)",
                          fontSize: "0.82rem",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {article.date}
                      </span>
                      <span style={{ color: "var(--color-text-light)", fontSize: "0.8rem" }}>
                        By {article.author}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: isFeatured
                          ? "clamp(1.35rem, 3vw, 1.9rem)"
                          : "clamp(1.25rem, 2.5vw, 1.65rem)",
                        color: "var(--color-navy)",
                        lineHeight: 1.3,
                      }}
                    >
                      {article.title}
                    </h2>
                  </div>

                  {/* Cover image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: isFeatured ? "420px" : "360px",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                      marginBottom: "1.25rem",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* For featured: gallery row appears between cover and body */}
                  {isFeatured && article.gallery.length > 0 && (
                    <div style={{ marginBottom: "1.75rem" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${article.gallery.length}, 1fr)`,
                          gap: "0.75rem",
                        }}
                      >
                        {article.gallery.map((img, i) => (
                          <div
                            key={i}
                            style={{
                              position: "relative",
                              height: "200px",
                              borderRadius: "0.375rem",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={img}
                              alt={`${article.title} — photo ${i + 2}`}
                              fill
                              sizes="100vw"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Body text */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {article.body.map((para, i) => {
                      const isAttribution =
                        para.startsWith("—") || para.startsWith("Photo Credit:");
                      return (
                        <p
                          key={i}
                          style={{
                            color: isAttribution
                              ? "var(--color-text-light)"
                              : "var(--color-text-mid)",
                            lineHeight: 1.9,
                            fontSize: isAttribution ? "0.82rem" : "0.95rem",
                            fontStyle: isAttribution ? "italic" : "normal",
                            margin: 0,
                            marginTop: isAttribution && i > 0 ? "0.25rem" : 0,
                          }}
                        >
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  {/* Gallery — non-featured articles only (after body) */}
                  {!isFeatured && article.gallery.length > 0 && (
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                          color: "var(--color-text-light)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Photo Gallery
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${article.gallery.length}, 1fr)`,
                          gap: "0.75rem",
                        }}
                      >
                        {article.gallery.map((img, i) => (
                          <div
                            key={i}
                            style={{
                              position: "relative",
                              height: "200px",
                              borderRadius: "0.375rem",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={img}
                              alt={`${article.title} — photo ${i + 2}`}
                              fill
                              sizes="100vw"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Divider between articles */}
                  {index < articles.length - 1 && (
                    <div
                      style={{
                        marginTop: "3.5rem",
                        borderTop: "2px solid var(--color-teal-light)",
                      }}
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
