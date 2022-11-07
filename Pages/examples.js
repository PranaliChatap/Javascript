//1 example -- print text

function hello(){
    return "hello edabit.com"
}

console.log(hello());

//2 example -- return Sum of two number

function Sum(a,b){
    return a+b
}

console.log(Sum(3,2))
console.log(Sum(-3,-6))
console.log(Sum(7,3))



//3 example -- Convert Minutes into seconds

function ConvertMinToSec(min){
    return min * 60
}

console.log(ConvertMinToSec(5))
console.log(ConvertMinToSec(3))
console.log(ConvertMinToSec(2))


//4 example -- Return next number from the integer Passed

function NextNum(num){
    return num += 1       //++num
}

console.log(NextNum(0))
console.log(NextNum(9))
console.log(NextNum(-3))


//5 example -- Area of triangle

function AreaTriangle(b , h){
    return (b*h)/2

}

console.log(AreaTriangle(3,2))
console.log(AreaTriangle(7,4))


//6 example -- Convert Age to Days

function ConvertAgeToDays(age){
    return age * 365
}

console.log(ConvertAgeToDays(65))
console.log(ConvertAgeToDays(0))

//7 example -- Buggy Code

function Cubes(c){
    return Math.pow(c, 3)    //a ** 3
}

console.log(Cubes(3))
console.log(Cubes(5))


//8 example -- Return first element in an array

function FirstElement(a){
  return a[0]
}

console.log(FirstElement([1, 2, 3]))
console.log(FirstElement([80, 5, 100]))
console.log(FirstElement([-500, 0, 50]))


//9 example --power calculator

function PowerCalculator(voltage, current){
    return voltage * current
}

console.log(PowerCalculator(230, 10))
console.log(PowerCalculator(110, 3))
console.log(PowerCalculator(480, 20))


//10 example -- Convert Hours into Seconds

function ConvertHoursToSec(hour){
    return hour * 60 * 60          //60 sec in a min, 60 min in an hour
}

console.log(ConvertHoursToSec(2))
console.log(ConvertHoursToSec(10))
console.log(ConvertHoursToSec(24))


//11 example -- Maximum Edge of a Triangle

function MaxEdgeTriangle(side1, side2){
    return (side1 + side2) - 1
}

console.log(MaxEdgeTriangle(8, 10))
console.log(MaxEdgeTriangle(5, 7))


//12 example -- Return Remainder from two numbers

function Remainder(x, y){
    return x % y  
}

console.log(Remainder(1,3))
console.log(Remainder(3,4))
console.log(Remainder(-9, 45))


//13 example -- Perimeter of rectangle

function PerimeterOfRectangle(l,w){
    return 2*(l+w)
}

console.log(PerimeterOfRectangle(6,7))


//14 example -- Return Something to me

function string(text){
    return `Something ${text}`
}

console.log(string('is better than nothing'))


//15 example -- Correct the mistakes

function squared(s){
    return Math.pow(s,2)
}

console.log(squared(5))


//16 example -- Is the number less than or equal to zero

function NumberLessEqualToZero(num){
    return num <= 0 
}

console.log(NumberLessEqualToZero(5))


//17 example -- Sum of Polygon angles

function sumPolygon(n){
    return (n-2)*180
}

console.log(sumPolygon(3))


//18 example -- Basketball Points

function CountPoints(x, y){
    return (2*x)+(3*y)         //2 point scored and 3 point scored
}

console.log(CountPoints(1,1))
console.log(CountPoints(7,5))


//19 example -- Basic Variable Assignment

function ConcatString(name){
    let result = name + 'Ebadit'
    return result
}

console.log(ConcatString('Mubashir'))


//20 example -- less than 100?

function LessThan(x, y){
    return x+y < 100
}

console.log(LessThan(22, 15))


//21 example -- Buggy code part 5

function loopbuggycode(a){
    let arr = [];
    for(let i=1; i<=a; i++){
         arr.push(i)
    }
    return arr
}
console.log(loopbuggycode(3))
console.log(loopbuggycode(1))
console.log(loopbuggycode(6))

//22 example -- Buggy code part 7

function swapnumber(a, b){
      [a,b] = [b, a]
       
    return  `${a} ,${b}`
    
}

console.log(swapnumber(200, 100))

//23 example -- The farm problem

function animals(chicken, cows, pigs){
    total_legs = 2*chicken + 4*cows + 4*pigs;
    return total_legs

}
console.log(animals(2,3,5))


//24 example -- Using logical and (&&) operator

function logicalAnd(a,b){
    return a && b
}

console.log(logicalAnd(true, false))
console.log(logicalAnd(true, true))
console.log(logicalAnd(false, false))


//25 example -- Are the numbers equal?

function numberEqual(num1, num2){
    return num1 == num2
}
console.log(numberEqual(4, 8))
console.log(numberEqual(4, 4))

//26 example -- Football Points

function footballPoints(win, draw, loss){
    return 3*win + 1*draw + 0*loss
}

console.log(footballPoints(3,4,2))
console.log(footballPoints(5,0,2))
console.log(footballPoints(0,0,1))

//27 example -- Convert Hours and Minutes into Seconds

function ConvertHourMinToSec(hours, minutes){
    return hours*3600 + minutes*60

}
console.log(ConvertHourMinToSec(1,3))
console.log(ConvertHourMinToSec(2,0))


//28 example -- Fix the Expression

function numEqualSeven(x){
    return x == 7
}

console.log(numEqualSeven(7))


//29 example -- Equality Check

function equalityCheck(a,b){
    return a === b
}

console.log(equalityCheck(1, true))
console.log(equalityCheck(1, 1))
console.log(equalityCheck('1', '1'))


//30 example -- Profitable Gamble

function profitableGamble(prob, prize, pay){
    return prob*prize>pay
}

console.log(profitableGamble(0.2, 50, 9))