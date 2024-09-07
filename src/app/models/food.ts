import { Image } from "./image";

export interface Food {
    id: number;
    name: string;
    image?: Image; //es opcional
}