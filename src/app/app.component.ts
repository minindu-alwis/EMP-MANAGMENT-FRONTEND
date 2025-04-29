import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToastModule,
    MenubarModule,
    AvatarModule,
    ButtonModule
  ],
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <span class="logo-icon">🌈</span>
              <h1>Rainbow HR</h1>
            </div>
            <p-menubar [model]="menuItems" styleClass="rainbow-menubar">
              <ng-template pTemplate="end">
                <div class="user-profile">
                  <p-avatar 
                    icon="pi pi-user" 
                    styleClass="mr-2" 
                    shape="circle"
                    size="large"
                  ></p-avatar>
                  <p-button 
                    icon="pi pi-sign-out" 
                    styleClass="p-button-rounded p-button-text"
                    tooltip="Sign out"
                  ></p-button>
                </div>
              </ng-template>
            </p-menubar>
          </div>
        </div>
      </header>

      <main class="app-content">
        <div class="container">
          <div class="page-header">
            <h2>Welcome to Rainbow HR</h2>
            <p>Your modern HR management solution</p>
          </div>
          <div class="content-area">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main>

      <footer class="app-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-info">
              <p>&copy; 2025 Rainbow HR Management Unit</p>
            </div>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <p-toast position="top-right"></p-toast>
  `,
  styles: [`
    :host {
      --rainbow-primary: #6366f1;
      --rainbow-secondary: #8b5cf6;
      --rainbow-tertiary: #ec4899;
      --rainbow-light: #f3f4f6;
      --rainbow-dark: #1f2937;
      --rainbow-gradient: linear-gradient(135deg, var(--rainbow-primary), var(--rainbow-secondary), var(--rainbow-tertiary));
    }

    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f9fafb;
      font-family: 'Poppins', 'Segoe UI', sans-serif;
    }

    .container {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .app-header {
      background: var(--rainbow-gradient);
      color: white;
      padding: 1rem 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .header-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-icon {
      font-size: 2rem;
    }

    .logo h1 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .rainbow-menubar {
      background: transparent !important;
      border: none !important;
      padding: 0 !important;
    }

    .rainbow-menubar ::ng-deep .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      color: white !important;
      font-weight: 500;
    }

    .rainbow-menubar ::ng-deep .p-menuitem-text {
      font-size: 1rem;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .app-content {
      flex: 1;
      padding: 2rem 0;
    }

    .page-header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .page-header h2 {
      font-size: 2rem;
      color: var(--rainbow-dark);
      margin-bottom: 0.5rem;
    }

    .page-header p {
      color: #6b7280;
      font-size: 1.125rem;
    }

    .content-area {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      min-height: 400px;
    }

    .app-footer {
      background-color: var(--rainbow-dark);
      color: white;
      padding: 1.5rem 0;
      margin-top: 2rem;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-info p {
      margin: 0;
      font-size: 0.875rem;
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-links a {
      color: #d1d5db;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: white;
    }

    @media (max-width: 768px) {
      .header-content {
        gap: 0.5rem;
      }

      .footer-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .footer-links {
        margin-top: 0.5rem;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Rainbow HR';
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard']
      },
      {
        label: 'Employees',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Directory',
            icon: 'pi pi-list',
            routerLink: ['/employees']
          },
          {
            label: 'Onboarding',
            icon: 'pi pi-user-plus',
            routerLink: ['/employees/onboarding']
          }
        ]
      },
      {
        label: 'Leave Management',
        icon: 'pi pi-calendar',
        routerLink: ['/leave']
      },
      {
        label: 'Performance',
        icon: 'pi pi-chart-bar',
        routerLink: ['/performance']
      },
      {
        label: 'Reports',
        icon: 'pi pi-file-pdf',
        routerLink: ['/reports']
      }
    ];
  }
}