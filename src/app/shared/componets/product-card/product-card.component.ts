import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}
