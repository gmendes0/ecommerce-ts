import { Brand } from "./models/Brand";

interface Brand {
  name: string;
  logo: string;
}

interface Repository {
  create(data: object): object;
}
