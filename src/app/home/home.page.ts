import { Component } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartviewPage } from '../cartview/cartview.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

 

  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  }

  addToCart(product) {
    
    if (product.qtd>0){
    
    this.cartService.addProduct(product);
  
    }else{
      alert("Produto sem estoque. Tente novamente mais tarde");
    }
  }
 
  async openCart() {
   
    let modal = await this.modalCtrl.create({
      component: CartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      
    });
    modal.present();
  }
 
  

}
