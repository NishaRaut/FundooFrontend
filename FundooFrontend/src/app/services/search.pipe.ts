import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(notes: any, searchText: string): any {
    console.log("all notes", notes);
    if (!notes) return null;
    if (!searchText) return notes;
    if (notes)
    return notes.filter(card => card.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    return null;
  }

}
