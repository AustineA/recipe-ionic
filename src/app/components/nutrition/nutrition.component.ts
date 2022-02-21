import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent implements OnInit {
  @Input() calories: string;
  @Input() totalWeight: string;
  @Input() nutrients: any = [];
  constructor() {}

  ngOnInit() {}
}
