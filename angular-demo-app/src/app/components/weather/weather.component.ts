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
  
  // Two-way binding with ngModel
  cityName = 'New York';
  
  // Popular cities for quick access
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
  
  // Weather history
  weatherHistory: WeatherData[] = [];
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {
    // Load default city weather
    this.getWeather();
    
    // Subscribe to weather updates from service
    this.weatherService.weather$.subscribe(weather => {
      if (weather) {
        this.currentWeather = weather;
        this.addToHistory(weather);
      }
    });
  }
  
  // Event handler for form submission
  onSearchWeather(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.getWeather();
  }
  
  // Get weather for current city
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
  
  // Quick city selection
  onCitySelect(city: string): void {
    this.cityName = city;
    this.getWeather();
  }
  
  // Add weather to history
  private addToHistory(weather: WeatherData): void {
    // Avoid duplicates
    const exists = this.weatherHistory.some(w => 
      w.location.toLowerCase() === weather.location.toLowerCase()
    );
    
    if (!exists) {
      this.weatherHistory.unshift(weather);
      // Keep only last 5 searches
      if (this.weatherHistory.length > 5) {
        this.weatherHistory.pop();
      }
    }
  }
  
  // Clear input
  onClearInput(): void {
    this.cityName = '';
  }
  
  // Refresh current weather
  onRefresh(): void {
    if (this.currentWeather) {
      this.cityName = this.currentWeather.location;
      this.getWeather();
    }
  }
  
  // Get weather icon based on description
  getWeatherIcon(description: string): string {
    const desc = description.toLowerCase();
    if (desc.includes('sunny') || desc.includes('clear')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('storm')) return '⛈️';
    return '🌤️'; // Default
  }
  
  // Get temperature color class
  getTemperatureClass(temp: number): string {
    if (temp < 10) return 'temp-cold';
    if (temp < 20) return 'temp-cool';
    if (temp < 30) return 'temp-warm';
    return 'temp-hot';
  }
}
