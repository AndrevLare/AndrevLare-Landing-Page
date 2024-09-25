const links = {
  portfolio: "https://andrevlare.github.io/Portfolio/",
  instagram: "https://www.instagram.com/andrevlare/",
  twitter: "https://x.com/Gorje_2022",
  threads: "https://www.threads.net/@andrevlare",
  facebook: "https://www.facebook.com/people/AndrevLare/61565446117582/",
  whatsapp: "http://wa.me/573197914026",
  email: "https://bit.ly/3XQ4QnG",
};

const openLink = (social) => {
  window.open(`${links[social]}`);
};
