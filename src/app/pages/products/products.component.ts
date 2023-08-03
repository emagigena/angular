import { Component, inject } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product.model';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [ProductComponent, CommonModule],
})
export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];
  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
