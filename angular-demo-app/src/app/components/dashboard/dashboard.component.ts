import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CapitalizePipe, HighlightDirective, DatePipe, CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // Property binding examples
  title = 'Angular 18 Concepts Dashboard';
  currentDate = new Date();
  samplePrice = 199.99;
  
  // Interpolation examples
  userName = 'john doe';
  isLoggedIn = true;
  userRole = 'admin';
  
  // ngFor examples
  features = [
    { id: 1, name: 'Component Creation', description: 'Learn how to create reusable components', completed: true },
    { id: 2, name: 'Property Binding', description: 'Bind component properties to template', completed: true },
    { id: 3, name: 'Event Binding', description: 'Handle user interactions', completed: false },
    { id: 4, name: 'Two-way Binding', description: 'Synchronize data between component and template', completed: false },
    { id: 5, name: 'Pipes', description: 'Transform data display', completed: true }
  ];
  
  // ngIf examples
  showAdvancedFeatures = false;
  
  // Event binding examples
  clickCount = 0;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log('Dashboard component initialized');
  }
  
  // Event handlers
  onButtonClick(): void {
    this.clickCount++;
    console.log(`Button clicked ${this.clickCount} times`);
  }
  
  onToggleFeatures(): void {
    this.showAdvancedFeatures = !this.showAdvancedFeatures;
  }
  
  onFeatureToggle(feature: any): void {
    feature.completed = !feature.completed;
  }
  
  // Getter example
  get completedFeaturesCount(): number {
    return this.features.filter(f => f.completed).length;
  }
}
