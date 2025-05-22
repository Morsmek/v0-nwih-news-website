import type { Article } from "./types"

// Mock data for demonstration purposes
// In a real application, this would be replaced with API calls to a news service
const mockArticles: Article[] = [
  {
    id: "1",
    title: "EU Leaders Agree on New Climate Goals",
    description: "European Union leaders have reached a consensus on ambitious new climate targets for 2030.",
    content:
      'BRUSSELS — European Union leaders have reached a consensus on ambitious new climate targets for 2030, setting the stage for a major transformation of the bloc\'s economy in the fight against climate change.\n\nThe agreement, announced after marathon negotiations in Brussels, commits the 27-nation EU to cutting greenhouse gas emissions by at least 55% by 2030 compared with 1990 levels. The previous target was a 40% cut.\n\n"Europe is the leader in the fight against climate change," European Council President Charles Michel declared at a press conference. "We decided to cut our greenhouse gas emissions by at least 55% by 2030."\n\nThe new target is part of the European Green Deal, the EU\'s flagship initiative to make Europe climate neutral by 2050. The plan involves overhauling the bloc\'s economy, with huge investments in clean energy, sustainable transport, and green technologies.\n\nEnvironmental groups welcomed the increased ambition but said the target still falls short of what\'s needed to limit global warming to 1.5 degrees Celsius above pre-industrial levels, as called for in the Paris Agreement.\n\n"This is a crucial step forward, but we need to go further and faster," said Greenpeace EU climate policy adviser Sebastian Mang. "The science is clear that we need to cut emissions by at least 65% by 2030 to be in line with the Paris Agreement."\n\nThe agreement sets the stage for a flurry of new legislation in the coming months to implement the target, including reforms to the EU\'s carbon market, stricter CO2 standards for cars, and new energy efficiency measures.',
    author: "Emma Johnson",
    publishedAt: "2023-05-15T09:30:00Z",
    category: "Europe",
    imageUrl: "/eu-climate-summit.png",
    imageCaption: "EU leaders at the climate summit in Brussels",
  },
  {
    id: "2",
    title: "Tech Giants Face New Regulations in Digital Markets Act",
    description: "The European Union has introduced new regulations aimed at curbing the market power of tech giants.",
    content:
      'BRUSSELS — The European Union has introduced sweeping new regulations aimed at curbing the market power of tech giants and ensuring a level playing field in the digital economy.\n\nThe Digital Markets Act (DMA), which came into force this week, targets so-called "gatekeeper" platforms — companies with a market capitalization of at least €75 billion or annual revenues in the EU of at least €7.5 billion.\n\n"The DMA will change the digital landscape profoundly," said Margrethe Vestager, the EU\'s competition chief. "With it, the EU is taking a proactive approach to ensuring fair, transparent, and contestable digital markets."\n\nUnder the new rules, designated gatekeepers will face a series of dos and don\'ts. They will be required to allow third-party apps or app stores on their platforms and allow users to easily uninstall pre-loaded apps. They will also be prohibited from combining personal data across their different services or using data they collect from third-party merchants to compete against them.\n\nCompanies that fail to comply with the DMA could face fines of up to 10% of their global annual revenue, or even forced divestiture in cases of systematic non-compliance.\n\nTech industry representatives have expressed concerns about the new regulations. "While we support the goals of promoting competition and innovation, we are concerned that some provisions of the DMA may create unintended consequences for European consumers and businesses," said a spokesperson for the Computer & Communications Industry Association.\n\nThe DMA is part of a broader EU effort to regulate the digital economy, alongside the Digital Services Act, which focuses on content moderation and user safety online.',
    author: "Michael Chen",
    publishedAt: "2023-05-14T14:45:00Z",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=600&width=800&query=EU digital regulation",
    imageCaption: "European Commission headquarters in Brussels",
  },
  {
    id: "3",
    title: "Champions League Final Set for Madrid Showdown",
    description:
      "Real Madrid and Liverpool will face off in the UEFA Champions League final in a repeat of the 2018 clash.",
    content:
      'MADRID — Football fans around the world are eagerly anticipating the UEFA Champions League final, which will see Real Madrid and Liverpool face off in a repeat of their memorable 2018 clash.\n\nThe match, to be held at the Wanda Metropolitano Stadium in Madrid, promises to be a thrilling encounter between two of Europe\'s most successful clubs.\n\nReal Madrid, the record 13-time champions, secured their place in the final with a dramatic comeback victory over Manchester City. Trailing 1-0 on aggregate with just minutes remaining, Los Blancos scored twice in the dying moments through Rodrygo before Karim Benzema sealed the win in extra time.\n\n"This team never gives up," said Real Madrid manager Carlo Ancelotti. "The spirit of this club is to fight until the end, and that\'s what we did."\n\nLiverpool, meanwhile, overcame a resilient Villarreal side, coming from 2-0 down in the second leg to win 3-2 on the night and 5-2 on aggregate.\n\n"We\'ve shown great character," said Liverpool\'s Jürgen Klopp. "But we know the job isn\'t done yet. Real Madrid are a formidable opponent with incredible experience in this competition."\n\nThe final will be particularly significant for Liverpool, who lost to Real Madrid in the 2018 final in Kyiv after star forward Mohamed Salah was forced off with a shoulder injury following a challenge from Sergio Ramos.\n\n"We have a score to settle," Salah said after Liverpool\'s semi-final victory. "It\'s time for revenge."',
    author: "David Martinez",
    publishedAt: "2023-05-13T18:20:00Z",
    category: "Sports",
    imageUrl: "/placeholder.svg?height=600&width=800&query=Champions League football",
    imageCaption: "The Champions League trophy",
  },
  {
    id: "4",
    title: "European Central Bank Raises Interest Rates Amid Inflation Concerns",
    description:
      "The ECB has increased interest rates by 0.5 percentage points in response to persistent inflation pressures.",
    content:
      'FRANKFURT — The European Central Bank (ECB) has raised its key interest rates by 0.5 percentage points in response to persistent inflation pressures across the eurozone.\n\nThe move, announced following the ECB\'s Governing Council meeting in Frankfurt, brings the deposit facility rate to 3.5%, the highest level since 2008.\n\n"Inflation remains too high and is expected to stay above our target for too long," said ECB President Christine Lagarde at a press conference. "This decision reflects our commitment to ensuring that inflation returns to our 2% medium-term target in a timely manner."\n\nThe rate hike comes as eurozone inflation stood at 6.9% in March, well above the ECB\'s 2% target. While energy prices have eased from their peaks, core inflation — which excludes volatile food and energy prices — has remained stubbornly high at 5.7%.\n\nLagarde indicated that further rate increases might be necessary, depending on incoming economic data. "We are not committing to a particular rate path," she said. "We will continue to follow a data-dependent approach."\n\nEconomists are divided on the wisdom of the ECB\'s aggressive tightening cycle amid signs of economic weakness in the eurozone. The region narrowly avoided a recession in the fourth quarter of 2022, with GDP growing by just 0.1%.\n\n"The ECB is walking a tightrope," said Carsten Brzeski, global head of macro at ING. "It needs to fight inflation but without pushing the economy into a deep recession."',
    author: "Sophie Dubois",
    publishedAt: "2023-05-12T12:15:00Z",
    category: "Business",
    imageUrl: "/placeholder.svg?height=600&width=800&query=European Central Bank",
    imageCaption: "European Central Bank headquarters in Frankfurt",
  },
  {
    id: "5",
    title: "Mediterranean Diet Linked to Reduced Risk of Dementia",
    description:
      "A new study suggests that following a Mediterranean diet could significantly lower the risk of developing dementia.",
    content:
      'BARCELONA — A large-scale study published in the journal Neurology has found that adhering to a Mediterranean diet could significantly reduce the risk of developing dementia.\n\nResearchers followed more than 60,000 adults aged 55 and older for an average of nine years. Those who strictly followed a Mediterranean diet — rich in fruits, vegetables, whole grains, olive oil, and fish, with limited red meat and processed foods — had a 23% lower risk of developing dementia compared to those who did not.\n\n"Our findings suggest that following a Mediterranean diet may be a powerful tool in helping to prevent dementia," said Dr. Elena Martínez, the study\'s lead author from the University of Barcelona. "What\'s particularly encouraging is that even moderate adherence to this diet showed benefits."\n\nThe Mediterranean diet has long been associated with improved heart health and reduced risk of certain cancers. This new research adds to growing evidence of its benefits for brain health.\n\nThe study controlled for various factors including age, education, physical activity, and genetic predisposition to Alzheimer\'s disease. The protective effect of the diet was observed across all these subgroups.\n\n"The mechanisms behind this association likely involve reduced inflammation and oxidative stress, improved vascular health, and the neuroprotective effects of certain nutrients abundant in the Mediterranean diet," explained Dr. Martínez.\n\nWith dementia affecting an estimated 55 million people worldwide and numbers projected to rise as populations age, these findings could have significant public health implications.\n\n"Dietary interventions are among the most accessible and cost-effective strategies for dementia prevention," said Dr. Martínez. "Unlike genetics, diet is something we can modify."',
    author: "Laura Rossi",
    publishedAt: "2023-05-11T10:00:00Z",
    category: "Health",
    imageUrl: "/placeholder.svg?height=600&width=800&query=Mediterranean diet food",
    imageCaption: "A typical Mediterranean diet meal",
  },
  {
    id: "6",
    title: "European Parliament Approves Landmark AI Regulation",
    description:
      "The EU has taken a significant step toward regulating artificial intelligence with new comprehensive legislation.",
    content:
      'STRASBOURG — The European Parliament has approved landmark legislation to regulate artificial intelligence, making the European Union the first major global power to establish comprehensive rules for the technology.\n\nThe Artificial Intelligence Act, passed with a large majority in Strasbourg, creates a risk-based regulatory framework that imposes different obligations based on the level of risk an AI system presents.\n\n"This is a historic moment for Europe," said Dragoș Tudorache, one of the lead MEPs on the file. "With this legislation, the EU is not just regulating a technology; we are preserving our values and fundamental rights in the face of rapid technological change."\n\nUnder the new rules, AI systems deemed "high-risk" — such as those used in critical infrastructure, education, law enforcement, and hiring decisions — will face strict requirements including risk assessments, high-quality data sets, logging capabilities, human oversight, and transparency.\n\nCertain AI practices will be banned outright, including social scoring systems similar to those used in China, real-time facial recognition in public spaces (with limited exceptions for law enforcement), and AI systems that manipulate human behavior through subliminal techniques.\n\nThe legislation also establishes transparency requirements for general-purpose AI systems like ChatGPT, requiring them to disclose that content was AI-generated and to publish summaries of copyrighted data used in training.\n\nTech industry representatives have expressed concerns about the potential impact on innovation. "While we support thoughtful regulation, we worry that some provisions may inadvertently hamper European competitiveness in the global AI race," said a spokesperson for DigitalEurope, a tech industry group.\n\nThe legislation now needs formal approval from the EU Council before it can enter into force. Once implemented, companies will have 24 months to comply with the new rules.',
    author: "Thomas Weber",
    publishedAt: "2023-05-10T16:30:00Z",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=600&width=800&query=European Parliament AI regulation",
    imageCaption: "The European Parliament in Strasbourg",
  },
  {
    id: "7",
    title: "Paris Fashion Week Showcases Sustainable Luxury Trends",
    description:
      "Designers at Paris Fashion Week are embracing sustainability without compromising on luxury and creativity.",
    content:
      'PARIS — The latest edition of Paris Fashion Week has put sustainability in the spotlight, with leading designers showcasing eco-friendly collections that don\'t compromise on luxury or creativity.\n\nFrom upcycled materials to zero-waste pattern cutting and biodegradable fabrics, the event highlighted the fashion industry\'s growing commitment to environmental responsibility.\n\n"This season marks a turning point," said fashion critic Marie Lefèvre. "Sustainability is no longer just a marketing buzzword but a fundamental aspect of design philosophy for many major houses."\n\nStellaMcCartney, long an advocate for sustainable fashion, presented a collection featuring regenerative cotton, mushroom leather, and recycled nylon. "Fashion is one of the most polluting industries in the world," McCartney said backstage. "We have a responsibility to change that."\n\nLVMH-owned Louis Vuitton unveiled initiatives to trace the origin of all raw materials by 2025 and introduced handbags made from grape waste from the wine industry. Meanwhile, Chanel announced investments in climate adaptation projects and showcased tweed suits made from recycled yarns.\n\nEmerging designers also made their mark with innovative approaches to sustainability. French-Moroccan designer Charaf Tajer presented a collection for his label Casablanca using natural dyes derived from plants and minerals, while Marine Serre continued her practice of creating new garments from end-of-life products.\n\n"What\'s exciting is seeing sustainability integrated across all aspects of these collections, from material sourcing to production processes to packaging," noted Lefèvre. "The industry is finally recognizing that true luxury must include respect for the planet."\n\nThe shift comes as consumers increasingly demand transparency and environmental responsibility from fashion brands, with a recent survey finding that 73% of millennial and Gen Z luxury shoppers consider sustainability when making purchasing decisions.',
    author: "Isabelle Moreau",
    publishedAt: "2023-05-09T14:00:00Z",
    category: "Lifestyle",
    imageUrl: "/placeholder.svg?height=600&width=800&query=Paris Fashion Week sustainable fashion",
    imageCaption: "Models showcase sustainable designs at Paris Fashion Week",
  },
  {
    id: "8",
    title: "Scientists Discover New Species in Mediterranean Deep Sea",
    description:
      "A research expedition has uncovered previously unknown marine species in the deep waters of the Mediterranean Sea.",
    content:
      'ATHENS — A team of marine biologists has discovered several previously unknown species during a deep-sea expedition in the Mediterranean, challenging the notion that the region\'s biodiversity has been fully cataloged.\n\nThe three-month research mission, led by scientists from the University of Athens and the Mediterranean Institute for Advanced Studies, explored depths of up to 4,500 meters in the Hellenic Trench south of Crete.\n\n"The Mediterranean is one of the most studied seas in the world, so finding new species here is particularly exciting," said Dr. Nikolaos Papadopoulos, the expedition\'s lead scientist. "It shows how much we still have to learn about our oceans, even in areas we consider well-explored."\n\nAmong the discoveries are a previously undocumented species of bioluminescent jellyfish, several new crustaceans, and a small deep-sea fish belonging to the anglerfish family. The team also documented a new species of cold-water coral that forms extensive reefs at depths of around 700 meters.\n\n"These deep-sea coral ecosystems are biodiversity hotspots," explained marine ecologist Dr. Elena Koutsouveli. "They provide habitat for numerous other species and are extremely vulnerable to human activities like bottom trawling and deep-sea mining."\n\nThe expedition utilized advanced technologies including a remotely operated vehicle (ROV) equipped with 4K cameras and sampling tools, as well as environmental DNA (eDNA) analysis, which detects genetic material shed by organisms into the water.\n\n"The combination of traditional taxonomy and cutting-edge molecular techniques allowed us to identify species that might otherwise have remained unknown," said Dr. Papadopoulos.\n\nThe findings come as the European Union is expanding its network of marine protected areas, with a target of protecting 30% of EU seas by 2030. The researchers hope their discoveries will strengthen the case for protecting deep-sea habitats in the Mediterranean.',
    author: "Andreas Dimitriou",
    publishedAt: "2023-05-08T09:45:00Z",
    category: "Science",
    imageUrl: "/placeholder.svg?height=600&width=800&query=deep sea marine biology research",
    imageCaption: "A remotely operated vehicle used in the deep-sea expedition",
  },
  {
    id: "9",
    title: "European Tourism Rebounds to Pre-Pandemic Levels",
    description:
      "Tourism in Europe has fully recovered from the COVID-19 pandemic, with visitor numbers matching or exceeding 2019 figures.",
    content:
      'MADRID — Tourism in Europe has fully rebounded from the COVID-19 pandemic, with visitor numbers and spending now matching or exceeding pre-pandemic levels across most of the continent.\n\nAccording to data released by the European Travel Commission (ETC), international tourist arrivals in the first quarter of 2023 were 1% higher than the same period in 2019, marking a significant milestone in the industry\'s recovery.\n\n"After three challenging years, European tourism has demonstrated remarkable resilience," said Miguel Sanz, President of the ETC. "The complete recovery has arrived earlier than many experts predicted."\n\nSouthern European destinations have seen particularly strong performance. Greece reported a 12% increase in international arrivals compared to 2019, while Portugal (8%), Spain (6%), and Italy (5%) also recorded significant gains. Croatia has seen a 15% increase in overnight stays compared to its record year of 2019.\n\nThe recovery has been driven by several factors, including pent-up demand after years of travel restrictions, the elimination of all COVID-related entry requirements across the EU, increased air connectivity, and the strong U.S. dollar making European travel more affordable for American tourists.\n\n"We\'re seeing not just a return to pre-pandemic patterns but new trends emerging," explained Sanz. "There\'s increased interest in secondary destinations and outdoor experiences, longer average stays, and a growing emphasis on sustainable tourism options."\n\nThe robust recovery has brought challenges, however, with popular destinations like Barcelona, Amsterdam, and Venice reintroducing or strengthening measures to manage overtourism.\n\n"The focus now must be on sustainable growth," said Sanz. "We need to ensure tourism benefits local communities and economies while preserving the cultural and natural assets that make Europe an attractive destination."',
    author: "Carlos Mendez",
    publishedAt: "2023-05-07T11:30:00Z",
    category: "Travel",
    imageUrl: "/placeholder.svg?height=600&width=800&query=European tourism Venice gondola",
    imageCaption: "Tourists in Venice, Italy, one of Europe's most visited destinations",
  },
  {
    id: "10",
    title: "European Space Agency Unveils New Mission to Jupiter's Moons",
    description:
      "The ESA has announced a mission to explore Jupiter's icy moons, searching for conditions that could support life.",
    content:
      'DARMSTADT — The European Space Agency (ESA) has unveiled plans for an ambitious new mission to explore Jupiter\'s icy moons, with a particular focus on searching for conditions that could support extraterrestrial life.\n\nThe mission, named "JUICE" (Jupiter Icy Moons Explorer), is scheduled to launch in 2024 and will reach the Jovian system by 2031 after a journey of over 600 million kilometers.\n\n"This is one of the most ambitious missions in ESA\'s history," said ESA Director General Josef Aschbacher at a press conference at the European Space Operations Centre in Darmstadt, Germany. "JUICE will help us answer fundamental questions about the potential for life in our solar system beyond Earth."\n\nThe spacecraft will spend at least three years making detailed observations of Jupiter and three of its largest moons: Ganymede, Callisto, and Europa. These moons are believed to harbor vast oceans of liquid water beneath their icy surfaces, making them prime candidates in the search for habitable environments.\n\n"We know these moons have subsurface oceans with more water than all of Earth\'s oceans combined," explained mission scientist Dr. Charlotte Lange. "What we don\'t know is whether they have the other conditions necessary for life, such as energy sources and organic compounds."\n\nJUICE will carry ten state-of-the-art instruments, including ice-penetrating radar to map the subsurface oceans, a magnetometer to study the moons\' magnetic fields, and spectrometers to analyze their chemical composition.\n\nThe mission will culminate with JUICE entering orbit around Ganymede, making it the first spacecraft to orbit a moon other than Earth\'s. This will allow for unprecedented detailed study of the largest moon in our solar system.\n\n"Ganymede is particularly interesting because it\'s the only moon in our solar system known to generate its own magnetic field," said Dr. Lange. "This suggests a complex internal structure that we\'re eager to understand better."\n\nThe €1.6 billion mission represents a significant investment in Europe\'s space exploration capabilities and involves collaboration with NASA and the Japanese space agency JAXA.\n\n"Space exploration is a field where international cooperation is essential," said Aschbacher. "The discoveries from JUICE will belong to all of humanity and could fundamentally change our understanding of where life might exist in our solar system."',
    author: "Lukas Schmidt",
    publishedAt: "2023-05-06T13:15:00Z",
    category: "Science",
    imageUrl: "/placeholder.svg?height=600&width=800&query=Jupiter icy moons space mission",
    imageCaption: "Artist's impression of the JUICE spacecraft near Jupiter",
  },
]

// Generate more mock articles for different categories
const generateMockArticles = (): Article[] => {
  const baseArticles = [...mockArticles]
  const categories = ["Europe", "World", "Business", "Technology", "Sports", "Lifestyle", "Health", "Science"]

  // Generate 5 more articles for each category
  categories.forEach((category) => {
    for (let i = 0; i < 5; i++) {
      const id = `${baseArticles.length + 1}`
      baseArticles.push({
        id,
        title: `${category} News Article ${i + 1}`,
        description: `This is a sample description for a ${category.toLowerCase()} news article.`,
        content: `This is sample content for a ${category.toLowerCase()} news article. It would contain multiple paragraphs of detailed information about the topic.\n\nThis is the second paragraph of the article with more information.\n\nAnd this is the third paragraph with concluding remarks.`,
        author: "NWIH Staff",
        publishedAt: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
        category,
        imageUrl: `/placeholder.svg?height=600&width=800&query=${category} news`,
      })
    }
  })

  return baseArticles
}

const allArticles = generateMockArticles()

interface GetNewsParams {
  category?: string
  region?: string
  count?: number
}

export async function getNews({ category, region, count = 10 }: GetNewsParams): Promise<Article[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredArticles = [...allArticles]

  if (category && category !== "general") {
    filteredArticles = filteredArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
  }

  if (region === "europe") {
    filteredArticles = filteredArticles.filter(
      (article) =>
        article.category === "Europe" ||
        article.content.toLowerCase().includes("europe") ||
        article.content.toLowerCase().includes("european"),
    )
  }

  // Sort by date (newest first)
  filteredArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return filteredArticles.slice(0, count)
}

export async function getArticle(id: string): Promise<Article | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const article = allArticles.find((article) => article.id === id)
  return article || null
}

export async function getRelatedNews(category: string, count: number, excludeId?: string): Promise<Article[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const relatedArticles = allArticles.filter(
    (article) => article.category === category && (!excludeId || article.id !== excludeId),
  )

  // Sort by date (newest first)
  relatedArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return relatedArticles.slice(0, count)
}

export async function searchNews(query: string): Promise<Article[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (!query.trim()) return []

  const searchTerms = query.toLowerCase().split(" ")

  const results = allArticles.filter((article) => {
    const titleMatch = searchTerms.some((term) => article.title.toLowerCase().includes(term))

    const contentMatch = searchTerms.some((term) => article.content.toLowerCase().includes(term))

    const descriptionMatch = searchTerms.some((term) => article.description.toLowerCase().includes(term))

    return titleMatch || contentMatch || descriptionMatch
  })

  // Sort by relevance (simple algorithm: count occurrences of search terms)
  results.sort((a, b) => {
    const scoreA = getRelevanceScore(a, searchTerms)
    const scoreB = getRelevanceScore(b, searchTerms)
    return scoreB - scoreA
  })

  return results
}

function getRelevanceScore(article: Article, searchTerms: string[]): number {
  let score = 0

  searchTerms.forEach((term) => {
    // Title matches are weighted higher
    const titleMatches = (article.title.toLowerCase().match(new RegExp(term, "g")) || []).length
    score += titleMatches * 3

    // Description matches
    const descMatches = (article.description.toLowerCase().match(new RegExp(term, "g")) || []).length
    score += descMatches * 2

    // Content matches
    const contentMatches = (article.content.toLowerCase().match(new RegExp(term, "g")) || []).length
    score += contentMatches
  })

  return score
}
