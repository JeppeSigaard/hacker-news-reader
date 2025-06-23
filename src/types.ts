export type Story = {
  by: string;
  decendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  text?: string;
  type: 'story' | 'job';
  url: string;
};

export type User = {
  id: string;
  about: string;
  created: number;
  karma: number;
  submitted: number[];
};
