import rss from "@astrojs/rss";

export const get = async () => {
  return rss({
    title: "Toadland Telegram Channel",
    description: "RSS feed for the Toadland Telegram channel.",
    site: "https://tdld.vercel.app", // замени на свой домен
    items: await fetch("https://rsshub.app/telegram/channel/toadland")
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => ({
          title: item.title,
          description: item.description,
          link: item.link,
          pubDate: new Date(item.pubDate).toUTCString(),
        }))
      ),
  });
};
