export interface Pokemon {
  id: string;
  localId: string | number;
  name: string;
  image: string;
  imageAlt: string;
  category: string;
  illustrator: string;
  rarity: string;
  hp: number;
  types: string[];
  evolveFrom: string;
  description: string;
}
