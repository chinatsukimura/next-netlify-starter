import { LinkCrewDiv, LinkCrewH3 } from "common";
export default function ChinatsunoVoice(){
  const items = [
    {
      src: "/user_4.jpeg",
      title: `頼れる人がいる安心感`,
      content: `リンクルーを知る前は、異業種からの転職で周りにエンジニアの知り合いが一人もいなくて不安でした。
      そんなときインスタ経由でリンクルーの存在を知り、交流会に飛び込んで見ることに！
      まだ会社に入社前でエンジニアについての知識が浅い私にいろいろなことを教えてくれました。
      リンクルーの皆さんとお話をしてエンジニアになることが楽しみになりました！
      そこからずっとお世話になっていて毎回いろんな知識を吸収できること、困ったときに相談できる場所があることが
      とてもありがたいです。いつもありがとうございます！
      `,
      name: "会社員 Cさん",
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      {items.map((value, index) =>
        <div key={index}>
          {<div className="flex flex-col gap-x-5 md:flex-row">
                <div className="w-[100%] md:basis-1/5 my-auto">
                  <img src={value.src} className="bg-none border-4 border-gray-300"/>
                </div>
                <div className="flex flex-col basis-4/5 my-auto">
                  <LinkCrewH3 title={value.title} className="text-left" />
                  <br />
                  <LinkCrewDiv title={value.content} className="text-left" />
                  <LinkCrewDiv title={value.name} className="text-right" />
                </div>
              </div>
          }
        </div>
      )}
    </div>
  );
}