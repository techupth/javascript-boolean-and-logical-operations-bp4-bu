// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = false;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = (lastMonthPaidMoreThan4000&&isWeekday&&hasBoughtProductFromITCategory&&hasAttendedDiscountEvent)||isPlatinum;

console.log(hasPromotion);
