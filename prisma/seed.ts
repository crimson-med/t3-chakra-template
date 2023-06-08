import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "root@gm.cm",
    password: "$2a$10$TLtC603wy85MM./ot/pvEec0w2au6sjPaOmLpLQFbxPdpJH9fDwwS", // myPassword42
    posts: {
      create: [
        {
          title: "The Evolution of Gaming with Cryptocurrency and NFTs",
          content: `The integration of cryptocurrency into the gaming industry has opened up new avenues for players to own, trade, and earn rewards through gaming activities. The play-to-earn model, which enables players to earn in-game crypto tokens that can be exchanged for fiat money in real life, has gained popularity in recent years [1]. GameFi, a subcategory of DeFi, allows gamers to play and earn cryptocurrency, creating a game-first approach to blockchain gaming [2]. This has led to the emergence of new gaming coins and NFTs, which have transformed the way players interact with and experience games [3].

            The rise of NFTs in gaming has been a game-changer, allowing players to own unique digital assets that are verified on a blockchain. In P2E NFT games, players can earn assets such as weapons, skins, and characters, which they can then trade or sell to other players [4]. CryptoKitties, a blockchain-based game that allowed users to buy, sell, and breed virtual cats, invented Non-Fungible Tokens (NFTs) in 2012 [5]. NFTs have revolutionized the gaming industry by enabling players to truly own their in-game assets, which has created a new level of engagement and investment in the gaming experience [6].
            
            The impact of cryptocurrency and NFTs on the gaming industry has been significant, with the emergence of new gaming models and revenue streams. In-game assets that were once considered worthless now have real-world value, and players can earn a living through gaming activities [7]. The GameFi sector has achieved unprecedented growth in recent years, attracting investors and creating new opportunities for players to engage with the gaming experience [8]. As the NFT video game industry continues to evolve, it is likely that we will see even more innovation and transformation in the way players interact with games [9].
            
            
            REFERENCES:
            1. NFT Gaming: A Brief Overview Of Advancement In The .... (n.d.) Retrieved June 4, 2023, from www.programsbuzz.com
            2. Web3 Gaming — What do Blockchain, Crypto, NFTs & the .... (n.d.) Retrieved June 4, 2023, from entrepreneurshandbook.co
            3. What Are Crypto Gaming Coins?. (n.d.) Retrieved June 4, 2023, from academy.binance.com/en/articles/what-are-crypto-gaming-coins
            4. The Rise of NFTs in Gaming: How Blockchain Technology .... (n.d.) Retrieved June 4, 2023, from medium.com
            5. The Evolution and Rise of Non-Fungible Tokens (NFTs) in .... (n.d.) Retrieved June 4, 2023, from www.concret.io
            6. NFT Gaming: the new evolution of videogames. (n.d.) Retrieved June 4, 2023, from brightnode.io/nft-gaming-the-new-evolution-of-videogames/
            7. The Rise of Blockchain Gaming: Why NFT's Are Changing .... (n.d.) Retrieved June 4, 2023, from www.uktech.news
            8. How GameFi contributes to the growth of crypto and NFTs. (n.d.) Retrieved June 4, 2023, from cointelegraph.com
            9. How NFT video games crashed and burned. (n.d.) Retrieved June 4, 2023, from www.polygon.com 
            `,
          tags: {
            connectOrCreate: [
              { where: { tag: "nft" }, create: { tag: "nft" } },
              { where: { tag: "crypto" }, create: { tag: "crypto" } },
              { where: { tag: "gaming" }, create: { tag: "gaming" } },
              { where: { tag: "web3" }, create: { tag: "web3" } },
            ],
          },
        },
        {
          title: "The Hype Around NFTs and Pudgy Penguins",
          content: `NFTs, or non-fungible tokens, have become increasingly popular in recent years, particularly among digital artists and gaming companies. NFTs are unique crypto tokens that can be used to represent digital assets such as art, music, and videos. The ownership of an NFT is stored on a blockchain, making it a provably unique and valuable asset. The popularity of NFTs can be attributed to their ability to provide a new way for artists to monetize their work and for collectors to own unique digital assets that cannot be replicated [2]. As a result, the hype surrounding NFTs continues to grow, with new projects and collections constantly emerging.

          Pudgy Penguins is one such NFT project that has gained significant attention in the digital art space. The collection consists of 8,888 unique NFTs, each featuring a cute, chubby cartoon penguin with randomized traits such as hats or accessories. Pudgy Penguins has successfully carved out its niche in the digital art space and has even expanded into a web3 IP company, releasing a line of toys called Pudgy Toys [4][5]. Despite facing controversies along the way, the collection continues to thrive, with its cheerful and lovable penguins resonating with many collectors.
          
          The hype around NFTs and Pudgy Penguins can be attributed to the unique allure of digital collectibles and the potential for financial gain. However, the NFT market has also faced criticism for being unsustainable and environmentally damaging. Despite this, the popularity of NFTs and collections like Pudgy Penguins continue to grow, with many individuals and companies investing in these digital assets. The future of NFTs remains uncertain, but their impact on the digital art world and the potential for new forms of ownership and monetization cannot be ignored.`,
          tags: {
            connectOrCreate: [
              { where: { tag: "nft" }, create: { tag: "nft" } },
              { where: { tag: "crypto" }, create: { tag: "crypto" } },
              { where: { tag: "pfp" }, create: { tag: "pfp" } },
              { where: { tag: "pudgy" }, create: { tag: "pudgy" } },
            ],
          },
        },
      ],
    },
  },
  {
    email: "john@gm.cm",
    password: "$2a$10$k2rXCFgdmO84Vhkyb6trJ.oH6MYLf141uTPf81w04BImKVqDbBivi", // random42
  },
  {
    email: "jane@gm.cm",
    password: "$2a$10$lTlNdIBQvCho0BoQg21KWu/VVKwlYsGwAa5r7ctOV41EKXRQ31ING", // iLikeTurtles42
    posts: {
      create: [
        {
          title: "Generating evolutive NFTs",
          content:
            "In this article we will look at generating awesome nfts that are able to evolve over time or in regards to data.",
          tags: {
            connectOrCreate: [
              { where: { tag: "nft" }, create: { tag: "nft" } },
              { where: { tag: "crypto" }, create: { tag: "crypto" } },
            ],
          },
        },
        {
          title: "Jon Stewart and the Burden of History",
          content: `Jon Stewart has made a career of avoiding "Whooo" humor. He has flattered the prejudices of his audience, but he has always been funny, and he has always made them laugh. At the Juan Williams taping, however, at least half of Stewart's jokes elicited the sound of Whooo! instead of the sound of laughter. He's been able to concentrate his comedy into a kind of shorthand — a pause, or a raised eyebrow, is often all that is necessary now — but a stranger not cued to laugh could be forgiven for not laughing, indeed for thinking that what was going on in front of him was not comedy at all but rather high-toned journalism with a sense of humor. Which might be how Jon Stewart wants it by now.`,
          tags: {
            connectOrCreate: [
              { where: { tag: "comedy" }, create: { tag: "comedy" } },
              { where: { tag: "culture" }, create: { tag: "culture" } },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);

  try {
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      for (const u of userData) {
        const user = await prisma.user.create({
          data: u,
        });
        console.log(`Created user with id: ${user.id}`);
      }
    }
  } catch (e) {
    console.log("Error creating the user. Maybe already in the DB");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
