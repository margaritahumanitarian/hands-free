export type ActionOption = {
  state?: string;
  type: string;
  title: string;
  actionType: string;
  actions?: ActionOption[];
  script?: string;
};
