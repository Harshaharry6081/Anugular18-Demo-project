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

  // Using OpenWeatherMap API (you can get free API key from openweathermap.org)
  // For demo purposes, we'll use mock data
  getWeather(city: string): Observable<WeatherData> {
    // Mock weather data for demo
    const mockWeatherData: WeatherData = {
      location: city,
      temperature: Math.floor(Math.random() * 30) + 5, // Random temp between 5-35°C
      description: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 40) + 40, // Random humidity 40-80%
      windSpeed: Math.floor(Math.random() * 15) + 5, // Random wind 5-20 km/h
      icon: '☀️' // Default icon
    };

    this.weatherSubject.next(mockWeatherData);
    return of(mockWeatherData);
  }

  getCurrentWeather(): WeatherData | null {
    return this.weatherSubject.value;
  }
}
