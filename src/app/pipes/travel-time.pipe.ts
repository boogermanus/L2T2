import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'travelTime',
  standalone: true
})
export class TravelTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const days = Math.floor(value / (60 * 60 * 24));
    const hours = Math.floor((value % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((value % (60 * 60)) / 60);
    const seconds = Math.floor(value % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

}
