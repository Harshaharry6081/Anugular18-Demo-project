import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CapitalizePipe, HighlightDirective],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  @Input() userId?: number;
  @Output() userSelected = new EventEmitter<User>();
  
  user: User | null = null;
  loading = true;
  error: string | null = null;
  isExpanded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadUser(+id);
      }
    });
  }

  loadUser(id: number): void {
    this.loading = true;
    this.error = null;
    
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;

        this.userSelected.emit(user);
      },
      error: (error) => {
        this.error = 'Failed to load user details. Please try again.';
        this.loading = false;
        console.error('Error loading user:', error);
      }
    });
  }

  onBackToUsers(): void {
    this.router.navigate(['/users']);
  }

  onToggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onContactUser(): void {
    if (this.user?.email) {
      window.open(`mailto:${this.user.email}`, '_blank');
    }
  }

  onVisitWebsite(): void {
    if (this.user?.website) {
      const url = this.user.website.startsWith('http') 
        ? this.user.website 
        : `https://${this.user.website}`;
      window.open(url, '_blank');
    }
  }

  onRefresh(): void {
    if (this.user) {
      this.loadUser(this.user.id);
    }
  }
}
