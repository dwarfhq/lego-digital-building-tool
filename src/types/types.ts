export type Brick = {
  color: string;
  element_id: string;
  name: string;
  texture: string | null;
  amount: number;
};

export type Activity = {
  bricks: Brick[];
  name: string;
  slug: string;
};
