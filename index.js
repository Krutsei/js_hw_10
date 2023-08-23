// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. 
//Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

const str1 = ["google", "gpt", "safari", "git"]

let string = ""
for (let i = 0; i < str1.length; i += 1) {
    let element = str1[i];
    element += ","
    string += element
}
console.log(string)

const str2 = ["instagram", "facebook", "tikitoki", "shazam"]
console.log(str2.join(","))

// 2. Працюємо з колекцією карток в trello. Метод splice()

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"]

const deletedCards = cards.splice(3, 1);
cards.push("Card-6")
console.log(cards)

const cardToInsert = "Card-6";
const InsertCard = cards.splice(2, 0, cardToInsert)
console.log(cards);