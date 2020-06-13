import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirective {
    clickN = 0;

    @HostBinding('style.opacity') opacity: number = 0.1;

    @HostListener('click', ['$event.target']) OnClick(btn) {
        console.log('a', btn, "Numero de cliks:", this.clickN++);
        this.opacity+=0.1;
    }
}