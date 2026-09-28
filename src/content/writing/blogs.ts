/** Section 03 — the essays, in Sara's own words. */

export type Blog = {
  slug: string;
  title: string;
  /** The line that sits under the title, in her own framing. */
  standfirst: string;
  paragraphs: readonly string[];
};

export const blogs: readonly Blog[] = [
  {
    slug: "deforestation-is-degrading-our-future",
    title: "Deforestation Is Degrading Our Future",
    standfirst: "Mumbai is growing — but what are we losing in the process?",
    paragraphs: [
      "In this modern world, we constantly seek comfort, convenience, and a better lifestyle. Yet, in our pursuit of “modern” living, we often forget our roots and the essential role nature plays in human life. The City of Dreams is slowly becoming a city of 0% space and 100% pollution.",
      "From Marine Lines to Matunga, almost every road, street, and even the smallest lane is crowded — not only with traffic, but also with constant construction and development. While these projects are often presented as upgrades to our lifestyle, they also contribute to the destruction of green spaces.",
      "Mumbai today seems to be all about cafés, skyscrapers, luxury apartments, and endless construction. Sure, Aarey Colony used to be a sprawling green space, but apparently the aesthetic of grey concrete pillars surrounded by dust is far more “modern.” And when we need some “fresh air”? We simply roll down our car windows and fill our lungs with the concentrated exhaust of idling autos and vehicles.",
      "A sea-view apartment in Mumbai now comes with more than electricity and water — it also includes a 24/7 complimentary smog experience. Quite the package! At this rate, we may not even need gym memberships. With Mumbai’s rising temperatures, crowded platforms, and increasing heat, the city already offers its own natural sauna. Apparently, burning coal, cutting trees, and replacing mangroves with concrete makes more economic sense than protecting a banyan tree or preserving a forest. After all, it is called “development,” right? But development should not come at the cost of our ability to breathe.",
      "Trees are not obstacles to progress. They clean our air, reduce temperatures, control flooding, support wildlife, and make cities liveable. Once they disappear, no amount of luxury infrastructure can replace what they provide. At this pace, we risk creating a future filled with concrete, dust, heat, and smog.",
      "Stopping deforestation is no longer simply about protecting trees — it is about protecting our own future.",
    ],
  },
  {
    slug: "behind-the-hallways",
    title: "Behind the Hallways: The Darker Side of Student Life",
    standfirst:
      "A series that was emotionally difficult to watch, yet impossible to ignore.",
    paragraphs: [
      "When I started watching ‘13 Reasons Why’, I expected a typical teenage high school drama. A few friendships, relationships, arguments and the usual chaos of growing up. It did not take long to realise that this was going to be something very different. There were moments when I genuinely wanted to stop watching. Not because the series was boring, but because it was emotionally exhausting. One difficult situation followed another, and some episodes left me thinking about them long after I had completed watching them.",
      "What stayed with me most was the version of student life the series chose to show. School is often remembered through friendships, events, classrooms and the excitement of growing up. But behind all of that can exist insecurity, social pressure, exclusion, humiliation and the constant fear of being judged. The hallways may look ordinary, but the people walking through them may be carrying things nobody else can see. The series also captures how quickly a small incident can become something much bigger.",
      "A rumour no longer stays between a few people. A photograph can spread within minutes. A private moment can suddenly become public. What makes it worse is how easily people can become part of it without feeling responsible. They forward something, laugh at it or talk about it simply because everyone else is doing the same. That felt uncomfortably realistic.",
      "One person who really holds the series together for me is Clay Jensen. Clay is not the loudest or most dramatic character, but he becomes the emotional centre of the story. As he listens to Hannah’s tapes, the school he thought he understood begins to look completely different. People he knew suddenly have another side to them. Familiar places carry different memories. With every tape, Clay becomes less of a listener and more emotionally involved in what happened.",
      "The episode involving Clay’s own tape is especially powerful. By that point, both Clay and the audience are almost afraid of what they are going to hear. You expect some terrible revelation. Instead, the scene becomes about regret. Clay begins questioning what he could have done differently, whether he should have stayed, whether he should have understood more. His helplessness is difficult to watch because there is no simple answer for him. That is why Clay works so well as a character. Through him, the audience is not just hearing Hannah’s story. We are reacting to it. We feel his anger, his confusion and, most of all, his need to understand something that can never be fully undone.",
      "At the same time, I understand why ‘13 Reasons Why’ has been so heavily criticised. The subjects it deals with — suicide, trauma and mental health — are extremely sensitive. Real mental-health struggles are complicated, deeply personal and cannot be reduced to one event or one simple chain of causes. For me, the show is less about explaining why things happen and more about showing how deeply people can affect one another.",
      "And perhaps that is the part that stayed with me most.",
      "A careless comment may last only a few seconds for the person saying it. A rumour may be nothing more than gossip to the people spreading it. But for the person on the receiving end, that same moment can feel much differently than you expect. That is probably why I would never describe ‘13 Reasons Why’ as an enjoyable series. It is uncomfortable, frustrating and sometimes genuinely difficult to watch. But it also stays with you.",
      "Not because every part of it is perfect, and not because it has all the answers, but because it forces you to look at student life from a side that is much easier to ignore. Behind the classrooms, friendships and crowded hallways, people may be dealing with things we know absolutely nothing about.",
      "And sometimes, the smallest thing you forget about becomes the thing someone else never does.",
    ],
  },
  {
    slug: "why-true-stories-fascinate-us",
    title: "Crime, Curiosity and Caution: Why True Stories Fascinate Us",
    standfirst:
      "Sometimes the stories that scare us also teach us how to stay alert.",
    paragraphs: [
      "A mysterious disappearance. A robbery that seems impossible. A criminal who manages to escape. An investigation with one missing piece of evidence. And suddenly, we want to know everything. True crime has become one of the most popular forms of entertainment today. Documentaries, podcasts, YouTube videos and web series based on real crimes attract millions of viewers.",
      "But why do we voluntarily spend hours watching stories about situations that we would never want to experience ourselves? For me, one of the biggest reasons is curiosity. Whenever we hear about an unusual crime, our minds automatically start asking questions. Who did it? How did they do it? Why did they do it? Could somebody have prevented it? And how were they finally caught?",
      "True crime gives us the opportunity to understand situations that are completely outside our normal everyday lives. But I also think there is another reason why true crime can be useful. It can prepare us for situations we may encounter in real life. By learning about scams, robberies, disappearances, cybercrime or other criminal cases, we become more aware of how certain situations develop.",
      "For example, hearing about different scams may make us more careful when someone asks for personal information or money. Learning how criminals sometimes gain people’s trust can make us more aware of suspicious behaviour. True crime stories can also remind us to pay attention to our surroundings, protect our personal information, inform someone about where we are going and take warning signs seriously. Of course, watching crime documentaries cannot prepare us for every dangerous situation.",
      "But awareness can make us more alert.",
      "Sometimes we hear about a crime and think, “I would never fall for that.” But after understanding exactly how the situation happened, we realise that ordinary people can easily become victims under the right circumstances. Another reason true crime fascinates us is psychology.",
      "Most people live their lives following basic rules of society. When somebody completely ignores those rules, we naturally wonder what made them think differently. Was it greed? Anger? Power? Revenge? Or simply opportunity?",
      "Trying to understand the criminal’s thinking becomes almost like solving a puzzle. Social media has taken this fascination even further. Today, people do not simply watch documentaries. They discuss evidence, analyse timelines and create their own theories. Sometimes viewers almost become amateur investigators. However, there is an important problem with true-crime entertainment. Behind every interesting case is a real person.",
      "A real family.",
      "And often, real suffering.",
      "It is very easy to become so interested in the mystery that we forget about the victims involved. Criminals can also become almost like celebrities when documentaries focus too much on their personalities and methods. That is why I think true crime should be consumed with some responsibility. For me, the attraction is not simply about watching something frightening. It is about understanding how real situations happen, learning how people behave under extreme circumstances and becoming more aware of things that could potentially happen around us.",
      "True crime entertains us because it contains mystery and suspense. But perhaps its greatest value is that it can leave us thinking beyond the case itself. We watch true crime to understand what happened — but sometimes, what we learn may help us recognise what could happen next.",
    ],
  },
];
