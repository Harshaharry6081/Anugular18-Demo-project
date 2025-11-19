# Step-by-Step Guide: How to Create an Angular Application

## 🚀 **Prerequisites Setup**

### **Step 1: Install Required Software**

#### **1.1 Install Node.js**
```bash
# Download and install Node.js (LTS version recommended)
# Visit: https://nodejs.org/
# Verify installation:
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
```

#### **1.2 Install Angular CLI Globally**
```bash
npm install -g @angular/cli@18
# Verify installation:
ng version
```

#### **1.3 Install a Code Editor**
- **Recommended:** Visual Studio Code
- **Extensions to install:**
  - Angular Language Service
  - TypeScript and JavaScript Language Features
  - Angular Snippets
  - Prettier - Code formatter
  - ESLint

---

## 🏗️ **Project Creation**

### **Step 2: Create New Angular Project**

#### **2.1 Generate New Project**
```bash
# Navigate to your desired directory
cd "C:\Users\YourUsername\Desktop\Projects"

# Create new Angular project
ng new angular-demo-app

# Answer the prompts:
# ✅ Would you like to add Angular routing? → Yes
# ✅ Which stylesheet format would you like to use? → CSS
```

#### **2.2 Navigate to Project Directory**
```bash
cd angular-demo-app
```

#### **2.3 Start Development Server**
```bash
ng serve
# Open browser to http://localhost:4200
```

---

## 📁 **Project Structure Setup**

### **Step 3: Organize Project Structure**

#### **3.1 Create Folder Structure**
```bash
# Create folders for organized architecture
mkdir src\app\components
mkdir src\app\services  
mkdir src\app\models
mkdir src\app\directives
mkdir src\app\pipes
```

#### **3.2 Update Project Structure**
```
src/app/
├── components/       # Feature components
├── services/        # Business logic and API calls
├── models/         # TypeScript interfaces
├── directives/     # Custom directives
├── pipes/         # Custom pipes
├── app.component.* # Root component files
├── app.config.ts   # App configuration
└── app.routes.ts   # Routing configuration
```

---

## 🧩 **Component Development**

### **Step 4: Create Components**

#### **4.1 Generate Components Using CLI**
```bash
# Generate dashboard component
ng generate component components/dashboard --standalone

# Generate user-list component  
ng generate component components/user-list --standalone

# Generate user-detail component
ng generate component components/user-detail --standalone

# Generate weather component
ng generate component components/weather --standalone

# Generate todo component
ng generate component components/todo --standalone
```

#### **4.2 Component Structure (Example: Dashboard)**
```typescript
// src/app/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Angular 18 Demo';
  clickCount = 0;
  
  onButtonClick() {
    this.clickCount++;
  }
}
```

#### **4.3 Component Template (Example: Dashboard)**
```html
<!-- src/app/components/dashboard/dashboard.component.html -->
<div class="dashboard">
  <section class="welcome-section">
    <h1>{{ title }}</h1>
    <p>Click Count: {{ clickCount }}</p>
    <button (click)="onButtonClick()">Click Me!</button>
  </section>
</div>
```

---

## 🔧 **Services Creation**

### **Step 5: Create Services**

#### **5.1 Generate Services**
```bash
# Generate user service
ng generate service services/user

# Generate weather service  
ng generate service services/weather
```

#### **5.2 Service Implementation (Example: User Service)**
```typescript
// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
```

---

## 📊 **Models and Interfaces**

### **Step 6: Create TypeScript Models**

#### **6.1 Create Model Files**
```typescript
// src/app/models/user.model.ts
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
```

#### **6.2 Weather Model**
```typescript
// src/app/models/weather.model.ts
export interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}
```

---

## 🛠️ **Custom Directives and Pipes**

### **Step 7: Create Custom Features**

#### **7.1 Generate Custom Directive**
```bash
ng generate directive directives/highlight --standalone
```

```typescript
// src/app/directives/highlight.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '#ffeb3b';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

#### **7.2 Generate Custom Pipe**
```bash
ng generate pipe pipes/capitalize --standalone
```

```typescript
// src/app/pipes/capitalize.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
```

---

## 🌐 **Routing Setup**

### **Step 8: Configure Routing**

#### **8.1 Update App Routes**
```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  { 
    path: 'users', 
    loadComponent: () => import('./components/user-list/user-list.component')
      .then(m => m.UserListComponent)
  },
  { 
    path: 'user/:id', 
    loadComponent: () => import('./components/user-detail/user-detail.component')
      .then(m => m.UserDetailComponent)
  },
  { 
    path: 'weather', 
    loadComponent: () => import('./components/weather/weather.component')
      .then(m => m.WeatherComponent)
  },
  { 
    path: 'todo', 
    loadComponent: () => import('./components/todo/todo.component')
      .then(m => m.TodoComponent)
  }
];
```

#### **8.2 Update App Configuration**
```typescript
// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration()
  ]
};
```

---

## 🎨 **Styling and UI**

### **Step 9: Add Global Styles**

#### **9.1 Update Global Styles**
```css
/* src/styles.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

#### **9.2 Create Navigation Template**
```html
<!-- src/app/app.component.html -->
<header class="header">
  <div class="container">
    <h1>Angular 18 Demo</h1>
    <nav class="navigation">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/users" routerLinkActive="active">Users</a>
      <a routerLink="/weather" routerLinkActive="active">Weather</a>
      <a routerLink="/todo" routerLinkActive="active">Todo</a>
    </nav>
  </div>
</header>

<main class="main-content">
  <div class="container">
    <router-outlet></router-outlet>
  </div>
</main>

<footer class="footer">
  <div class="container">
    <p>&copy; 2024 Angular 18 Demo Application</p>
  </div>
</footer>
```

---

## 🧪 **Testing Setup**

### **Step 10: Configure Testing**

#### **10.1 Unit Testing (Default with Angular)**
```bash
# Run unit tests
ng test

# Run tests with code coverage
ng test --code-coverage
```

#### **10.2 E2E Testing Setup (Optional)**
```bash
# Install Cypress for E2E testing
npm install --save-dev cypress

# Add Cypress scripts to package.json
"cypress:open": "cypress open",
"cypress:run": "cypress run"
```

---

## 🚀 **Build and Deployment**

### **Step 11: Build for Production**

#### **11.1 Development Build**
```bash
ng build
```

#### **11.2 Production Build**
```bash
ng build --configuration production

# Output will be in dist/ folder
```

#### **11.3 Deployment Options**

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

**Netlify:**
```bash
# Build command: ng build --configuration production
# Publish directory: dist/angular-demo-app
```

**GitHub Pages:**
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/your-repo-name/
```

---

## 📦 **Package Management**

### **Step 12: Essential Dependencies**

#### **12.1 Core Dependencies (Already included)**
```json
{
  "@angular/animations": "^18.0.0",
  "@angular/common": "^18.0.0",
  "@angular/compiler": "^18.0.0",
  "@angular/core": "^18.0.0",
  "@angular/forms": "^18.0.0",
  "@angular/platform-browser": "^18.0.0",
  "@angular/router": "^18.0.0"
}
```

#### **12.2 Additional Useful Dependencies**
```bash
# For HTTP requests (already included in Angular 18)
# For animations
npm install @angular/animations

# For forms
npm install @angular/forms

# For date manipulation
npm install date-fns

# For icons (optional)
npm install lucide-angular
```

---

## ✅ **Development Best Practices**

### **Step 13: Code Quality Setup**

#### **13.1 ESLint Configuration**
```bash
ng add @angular-eslint/schematics
```

#### **13.2 Prettier Setup**
```bash
npm install --save-dev prettier
# Create .prettierrc file with your formatting rules
```

#### **13.3 Git Setup**
```bash
git init
git add .
git commit -m "Initial Angular 18 project setup"

# Create .gitignore (already included by Angular CLI)
```

---

## 🎯 **Final Project Structure**

```
angular-demo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── user-list/
│   │   │   ├── user-detail/
│   │   │   ├── weather/
│   │   │   └── todo/
│   │   ├── services/
│   │   │   ├── user.service.ts
│   │   │   └── weather.service.ts
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   └── weather.model.ts
│   │   ├── directives/
│   │   │   └── highlight.directive.ts
│   │   ├── pipes/
│   │   │   └── capitalize.pipe.ts
│   │   ├── app.component.*
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 **Quick Start Commands Summary**

```bash
# 1. Install Angular CLI
npm install -g @angular/cli@18

# 2. Create new project
ng new angular-demo-app --routing --style=css

# 3. Navigate to project
cd angular-demo-app

# 4. Start development server
ng serve

# 5. Generate components
ng generate component components/dashboard --standalone

# 6. Generate services
ng generate service services/user

# 7. Build for production
ng build --configuration production
```

This guide provides a complete walkthrough for creating a modern Angular 18 application with best practices, proper structure, and all the features demonstrated in your demo project! 🎯