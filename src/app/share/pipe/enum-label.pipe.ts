import {Pipe, PipeTransform} from '@angular/core';
import {ENUM_DATA} from '../../model/enum/enum.data';
import {NzSafeAny} from 'ng-zorro-antd/core/types';

@Pipe({
  name: 'enumLabel'
})
export class EnumLabelPipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, enumName: string): string {
    return ENUM_DATA[enumName]?.find((item: NzSafeAny) => {
      return item?.value?.toLowerCase() === value?.toLowerCase();
    })?.label || value;
  }

}
