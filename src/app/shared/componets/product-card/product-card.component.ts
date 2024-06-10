import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
  @Input() product!: IProduct;
  @Output() handleAdd = new EventEmitter();

  ngOnInit(): void {
  }

  addToCart(product: IProduct) {
    this.handleAdd.emit(product);
  }
}
