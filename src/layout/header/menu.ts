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
    subMenu: [
      {
        id: 0,
        name: "분석/지원 서비스",
        location: "/service/analysis",
        selected: false,
      },
      {
        id: 1,
        name: "데이터 컨설팅 서비스",
        location: "/service/consulting",
        selected: false,
      },
      {
        id: 2,
        name: "가명정보 결합 서비스",
        location: "/service/combination",
        selected: false,
      },
    ],
  },
  {
    id: 2,
    name: "Use Case",
    location: "/use-case",
    selected: false,
    subMenu: [
      {
        id: 0,
        name: "Reference",
        location: "/use-case/reference",
        selected: false,
      },
      {
        id: 1,
        name: "활용 사례",
        location: "/use-case/usecase",
        selected: false,
      },
    ],
  },
  {
    id: 3,
    name: "Support",
    location: "/support",
    selected: false,
    subMenu: [
      {
        id: 0,
        name: "Contact Us",
        location: "/support/contactus",
        selected: false,
      },
    ],
  },
];

export default menuItems;
