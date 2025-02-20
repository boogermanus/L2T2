import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'travelTime',
  standalone: true
})
export class TravelTimePipe implements PipeTransform {

  private readonly days: number = 86400;
  private readonly hours: number = 3600;
  private readonly seconds: number = 60;
  transform(value: number, ...args: unknown[]): string {
    const days = Math.floor(value / this.days);
    const hours = Math.floor((value % (this.days)) / (this.hours));
    const minutes = Math.floor((value % (this.hours)) / this.seconds);
    const seconds = Math.floor(value % this.seconds);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

}
