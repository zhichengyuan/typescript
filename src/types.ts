import { Color, Mark } from "./enums";

export type Deck = Card[];

export interface Card {
    getSring():string
}


export interface NormalCard extends Card{
    color:Color,
    mark:Mark
}

export interface Joker extends Card {
    type:"big" | "small"
}
