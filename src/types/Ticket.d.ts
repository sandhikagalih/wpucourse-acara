interface ITicket {
  _id?: string;
  name?: string;
  price?: number | string;
  quantity?: number | string;
  description?: string;
  events?: string;
}

interface ICart {
  events: string;
  ticket: string;
  quantity: number;
}

export type { ITicket, ICart };
