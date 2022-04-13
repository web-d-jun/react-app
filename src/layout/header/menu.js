const menuItems = [
  {
    id: 0,
    name: "Data 상품",
    location: "/data",
    selected: false,
    subMenu: [
      {
        id: 0,
        name: "Infomation Map",
        location: "/data/infomap",
        selected: false,
      },
      {
        id: 1,
        name: "큐레이션 검색",
        location: "/data/curationsch",
        selected: false,
      },
      {
        id: 2,
        name: "데이터 조건 검색",
        location: "/data/alldata",
        selected: false,
      },
      {
        id: 3,
        name: "분석 모델 검색",
        location: "/data/modeldata",
        selected: false,
      },
    ],
  },
  {
    id: 1,
    name: "제공 Service",
    location: "/service",
    selected: false,
  },
  {
    id: 2,
    name: "Use Case",
    location: "/use-case",
    selected: false,
  },
  {
    id: 3,
    name: "Support",
    location: "/support",
    selected: false,
  },
];

export default menuItems;
