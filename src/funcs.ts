import { Deck, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enums";

export function createDeck():Deck{
    const deck:Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    // console.log(marks);
    for (const m of marks) {
        // console.log(m);
        for(const c of colors) {
            const card:NormalCard = {
                color:c,
                mark:m,
                getSring(){
                    return this.color + this.mark
                }
            }
            deck.push(card)
        }

    }
    let joker:Joker = {
        type:"small",
        getSring() {
            return "jo"
        }
    }
    deck.push(joker);
    joker = {
        type:"big",
        getSring(){
            return "JO"
        }
    }
    deck.push(joker);
    return deck
}

export function printDeck(deck:Deck){
    let result = "\n";
    deck.forEach((card,i) => {
        
        
        result += card.getSring() + "\t";
        if((i+1) % 6 === 0) {
            result += "\n"
        }
        
    })
    console.log(result);
}