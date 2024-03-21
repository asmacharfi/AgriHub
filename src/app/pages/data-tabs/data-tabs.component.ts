import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-tabs',
  templateUrl: './data-tabs.component.html',
  styleUrls: ['./data-tabs.component.scss']
})
export class DataTabsComponent {
  activeTab: string = 'filtre';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
  
}
