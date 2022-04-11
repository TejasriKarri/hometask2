/*You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.
Every day you rent the car costs $40.
If you rent the car for 7 or more days, you get $50 off your total. Alternatively,
if you rent the car for 3 or more days, you get $20 off your total. */
function rentalCarCost(d) {
    // Your solution here
      let costperday=40;
      var total_cost=costperday*d;
      if(d>=7)
          total_cost-=50;
      else if(d>=3)
          total_cost-=20;
      return total_cost;
  }