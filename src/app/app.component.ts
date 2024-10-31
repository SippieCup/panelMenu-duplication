import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';

import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';

export enum RealmLevels {
  GUEST = 0,
  USER = 1,
  ADMIN = 2,
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <p-panelmenu [multiple]="true" [model]="menuItems" styleClass="border-0">

      <ng-template pTemplate="item" let-item>
        @if (item.routerLink) {
            <a [routerLink]="item.routerLink" class="flex align-items-center
                cursor-pointer text-color px-3 py-2">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        } @else if (item.url){

            <a [href]="item.url" class="flex align-items-center
                cursor-pointer text-color px-3 py-2">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        } @else {

                <span class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2">
                    <span [class]="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <i *ngIf="item.items" class="pi pi-angle-down text-primary ml-auto"></i>
                </span>

        }
    </ng-template>
      </p-panelmenu>
    </main>
  `,
  imports: [
    InputTextModule,
    FormsModule,
    PanelMenuModule,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: definePreset(Aura, {
        semantic: {
          primary: {
            50: '{purple.50}',
            100: '{purple.100}',
            200: '{purple.200}',
            300: '{purple.300}',
            400: '{purple.400}',
            500: '{purple.500}',
            600: '{purple.600}',
            700: '{purple.700}',
            800: '{purple.800}',
            900: '{purple.900}',
            950: '{purple.950}',
          },
          accent: {
            50: '{pink.50}',
            100: '{pink.100}',
            200: '{pink.200}',
            300: '{pink.300}',
            400: '{pink.400}',
            500: '{pink.500}',
            600: '{pink.600}',
            700: '{pink.700}',
            800: '{pink.800}',
            900: '{pink.900}',
            950: '{pink.950}',
          },
          colorScheme: {
            light: {
              surface: {
                0: '#ffffff',
                50: '{slate.50}',
                100: '{slate.100}',
                200: '{slate.200}',
                300: '{slate.300}',
                400: '{slate.400}',
                500: '{slate.500}',
                600: '{slate.600}',
                700: '{slate.700}',
                800: '{slate.800}',
                900: '{slate.900}',
                950: '{slate.950}',
              },
            },
            dark: {
              surface: {
                0: '#ffffff',
                50: '{zinc.50}',
                100: '{zinc.100}',
                200: '{zinc.200}',
                300: '{zinc.300}',
                400: '{zinc.400}',
                500: '{zinc.500}',
                600: '{zinc.600}',
                700: '{zinc.700}',
                800: '{zinc.800}',
                900: '{zinc.900}',
                950: '{zinc.950}',
              },
            },
          },
        },
        components: {
          toolbar: {
            borderRadius: '0',
          },
        },
      }),
      options: {
        darkModeSelector: '.p-use-dark-mode',
        cssLayer: {
          name: 'primeng',
          // order: 'tailwind-base, material, tailwind-material-interop, primeng, tailwind-utilities',
        },
      },
    });
  }

  checkState = true;
  realmLevel = 3;


  menuItems: MenuItem[] = [
    {
      state: { root: true },
      label: 'Home',
      icon: 'pi pi-clock',
      routerLink: ['/root1'],
      command: () => this.onClick(),
    },
    {
      state: { root: true },
      label: 'Another Root',
      icon: 'pi pi-th-large',
      routerLink: ['/root2'],
      command: () => this.onClick(),
    },
    {
      state: { root: true },
      label: 'Nested 1',
      icon: 'pi pi-map ',
      items: [
        {
          label: 'Item 1',
          icon: 'pi pi-search',
          routerLink: ['/item1'],
          command: () => this.onClick(),
        },
        {
          label: 'Item 2',
          icon: 'pi pi-search ',
          routerLink: ['/item2'],
          command: () => this.onClick(),
        },
      ],
      command: () => this.onClick(),
    },
    {
      label: 'Nested 2',
      icon: 'pi pi-car',
      command: () => this.onClick(),
      items: [
        {
          label: 'Item 3',
          icon: 'pi pi-oil',
          routerLink: ['./place3'],
          command: () => this.onClick(),
        },
        {
          label: 'Item 4',
          icon: 'pi pi-gas-pump',
          routerLink: ['./place4'],
          command: () => this.onClick(),
        },
        {
          label: 'Item 5',
          icon: 'pi pi-exchange',
          routerLink: ['./place5'],
          command: () => this.onClick(),
        },
      ],
      visible: this.realmLevel >= RealmLevels.USER,
    },

    {
      label: 'External Link',
      icon: 'pi pi-th-large',
      url: 'https://localhost:10000',
      target: '_blank',
    },
  ];

  onClick() {
    console.log('stubbed');
  }
}
