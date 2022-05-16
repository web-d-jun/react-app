export interface SubMenuEntity {
  id: number;
  location: string;
  name: string;
  selected: boolean;
}

export interface Props {
  subMenu: SubMenuEntity[];
}
