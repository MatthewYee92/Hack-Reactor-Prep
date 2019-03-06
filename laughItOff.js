/*
 * Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
// define function laugh(num)

function laugh(num) {
    var messageHa = ""; 
    if (num > 0) {
        for (i = 0; i < num; i++) {
            messageHa += "ha";
        }
    }
    return messageHa + "!";
}
console.log(laugh(9));
