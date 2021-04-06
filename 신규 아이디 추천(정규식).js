function solution(new_id) {
    let answer = '';
	
	answer=new_id.toLowerCase() //1단계
	answer=answer.replace(/[^a-z0-9-_.]/g,"") //2단계
	debugger
	answer=answer.replace(/\.{2,}/g,".")//3단계
	answer=answer.replace(/^\.|\.$/g,"")//4단계
	answer=answer===""?"a":answer //5단계
	answer=answer.substring(0,15).replace(/\.$/,"")//6단계
    answer=answer.length<3?answer.padEnd(3,answer.charAt(answer.length-1)):answer//7단계
	
	console.log(answer)
	return answer;
}

solution("=.=")