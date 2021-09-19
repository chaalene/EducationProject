import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string): any {
  //  let res='';
  //   for (let i = 0; i < ch.length; i++) {
  //     if ( ch[i]=='o'|| ch[i]=='u'||ch[i]=='e'||ch[i]=='i'||ch[i]=='a'){
  //     res=res+'*';
  //     }else{
  //       res=res+ch[i];
  //     }  
  //   }
  // return res;

  let voyels=['a','u','e','o','i','y'];
  let result='';
   for (let i=0 ; i<ch.length;i++){
   let inter=ch[i];
      for (let j = 0; j< voyels.length; j++)  {    
        if (ch[i]==voyels[j]) {
          inter='*'
        }
        } result=result+inter;
        }
       
  return result;
}
};
 