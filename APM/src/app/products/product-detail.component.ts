import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { 
  }

  ngOnInit() {
    let productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId)
      .subscribe(
        product => {
          this.product = product;
        }
      )
    console.log(productId);
    
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
