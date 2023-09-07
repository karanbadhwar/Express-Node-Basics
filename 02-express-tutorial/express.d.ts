declare namespace Express {
  export interface Request {
    user: {
      id: number;
      name: string;
      // Other properties you want to add
    };
  }
}
