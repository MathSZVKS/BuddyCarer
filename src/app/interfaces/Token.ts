export interface Token {
  id: number;
  token: string;
  tokenType: string;
  revoked: boolean;
  expired: boolean;
}
