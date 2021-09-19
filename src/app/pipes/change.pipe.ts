import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  
  transform(ch:string): any {
    let result='';
    for (let i = 0; i < ch.length; i++) {
      if ((ch[i]=='A'|| ch[i]=='a' ) && ch[i+1] =='i') {
        result=result+ ch[i]+'y';
        i++
      }
      else{
          result=result+ch[i];
      }
    }return result;
  }

}
