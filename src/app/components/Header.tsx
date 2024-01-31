
export default function Header() {
    type Sublink = {
      title: string;
      route: string;
    };
    type HeaderLink = {
      title: string;
      sublinks: Sublink[];
      route: string;
    };
    const HeaderLinksList: HeaderLink[] = [
      { title: "Home", sublinks: [], route: "/" },
      { title: "Flower", sublinks: [], route: "/flower" },
      {
        title: "Thing1",
        sublinks: [
          { title: "sub1", route: "/" },
          { title: "sub2", route: "/" },
        ],
        route: "/",
      },
      {
        title: "Thing2",
        sublinks: [
          { title: "sub3", route: "/" },
          { title: "sub4", route: "/" },
        ],
        route: "/",
      },
    ];
    return (
      <div
        className="max-h-[330px] min-h-[150px] border
            h-[30vw] flex flex-col items-center justify-center header pb-1 pt-10"
      >
        <div className="max-w-content text-6xl flex-col flex align-middle items-center">
          Logo
          {/* <Image src="svgs/logo.svg" width="50px" alt="logo" /> */}
        </div>
        <ul
          id="header-all-links"
          className="flex-2 w-full flex justify-around items-right"
        >
          {HeaderLinksList.map((link: HeaderLink, index) =>
            link.sublinks.length > 0 ? (
              <Tooltip
                content={
                  <ul className='flex flex-col border p-3 bg-black text-white static' key={index}>
                    {link.sublinks.map((sublink: Sublink) => (
                      <Link href={sublink.route} key={sublink.title}>
                        {sublink.title}
                      </Link>
                    ))}
                  </ul>
                }
                placement="bottom"
              >
                <Link href={link.route} className="header-link">
                  {link.title}
                </Link>
              </Tooltip>
            ) : (
              <Link href={link.route} className="header-link">
                {link.title}
              </Link>
            )
          )}
        </ul>
      </div>
    );
  }
  