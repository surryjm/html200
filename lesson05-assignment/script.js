let answer;
let balance = [1000];

function beginBanking() {
  do {
    answer = prompt('Choose a selection:\n\n' + 'W: withdraw\n' + 'D: deposit\n' + 'B: view balance\n' + 'Q: quit\n');
    let currentBalance = balance.reduce(function(a, b) {
      return a + b;
      }, 0);
    
    switch (answer.toLowerCase()) {
    case 'w':
      let withdrawl = Number(prompt('Enter amount to withdraw:'));
        if (isNaN(withdrawl)) {
          alert('Input must be a number. Please try again.');
          break;
        } else if (withdrawl > currentBalance) {
            alert('Balance cannot be negative. Please try again.');
            break; 
        } else {
          withdrawl = -Math.abs(withdrawl);
        }
      balance.push(withdrawl); 
      break;
        
    case 'd':
      let deposit = Number(prompt('Enter amount to deposit:'));
        if (isNaN(deposit)) {
          alert('Input must be a number. Please try again.');
          break;
        } else if (deposit > 50000) {
            alert('Deposit max of $50,000. Please try again.');
            break;
        } else {
            balance.push(deposit);
          }
        break;
        
    case 'b':
      let viewBalance = alert('Current balance: $' + currentBalance);
      break;
        
    case 'q':
      break;
        
    default:
      alert('Sorry, unknown command. Please try again.');
  }
    
  } while (answer.toLowerCase() != 'q');
}  