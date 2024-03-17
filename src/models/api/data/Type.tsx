import { IUser } from './User';

export interface IType {
  getId(): number;
  setId(id: number): void;

  getNom(): string;
  setNom(nom: string): void;

  getCreator(): IUser;
  setCreator(user: IUser): void;
}

export class Type implements IType {
  private id;
  private nom;
  private creator;

  constructor(id: number, nom: string, creator: IUser) {
    this.id = id;
    this.nom = nom;
    this.creator = creator;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }
  getCreator(): IUser {
    return this.creator;
  }

  setCreator(creator: IUser): void {
    this.creator = creator;
  }
}
