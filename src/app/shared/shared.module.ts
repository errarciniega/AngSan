import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CasePipe } from './case.pipe';
import { TraducPipe } from './traduc.pipe';

@NgModule({
  declarations: [CardComponent, HeaderComponent, BodyComponent, FooterComponent, CasePipe, TraducPipe],
  imports: [
    CommonModule
  ], exports: [CardComponent, HeaderComponent, BodyComponent, FooterComponent]
})
export class SharedModule { }
