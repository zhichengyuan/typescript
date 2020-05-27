import { Card, NormalCard, Joker } from "./types";
import { Mark, Color } from "./enums";

interface PublishResult {
    player1:Deck,
    player2:Deck,
    player3:Deck,
    left:Deck,
}

export class Deck {
    cards:Card[] = [];

    constructor(cards?:Card[]){
        if(cards) {
            this.cards = cards
        }else{
            this.init();
        }
    }

    private init() {
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
                this.cards.push(card)
            }

        }
        let joker:Joker = {
            type:"small",
            getSring() {
                return "jo"
            }
        }
        this.cards.push(joker);
        joker = {
            type:"big",
            getSring(){
                return "JO"
            }
        }
        this.cards.push(joker);
    }

    print(){
        let result = "\n";
        this.cards.forEach((card,i) => {
            result += card.getSring() + "\t";
            if((i+1) % 6 === 0) {
                result += "\n"
            }
            
        })
        console.log(result);
    }
    /***
     * 洗牌
     */
    shuffle(){
        for(let i = 0 ;i <this.cards.length;i++){
            const targetIndex = this.getRandom(0,this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }

    //发牌后得到的结果有4个card[]
    publish():PublishResult {
        let player1:Deck,player2:Deck,player3:Deck,left:Deck;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    private takeCards(n:number):Deck {
        const cards:Card[] = [];
        for(let i = 0;i < n;i++) {
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }

    /**
     * 无法取到最大值
     * @param min 
     * @param max 
     */
    private getRandom(min:number,max:number){
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
}