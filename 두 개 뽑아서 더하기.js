function solution(numbers) {
    var answer = [];
    
    for(let i=0;i<numbers.length;i++){
        //for(let e=i+1;e<numbers.length;e++){
        for(let e=i;e<numbers.length;e++){
            if(numbers[e+1]===undefined)continue;
            answer.push(numbers[i]+numbers[e+1])
        }

    }
    debugger
    answer=new Set(answer)
    answer=[...answer]
    answer.sort((a,b)=>{return a - b;})
    
    return answer;
}