/*재사용성이 높은 코드, 나만의 라이브러리*/

function getRandom(n){
    var r=parseInt(Math.random()*n);//0~1미만 난수 발생
    //console.log(r);
    return r;
}
//매개변수 n : 0~n미만까지의 랜덤한 수를 반환하는 함수

function removeObject(container, child, arr, index){
    //화면에서 삭제(부모 div로 부터 제거)
    //부모 div.removeChild(지울대상 즉 자식요소)
    container.removeChild(child);
    //배열에서 삭제
    //배열.splice(몇번째, 몇 개?)
    arr.splice(index, 1);
}
//게임 등에서 메모리 제거 및 화면상의 제거를 담당할 함수
//container:어떤 부모 요소에서 지울지 child: 어떤 요소를 지울지 arr: 어떤 배열에 있는지 index : 해당 배열의 몇 번째 요소를 지울지

function collisionCheck( me,  you){
    var result = false;//이 함수 호출자가 최종적으로 얻어갈 논리값 true : 충돌/false : 미충돌
    //왼쪽 상단만 체크 (내일 나머지 3개면에 대해서도 마무리..)
    var x1=parseInt(me.style.left); //px 제거
    var y1=parseInt(me.style.top); //px 제거
    var w1=parseInt(me.style.width); //px 제거
    var h1=parseInt(me.style.height); //px 제거
    //타겟이 되는 사각형에 대한 정보
    var x2=parseInt(you.style.left); //px 제거
    var y2=parseInt(you.style.top); //px 제거
    var w2=parseInt(you.style.width); //px 제거
    var h2=parseInt(you.style.height); //px 제거

    var check1 = ((x1+w1) >=x2&&(y1+h1)>=y2)&&(x1<=(x2+w2));//2사분면만
    var check2 = false//(x1+w1) >=x2&&(y1+h1)>=y2;//3사분면만
    var check3 = false//(x1+w1) >=x2&&(y1+h1)>=y2;//4사분면만
    var check4 = false//(x1+w1) >=x2&&(y1+h1)>=y2;//1사분면만

    result=check1||check2||check3||check4;
    return result;
}

function hitTest(me, target) {
    //두물체간 충돌 여부 판단 
    me_x= parseInt(me.style.left);
    me_y= parseInt(me.style.top);
    me_width=parseInt(me.style.width);
    me_height=parseInt(me.style.height);

    target_x= parseInt(target.style.left);
    target_y= parseInt(target.style.top);
    target_width=parseInt(target.style.width);
    target_height=parseInt(target.style.height);


    var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
    var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
    var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
    var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
    
    return (result1 || result2) && (result3 || result4)&&(result2||result4)&&(result1||result3);
}
/*자리수 처리 함수*/
function getZeroString(n){
    var result=(n>=10)?n:"0"+n;
    return result;
}