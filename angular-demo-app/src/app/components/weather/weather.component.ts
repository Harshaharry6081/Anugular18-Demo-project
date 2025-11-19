import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService, WeatherData } from '../../services/weather.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe, HighlightDirective],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  currentWeather: WeatherData | null = null;
  loading = false;
  error: string | null = null;
  

  cityName = 'New York';
  

  popularCities = [
    'New York',
    'London', 
    'Paris',
    'Tokyo',
    'Sydney',
    'Dubai',
    'Mumbai',
    'Berlin'
  ];
  

  weatherHistory: WeatherData[] = [];
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {

    this.getWeather();
    

    this.weatherService.weather$.subscribe(weather => {
      if (weather) {
        this.currentWeather = weather;
        this.addToHistory(weather);
      }
    });
  }
  

  onSearchWeather(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.getWeather();
  }
  

  getWeather(): void {
    if (!this.cityName.trim()) {
      this.error = 'Please enter a city name';
      return;
    }
    
    this.loading = true;
    this.error = null;
    
    this.weatherService.getWeather(this.cityName.trim()).subscribe({
      next: (weather) => {
        this.currentWeather = weather;
        this.loading = false;
        this.error = null;
      },
      error: (error) => {
        this.error = 'Failed to get weather data. Please try again.';
        this.loading = false;
        console.error('Weather error:', error);
      }
    });
  }
  

  onCitySelect(city: string): void {
    this.cityName = city;
    this.getWeather();
  }
  

  private addToHistory(weather: WeatherData): void {

    const exists = this.weatherHistory.some(w => 
      w.location.toLowerCase() === weather.location.toLowerCase()
    );
    
    if (!exists) {
      this.weatherHistory.unshift(weather);

      if (this.weatherHistory.length > 5) {
        this.weatherHistory.pop();
      }
    }
  }
  

  onClearInput(): void {
    this.cityName = '';
  }
  

  onRefresh(): void {
    if (this.currentWeather) {
      this.cityName = this.currentWeather.location;
      this.getWeather();
    }
  }
  

  getWeatherIcon(description: string): string {
    const desc = description.toLowerCase();
    if (desc.includes('sunny') || desc.includes('clear')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('storm')) return '⛈️';
    return '🌤️';
  }
  

  getTemperatureClass(temp: number): string {
    if (temp < 10) return 'temp-cold';
    if (temp < 20) return 'temp-cool';
    if (temp < 30) return 'temp-warm';
    return 'temp-hot';
  }
}
