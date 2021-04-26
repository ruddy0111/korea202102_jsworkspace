/*비행기라는 사용자 정의 자료형을 선언 */
class Plane{
    /*변수, 함수가 올 수 있다*/
    //객체의 초기화는 생성자 메서드가 담당한다.
    //비행기가 어떤 특성을 가지고 태어날지를 결정
    
    constructor(container,src, width,height,x,y,velX,velY){
        this.container=container;//비행기가 붙을 부모 요소
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //속성값 지정
        this.img.src=src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        //화면에 부착
        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;//등속도로 누적
        this.y+=this.velY;//등속도로 누적

        if(this.x<=0){//화면 탈출 방지
            this.x=0;
        }
        //나와 적군들과의 충돌체크, 나죽고 너죽고
        for(var i=0;i<enemyArray.length;i++){
            if(hitTest(this.img,enemyArray[i].img)){
                removeObject(this.container,enemyArray[i].img,enemyArray,i);
                //나의 hp제거
                removeObject(info,hpArray[hpArray.length-1].img,hpArray,hpArray.length-1);
                if(hpArray==0){
                    var div=document.createElement("div");
                    div.style.fontSize="250px";
                    div.style.textAlign="center";
                    div.style.fontWeight="bold";
                    div.style.color="#ffffff";
                    div.style.height="600px";
                    div.innerHTML="GAME OVER<br><a href=\"javascript:location.reload()\">Retry</a>";
                    this.container.appendChild(div);
                }
            }
        }
        //아이템 취득(아이템과의 충돌 검사)
        for(var i=0; i<itemArray.length;i++){
            if(hitTest( this.img , itemArray[i].img)){
                //조건은 롤을 통해 처리 가능....
                //어떤 사탕을 먹었는지를 조사 
                var itemRole = itemArray[i].itemRole;//주인공이랑 충돌한 한 아이템의 role
                console.log(itemArray[i].itemRole)
                removeObject(this.container, itemArray[i].img , itemArray, i);//사탕 제거

                // 조건은 롤을 통해 처리 가능....어떤 사탕을 먹었는지를 조사 
                switch(itemRole.role){
                    case 0:changeWeapon();break;//무기교체                        
                    case 1:clearEnemy();break;//적군소멸                        
                    case 2:increaseHp();break;//hp추가                        
                    case 3:speedUp();break;//스피드 증가                        
                }
            }
        }
        if(this.x>=screen.width-this.width){//우측 경계 고정
            this.x=screen.width-this.width;
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}