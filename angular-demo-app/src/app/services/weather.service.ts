import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSubject = new BehaviorSubject<WeatherData | null>(null);
  public weather$ = this.weatherSubject.asObservable();

  constructor(private http: HttpClient) { }



  getWeather(city: string): Observable<WeatherData> {

    const mockWeatherData: WeatherData = {
      location: city,
      temperature: Math.floor(Math.random() * 30) + 5,
      description: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 15) + 5,
      icon: '☀️'
    };

    this.weatherSubject.next(mockWeatherData);
    return of(mockWeatherData);
  }

  getCurrentWeather(): WeatherData | null {
    return this.weatherSubject.value;
  }
}
