const data = [
  {
    heading: "Institute Partners",
    content: ["1", "2", "3", "4", "5", "6", "7"],
  },
];

function Footer() {
  return (
    <div className="bg-zinc-800 text-amber-50 flex ">
      <div className="flex">
        <div>
          <div>Masai</div>
          <div>Follow us</div>
          <div className="flex flex-wrap gap-4">
            <img src="" alt="i" />
            <img src="" alt="i" />
            <img src="" alt="i" />
            <img src="" alt="i" />
            <img src="" alt="i" />
            <img src="" alt="i" />
          </div>
        </div>
        <div className="flex gap-5 px-5">
          <div>
            <Component></Component>
          </div>
          <div>
            <Component></Component>
          </div>
          <div>
            <Component></Component>
          </div>
        </div>
      </div>
      <div>
        <div>Connect with us</div>
        <button className="px-3 py-1 bg-red-400 rounded-lg">
          Telegram link
        </button>
      </div>
    </div>
  );
}

function Component() {
  return (
    <>
      <div>
        {data.map((d, i) => (
          <div key={i}>
            <div className="text-2xl">{d.heading}</div>
            <div>
              {d.content.map((c, i) => (
                <div key={i} className="text-white px-1 py-2">
                  {c}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Footer;
