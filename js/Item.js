/**아이템을 정의한다.
 role0 : candy1.png : 무기를 미사일로
 role1 : candy2.png : 적군 모두 소멸
 role2 : candy3.png : hp추가
 role3 : candy4.png : 속도 업
 */

class Item{
    constructor(itemRole,container,width,height,x,y,velX,velY){
        this.itemRole=itemRole;
        this.container=container
        this.img=document.createElement("img");
        this.src=itemRole.src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;
        
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }
    tick(){
        this.x += this.velX;
        this.y += this.velY;

        //내가 화면의 음수값을 가질때 즉 좌측 한계점을 지나면, 제거 
        if(this.x <0){
            removeObject(this.container, this.img, itemArray , itemArray.indexOf(this));
        }
    } 
    
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}