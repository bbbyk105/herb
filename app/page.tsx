export default function Home() {
  return (
    <div className="bg-white text-black">
      <header className="relative h-[1080px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images2/fv_pc_01.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-[76.8px] top-[76.8px]">
          <div className="font-(--font-display) text-[40px] leading-none tracking-[0.25em] text-white">
            herbacie
          </div>
          <div className="mt-2 text-[13px] tracking-[0.55em] text-white/90">
            LABO
          </div>
        </div>
        <a
          href="#reserve"
          className="absolute right-0 top-[859.75px] block h-[160.25px] w-[50px]"
          aria-label="reserve"
        >
          <img
            src="/images2/reserve.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </a>
      </header>

      <main className="mx-auto w-full max-w-[1920px]">
        {/* Who we are */}
        <section className="px-[360px] pt-[40px]">
          <div className="mx-auto w-[1200px]">
            <div className="pt-[50px]">
              <div className="flex items-center gap-2 text-[13px] leading-[26px] tracking-[0.04em] text-black">
                <span className="h-px w-5 bg-black/60" />
                <span className="lowercase">who we are</span>
              </div>
              <h2 className="mt-2 font-(--font-display) text-[25.6px] leading-[28.16px] tracking-[0.02em] text-black">
                herbacie LABO
              </h2>
              <p className="mt-8 text-[14px] leading-[25.2px] text-black">
                東京・恵比寿にある herbacie LABO は、
                herbacieの哲学と確かな技術で、 心・からだ・精神をまるごと整える
                トータルサロンです。
              </p>
            </div>

            <div className="mt-[100px] grid grid-cols-2 gap-6">
              <img
                src="/images2/herbacie_labo_01.png"
                alt=""
                className="h-[404.25px] w-[588px] object-cover"
              />
              <img
                src="/images2/herbacie_labo_02.png"
                alt=""
                className="h-[404.25px] w-[588px] object-cover"
              />
            </div>

            <div className="relative mt-[70px] pb-[80px]">
              <h3 className="ml-[76.8px] text-[20.8px] leading-[22.88px] text-black">
                herbacieの哲学とは
              </h3>
              <div className="ml-[76.8px] mt-10 text-[14px] leading-[25.2px] text-black">
                <p>
                  フィトテラピー*植物療法を軸に、
                  「五行思想」と「五感」のつながりに着目した〈五行五感〉。
                </p>
                <p className="mt-4">
                  東洋の「五行思想」── 木・火・土・金・水という自然界の循環、
                  人間が持つ「五感」── 視覚・聴覚・嗅覚・味覚・触覚。
                </p>
                <p className="mt-4">
                  自然の循環と心身の内なる調和を尊び、
                  あなたの心とからだに寄り添うセルフケアを herbacie
                  LABOは提案します。
                </p>
              </div>

              <img
                src="/images2/herbacie_labo_bg.png"
                alt=""
                className="absolute right-[20px] top-[110px] h-[272.94px] w-[400px] object-contain opacity-60"
              />
            </div>
          </div>
        </section>

        {/* Floor Guide */}
        <section className="px-[360px] pt-0">
          <div className="mx-auto w-[1200px]">
            <div className="ml-[76.8px] flex items-center gap-2 text-[13px] leading-[26px] tracking-[0.04em] text-black">
              <span className="h-px w-5 bg-black/60" />
              <span className="lowercase">our spaces</span>
            </div>
            <h2 className="ml-[76.8px] mt-2 text-[25.6px] leading-[28.16px] text-black">
              Floor Guide
            </h2>

            <div className="ml-[76.8px] mt-10 grid grid-cols-3 gap-[30px]">
              {[
                {
                  floor: "1F",
                  title: "herbacie tea shop",
                  img: "/images2/1f.png",
                  desc: "世界各地から厳選した、完全無農薬・酸化防止剤不使 用のハーブをブレンド。身体の状態やお悩みに合わ せたハーブティーで、日常のセルフケアをサポート します。",
                },
                {
                  floor: "2F",
                  title: "circulation care",
                  img: "/images2/2f.png",
                  desc: "最高品質の植物だけを使用したハーバルインナース チームや、オリジナルハーブ精油を使ったボディト リートメント。プライベートな空間で、心身ともに深 くリラックスするひとときをお楽しみください。",
                },
                {
                  floor: "3F",
                  title: "body balance care",
                  img: "/images2/3f.png",
                  desc: "緑に囲まれた自然の中で行うマンツーマンのピラテ ィス。精油ミストを呼吸から取り入れることで、身体 がよりほぐれ、心身のバランスが整います。",
                },
              ].map((c) => (
                <div key={c.floor} className="pt-[30px]">
                  <div className="flex items-end gap-2">
                    <div className="text-[20.8px] leading-[25px] text-black">
                      {c.floor}
                    </div>
                    <div className="text-[14px] leading-[22px] text-black">
                      {c.title}
                    </div>
                  </div>
                  <img
                    src={c.img}
                    alt=""
                    className="mt-[30px] h-[226.33px] w-[328.78px] object-cover"
                  />
                  <p className="mt-4 text-[14px] leading-[25.2px] text-black">
                    {c.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex h-12 w-full items-center justify-center border border-muted text-[14px] leading-[25.2px] text-black hover:bg-black/5"
                  >
                    View more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reserve */}
        <section id="reserve" className="mt-[40px] bg-accent py-10">
          <div className="mx-auto w-[1200px] px-[76.8px]">
            <div className="flex items-center gap-2 text-[13px] leading-[26px] tracking-[0.04em] text-white">
              <span className="h-px w-5 bg-white/70" />
              <span className="lowercase">schedule a session</span>
            </div>
            <h2 className="mt-2 text-[25.6px] leading-[28.16px] text-white">
              Reserve
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-[30px]">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center border border-white/70 text-[14px] leading-[25.2px] text-white hover:bg-white/10"
              >
                Reserve 1
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center border border-white/70 text-[14px] leading-[25.2px] text-white hover:bg-white/10"
              >
                Reserve 2
              </a>
            </div>
          </div>
        </section>

        {/* Information */}
        <section className="px-[360px] pt-[50px]">
          <div className="mx-auto grid w-[1200px] grid-cols-[502.5px_1fr] gap-[50px]">
            <div className="pt-[50px]">
              <div className="ml-[76.8px] flex items-center gap-2 text-[13px] leading-[26px] tracking-[0.04em] text-black">
                <span className="h-px w-5 bg-black/60" />
                <span className="lowercase">how to find us</span>
              </div>
              <h2 className="ml-[76.8px] mt-2 text-[25.6px] leading-[28.16px] text-black">
                Information
              </h2>

              <div className="ml-[76.8px] mt-8">
                <h3 className="text-[20.8px] leading-[22.88px] text-black">
                  営業時間
                </h3>
                <dl className="mt-8 grid w-[160px] gap-y-2 text-[14px] leading-[25.2px]">
                  <div className="grid grid-cols-[72px_1fr] gap-x-2">
                    <dt>平日</dt>
                    <dd>10：30 - 20：00</dd>
                  </div>
                  <div className="grid grid-cols-[72px_1fr] gap-x-2">
                    <dt>土日祝</dt>
                    <dd>10：30 - 19：30</dd>
                  </div>
                  <div className="grid grid-cols-[72px_1fr] gap-x-2">
                    <dt>定休日</dt>
                    <dd>不定休</dd>
                  </div>
                </dl>
              </div>

              <div className="ml-[76.8px] mt-14">
                <h3 className="text-[20.8px] leading-[22.88px] text-black">
                  店舗情報
                </h3>
                <p className="mt-8 text-[14px] leading-[25.2px]">
                  〒150 - 0013 東京都渋谷区恵比寿3 - 28 - 12
                  <br />
                  tel 03 - 6432 - 5177
                </p>
                <p className="mt-6 text-[14px] leading-[25.2px]">
                  JR恵比寿駅 西口から徒歩 10分
                  <br />
                  JR恵比寿駅 東口改札 スカイウォーク(動く歩道)出口よ り徒歩 3分
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex h-12 w-[348.91px] items-center justify-center border border-muted text-[14px] leading-[25.2px] hover:bg-black/5"
                >
                  Access
                </a>
              </div>
            </div>

            <div className="pt-[50px]">
              <img
                src="/images2/herbacie_labo_03.png"
                alt=""
                className="h-[339.55px] w-[493.91px] object-cover"
              />
              <img
                src="/images2/herbacie_labo_04.png"
                alt=""
                className="mt-5 h-[339.55px] w-[493.91px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-[360px] pt-[40px]">
          <div className="mx-auto w-[1200px]">
            <div className="ml-[76.8px] flex items-center gap-2 text-[13px] leading-[26px] tracking-[0.04em] text-black">
              <span className="h-px w-5 bg-black/60" />
              <span className="lowercase">your questions, answered</span>
            </div>
            <h2 className="ml-[76.8px] mt-2 text-[25.6px] leading-[28.16px] text-black">
              FAQ
            </h2>
            <ul className="mt-8 border-t border-muted">
              {[
                "予約制ですか？",
                "予約方法は何がありますか？",
                "駐車場はありますか？",
                "ピラティス、整体の持ち物はありますか？",
                "メイクしたままでも大丈夫ですか？",
                "施術前後はお食事をとっても大丈夫ですか？",
                "生理中でも予約できますか？",
                "子ども連れでも予約できますか？",
                "男性でも利用可能ですか？",
                "回数券はありますか？",
                "ギフト券はありますか？",
                "支払い方法は何がありますか？",
                "妊娠中でも予約可能ですか？",
                "未成年でも予約はできますか？",
              ].map((q) => (
                <li
                  key={q}
                  className="flex items-center gap-4 border-b border-muted py-5 text-[14px] leading-[25.2px]"
                >
                  <span className="w-3">Q</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-[80px] bg-paper py-[30px] text-black">
        <div className="mx-auto flex w-full max-w-[1920px] items-end justify-between px-6 sm:px-10 lg:px-[115.19px]">
          <div className="w-[222.59px] text-[14px] leading-[25.2px]">
            <div className="text-[24px] leading-[43.2px]">TEL.</div>
            <a href="tel:0364325177" className="mt-2 inline-block underline">
              03-6432-5177
            </a>
            <p className="mt-6">〒150 - 0013 東京都渋谷区恵比寿 3 - 28 - 12</p>
            <div className="mt-6">
              <div className="grid grid-cols-[72px_1fr] gap-x-2">
                <div>平日</div>
                <div>10：30 - 20：00</div>
              </div>
              <div className="grid grid-cols-[72px_1fr] gap-x-2">
                <div>土日祝</div>
                <div>10：30 - 19：30</div>
              </div>
              <div className="grid grid-cols-[72px_1fr] gap-x-2">
                <div>定休日</div>
                <div>不定休</div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <a href="#" className="block">
                Instagram
              </a>
              <a href="#" className="block">
                privacy policy
              </a>
              <a href="#" className="block">
                herbacie ONLINE STORE
              </a>
            </div>
          </div>

          <div className="text-right">
            <div className="font-(--font-display) text-[28px] leading-none tracking-[0.25em]">
              herbacie
            </div>
            <div className="mt-2 text-[13px] tracking-[0.35em]">
              © 2025 herbacie LABO
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
