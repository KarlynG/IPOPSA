import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(lista: any[], text: string): any[] {
    if (!text) return lista;
    return lista.filter((titulo) =>
      titulo.name.toUpperCase().includes(text.toUpperCase())
    );
  }
}
