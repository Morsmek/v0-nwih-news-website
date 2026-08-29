import type { LiveUpdate, Job } from "./types"

export const liveUpdates: LiveUpdate[] = [
  {
    id: "l1",
    time: "08:42",
    datetime: "2026-08-29T06:42:00Z",
    title: "Commission to table 2040 climate laws before year-end",
    body: "Officials say the first legal texts — ETS reform and the industrial decarbonisation fund — will be published before December, giving Parliament and Council a runway into 2027.",
    tag: "CLIMATE",
  },
  {
    id: "l2",
    time: "08:15",
    datetime: "2026-08-29T06:15:00Z",
    title: "Leaders agree 90% emissions cut by 2040",
    body: "The European Council confirms a single headline target after overnight talks. Limited international credits will be allowed after 2036.",
    tag: "LIVE",
  },
  {
    id: "l3",
    time: "07:50",
    datetime: "2026-08-29T05:50:00Z",
    title: "Athens restores power to most neighbourhoods",
    body: "The grid operator says remaining outages are localised. Cooling centres will stay open through the weekend.",
    tag: "HEATWAVE",
  },
  {
    id: "l4",
    time: "06:40",
    datetime: "2026-08-29T04:40:00Z",
    title: "Record August nights in Athens, Rome and Seville",
    body: "Overnight lows stayed above 30°C in several Mediterranean districts. Madrid extends outdoor-work restrictions.",
    tag: "HEATWAVE",
  },
  {
    id: "l5",
    time: "22:10",
    datetime: "2026-08-28T20:10:00Z",
    title: "Gatekeeper says it will appeal DMA fine",
    body: "The company called the Commission's remedy 'technically unworkable' and said it will challenge both the fine and the product-design orders.",
    tag: "TECH",
  },
  {
    id: "l6",
    time: "20:20",
    datetime: "2026-08-28T18:20:00Z",
    title: "Commission confirms first major DMA penalty of 2026",
    body: "Investigators cited self-preferencing and the combining of personal data across services. A compliance deadline is attached.",
    tag: "TECH",
  },
  {
    id: "l7",
    time: "16:05",
    datetime: "2026-08-28T14:05:00Z",
    title: "ECB holds — deposit rate unchanged",
    body: "Lagarde: the stance is 'sufficiently restrictive.' Markets barely moved. A cut before year-end is still on the table if wages cool.",
    tag: "MARKETS",
  },
  {
    id: "l8",
    time: "11:30",
    datetime: "2026-08-28T09:30:00Z",
    title: "UCL draw: Real Madrid vs Bayern Munich, matchday one",
    body: "The league-phase draw hands Europe a heavyweight opening night in Madrid.",
    tag: "SPORT",
  },
]

export const jobs: Job[] = [
  {
    id: "brussels-correspondent",
    title: "Brussels correspondent",
    location: "Brussels, Belgium",
    team: "Newsroom",
    type: "Full-time",
    summary:
      "Cover the Commission, Council and Parliament. You will file breaking copy, explainers and a weekly Brussels Briefing. EU reporting experience required; French or Dutch a plus.",
  },
  {
    id: "video-editor",
    title: "Video editor",
    location: "London, United Kingdom",
    team: "NWIH Video",
    type: "Full-time",
    summary:
      "Cut daily packages, live hits and longer explainers. We work in Premiere and DaVinci. News judgement matters more than a showreel of effects.",
  },
  {
    id: "data-journalist",
    title: "Data journalist",
    location: "Berlin, Germany (hybrid)",
    team: "Investigations",
    type: "Full-time",
    summary:
      "Turn FOI releases, procurement data and satellite imagery into stories. Python or R, and a habit of showing your working.",
  },
  {
    id: "product-designer",
    title: "Product designer",
    location: "Remote, EU time zones",
    team: "Product",
    type: "Full-time",
    summary:
      "Design the reading experience on web and app. You will work with editorial on live blogs, video and a membership funnel that does not shout.",
  },
]
